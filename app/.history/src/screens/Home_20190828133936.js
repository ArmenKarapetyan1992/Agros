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

    },
    containerSize: {
        width: "90%",
        marginHorizontal: "5%"
    },
    box: {
        width: "100%",
        height: 300,
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 1,
        backgroundColor: Colors.white
    }
})

export default Home