import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { View} from 'react-native' 
import {  Text, Card} from 'native-base';

const IconList = (props) => {
    console.log(props)
    const {iconName, iconImg, onClick  } = props
    return (
        <View onTouchEnd={onClick} style={{ flex:1, width:100,height:130,alignItems:"center",justifyContent:"center", borderRadius:10,marginHorizontal:10}}>
            <Icon name={iconImg} size={30} color="#000" style={{marginBottom:5}}/>
            <Text style={{justifyContent:"center",}} >{iconName}</Text>
        </View>
    )
}

export default IconList