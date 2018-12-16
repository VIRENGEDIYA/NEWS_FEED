import React, { Component } from 'react'
import { Text, View, WebView } from 'react-native'
import { Container } from 'native-base';
import TopHeader from '../../components/topHeader';

export class SourceDetails extends Component {
    render() {
        console.log("....................", this.props.navigation.getParam("url"))
        const { navigation } = this.props
        return (
            <Container>
                <WebView
                    source={{ uri: navigation.getParam("url") }}
                    style={{ marginTop: 20 }}
                />
            </Container>
        )
    }
}

export default SourceDetails