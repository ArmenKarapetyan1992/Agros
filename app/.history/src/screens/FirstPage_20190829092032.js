import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Image, View, Text } from 'react-native';
import Colors from "../constants/Colors";
import { FontSize } from "../constants/Fonts";
import Strings from "../constants/Strings";
import RoundButton from "../components/elements/RoundButton";
import { Window } from "../constants/Dimensions"



class FirstPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            start = true,
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.start}>
                <Image
                            source={require('../assets/start.png')}
                        />
                </View>
                <View style={styles.containerSize}>
                    <View style={styles.imgBox}>
                        <Image
                            source={require('../assets/logo.png')}
                        />
                    </View>
                    <RoundButton
                        backgroundColor={Colors.green}
                        width={Window.width}
                        borderColor={Colors.green}
                        title={Strings.RegisterNow}
                        textColor={Colors.white}
                        fontSize={FontSize.mediumFontSize}
                        style={styles.btn}
                        action={() => Actions.LogIn()}

                    />
                    <RoundButton
                        backgroundColor={Colors.white}
                        width={Window.width}
                        borderColor={Colors.green}
                        title={Strings.RegisterLeter}
                        textColor={Colors.green}
                        fontSize={FontSize.mediumFontSize}
                        action={() => Actions.HomeMain()}

                    />
                </View>
            </View>
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
    start : {
        width: Window.width
    }
    containerSize: {
        width: "80%",
        height: "100%",
        display: "flex",
        justifyContent: "center"

    },
    imgBox: {
        display: "flex",
        alignItems: "center",
        marginBottom: 30
    },
    btn: {
        marginBottom: 15
    }
});

export default FirstPage;
