import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, TextInput, ScrollView, TouchableOpacity, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Colors from "../constants/Colors";
import { FontSize } from "../constants/Fonts";
import Strings from "../constants/Strings";
import RoundButton from "../components/elements/RoundButton";
import Icon from "../components/elements/Icon";
import { Window } from "../constants/Dimensions";


class Categories extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchBarBlock}>
                    <View style={styles.searchBar}>
                        <TouchableOpacity>
                            <Icon name="search" />
                        </TouchableOpacity>
                        <TextInput />
                    </View>
                    <View style={styles.viewList}>
                        <Icon name="th-large" />
                    </View>
                </View>


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
    searchBarBlock: {
        width: '90%',
        marginHorizontal: "5%",
        height: 100,
        marginTop: 15,
        backgroundColor: "red",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    searchBar: {
        backgroundColor: "blue",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    viewList: {
        width: 64,
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
})

export default Categories