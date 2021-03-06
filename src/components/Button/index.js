/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Alert, Button } from 'react-native';

export default class ButtonComponent extends Component {
    render() {
        return (
            <View>
                <Button
                    title="Clickme"
                    onPress={() => Alert.alert('Button Pressed')}
                />
                <Button
                    title="Clickme2"
                    onPress={() => Alert.alert('Button 2 Pressed')}
                />
                <Button
                    title="Clickme3"
                    onPress={() => Alert.alert('Button 3 Pressed')}
                />
                <Button
                    title="Clickme4"
                    onPress={() => Alert.alert('Button 4 Pressed')}
                />
                <Button
                    title="Clickme5"
                    onPress={() => Alert.alert('Button 5 Pressed')}
                />
            </View>
        );
    }
}
