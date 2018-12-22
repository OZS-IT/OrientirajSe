import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import React from "react";





export default class HomeScreen extends React.Component {
    navigateToQR = () => {
        this.props.navigation.navigate('QR')
    }

    navigateToMap = () => {
        this.props.navigation.navigate('Map')
    }

    navigateToCourse = () => {
        this.props.navigation.navigate('Course')
    }

    render() {
        return (
            <View
                style={styles.container}
            >
                <TouchableOpacity
                    onPress={this.navigateToMap}
                >
                    <Text style={styles.welcome}>Maps</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.navigateToCourse}
                >
                    <Text style={styles.welcome}>Location test</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.navigateToQR}
                >
                    <Text style={styles.welcome}>QR Test</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#0f0'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});