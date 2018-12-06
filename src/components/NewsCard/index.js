import React, { Component } from 'react'
import {StyleSheet } from 'react-native'
import {     ListItem, Thumbnail, Left,Right, Body, Text } from 'native-base';
import AllHeader from '../Header';
// import { colors, Button } from 'react-native-elements';


export class  NewsCard extends Component {
    render() {
        const  fixImage="https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg"
        // console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", this.props)   
        const { title,urlToImage,description} = this.props.article;    
        return (
            // <Content onpr >
                <ListItem onPress={this.props.onClick} thumbnail style={{flexDirection:"row",alignItems:"flex-start",}}> 
                    <Left>
                        {/* <Image style={{width : 100,height:100}} source={require('../../assets/Images/per.jpg')} />  */}
                        <Thumbnail square style={{  width: 100, height: 80, }}  source={{ uri: urlToImage !== null ? urlToImage : fixImage }} />
                    </Left>
                    <Body>
                        <Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>{title}</Text>
                        <Text note numberOfLines={1}  style={{color:'gray'}} >{description}</Text>
                    </Body>
                    <Right />
                 </ListItem>
            // </Content>
            
        )
    }
}



export default NewsCard

// const styles = StyleSheet.create({
//     list : {

//     }
// })