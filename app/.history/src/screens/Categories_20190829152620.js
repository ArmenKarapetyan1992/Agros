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
                            <Icon name="search" size={FontSize.bigFontSize} color={Colors.darkGrey} />
                        </TouchableOpacity>
                        <TextInput style={styles.searchInput} placeholder={Strings.Search} placeholderTextColor={Colors.darkGrey} />
                    </View>
                    <View style={styles.viewList}>
                        <Icon name="th-large" size={FontSize.biggestFontSize} color={Colors.green} />
                    </View>
                </View>
                <ScrollView style={styles.scroll}>
                    <View style={styles.containerSize}>
                        <TouchableOpacity style={styles.categoriesBox}>
                            <View style={styles.categoriesImg}>
                                <Image
                                    source={require('../assets/cat1.png')}
                                />
                            </View>
                            <View>
                                <Text style={styles.productName}> {Strings.Won} </Text>
                                <Text>  {Strings.products} </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoriesBox}>
                            <View style={styles.categoriesImg}>
                                <Image
                                    source={require('../assets/cat1.png')}
                                />
                            </View>
                            <View>
                                <Text style={styles.productName}> {Strings.Won} </Text>
                                <Text>  {Strings.products} </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoriesBox}>
                            <View style={styles.categoriesImg}>
                                <Image
                                    source={require('../assets/cat1.png')}
                                />
                            </View>
                            <View>
                                <Text style={styles.productName}> {Strings.Won} </Text>
                                <Text>  {Strings.products} </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoriesBox}>
                            <View style={styles.categoriesImg}>
                                <Image
                                    source={require('../assets/cat1.png')}
                                />
                            </View>
                            <View>
                                <Text style={styles.productName}> {Strings.Won} </Text>
                                <Text>  {Strings.products} </Text>
                            </View>
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
        fontSize:   FontSize.mediumFontSize

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
        height: "100%"
    },
    containerSize: {
        width: "90%",
        marginHorizontal: "5%",
        marginTop: 20
    },
    categoriesBox: {
        width: "100%",
        backgroundColor: Colors.white,
        paddingVertical: 8,
        paddingLeft: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5.84,
        elevation: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8
    },
    categoriesImg: {
        borderRightColor: Colors.darkGrey,
        borderRightWidth: 0.5,
        paddingRight: 8,
        marginRight: 16
    },
    productName: {
        color: Colors.green,
        fontSize: FontSize.mediumFontSize,
        fontWeight: "bold"
    },
    productCount: {
        color: Colors.darkGrey,
        fontSize: FontSize.standardFontSize,
    },
})

export default Categories