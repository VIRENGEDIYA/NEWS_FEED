import React, { Component } from 'react'
import { Container,Label, Text,  Toast, Content, Spinner, View, Card} from 'native-base';
import { connect } from 'react-redux'
import { getAllNewsFeed, fetchAllNewsFeed,fetchSearchNews,  } from '../../actions';
import {fetchTopNewsByCountry , fetchTopNewsByCategory, fetchTopNewsByCountr} from '../../actions/TopNews'
import { FlatList,RefreshControl,ActivityIndicator, StyleSheet } from 'react-native'
import Categories from '../../assets/Categories'
import SearchBar from '../../components/SearchBar';
import TopHeader from '../../components/Header';
import NewsCard from '../../components/NewsCard'
import FlatListComponent from '../../components/FlatList';
import constant from '../../constant';


// import { SIGPIPE } from 'constants';


export class CategoryNewsList extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         page:1,
    //         loading : false,
    //         pageSize:0
    //     }
    // }
    // componentWillMount =() => {
    //     this._todayData ()
    // }
    // _loadCategoryNews = () => {
    //     this.props.dispatch(fetchTopNewsByCategory(this.props.categoryName,this.state.pageSize))
    // }


    // _moreData = () => {
    //     this.setState({
    //         pageSize : this.state.pageSize + 20
    //     },() => this.props.moreData())
    // }
    spinnerLoading = () => {    
        // return (<View>
        return  <Spinner size="large" />
                // </View>)
    }

    // _todayData =() =>{
    //     console.log("In Hello")
    //     // this.props.dispatch(fetchTodayNews("general",5))
    //     this.setState({
    //         pageSize : this.state.pageSize + 20
    //     },this.props.dispatch(fetchTodayNews("business",this.state.pageSize)))
        
    //     // this.props.dispatch(fetchTodayNews("entertainment",5))
    //     // this.props.dispatch(fetchTodayNews("sports",5))
    //     // this.props.dispatch(fetchTodayNews("health",5))
    //     // this.props.dispatch(fetchTodayNews("science",5))
    //     // this.props.dispatch(fetchTodayNews("technology",5))
    // }

    // _categoryList = (country) => {
    //     return <FlatList 
    //                 data={ Categories }
    //                 renderItem = {({item, index}) => { return (<Text onPress={() => this._loadCountryNews(country.Code,item.Name)} key={item.Name} style={styles.categoryText}>{item.Name}</Text>)} }
    //                 // renderItem = {({item, index}) => { return (<Text onPress={() => this._selectNews()} key={item.Name} style={styles.categoryText}>{item.Name}</Text>)} }
    //                 horizontal={true}
    //                 style={{ height: 30,marginVertical:10}}
    //                 />
    // }

    // activeNews = (articles,refreshing,headingTitle) => {
        //         // console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++",articles)
        //     //  return()
        // }

    render() {
        console.log("=======&&&&&&&&&&&&&&&&&&&&&&&&&&&&========= ",this.props)

        // console.log("=======&&&&&&&&&&&&&&&&&&&&&&&&&&&&========= ",this.props.navigation.state.params.category.Name)
        const {  newsData, refreshing } = this.props
        // const {} = this.props.navigation
        // let headingTitle =  this.props.navigation.getParam("country") : this.props.navigation.getParam("category")
        // return   this.activeNews(articles,refreshing,headingTitle) 
        // return (Object.keys( articles).length) >0 ? this.activeNews(articles,refreshing) : this.spinnerLoading()  
        //  console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++",topNews)
        
        return( 
             <View>
             
                    <FlatListComponent              
                        rootData ={newsData}
                        renderItem = {({item,index}) => <NewsCard index={index}  article={item} onClick={() => {this.props.navigation.navigate("NewsContent",{data : item})}}  /> }
                        // keyExtractor = {({item,index}) => item.source.name}
                        showsHorizontalScrollIndicator={true}
                        refreshControl = {
                            <RefreshControl 
                                refreshing={this.refreshing}  
                                onRefresh={this.spinnerLoading()}
                            />
                        } 
                        ending ={this.props.moreData}
                        onEndReachedThreshold = {0}
                        
                        />
                        
            </View>
        )
    }
}

// const mapStateToProps = (state) => {
//     console.log("===============================",state.categoryNews.category)
//     return {
//         category : state.categoryNews.category,       
//     }
// }

export default CategoryNewsList


const styles = StyleSheet.create({
    categoryText : {
         backgroundColor:"blue" ,color:"white",borderRadius:20,paddingHorizontal:10,marginHorizontal:10
    }
})