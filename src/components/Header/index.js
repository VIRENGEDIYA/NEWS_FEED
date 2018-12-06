import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Left, Body, Right, Button, Title, Content } from 'native-base';



export default class TopHeader extends Component {
    render() {
        const { title,leftIconName, rightComponent } = this.props
        return (
            <Header>
                <Left>
                    <Button transparent onPress={this.props.onLeftClick}>
                        <Icon name={leftIconName} size={30} color="#fff" />
                    </Button>
                </Left>
                <Body>
                    <Title>{title}</Title>
                </Body>
                <Right >
                    
                </Right>
            </Header>

        );
    }
}