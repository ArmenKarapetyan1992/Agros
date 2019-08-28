import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Image, View, Text, TextInput, ScrollView } from 'react-native';
import Colors from "../constants/Colors";
import { FontSize } from "../constants/Fonts";
import Strings from "../constants/Strings";
import RoundButton from "../components/elements/RoundButton";
import Icon from "../components/elements/Icon";
import { Window } from "../constants/Dimensions"



class Register extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.containerScroll}>
                    <View style={styles.containerSize}>
                        <View style={styles.imgBox}>
                            <Image
                                source={require('../assets/logo.png')}
                            />
                        </View>
                        <Text style={styles.RegisterTitle}>
                            {Strings.Register}
                        </Text>
                        <Text style={styles.RegisterText}>
                            {Strings.SendTheFollowingFormTo}
                        </Text>
                        <TextInput
                            placeholder={Strings.name}
                            style={styles.inputs}
                        />
                        <TextInput
                            placeholder={Strings.name}
                            style={styles.inputs}
                        />
                        <TextInput
                            placeholder={Strings.name}
                            style={styles.inputs}
                        />
                        <TextInput
                            placeholder={Strings.name}
                            style={styles.inputs}
                        />
                        <TextInput
                            placeholder={Strings.name}
                            style={styles.inputs}
                        />
                        <TextInput
                            placeholder={Strings.name}
                            style={styles.inputs}
                        />
                        <View style={styles.importantBox}>
                            <Icon 
                            name = "exclamation-circle"
                            color = {Colors.green}
                            size = {FontSize.iconsFontSize}
                            />
                            <Text style={styles.importantText}>
                                <Text style={styles.importantTitle}> {Strings.Important} </Text>
                                {Strings.ThisIsTheNameThatCustomers}
                            </Text>
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
        backgroundColor: Colors.white,
        display: "flex",
        alignItems: "center",
        height: "100%"

    },
    containerScroll: {
        width: '100%',

    },
    containerSize: {
        width: "90%",
        marginHorizontal: "5%"
    },
    imgBox: {
        display: "flex",
        alignItems: "center",
        marginBottom: 20
    },
    RegisterTitle: {
        fontSize: FontSize.bigFontSize,
        color: Colors.green,
        fontWeight: "bold",
        marginBottom: 8
    },
    RegisterText: {
        fontSize: FontSize.smallFontSize,
        color: Colors.darkGrey,
        marginBottom: 15
    },
    inputs: {
        width: "100%",
        height: 40,
        borderWidth: 0.5,
        borderColor: Colors.darkGrey,
        borderStyle: "solid",
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 10
    },
    importantBox: {
        display: "flex",
        flexDirection: "row",
        width: "100%"
    },
    importantText: {
        color: Colors.darkGrey,
        fontSize: FontSize.smallestFontSize
    },
    importantTitle: {
        fontWeight: "bold",
        color: Colors.darkGrey,
        fontSize: FontSize.smallestFontSize
    }
});

export default Register