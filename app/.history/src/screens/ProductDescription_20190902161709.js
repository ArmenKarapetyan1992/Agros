import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, TextInput, ScrollView, TouchableOpacity, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Colors from "../constants/Colors";
import { FontSize } from "../constants/Fonts";
import Strings from "../constants/Strings";
import Icon from "../components/elements/Icon";
import { bold } from 'ansi-colors';




class ProductDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeStyle: true
        }
    }
    render() {
        return (
            <View style={styles.container} >
                <ScrollView style={styles.scroll}>
                    <View style={styles.containerSize}>
                        <View style={styles.block1}>
                            <Text style={styles.PageTilte}>SALE OF PIGS - PRODUCER DIRECT</Text>
                            <V
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
        backgroundColor: Colors.lightGrey
    },
    scroll: {
        width: "100%",
        height: "100%",
    },
    containerSize: {
        width: "90%",
        marginHorizontal: "5%"
    },
    block1: {
        width: "100%",
        backgroundColor: "red",

        backgroundColor: Colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5.84,
        elevation: 5,
        display : "flex",
        alignItems : "center",
        marginTop : 10
    },
    PageTilte: {
        color : Colors.green,
        fontSize : FontSize.mediumFontSize,
        fontWeight : "bold",
        marginVertical : 15
    }
})

export default ProductDescription 