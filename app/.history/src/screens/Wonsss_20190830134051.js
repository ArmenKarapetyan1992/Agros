import React, {Component} from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';

class Product extends Component{
    render(){
        return(
            <Container>
                <Content>
                    <Card>
                        <Text>
                        Product
                        </Text>
                    </Card>
                </Content>
            </Container>
        )
    }
}

export default Product 