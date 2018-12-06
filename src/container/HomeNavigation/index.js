import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { FlatList,View } from "react-native"
import { Content, Text, Card,  CardItem, Thumbnail, Button, Tabs, Tab, ScrollableTab, Container, } from 'native-base';
import TopHeader from '../../components/Header';
import SectionText from '../../components/sectionText';
import { fetchTodayNews } from '../../actions/TopNews'
import { connect } from 'react-redux'
import FlatListComponent from '../../components/FlatList';
import HomeCard from '../../components/homeCard';
import CategoryNewsList from './CategoryNewsList';



export class HomeNavigation extends Component {
    constructor(props){
        super(props)
        this.state = {
            page:1,
            loading : false,
            pageSize:20
        }
    }

    componentWillMount =() => {
        this._todayData ()
    }

    _moreData = () => {
        this.setState({
            pageSize : this.state.pageSize + 20
        },() => this._todayData())
    }
    _todayData =() =>{
        console.log("In todayData")
        // this.props.dispatch(fetchTodayNews("general",5))
        this.props.dispatch(fetchTodayNews("business",this.state.pageSize))
        
        // this.props.dispatch(fetchTodayNews("entertainment",5))
        // this.props.dispatch(fetchTodayNews("sports",5))
        // this.props.dispatch(fetchTodayNews("health",5))
        // this.props.dispatch(fetchTodayNews("science",5))
        // this.props.dispatch(fetchTodayNews("technology",5))
    }

    render() {
        console.log(".................................................",this.props.category)
        const { business} = this.props.category
        return (
            <Container>
                <TopHeader
                    leftIconName={"bars"}
                    title={"Home"}
                    onLeftClick={() => { this.props.navigation.openDrawer() }}
                />

                <Tabs renderTabBar={()=> <ScrollableTab />} onChangeTab={()=>{}}  tabBarPosition={"top"}>
                    <Tab heading="Top News" >
                        {/* <Tab1 /> */}
                       
                    </Tab>
                    <Tab heading="Business">
                        {/* <Tab2 /> */}
                    </Tab>
                    <Tab heading="Entertainment">
                        {/* <Tab3 /> */}
                    </Tab>
                    <Tab heading="Sports">
                        {/* <Tab4 /> */}
                    </Tab>
                    <Tab heading="Health">
                        {/* <Tab5 /> */}
                    </Tab>
                    <Tab heading="Technology">
                        {/* <Tab5 /> */}
                    </Tab>
                    <Tab heading="Science">
                        {/* <Tab5 /> */}
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("==================DNDFJSDSDNKSJDNKSDNCSDNNSKDNCKJDSNSDKJN=============",state.categoryNews.category)
    return {
        category : state.categoryNews.category,       
    }
}

export default connect(mapStateToProps)(HomeNavigation)