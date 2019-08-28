import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Image, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
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
                            placeholder={Strings.Surname}
                            style={styles.inputs}
                        />
                        <TextInput
                            placeholder={Strings.Userlogin}
                            style={styles.inputs}
                        />
                        <TextInput
                            placeholder={Strings.Email}
                            style={styles.inputs}
                        />
                        <TextInput
                            placeholder={Strings.ConfirmEmail}
                            style={styles.inputs}
                        />
                        <TextInput
                            placeholder={Strings.SellerName}
                            style={styles.inputs}
                        />
                        <View style={styles.importantBox}>
                            <Icon
                                name="exclamation-circle"
                                color={Colors.green}
                                size={FontSize.iconsFontSize}
                            />
                            <Text style={styles.importantText}>
                                <Text style={styles.importantTitle}> {Strings.Important} </Text>
                                {Strings.ThisIsTheNameThatCustomers}
                            </Text>
                        </View>
                        <TextInput
                        placeholder={Strings.IngreseNroDeTeléfono}
                            style={styles.textarea}
                        />
                        <RoundButton
                            backgroundColor={Colors.green}
                            width={Window.width}
                            borderColor={Colors.green}
                            title={Strings.Register}
                            textColor={Colors.white}
                            fontSize={FontSize.mediumFontSize}
                            // style={styles.btn}
                            action={() => Actions.Home()}

                        />
                        <View style={styles.RegisterBottom}>
                            <Text style={styles.loginInfo}> {Strings.YouHaveAnAccountAlready} </Text>
                            <TouchableOpacity onPress={}>
                            <Text style={styles.loginText}> {Strings.Login} </Text>
                            </TouchableOpacity>
                        
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
});

export default Register