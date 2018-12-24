import React, { Component } from 'react'
import { Tabs, Tab, ScrollableTab, Container } from 'native-base';
import TopHeader from '../../components/topHeader';
import { fetchGeneralNews } from '../../api/categoryApi'
import { connect } from 'react-redux'
import CategoryNewsList from './categoryNewsList';




export class HomeNavigation extends Component {
    constructor(props){
        super(props)
        this.state = {
            search : false
        }
    }

    searchNews = () => {
        <TopHeader
            leftIconName={"back"}
        />
    }
    
    render() {
        const { general,business,entertainment,health,sports,technology,science,refreshing } = this.props.category
        return (
            <Container>
                {
                    this.state.search ?
                        <TopHeader
                            leftIconName={"chevron-left"}
                            isSearch = {this.state.search}
                            onLeftClick={() => { this.setState({search:false}) }}
                        />
                    :
                        <TopHeader
                            leftIconName={"bars"}
                            title={"Home"}
                            onLeftClick={() => { this.props.navigation.openDrawer() }}
                        />
                        
                }
                
                <Tabs renderTabBar={()=> <ScrollableTab />}  tabBarPosition={"top"}>
                    <Tab heading="Top News" >
                        <CategoryNewsList 
                            category ="general"
                            categoryData = {general} 
                            refreshing={refreshing}
                            navigation={(item) => { this.props.navigation.navigate("CategoryContent", { data: item }) }} 
                            renderList={ (category,page,pageSize) => {this.props.dispatch(fetchGeneralNews(category,page,pageSize))}}
                             />
                    </Tab>
                    <Tab heading="Business">
                        <CategoryNewsList 
                            category ="business"
                            categoryData = {business} 
                            refreshing={refreshing} 
                            navigation={(item) => { this.props.navigation.navigate("CategoryContent", { data: item }) }} 
                            renderList={ (category,page,pageSize) => {this.props.dispatch(fetchGeneralNews(category,page,pageSize))}}
                             />
                    </Tab>
                    <Tab heading="Entertainment"> 
                        <CategoryNewsList 
                            category ="entertainment"
                            categoryData = {entertainment} 
                            refreshing={refreshing} 
                            navigation={(item) =>this.props.navigation.navigate("CategoryContent", { data: item })} 
                            renderList={ (category,page,pageSize) => {this.props.dispatch(fetchGeneralNews(category,page,pageSize))}}                            
                            />
                    </Tab>
                    <Tab heading="Health">
                        <CategoryNewsList 
                            category ="health"
                            categoryData = {health} 
                            refreshing={refreshing} 
                            navigation={(item) => { this.props.navigation.navigate("CategoryContent", { data: item }) }} 
                            renderList={ (category,page,pageSize) => {this.props.dispatch(fetchGeneralNews(category,page,pageSize))}}
                        />
                    </Tab>
                    <Tab heading="Sports">
                        <CategoryNewsList 
                            category ="sports"    
                            categoryData = {sports} 
                            refreshing={refreshing} 
                            navigation={(item) => { this.props.navigation.navigate("CategoryContent", { data: item }) }} 
                            renderList={ (category,page,pageSize) => {this.props.dispatch(fetchGeneralNews(category,page,pageSize))}}
                        />
                    </Tab>
                    <Tab heading="Technology">
                        <CategoryNewsList
                            category ="technology" 
                            categoryData = {technology} 
                            refreshing={refreshing} 
                            navigation={(item) => { this.props.navigation.navigate("CategoryContent", { data: item }) }} 
                            renderList={ (category,page,pageSize) => {this.props.dispatch(fetchGeneralNews(category,page,pageSize))}}                            
                        />
                    </Tab>
                    <Tab heading="Science">
                        <CategoryNewsList 
                            category ="science"
                            categoryData = {science} 
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