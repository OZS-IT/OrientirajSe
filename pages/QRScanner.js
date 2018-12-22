import React from 'react';

import {
    StyleSheet,
    View,
    Alert,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import PropTypes from "prop-types";


export default class QRScanner extends React.Component {

    static navigationOptions = {
        header: null
    };

    static propTypes = {}

    componentDidMount(): void {
        this.timer = require('react-native-timer');
        this.timer.setInterval('qrReader', () => {
            this.scanner && this.scanner.reactivate()
        }, 2000)
    }

    componentWillUnmount(): void {
        this.timer.clearInterval('qrReader')
    }

    onSuccess = (scan) => {
        let text = scan && scan.data
        Alert.alert(
            'QR',
            `${text}`,
            [
                {
                    text: 'OK', onPress: () => {
                        return
                    }
                },
            ]
        )
    }

    render() {
        const {navigation} = this.props;

        return (
            <View style={{
                flex: 1,
                backgroundColor: '#000'
            }}>
                <QRCodeScanner
                    ref={(node) => {
                        this.scanner = node
                    }}
                    onRead={this.onSuccess.bind(this)}
                    fadeIn={true}
                    showMarker={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({});