import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { increment, decrement } from '../action/index';
import { Router, Scene, Tabs } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FirstPage from '../screens/FirstPage'
import LogIn from '../screens/LogIn'
import Register from '../screens/Register';
import Home from "../screens/Home";
import ForgetPassword from "../screens/ForgetPassword";
import Categories from "../screens/Categories";
import AddProduct from "../screens/AddProduct";
import MorePage from "../screens/MorePage";
import News from "../screens/News";
import Icon from "../components/elements/Icon";
import { FontSize } from '../constants/Fonts';
import Colors from '../constants/Colors';

const iconHome = () => (
    <Icon 
    name = "home"
    size= {FontSize.iconsNormalFontSize}
    color= {Colors.darkGrey}
    />
);
const iconCategories = () => (
    <Icon 
    name = "th"
    size= {FontSize.iconsNormalFontSize}
    color= {Colors.darkGrey}
    />
);
const iconAddProduct = () => (
    <Icon 
    name = "plus-circle"
    size= {FontSize.iconsNormalFontSize}
    color= {Colors.darkGrey}
    />
);
const iconMore = () => (
    <Icon 
    name = "plus-circle"
    size= {FontSize.iconsNormalFontSize}
    color= {Colors.darkGrey}
    />
);

class Counter extends Component {
    render() {
        console.log(this.props.count);
        return (
            <Router hideNavBar="true" navigationBarStyle={styles.navBar}>
                <Scene key="root">
                    <Scene key="FirstPage" component={FirstPage} hideNavBar="false" />
                    <Scene key="LogIn" component={LogIn} title="Back" />
                    <Scene key="Register" component={Register} title="Back" />
                    <Scene key="ForgetPassword" component={ForgetPassword} title="ForgetPassword" />
                    <Scene key="HomeMain" tabs="true" hideNavBar="false" initial={true} >
                        <Scene key="Home" component={Home} icon={iconHome} />
                        <Scene key="Categories" component={Categories} icon={iconHome} />
                        <Scene key="AddProduct" component={AddProduct} icon={iconCategories} />
                        <Scene key="News" component={News} icon={iconAddProduct} />
                        <Scene key="MorePage" component={MorePage} icon={iconHome} />
                    </Scene>


                </Scene>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ increment: increment, decrement: decrement }, dispatch)
}


const styles = StyleSheet.create({
    navBar: {
        borderBottomWidth: 0,
        borderBottomColor: '#fff',
        shadowOffset: { width: 0, height: 0, },
        shadowColor: '#fff',
        shadowOpacity: 0,
        elevation: 0,
    },
});

export default connect(mapStateToProps, matchDispatchToProps)(Counter);
