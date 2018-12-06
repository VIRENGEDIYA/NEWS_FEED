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


export class NewsList extends Component {
    constructor(props){
        super(props)
        this.state = {
            page:1,
            loading : false,
            pageSize:20
        }
    }
    componentDidMount = () => { 
        this._selectNews()
    }

    _selectNews = () => {
        this.props.navigation.getParam("country") && this._loadCountryNews ()
        this.props.navigation.getParam("category") && this._loadCategoryNews()
    }

    _loadCountryNews = () => {
        console.log("In load country")
        this.props.dispatch(fetchTopNewsByCountry(this.props.navigation.getParam("country").Code,this.props.navigation.getParam("category") || "",this.state.pageSize))
    }
    
    _loadCategoryNews = () => {
        this.props.dispatch(fetchTopNewsByCategory(this.props.navigation.getParam("category").Name,this.state.pageSize))
    }


    _moreData = () => {
        this.setState({
            pageSize : this.state.pageSize + 20
        },() => this._selectNews())
    }
    spinnerLoading = () => {    
        // return (<View>
        return  <Spinner size="large" />
                // </View>)
    }


    _categoryList = (country) => {
        return <FlatList 
                    data={ Categories }
                    renderItem = {({item, index}) => { return (<Text onPress={() => this._loadCountryNews(country.Code,item.Name)} key={item.Name} style={styles.categoryText}>{item.Name}</Text>)} }
                    // renderItem = {({item, index}) => { return (<Text onPress={() => this._selectNews()} key={item.Name} style={styles.categoryText}>{item.Name}</Text>)} }
                    horizontal={true}
                    style={{ height: 30,marginVertical:10}}
                    />
    }

    // activeNews = (articles,refreshing,headingTitle) => {
        //         // console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++",articles)
        //     //  return()
        // }

    render() {
        console.log("=======&&&&&&&&&&&&&&&&&&&&&&&&&&&&========= ",this.props)

        // console.log("=======&&&&&&&&&&&&&&&&&&&&&&&&&&&&========= ",this.props.navigation.state.params.category.Name)
        const {  topNews, refreshing } = this.props.topNews 
        // const {} = this.props.navigation
        let headingTitle = (this.props.navigation.getParam("country")) ? this.props.navigation.getParam("country") : this.props.navigation.getParam("category")
        // return   this.activeNews(articles,refreshing,headingTitle) 
        // return (Object.keys( articles).length) >0 ? this.activeNews(articles,refreshing) : this.spinnerLoading()  
         console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++",topNews)
        
        return( 
            <View>
                <TopHeader
                    title = {headingTitle.Name.toUpperCase()}
                    leftIconName = {"chevron-left"}
                    onLeftClick={() => {this.props.navigation.goBack()} }
                    onRightClick ={ () => {}}
                        // <SearchBar onChange={(text) =>this._searchNews(text)} />
                    />     
                    
                    <SearchBar onChange={(text) =>this._searchNews(text)} />
                
                {this.props.navigation.getParam("country") &&  this._categoryList(this.props.navigation.getParam("country"))} 
            
             {/* style={{paddingBottom:300,width="100%",height:100,borderWidth:1,borderColor:"black"}} */}
                {/* {refreshing ? this.spinnerLoading :  */}
                {/* <Card style={{paddingBottom:300}} > */}
                    <FlatListComponent              
                        rootData ={topNews}
                        renderItem = {({item}) => <NewsCard  article={item} onClick={() => {this.props.navigation.navigate("NewsContent",{data : item})}}  /> }
                        // keyExtractor = {({item,index}) => item.source.name}
                        showsHorizontalScrollIndicator={true}
                        refreshControl = {
                            <RefreshControl 
                                refreshing={this.refreshing}  
                                onRefresh={this.spinnerLoading()}
                            />
                        } 
                        ending={() => this._moreData()}
                        onEndReachedThreshold = {0}
                        
                    />
                {/* </Card> */}
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        topNews: state.TopHeadline,
        // category : state.category,
        // navigation : this.props.navigation        
    }   
}

export default connect(mapStateToProps)(NewsList)


const styles = StyleSheet.create({
    categoryText : {
         backgroundColor:"blue" ,color:"white",borderRadius:20,paddingHorizontal:10,marginHorizontal:10
    }
})