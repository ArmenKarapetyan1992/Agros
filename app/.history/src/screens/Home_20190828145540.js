import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Image, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Colors from "../constants/Colors";
import { FontSize } from "../constants/Fonts";
import Strings from "../constants/Strings";
import RoundButton from "../components/elements/RoundButton";
import Icon from "../components/elements/Icon";
import { Window } from "../constants/Dimensions"

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.containerScroll}>
                    <View style={styles.containerSize}>
                        <View style={styles.box}>
                            <View style={styles.ImageBox}>
                                <Image source={require('../assets/leaf.png')} />
                            </View>
                            <Text style={styles.producers}> {Strings.PRODUCERS} </Text>
                            <View style={styles.textBox}>
                            <Text>  </Text>
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
        backgroundColor: Colors.lightGrey
    },
    containerScroll: {
        width: '100%',
        height: "100%",
    },
    containerSize: {
        width: "90%",
        height: "100%",
        marginHorizontal: "5%"
    },
    box: {
        width: "100%",
        height: 300,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5.84,

        elevation: 5,
        backgroundColor: Colors.white,
        marginTop: 15,
        display: "flex",
        alignItems: "center"
    },
    ImageBox: {
        backgroundColor: Colors.green,
        width: 64,
        height: 64,
        borderRadius: 32,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 15,
    },
    producers: {
        color: Colors.green,
        fontSize: FontSize.biggestFontSize,
        fontWeight: "bold"
    }
})

export default Home