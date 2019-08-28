import React, {Component} from 'react';
import { StyleSheet, Image, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Image, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Colors from "../constants/Colors";
import { FontSize } from "../constants/Fonts";
import Strings from "../constants/Strings";
import RoundButton from "../components/elements/RoundButton";
import Icon from "../components/elements/Icon";
import { Window } from "../constants/Dimensions";

import SearchBarExample from "../components/elements/SearchBarExample"
class Categories extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View>
                    
                </View>


            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: Colors.white
    }
})

export default Categories