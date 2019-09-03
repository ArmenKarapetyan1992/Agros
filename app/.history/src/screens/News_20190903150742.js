import React, {Component} from 'react';
import { StyleSheet, Image, View, Text, TextInput, ScrollView, TouchableOpacity, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Colors from "../constants/Colors";
import { FontSize } from "../constants/Fonts";
import Strings from "../constants/Strings";
import Icon from "../components/elements/Icon";
import { bold } from 'ansi-colors';
import { Window } from "../constants/Dimensions"
import RoundButton from "../components/elements/RoundButton";

class News extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ScrollView style={styles.scroll}>
                    <View style={styles.containerSize}>
                        <View style={styles.NewsBlock}>

                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
container : {
    width : "100%",
    height : "100%",
},
scroll : {
    width : "100%",
    height : "100%",
},
containerSize: {
    width : "90%",
    marginHorizontal: "5%",
},
NewsBlock: {
    width : "100%",
    backgroundColor : Colors.white,
    shadowColor: "#000",
    shadowOffset: {
        width: 2,
        height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5.84,
    elevation: 5,
},
})

export default News