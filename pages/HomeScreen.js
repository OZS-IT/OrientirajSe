import {StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, Button, Platform} from "react-native";
import React from "react";


let isIPhoneX = function () {
    // iPhone X & iPhone XS, iPhone XR & iPhone XS Max
    let X_WIDTH = [375, 414];
    let X_HEIGHT = [812, 896];

    let D_HEIGHT = Dimensions.get('window').height
    let D_WIDTH = Dimensions.get('window').width
    if (Platform.OS !== 'ios') return false;
    for (let i = 0; i < X_WIDTH.length; i++) {
        if (D_HEIGHT === X_HEIGHT[i] && D_WIDTH === X_WIDTH[i]
            || D_HEIGHT === X_WIDTH[i] && D_WIDTH === X_HEIGHT[i]) return true;
    }
    return false;
}



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
        let mapImage = require('../assets/map.png')
        let screenWidth = Dimensions.get('window').width
        return (
            <View
                style={styles.container}
            >
                <Text
                    style={{
                        fontSize: 30,
                        margin: 20,
                    }}
                >
                    Poišči Proge
                </Text>
                <TouchableOpacity
                    onPress={this.navigateToMap}
                >
                    <Image
                        source={mapImage}
                        resizeMode={'cover'}
                        style={{
                            width: screenWidth,
                            height: 200,
                        }}
                    />
                </TouchableOpacity>

                {/*<TouchableOpacity*/}
                    {/*onPress={this.navigateToCourse}*/}
                {/*>*/}
                    {/*<Text style={styles.welcome}>Location test</Text>*/}
                {/*</TouchableOpacity>*/}

                <View
                    style={{
                        paddingHorizontal: Platform.OS === 'ios' ? 0 : 24,
                        paddingVertical: 8,
                        position: 'absolute',
                        bottom: isIPhoneX() ? 20 + 34 : 20,
                        width: screenWidth,
                        // backgroundColor: Platform.OS === 'ios' ? '#fff' : 'transparent'
                    }}
                >
                    <Button
                        onPress={this.navigateToQR}
                        title="Začni Tek"
                        color="#4A90E2"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#F5FCFF',
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