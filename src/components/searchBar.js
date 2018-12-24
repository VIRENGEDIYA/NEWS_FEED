import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Container, Item, Input, Icon, Button, Header, Content, Picker, Right } from 'native-base';
import Countries from '../assets/Countries'
import Dropdown from './dropdown'

// const country = Countries

export class SearchBar extends Component {
    render() {
        return (
            <Header searchBar  rounded style={{ backgroundColor: "#eaeaea" }} >
                <Item>
                    <Input placeholder="Search" onChangeText={(text) =>{ this.props.onChange(text)}} style={{paddingRight:20}} />
                    <Icon name="search" />
                </Item>
            </Header>
        )
    }
}

export default SearchBar

const styles = StyleSheet.create({
    inputField : {
        backgroundColor: 'gray'
    }
})