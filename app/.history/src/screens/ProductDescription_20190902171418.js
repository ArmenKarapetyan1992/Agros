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
                            <View style={styles.imagebox}>
                                <Image source={require('../assets/product.jpg')} style={styles.image} />
                            </View>
                            <View style={styles.block1Main}>
                                <View style={styles.heartBlock}>
                                    <Text style={styles.aboutus}> {Strings.AboutUs} </Text>
                                    <Icon name="heart" size={FontSize.bigFontSize} color={Colors.darkGrey} />
                                </View>
                                <Text style={styles.forSalesPigs}>
                                    FOR SALE PIGS 8.50 Bs live kilo Weight average: Between 60 to 70 Kgs. Zone:
                                     Between Cotoca and Pailas. Contact: Fernando Kin 78006099
                            </Text>
                            <View style={styles.listBlock}> 
                                <Text style={styles.listText}>Type of Grain</Text>
                                <Text style={styles.listText}>Quantity </Text>
                            </View>
                            <View style={styles.listBlock}> 
                                <Text style={styles.listText}>Type of Grain</Text>
                                <Text style={styles.listText}>Quantity </Text>
                            </View>
                            <View style={styles.listBlock}> 
                                <Text style={styles.listText}>Type of Grain</Text>
                                <Text style={styles.listText}>Quantity </Text>
                            </View>
                            <View style={styles.listBlock}> 
                                <Text style={styles.listText}>Type of Grain</Text>
                                <Text style={styles.listText}>Quantity </Text>
                            </View>
                            <View style={styles.listBlock}> 
                                <Text style={styles.listText}>Type of Grain</Text>
                                <Text style={styles.listText}>Quantity </Text>
                            </View>
                            <View style={styles.listBlock}> 
                                <Text style={styles.listText}>Type of Grain</Text>
                                <Text style={styles.listText}>Quantity </Text>
                            </View>
                            </View>

                        </View>
                        <View style={styles.block2}> 
                        <Text style={styles.block2Title}> {Strings.Specialties} </Text>
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
        display: "flex",
        alignItems: "center",
        marginTop: 10
    },
    PageTilte: {
        color: Colors.green,
        fontSize: FontSize.mediumFontSize,
        fontWeight: "bold",
        marginVertical: 15
    },
    imagebox: {
        width: "100%",
        height: 270
    },
    image: {
        width: '100%',
        height: "100%"
    },
    block1Main: {
        width: "90%",
        marginHorizontal: "5%"
    },
    heartBlock: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.darkGrey,
        paddingBottom: 10,
        marginVertical: 10
    },
    aboutus: {
        color: Colors.green,
        fontSize: FontSize.standardFontSize
    },
    forSalesPigs : {
       color : Colors.darkGrey,
       fontSize : FontSize.smallFontSize,
       marginBottom: 20 
    },
    listBlock : {
       display : "flex",
       flexDirection : "row",
        justifyContent : "space-between",
        marginBottom : 10
    },
    listText : {
        width : '49%',
        color : Colors.darkGrey,
        fontSize : FontSize.smallestFontSize
    },
    block2 : {
        width : "100%",
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5.84,
        elevation: 5,
        marginVertical : 10
    },
    block2Title : {
        Colors 
    }
})

export default ProductDescription 