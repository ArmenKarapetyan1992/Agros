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

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color : "red"
        }
    }
    renderIcon = name => (
        <Icon
            name={name}
            size={FontSize.iconsNormalFontSize}
            color={Colors.black}
        />
    )

    render() {
        console.log(this.props.count);
        return (
            <Router hideNavBar="true" navigationBarStyle={styles.navBar}>
                <Scene key="root">
                    <Scene key="FirstPage" component={FirstPage} hideNavBar="false" />
                    <Scene key="LogIn" component={LogIn} title="Back" />
                    <Scene key="Register" component={Register} title="Back" />
                    <Scene key="ForgetPassword" component={ForgetPassword} title="ForgetPassword" />
                    <Scene key="HomeMain"
                        tabs="true"
                        activeTintColor="#000"
                        hideNavBar="false" initial={true}
                        activeBackgroundColor={Colors.green}
                        navBarButtonColor={styles.titleStyles} >
                        <Scene key="Home" component={Home} icon={() => this.renderIcon('home')}
                        //  tabBarOnPress={()=> this.setState({})} 
                         />
                        <Scene key="Categories" component={Categories} icon={() => this.renderIcon('th')} />
                        <Scene key="Add" component={AddProduct} icon={() => this.renderIcon('plus-circle')} />
                        <Scene key="News" component={News} icon={() => this.renderIcon('globe')} />
                        <Scene key="More" component={MorePage} icon={() => this.renderIcon('ellipsis-h')} />
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
