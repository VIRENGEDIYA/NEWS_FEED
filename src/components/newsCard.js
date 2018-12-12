import React, { Component } from 'react'
import { ListItem, Thumbnail, Left, Right, Body, Text } from 'native-base';


export class NewsCard extends Component {
    render() {
        const fixImage = "https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg"
        // console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", this.props)   
        const { title, urlToImage, description } = this.props.article;
        return (
            <ListItem onPress={this.props.onClick} thumbnail style={{ flexDirection: "row", alignItems: "flex-start", }}>
                <Left>
                    <Thumbnail square style={{ width: 100, height: 80, }} source={{ uri: urlToImage ? urlToImage : fixImage }} />
                </Left>
                <Body>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black' }}>{title}</Text>
                    <Text note numberOfLines={1} style={{ color: 'gray' }} >{description}</Text>
                </Body>
                <Right />
            </ListItem>
        )
    }
}



export default NewsCard

