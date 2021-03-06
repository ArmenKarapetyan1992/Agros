import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, TextInput, ScrollView, TouchableOpacity, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Colors from "../constants/Colors";
import { FontSize } from "../constants/Fonts";
import Strings from "../constants/Strings";
import Icon from "../components/elements/Icon";
import { bold } from 'ansi-colors';
import { Window } from "../constants/Dimensions"
import RoundButton from "../components/elements/RoundButton";
import { Col } from 'native-base';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            readMoreText: true,
            readMoreText2: true,
        }
    }
    changeText = () => {
        this.setState({
            readMoreText: false,
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scroll}>
                    <View style={styles.containerSize}>
                        <View style={styles.NewsBlock} >
                            <View style={styles.imagebox}>
                                <Image source={require('../assets/product.jpg')} style={styles.image} />
                            </View>
                            <View style={styles.NewsBlockSize}>
                                <View style={styles.weeksBox}>
                                    <Text style={styles.weeksBoxText}> 4 WEEKS </Text>
                                    <Text style={styles.weeksBoxText}> {Strings.PUBLISHEDINWITHOUTCATEGORY} </Text>
                                </View>
                                <Text style={styles.greenText}>
                                    The brother of César Cocarico is released, accused of committing a large scam of Mennonites
                                </Text>
                                <Text style={this.state.readMoreText ? styles.NewsText : styles.NewsText2}>
                                    Rogelio, brother of Minister César Cocarico, was denounced in 2017 for requesting money from
                                     a Mennonite colony. For this accusation he was arrested in the prison of Palmasola. The Fourth Court of Judgment of Santa Cruz ordered cessation
                                     of pretrial detention and granted house arrest, plus a 30,000 Bolivian bond for Rogelio Cocarico, one of the
                                    Rogelio, brother of Minister César Cocarico, was denounced in 2017 for requesting money from
                                     a Mennonite colony. For this accusation he was arrested in the prison of Palmasola. The Fourth Court of Judgment of Santa Cruz ordered cessation
                                     of pretrial detention and granted house arrest, plus a 30,000 Bolivian bond for Rogelio Cocarico, one of the
                                </Text>
                                <TouchableOpacity onPress={() => this.changeText()}>
                                    <Text style={styles.ReadMore}> {Strings.Readmore} </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.NewsBlock}>
                            <View style={styles.imagebox}>
                                <Image source={require('../assets/product.jpg')} style={styles.image} />
                            </View>
                            <View style={styles.NewsBlockSize}>
                                <View style={styles.weeksBox}>
                                    <Text style={styles.weeksBoxText}> 4 WEEKS </Text>
                                    <Text style={styles.weeksBoxText}> {Strings.PUBLISHEDINWITHOUTCATEGORY} </Text>
                                </View>
                                <Text style={styles.greenText}>
                                    The brother of César Cocarico is released, accused of committing a large scam of Mennonites
                                </Text>
                                <Text style={this.state.readMoreText2 ? styles.NewsText : styles.NewsText2}>
                                    Rogelio, brother of Minister César Cocarico, was denounced in 2017 for requesting money from
                                     a Mennonite colony. For this accusation he was arrested in the prison of Palmasola. The Fourth Court of Judgment of Santa Cruz ordered cessation
                                     of pretrial detention and granted house arrest, plus a 30,000 Bolivian bond for Rogelio Cocarico, one of the
                                    Rogelio, brother of Minister César Cocarico, was denounced in 2017 for requesting money from
                                     a Mennonite colony. For this accusation he was arrested in the prison of Palmasola. The Fourth Court of Judgment of Santa Cruz ordered cessation
                                     of pretrial detention and granted house arrest, plus a 30,000 Bolivian bond for Rogelio Cocarico, one of the
                                </Text>
                                <TouchableOpacity onPress={() => this.changeText()}>
                                    <Text style={styles.ReadMore}> {Strings.Readmore} </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    scroll: {
        width: "100%",
        height: "100%",
    },
    containerSize: {
        width: "90%",
        marginHorizontal: "5%",
    },
    NewsBlock: {
        width: "100%",
        backgroundColor: Colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5.84,
        elevation: 5,
        marginVertical: 10,
        paddingBottom: 15,
    },
    imagebox: {
        width: "100%",
        height: 270
    },
    image: {
        width: '100%',
        height: "100%"
    },
    NewsBlockSize: {
        width: "90%",
        marginHorizontal: "5%"
    },
    weeksBox: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
    },
    weeksBoxText: {
        width: "49%",
        color: Colors.darkGrey,
        fontSize: FontSize.smallestFontSize,

    },
    greenText: {
        color: Colors.green,
        fontSize: FontSize.smallFontSize,
        paddingBottom: 8,
        marginBottom: 8,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.darkGrey,
    },
    NewsText: {
        color: Colors.darkGrey,
        fontSize: FontSize.smallestFontSize,
        height: 100
    },
    NewsText2: {
        color: Colors.darkGrey,
        fontSize: FontSize.smallestFontSize,
    },
    ReadMore: {
        color: Colors.green,
        fontWeight: "bold",
        fontSize: FontSize.smallestFontSize
    },
})

export default News