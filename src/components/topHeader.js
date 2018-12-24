import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Left, Body, Right, Button, Title, Content, Input } from 'native-base';
import NewsCard from './newsCard';



export default class TopHeader extends Component {
    render() {
        const { title,leftIconName,isSearch, rightIconName } = this.props
        return (
            <Header>
                <Left>
                    <Button transparent onPress={this.props.onLeftClick}>
                        <Icon name={leftIconName} size={30} color="#fff" />
                    </Button>
                </Left>
                <Body>
                    {isSearch ?
                        <Input 
                            placeholder={"Search News..."}
                            placeholderTextColor="#ffffff" 
                            style={{color:"white"}}
                         />
                       : <Title>{title}</Title>}
                </Body>
                <Right >
                    <Button transparent onPress={this.props.onRightClick}>
                        <Icon name={rightIconName} size={25} color="#fff" />
                    </Button>
                </Right>
            </Header>

        );
    }
}