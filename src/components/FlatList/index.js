import React, { Component } from 'react'
import { FlatList} from 'react-native'
import { View } from 'native-base';



export class index extends Component {
  render() {
    const { rootData,style,ending,showsHorizontalScrollIndicator,onEndReachedThreshold,refreshControl,horizontal } = props
    return (
        <FlatList              
            data ={rootData}
            renderItem = {props.renderItem}  
            // keyExtractor = {({item,index}) => item.source.name}
            showsHorizontalScrollIndicator={showsHorizontalScrollIndicator && showsHorizontalScrollIndicator}
            refreshControl = {
                refreshControl && refreshControl
            }
            horizontal={horizontal && horizontal}
            onEndReached={ending && ending}
            onEndReachedThreshold = {onEndReachedThreshold && onEndReachedThreshold}
            horizontal= { horizontal && horizontal}
            // style = {style}
        />
        )
  }
}


export default FlatListComponent