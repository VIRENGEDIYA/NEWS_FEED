import React from 'react'
import { View ,Image,  } from 'react-native'
import {  Text, Card, ListItem, Button, CardItem } from 'native-base';

const RowItem = (props) => {
    const { name, code, onClick } = props
    return (
        <View onTouchEnd={onClick} style={{width:100,height:130,alignItems:"center",justifyContent:"center",borderRadius:10,marginHorizontal:10,}}>
            <Image source={{uri:`https://www.countryflags.io/${code}/flat/64.png`}} style={{width:80,height:50,marginBottom:15}} />
            <Text style={{alignSelf:"center",justifyContent:"center", }}>{name.toUpperCase()}</Text>
        </View>
    )
}

export default RowItem