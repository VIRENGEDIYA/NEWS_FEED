import React, { Component } from 'react'
import { Content, Container, } from 'native-base';
import TopHeader from '../../components/topHeader';
import FlatListComponent from '../../components/flatlist'
import Countries from '../../assets/Countries'
import RowItem from '../../components/rowItem';


export class CountriesSceen extends Component {
    render() {
        return (
            <Container>
                <TopHeader
                    leftIconName={"bars"}
                    title={"All Countries"}
                    onLeftClick={() => { this.props.navigation.openDrawer() }}
                />

                    <FlatListComponent
                        rootData={Countries}
                        renderItem={({ item, index }) =>
                            <RowItem style={{textAlign:"center"}} onClick={() => { this.props.navigation.navigate("NewsList", { country: item }) }} name={item.Name.toUpperCase()} code={item.Code} />
                        }
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}
                        horizontal={false}
                        numColumns={3}
                    />
            </Container>
        )
    }
}


export default CountriesSceen
