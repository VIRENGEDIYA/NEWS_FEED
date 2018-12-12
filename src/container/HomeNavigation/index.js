import React, { Component } from 'react'
import { View } from 'react-native'
import { Tabs, Tab, ScrollableTab, Container, Spinner, } from 'native-base';
import TopHeader from '../../components/topHeader';
import { fetchGeneralNews } from '../../actions/categoryAction'
import { connect } from 'react-redux'
import CategoryNewsList from './categoryNewsList';




export class HomeNavigation extends Component {
 

    render() {
        const { general,business,entertainment,health,sports,technology,science,refreshing } = this.props.category
        return (
            <Container>
                <TopHeader
                    leftIconName={"bars"}
                    title={"Home"}
                    onLeftClick={() => { this.props.navigation.openDrawer() }}
                />

                <Tabs renderTabBar={()=> <ScrollableTab />}  tabBarPosition={"top"}>
                    <Tab heading="Top News" >
                        <CategoryNewsList 
                            category ="general"
                            categoryDate = {general} 
                            refreshing={refreshing}
                            navigation={(item) => { this.props.navigation.navigate("CategoryContent", { data: item }) }} 
                            // renderList={() => {this.props.dispatch(fetchGeneralNews("general",this.state.page,this.state.pageSize))} } 
                            renderList={ (category,page,pageSize) => {this.props.dispatch(fetchGeneralNews(category,page,pageSize))}}
                             />
                    </Tab>
                    <Tab heading="Business">
                        <CategoryNewsList 
                            category ="business"
                            categoryDate = {business} 
                            refreshing={refreshing} 
                            navigation={(item) => { this.props.navigation.navigate("CategoryContent", { data: item }) }} 
                            renderList={ (category,page,pageSize) => {this.props.dispatch(fetchGeneralNews(category,page,pageSize))}}
                             />
                    </Tab>
                    <Tab heading="Entertainment">
                        
                        <CategoryNewsList 
                            category ="entertainment"
                            categoryDate = {entertainment} 
                            refreshing={refreshing} 
                            navigation={(item) =>this.props.navigation.navigate("CategoryContent", { data: item })} 
                            renderList={ (category,page,pageSize) => {this.props.dispatch(fetchGeneralNews(category,page,pageSize))}}                            
                            />
                    </Tab>
                    <Tab heading="Health">
                        {/* <Tab5 /> */}
                        <CategoryNewsList 
                            category ="health"
                            categoryDate = {health} 
                            refreshing={refreshing} 
                            navigation={(item) => { this.props.navigation.navigate("CategoryContent", { data: item }) }} 
                            renderList={ (category,page,pageSize) => {this.props.dispatch(fetchGeneralNews(category,page,pageSize))}}
                        />
                    </Tab>
                    <Tab heading="Sports">
                        {/* <Tab4 /> */}
                        <CategoryNewsList 
                            category ="sports"    
                            categoryDate = {sports} 
                            refreshing={refreshing} 
                            navigation={(item) => { this.props.navigation.navigate("CategoryContent", { data: item }) }} 
                            renderList={ (category,page,pageSize) => {this.props.dispatch(fetchGeneralNews(category,page,pageSize))}}
                        />
                    </Tab>
                    <Tab heading="Technology">
                        {/* <Tab5 /> */}
                        <CategoryNewsList
                            category ="technology" 
                            categoryDate = {technology} 
                            refreshing={refreshing} 
                            navigation={(item) => { this.props.navigation.navigate("CategoryContent", { data: item }) }} 
                            renderList={ (category,page,pageSize) => {this.props.dispatch(fetchGeneralNews(category,page,pageSize))}}                            
                        />
                    </Tab>
                    <Tab heading="Science">
                        {/* <Tab5 /> */}
                        <CategoryNewsList 
                            category ="science"
                            categoryDate = {science} 
                            refreshing={refreshing} 
                            navigation={(item) => { this.props.navigation.navigate("CategoryContent", { data: item }) }} 
                            renderList={ (category,page,pageSize) => {this.props.dispatch(fetchGeneralNews(category,page,pageSize))}}                    
                        />
                    </Tab>  
                </Tabs>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        category : state.categoryNews,       
    }
}

export default  connect(mapStateToProps)(HomeNavigation)