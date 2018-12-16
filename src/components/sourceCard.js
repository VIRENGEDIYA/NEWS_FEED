import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Card, CardItem, Body } from 'native-base';
import { throws } from 'assert';

export class SourceCard extends Component {
    render() {
        const { title, description, index, url } = this.props
        return (
            <Card key={index} style={{ alignSelf: "center", width: "95%", marginTop: 10, borderRadius: 20, padding:5 }}>
                <CardItem onPress={this.props.onClick} button header bordered>
                    <Text style={{ fontSize: 20, color: "#3700B3" }} l>{title}</Text>
                </CardItem>
                <CardItem bordered> 
                    <Body>
                        <Text style={{fontSize:18,paddingVertical:10,color:"gray"}}>
                            {description}
                        </Text>
                    </Body>
                </CardItem>
                <CardItem onPress={this.props.onClick} button footer>
                    <Text>{url}</Text>
                </CardItem>
            </Card>
        )
    }
}

export default SourceCard