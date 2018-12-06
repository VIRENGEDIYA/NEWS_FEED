import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Text, Thumbnail, Body, Content } from 'native-base';
import TopHeader from '../../components/Header';

export class NewsContent extends Component {
    render() {
        console.log("====================================", this.props)
        const { navigation } = this.props
        
        const { title,urlToImage,description,content} = navigation.getParam("data",{}) 
        // console.log(discription)
        return (
            <Container style={styles.container} >
                <TopHeader
                    title={""}
                    onRightClick={() => { this.props.navigation.goBack() }}
                    onLeftClick={() => { }}
                />
                 <Content >
                    <Text style={styles.heading}> {title} </Text>
                    <Thumbnail square source={{ uri: urlToImage }} style={styles.newsImage} />
                    <Text style={styles.discription} >{description}</Text>
                    <Text style={styles.content} >{content}</Text>
                </Content>
            </Container>
        )
    }
}

export default NewsContent

const styles = StyleSheet.create({

    container : {
        flex :1,
        flexDirection :"column"
    },
    heading : {
        fontSize :30,
        fontWeight : 'bold'
    },
    ImageContainer : {
        flex:1,
        height:200,
    },
    newsImage : {
        height:300,
        width :370,
        marginVertical:15,
        borderWidth : 1,
        backgroundColor :'skyblue'
    },
    discription :{
        fontSize :25,
        marginVertical:20,
        color:"gray"
    },
    content :{
        fontSize :20
    }
})

