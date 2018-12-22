import React from 'react';
import {StyleSheet, View, Dimensions, Text, Linking, Platform} from "react-native";

import MapView, {Polyline, Marker} from 'react-native-maps';
import _ from 'lodash'


export default class MyMapView extends React.Component {

    courses = [
        {
            id: '1',
            name: 'Proga 1',
            coordinates: {
                latitude: 46.11,
                longitude: 14.6,
            }
        },
        {
            id: '2',
            name: 'Proga 2',
            coordinates: {
                latitude: 46.31,
                longitude: 14,
            }
        },
        {
            id: '3',
            name: 'Proga 3',
            coordinates: {
                latitude: 46.17,
                longitude: 14.1,
            }
        },
    ]

    selectCourse = (e) => {
        const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
        const latLng = `${e.nativeEvent.coordinate.latitude},${e.nativeEvent.coordinate.longitude}`;
        const label = e.nativeEvent.id;
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`
        });
        Linking.openURL(url)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Test</Text>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: 45.5,
                        longitude: 15,
                        latitudeDelta: 1,
                        longitudeDelta: 4,
                    }}
                    maximumZ={10}
                >

                    {
                        _.map(this.courses, (course) => {
                            if (!course) return null
                            return <Marker
                                key={'course' + course.id}
                                coordinate={course.coordinates}
                                pinColor={'green'}
                                onPress={this.selectCourse}
                                identifier={course.name}
                            />
                        })
                    }

                    {/*<Polyline*/}
                    {/*coordinates={[*/}
                    {/*{latitude: 37.8025259, longitude: -122.4351431},*/}
                    {/*{latitude: 37.7896386, longitude: -122.421646},*/}
                    {/*{latitude: 37.7665248, longitude: -122.4161628},*/}
                    {/*{latitude: 37.7734153, longitude: -122.4577787},*/}
                    {/*{latitude: 37.7948605, longitude: -122.4596065},*/}
                    {/*{latitude: 37.8025259, longitude: -122.4351431}*/}
                    {/*]}*/}
                    {/*strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider*/}
                    {/*strokeColors={[*/}
                    {/*'#7F0000',*/}
                    {/*'#00000000', // no color, creates a "long" gradient between the previous and next coordinate*/}
                    {/*'#B24112',*/}
                    {/*'#E5845C',*/}
                    {/*'#238C23',*/}
                    {/*'#7F0000'*/}
                    {/*]}*/}
                    {/*strokeWidth={6}*/}
                    {/*/>*/}
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