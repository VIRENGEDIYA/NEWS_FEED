/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { DrawerNavigator,StackNavigator, DrawerItems } from 'react-navigation'
import NewsList from './src/container/TopHeadlinesNavigation/NewsList';
import NewsContent from './src/container/TopHeadlinesNavigation/NewsContent'   
import { Provider } from 'react-redux'
import configureStore from './src/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Header, Icon } from 'native-base';
import TopHeader from './src/components/Header';
import HomeNavigation from './src/container/HomeNavigation'
import WorldNavigation from './src/container/WorldNavigation'
import TopHeadlinesNavigation from './src/container/TopHeadlinesNavigation'
import CategoriesNavigation from './src/container/CategoriesNavigation'
import SourcesNavigation from './src/container/SourcesNavigation'

let { store,persistor } = configureStore()


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

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
        // screen: NewsContent
    },
    NewsContent : {
        screen :NewsContent
    }
},{
    // initialRouteName:NewsList,
    navigationOptions : {
        // headerLeft : <Icon name="menu" />,
        // title : "All News",
        header:TopHeader,
        // headerBackImage:"menu"
    }
    
})

const RootDrawer = DrawerNavigator({   
    Home : HomeNavigation,
    TopLines :  TopNewsNavigation,
    World :  WorldNavigation,
    Categories : CategoriesNavigation,
    Sources :  SourcesNavigation
},
{
    // initialRouteName : TopLines,
  contentComponent: (props) => (
        <View>
            <Image source={require("./src/assets/Images/icon.jpeg")} style={{width:"100%",height:250,}} />
            {/* <Text>Custom Header</Text> */}
            <DrawerItems {...props} />
            <Text>Custom Footer</Text>
        </View>
     )
}
// {
//     // initialRouteName :NewsList,
//     initialRouteParams : NewsList
// }
)
 