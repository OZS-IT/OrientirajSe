import React from 'react';
import {StyleSheet, View, Dimensions, Text} from "react-native";

import MapView, { Polyline, PROVIDER_GOOGLE } from 'react-native-maps';



export default class MyMapView extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>Test</Text>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                    <Polyline
                        coordinates={[
                            {latitude: 37.8025259, longitude: -122.4351431},
                            {latitude: 37.7896386, longitude: -122.421646},
                            {latitude: 37.7665248, longitude: -122.4161628},
                            {latitude: 37.7734153, longitude: -122.4577787},
                            {latitude: 37.7948605, longitude: -122.4596065},
                            {latitude: 37.8025259, longitude: -122.4351431}
                        ]}
                        strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                        strokeColors={[
                            '#7F0000',
                            '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                            '#B24112',
                            '#E5845C',
                            '#238C23',
                            '#7F0000'
                        ]}
                        strokeWidth={6}
                    />
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});