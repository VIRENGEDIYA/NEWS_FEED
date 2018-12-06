import React from 'react'
import { View } from 'react-native'
import { Card, Text, Button, Thumbnail, CardItem } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'

const HomeCard = (props) => {
    const {imageUrl,heading} = props
    return( 
            <View style={{ width: 320, margin: 15, height: 300, alignContent: "center", }}>
                <Button style={{ position: "absolute", height: "100%", backfaceVisibility: "hidden", backgroundColor: "transparent", borderWidth: 0, shadowOpacity: 0 }}  ><Icon name={"chevron-left"} size={30} color={"#fff"} style={{ borderWidth: 0 }} /></Button>
                <Thumbnail  source={{ uri: "https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg" }} style={{ height: 320, width: 320, flex: 1 }} />
                <Text style={{ position: "absolute", bottom: 20, left: 20, fontSize: 15 }}>{heading} || Hello</Text>
                <Button style={{ position: "absolute", right: 0, height: "100%", backgroundColor: "transparent", borderWidth: 0, shadowOpacity: 0 }}  ><Icon name={"chevron-right"} size={30} color={"#fff"} style={{ borderWidth: 0 }} /></Button>
            </View>
            )
}

export default HomeCard