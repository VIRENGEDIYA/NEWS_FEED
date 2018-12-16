import React, { Component } from 'react'
import { Content, } from 'native-base';
import TopHeader from '../../components/topHeader';
import FlatListComponent from '../../components/flatlist'
import Countries from '../../assets/Countries'
import RowItem from '../../components/rowItem';


export class CountriesSceen extends Component {
    render() {
        return (
            <Content>
                <TopHeader
                    leftIconName={"bars"}
                    title={"All Countries"}
                    onLeftClick={() => { this.props.navigation.openDrawer() }}
                />
                {/* <SectionText text={"Countries"} /> */}
                <FlatListComponent
                    rootData={Countries}
                    renderItem={({ item, index }) =>
                        <RowItem onClick={() => { this.props.navigation.navigate("NewsList", { country: item }) }} name={item.Name.toUpperCase()} code={item.Code} />
                    }

                    showsHorizontalScrollIndicator={false}
                    horizontal={false}
                    style={{ marginHorizontal: 15 }}
                    numColumns={3}
                />
            </Content>
        )
    }
}


export default CountriesSceen
