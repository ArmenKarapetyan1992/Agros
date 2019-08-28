import React, {Component} from 'react';
import { StyleSheet, Image, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import SearchBarExample from "../components/elements/SearchBarExample"
class Categories extends Component{
    render(){
        return(
            <Container>
                <Content>
                    <Card>
                        <Text>
                            Categories
                        </Text>
                    </Card>
                </Content>
            </Container>
        )
    }
}

export default Categories