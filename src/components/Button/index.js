/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Alert, Button } from 'react-native';

export default class ButtonComponent extends Component {
    render() {
        return (
            <View>
                <Button
                    title="Button"
                    onPress={() => Alert.alert('Button Pressed')}
                />
            </View>
        );
    }
}
