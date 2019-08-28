import React, {Component} from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';

class News extends Component{
    render(){
        return(
            <Container>
                <Content>
                    <Card>
                        <Text>
                           News
                        </Text>
                    </Card>
                </Content>
            </Container>
        )
    }
}

export default News