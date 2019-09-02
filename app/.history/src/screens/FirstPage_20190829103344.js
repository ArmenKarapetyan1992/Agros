import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Image, View, Text, Animated } from 'react-native';
import Colors from "../constants/Colors";
import { FontSize } from "../constants/Fonts";
import Strings from "../constants/Strings";
import RoundButton from "../components/elements/RoundButton";
import { Window } from "../constants/Dimensions"
import * as Animatable from 'react-native-animatable';


class FirstPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: false,
            // opacity:1,
        }
    }
    componentDidMount() {
        let opacity = 1;
        // window.setInterval(()=>{
        //     opacity -= 0.1;
        //     this.setState({opacity})
        // },150)
        setTimeout(() => {
            this.setState({ start: true })
        }, 2000)
    }
    render() {
        return (
            <View style={styles.container}>
                {!this.state.start ?
                    <View style={
                        {
                            width: Window.width,
                            height: Window.height,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            // opacity:this.state.opacity
                        }
                    }>
                        <Animatable.View 
                                         useNativeDriver={true}
                                         animation="zoomIn"
                                         direction="alternate"
                        >
                            <Image
                            source={require('../assets/start.png')}
                        />
                        </Animatable.View>
                     
                    </View> :
                    null}
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
