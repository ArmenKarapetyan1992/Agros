import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Image, View, Text , TextInput } from 'react-native';
import Colors from "../constants/Colors";
import { FontSize } from "../constants/Fonts";
import Strings from "../constants/Strings";
import RoundButton from "../components/elements/RoundButton";
import Icon from "../components/elements/Icon";
import { Window } from "../constants/Dimensions"



class Register extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
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
                         placeholder = {Strings.name}
                            style = {styles.inputs}
                    />
                    <TextInput 
                         placeholder = {Strings.name}
                            style = {styles.inputs}
                    />
                    <TextInput 
                         placeholder = {Strings.name}
                            style = {styles.inputs}
                    />
                    <TextInput 
                         placeholder = {Strings.name}
                            style = {styles.inputs}
                    />
                    <TextInput 
                         placeholder = {Strings.name}
                            style = {styles.inputs}
                    />
                    <TextInput 
                         placeholder = {Strings.name}
                            style = {styles.inputs}
                    />
                </View>
            </ViScrollViewew>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: Colors.white,
        display: "flex",
        alignItems: "center"
    },
    containerSize: {
        width: "90%",
        height: "100%",
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
    inputs : {
        width: "100%",
        height: 40,
        borderWidth: 0.5,
        borderColor: Colors.darkGrey,
        borderStyle: "solid",
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 10
    },
});

export default Register