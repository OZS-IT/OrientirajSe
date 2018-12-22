import React from 'react';
import {StyleSheet, View, Text, Alert} from "react-native";


import {PermissionsAndroid} from 'react-native';
import Permissions from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';


let requestLocationPermission = async () => {
    // todo only for android version > 23
    try {
        let granted = await Permissions.request('location', {type: 'always'})
        // const granted = await PermissionsAndroid.request(
        //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        //     {
        //         'title': 'Cool Photo App Camera Permission',
        //         'message': 'Cool Photo App needs access to your camera ' +
        //             'so you can take awesome pictures.'
        //     }
        // )
        console.log('location', granted)
    } catch (err) {
        console.warn(err)
    }

    // for ios
    // geolocation.requestAuthorization();

    // all
    // geolocation.getCurrentPosition(geo_success, [geo_error], [geo_options]);
    // geolocation.watchPosition(success, [error], [options]);
    // geolocation.clearWatch(watchID);
    // geolocation.stopObserving();

    startTracking()
}

let startTracking = () => {
    let hasLocationPermission
    if (true || hasLocationPermission) {
        Geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                Alert.alert(
                    'Lokacija',
                    `${position.coords.longitude} ${position.coords.latitude}`,
                    [
                        {
                            text: 'OK', onPress: () => {
                                return
                            }
                        },
                    ]
                )
            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000}
        );
    }
}


export default class Course extends React.Component {
    componentDidMount(): void {
        requestLocationPermission()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Test</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({});