import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, TextInput, ScrollView, TouchableOpacity, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Colors from "../constants/Colors";
import { FontSize } from "../constants/Fonts";
import Strings from "../constants/Strings";
import RoundButton from "../components/elements/RoundButton";
import Icon from "../components/elements/Icon";
import { Window } from "../constants/Dimensions";



class Product extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchBarBlock}>
                    <View style={styles.searchBar}>
                        <TouchableOpacity >
                            <Icon name="search" size={FontSize.bigFontSize} color={Colors.darkGrey} />
                        </TouchableOpacity>
                        <TextInput style={styles.searchInput} placeholder={Strings.Search} placeholderTextColor={Colors.darkGrey} />
                    </View>
                    <TouchableOpacity style={styles.viewList}>
                        <Icon name="th-large" size={FontSize.biggestFontSize} color={Colors.green} />
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.scroll}>
                    <View style={styles.containerSize}>
                        <TouchableOpacity style={styles.productBox}>
                            <Image 
                            style = {styles.images}
                            source={require('../assets/logo.png')} />
                            <Text style = {styles.title}>
                            Semillas de Pasto Cosecha 2019
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.productBox}>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.productBox}>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.productBox}>

                        </TouchableOpacity>


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
    searchBarBlock: {
        width: '90%',
        marginHorizontal: "5%",
        marginTop: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end"
    },
    searchBar: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: Colors.darkGrey,
        borderBottomWidth: 0.5,
    },
    searchInput: {
        width: "80%",
        paddingLeft: 15,
        color: Colors.darkGrey,
        fontSize: FontSize.mediumFontSize

    },
    viewList: {
        width: 32,
        height: 32,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5.84,
        elevation: 5,
    },
    scroll: {
        width: "100%",
        height: "100%",
        marginTop: 20,

    },
    containerSize: {
        width: "90%",
        height: '100%',
        marginHorizontal: "5%",
        display : "flex",
        flexDirection: "row",
        justifyContent : "space-between",
        flexWrap :  "wrap",
        
    },
    productBox: {
        width: "49%",
        height : 300,
        backgroundColor: Colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5.84,
        elevation: 5,
        marginBottom : "3%",
    },
    images : {
        width: "100%",
        height : 182,
    },
    title : {
        FontSize : FontSize.
    }
}) 

export default Product 