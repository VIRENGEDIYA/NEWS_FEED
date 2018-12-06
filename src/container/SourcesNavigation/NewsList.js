import React, { Component } from 'react'
import { Container,Label, Text,  Toast, Content, Spinner} from 'native-base';
import { connect } from 'react-redux'
import { getAllNewsFeed, fetchAllNewsFeed,fetchSearchNews, fetchSearchByCategory } from '../../actions';
import {fetchTopNewsByCountry} from '../../actions/TopNews'
import { FlatList,RefreshControl, StyleSheet } from 'react-native'
import Categories from '../../assets/Categories'
import SearchBar from '../../components/SearchBar';
import TopHeader from '../../components/Header';
import NewsCard from '../../components/NewsCard'


// import { SIGPIPE } from 'constants';


export class NewsList extends Component {
  
    // componentDidMount = () => {
    //     this._loadData()
    // }
    _loadData = (country) => {
        this.props.dispatch(fetchTopNewsByCountry(country))
        // this.props.dispatch(fetchAllNewsFeed(country));
   
    }

    _searchByCategories(Category){
        console.log(Category)
        this.props.dispatch(fetchSearchByCategory(Category))
    }

    _moreData =() => {
    
 
    }

    _searchNews = (text) => {
        this.props.dispatch(fetchSearchNews(text));
    }

    spinnerLoading = () => {    
        return <Spinner />
    }

    activeNews = (articles,refreshing) => {
         return(<Content >
                <TopHeader
                    title={"ALL News"}
                    onLeftClick={() => {this.props.navigation.openDrawer()} }
                    onRightClick ={ () => {}}
                        // <SearchBar onChange={(text) =>this._searchNews(text)} />
                    />     
                    
                <SearchBar onChange={(text) =>this._searchNews(text)} />
                <FlatList 
                    data={ Categories }
                    renderItem = {({item, index}) => { return (<Text onPress={() => this._searchByCategories(item.Name)} key={item.Name} style={styles.categoryText}>{item.Name}</Text>)} }
                    horizontal={true}
                    style={{ height: 30,marginVertical:10}}
                    />
                <FlatList              
                    data ={articles}
                    renderItem = {({item}) => <NewsCard  article={item} onClick={() => {this.props.navigation.navigate("NewsContent",{data : item})}}  /> }
                    // keyExtractor = {({item,index}) => item.source.name}
                    showsHorizontalScrollIndicator={false}
                    refreshControl = {
                        <RefreshControl 
                            refreshing={this.refreshing}  
                            onRefresh={this._loadData}
                        />
                    }
                    onEndReached={() => {this._moreData} }
                    onEndReachedThreshold = {0}
                    
                />
         </Content>    )
    }

    render() {
        // const { navigation } = this.props
        console.log("=======&&&&&&&&&&&&&&&&&&&&&&&&&&&&========= ",this.props.navigation.getParam("country").Code)
        const { articles, refreshing, } = this.props.news.news
        this._loadData(this.props.navigation.getParam("country").Code)
        
         return refreshing ? this.spinnerLoading() :this.activeNews(articles,refreshing)   

        // return (
        //     <Content >
        //         <TopHeader
        //             title={"ALL News"}
        //             onRightClick={() => {this.props.navigation.openDrawer()} }
        //             onLeftClick ={ () => {}}
        //         />     
        //         <SearchBar onChange={(text) =>this._searchNews(text)} />
        //         <FlatList 
        //             data={ Categories }
        //             renderItem = {({item, index}) => { return (<Text style={{ backgroundColor:"blue" ,color:"white",marginHorizontal:10}}> {item.Name} </Text>)} }
        //             horizontal={true}
        //             style={{borderColor:"black",borderWidth:1, height: 20}}
        //             />
        //         <FlatList              
        //             data ={articles}
        //             renderItem = {({item}) => <NewsCard  article={item} onClick={() => {this.props.navigation.navigate("NewsContent",{data : item})}}  /> }
        //             // keyExtractor = {({item,index}) => item.source.name}
        //             refreshControl = {
        //                 <RefreshControl 
        //                     refreshing={refreshing}  
        //                     onRefresh={this._loadData}
        //                 />
        //             }
        //             onEndReached={() => {this._moreData} }
        //             onEndReachedThreshold = {0}
                    
        //         />
        //     </Content>    
        // )
    }
}

const mapStateToProps = (state) => {
    return {news: state.news}
    
}

export default connect(mapStateToProps)(NewsList)


const styles = StyleSheet.create({
    categoryText : {
         backgroundColor:"blue" ,color:"white",borderRadius:20,paddingHorizontal:10,marginHorizontal:10
    }
})