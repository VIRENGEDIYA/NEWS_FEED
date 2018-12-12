import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Card } from 'native-base';
import TopHeader from '../../components/topHeader';
import FlatListComponent from '../../components/flatlist';

export class SourceNavigation extends Component {
    componentWillMount = ( ) => {
        
    }

    render() {
        return (
            <View>
                {/* <Text>Hello</Text> */}
                <TopHeader
                    leftIconName={"bars"}
                    title={"Sources"}
                    onLeftClick={() => { this.props.navigation.openDrawer() }}
                />

                <FlatListComponent
                    rootData={topNews || category}
                    renderItem={({ item }) => <NewsCard article={item} onClick={() => { this.props.navigation.navigate("NewsContent", { data: item }) }} />}
                    showsHorizontalScrollIndicator={true}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.refreshing}
                            onRefresh={this.spinnerLoading()}
                        />
                    }
                    ending={() => this._moreData()}
                    onEndReachedThreshold={0}
                />
            </View>
        )
    }
}

export default SourceNavigation