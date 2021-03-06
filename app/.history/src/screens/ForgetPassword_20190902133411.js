import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Image, View, Text, TextInput,  TouchableOpacity } from 'react-native';
import Colors from "../constants/Colors";
import { FontSize } from "../constants/Fonts";
import Strings from "../constants/Strings";
import RoundButton from "../components/elements/RoundButton";
import { Window } from "../constants/Dimensions"



class ForgetPassword extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerSize}>
                    <View style={styles.imgBox}>
                        <Image
                            source={require('../assets/logo.png')}
                        />
                    </View>
                    <Text style={styles.RegisterTitle}>
                        {Strings.RecoverPassword}
                    </Text>
                    <Text style={styles.RegisterText}>
                        {Strings.EnterYourEmailAndWeWillSend}
                    </Text>
                    <TextInput
                        placeholder={Strings.}
                        style={styles.inputs}
                    />
                    <RoundButton
                        backgroundColor={Colors.green}
                        width={Window.width}
                        borderColor={Colors.green}
                        title={Strings.Submit}
                        textColor={Colors.white}
                        fontSize={FontSize.mediumFontSize}
                        // style={styles.btn}
                        action={() => Actions.HomeMain()}

                    />
                    <View style={styles.RegisterBottom}>
                        <Text style={styles.loginInfo}> {Strings.newInAgrotratos}</Text>

                        <TouchableOpacity onPress={() => Actions.Register()}>
                            <Text style={styles.loginText}> {Strings.Register} </Text>
                        </TouchableOpacity>

                    </View>
                </View>

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
    containerSize: {
        width: "90%",
        marginHorizontal: "5%"
    },
    imgBox: {
        display: "flex",
        alignItems: "center",
        marginBottom: 20,
        marginTop: 40
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
    textarea: {
        width: "100%",
        height: 100,
        borderWidth: 0.5,
        borderColor: Colors.darkGrey,
        borderStyle: "solid",
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 40
    },
    importantBox: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        marginBottom: 15,
        marginTop: 10
    },
    importantText: {
        color: Colors.darkGrey,
        fontSize: FontSize.smallestFontSize,
        marginLeft: 10,
        width: "90%"
    },
    importantTitle: {
        fontWeight: "bold",
        color: Colors.darkGrey,
        fontSize: FontSize.smallestFontSize
    },
    RegisterBottom: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 40,
        marginTop: 20
    },
    loginInfo: {
        color: Colors.darkGrey,
        fontSize: FontSize.smallestFontSize
    },
    loginText: {
        color: Colors.green,
        fontSize: FontSize.smallestFontSize,
        textDecorationColor: Colors.green,
        textDecorationStyle: "solid",
        textDecorationLine: "underline",

    },
    forgetPasswordBox: {
        display: "flex",
        alignItems: "flex-end",
        marginBottom: 20,
        marginTop: 20
    },
    forgetPassword: {
        color: Colors.darkGrey,
        fontSize: FontSize.smallFontSize,
        textDecorationColor: Colors.darkGrey,
        textDecorationStyle: "solid",
        textDecorationLine: "underline",

    }
});

export default ForgetPassword