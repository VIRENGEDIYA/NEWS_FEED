import React, { Component } from 'react'
import {Text, Header, Content, Separator, Container,Body, View} from 'native-base'

const SectionText = (props) => {
    const {text } = props
    return (
         < View style={styles.headerBox} >
            <Text style={styles.headingText} >{text}</Text>        
         </View>
    )
}

export default SectionText

const styles = {
    headingText : { marginVertical:5,color:"gray" ,fontSize:15,},
    headerBox : {  borderBottomColor:"gray",borderBottomWidth:1, margin: 15 }
}