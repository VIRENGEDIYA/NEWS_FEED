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
import { Provider } from 'react-redux'
import configureStore from './src/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import {  Thumbnail, Header, Body, } from 'native-base';
import images from './src/assets/images';
import { HomeNavigation, CountriesScreen, SourcesNavigation} from './src/Navigation'

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



const RootDrawer = DrawerNavigator({   
    Sources :{
        screen : SourcesNavigation,
    },
    Home :{
        screen : HomeNavigation,
        // icon :  <Icon name="home" size={30} />
    },
    World :{
        screen :CountriesScreen,
    } ,

},
{
  contentComponent: (props) => (
        <View>
            <Header style={{backgroundColor:"#c90000",height:200}} >
                <Body>
                    <Thumbnail square source={images.logo} style={{width:"90%",alignSelf:"center",justifyContent:"center",height:300,}} />            
                </Body>
            </Header>
            <DrawerItems {...props} />
        </View>
     )
})
