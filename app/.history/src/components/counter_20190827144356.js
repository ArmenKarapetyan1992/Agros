import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { increment, decrement } from '../action/index';
import { Router, Scene } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FirstPage from '../screens/FirstPage'
import LogIn from '../screens/LogIn'
import Register from '../screens/Register';
import Home from "../screens/Home"
class Counter extends Component {
    render() {
        console.log(this.props.count);
        return (
            <Router hideNavBar="true" navigationBarStyle={styles.navBar}>
                <Scene key="root">
                    <Scene key="FirstPage" component={FirstPage}  hideNavBar="false"   />
                    <Scene key="LogIn" component={LogIn} title="Back" initial={true} />
                    <Scene key="Register" component={Register} title="Back"  />
                    <Scene key="Home" component={Home} title="Back"  />
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
