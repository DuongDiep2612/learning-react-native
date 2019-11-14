/* eslint-disable prettier/prettier */
// /* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, TextInput, Keyboard } from 'react-native';
import {style} from '../styles.js';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputUser: '',
            inputPass: '',
        };
    }
    componentWillMount(){
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            this.setState(
                () => {
                    return {inputPass: 'keyboard did show'};
                }
            );
        });
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            this.setState(
                () => {
                    return {inputPass: 'keyboard did hide'};
                }
            );
        });
    }
    componentWillUnmount(){
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    render() {
        return (
            <View style={style.container} >
                <TextInput
                    style={style.textInput}
                    keyboardType="email-address"
                    placeholder="Enter your username"
                    placeholderTextColor="red"
                    // returnKeyType="google"
                    // onSubmitEditing={Keyboard.dismiss}
                    onChangeText={text => {
                        this.setState(() => {
                            return { inputUser: text };
                        });
                    }}
                />
                <TextInput
                    style={style.textInput}
                    keyboardType="default"
                    secureTextEntry={true}
                    placeholder="Enter your password"
                    placeholderTextColor="red"
                    // multiline={true}
                    //   editable={true}
                    autoFocus={true}
                    onChangeText={text => {
                        this.setState(() => {
                            return { inputPass: text };
                        });
                    }}
                />
                <Text>{this.state.inputPass}</Text>
            </View>
        );
    }
}
