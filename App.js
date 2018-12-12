/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {Text, View, Image } from 'react-native';
import { DrawerNavigator,StackNavigator, DrawerItems } from 'react-navigation'
import NewsList from './src/container/TopHeadlinesNavigation/newsList';
import NewsContent from './src/container/TopHeadlinesNavigation/newsContent'   
import CategoryNewsList from './src/container/HomeNavigation/categoryNewsList'
import { Provider } from 'react-redux'
import configureStore from './src/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import TopHeader from './src/components/topHeader';
import HomeNavigation from './src/container/HomeNavigation'
import SourceNavigation from './src/container/SourceNavigation'
import TopHeadlinesNavigation from './src/container/TopHeadlinesNavigation'
import {  Thumbnail, Header, Body, } from 'native-base';
import images from './src/assets/images';
import Icon from 'react-native-vector-icons/FontAwesome'

let { store,persistor } = configureStore()

// const store = createStore(reducers , applyMiddleware())
export default class App extends Component {
    render() {
        return (
            
            <PersistGate persistor={persistor}>
                <Provider store={store}>
                    <RootDrawer />
                </Provider>
            </PersistGate>
            
        );
    }
}

const TopNewsNavigation = StackNavigator ({
    TopList : {
        screen : TopHeadlinesNavigation
    },
    NewsList : {
        screen : NewsList,
    },
    NewsContent : {
        screen :NewsContent
    }
},{
    navigationOptions : {
    header:TopHeader,
    }
    
})


const HomeScreen = StackNavigator ({
    TopList : {
        screen : HomeNavigation
    },
    CategoryNewsList : {
        screen : CategoryNewsList,
        // screen: NewsContent
    },
    CategoryContent : {
        screen :NewsContent
    }
},{
    navigationOptions : {
        header:TopHeader,
    }
    
})

const RootDrawer = DrawerNavigator({   
    Home :{
        screen : HomeScreen,
        icon :  <Icon name="home" size={30} />
    },
    World :{
        screen :TopNewsNavigation,
    } ,

    Sources :{
       screen : SourceNavigation,
    }  
},
{
  contentComponent: (props) => (
        <View>
            <Header style={{backgroundColor:"#c90000"}} >
                <Body>
                    <Thumbnail square source={images.logo} style={{width:"90%",alignSelf:"center",justifyContent:"center",height:300,}} />            
                </Body>
            </Header>
            <DrawerItems {...props} />
        </View>
     )
})
