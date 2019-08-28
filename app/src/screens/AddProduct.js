import React, {Component} from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';

class AddProduct extends Component{
    render(){
        return(
            <Container>
                <Content>
                    <Card>
                        <Text>
                        Add Product
                        </Text>
                    </Card>
                </Content>
            </Container>
        )
    }
}

export default AddProduct