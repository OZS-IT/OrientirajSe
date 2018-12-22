// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */
//
import HomeScreen from './pages/HomeScreen.js';
import QRScanner from './pages/QRScanner.js';
import MapView from './pages/MapView.js';
import Course from './pages/Course.js';


import {createStackNavigator, createAppContainer} from 'react-navigation';

const AppNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    QR: {screen: QRScanner},
    Map: {screen: MapView},
    Course: {screen: Course},
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;

