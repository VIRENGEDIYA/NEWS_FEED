import React, { Component } from 'react'
import { FlatList} from 'react-native'

export const FlatListComponent = (props) =>{
    const { rootData,style,ending,numColumns,showsHorizontalScrollIndicator,onEndReachedThreshold,refreshControl,horizontal } = props
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
            numColumns = {numColumns && numColumns}
            style = {style}
        />
        )
}



export default FlatListComponent