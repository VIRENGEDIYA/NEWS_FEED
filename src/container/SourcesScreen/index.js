import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Card, Content, Container } from 'native-base';
import TopHeader from '../../components/topHeader';
import FlatListComponent from '../../components/flatlist';
import SourceCard from '../../components/sourceCard';
import { connect } from 'react-redux'
import { fetchAllSources } from '../../actions/sourcesAction'

export class SourcesScreen extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount = () => {
        this.props.dispatch(fetchAllSources())
    }

    render() {
        console.log("===========================================================",this.props.sources)
        const { sources } = this.props
        return (
            <Container>
                {/* <Text>Hello</Text> */}
                <TopHeader
                    leftIconName={"bars"}
                    title={"Sources"}
                    onLeftClick={() => { this.props.navigation.openDrawer() }}
                />

                <Content style={{padding:10}} >
                    <FlatListComponent
                        rootData={sources}
                        renderItem={({ item,index }) => <SourceCard onClick={() => this.props.navigation.navigate("SourceDetails",{url : item.url})} title={item.name} description={item.description} url={item.url} index={index}  />}
                        showsHorizontalScrollIndicator={true}
                        // refreshControl={
                        //     <RefreshControl
                        //         refreshing={this.refreshing}
                        //         onRefresh={this.spinnerLoading()}
                        //     />
                        // }
                        keyExtractor={(item, index) => index.toString()}
                        ending={() => this._moreData()}
                        onEndReachedThreshold={0}
                    />
                </Content>
            </Container>
        )
    }

}

const mapStateToProps = (state) => {
    console.log("...............................................................",state)
    return {
        sources : state.sourcesNews.sources 
    }
}

export default connect(mapStateToProps)(SourcesScreen)


// export default SourcesScreen