/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {Login} from './src/components';
import {ButtonComponent} from './src/components';

console.disableYellowBox = true;
// console.ignoredYellowBox = ['Warning: Failed'];

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showImage: true};
    // this.link = {uri: this.props.linkImage};
    setInterval(() => {
      this.setState({showImage: !this.state.showImage});
    }, 500);
  }

  render() {
    // let pic = this.state.showImage ? this.link : '';
    let pic = this.state.showImage ? this.props.linkImage : '';
    return (
      <View style={{alignItems: 'center'}}>
        <Image source={pic} style={{height: 110, width: 190}} />
        {/* <Text>{pic}</Text> */}
      </View>
    );
  }
}

export default class TheFirstProject extends Component {
  render() {
    return (
      <View style={[style.container]}>
        {/* <Blink
          linkImage={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
          }}
        />
        <Blink
          linkImage={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
          }}
        />
        <Blink linkImage="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" /> */}

        {/* new design view */}
        {/* <View style={style.topObject}>
          <View style={style.topObjectOne}>
            <View />
          </View>
          <View style={style.topObjectTwo} />
        </View>
        <View style={style.bottomObject} /> */}

        {/* new view */}
        <ButtonComponent />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    // alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
  },
  topObject: {
    flexDirection: 'row',
    flex: 6,
    // backgroundColor: 'red',
  },
  topObjectOne: {
    flex: 2,
    backgroundColor: 'blue',
    borderWidth: 2,
    borderColor: 'black',
  },
  topObjectTwo: {
    flex: 5,
    backgroundColor: 'red',
    borderWidth: 2,
    borderColor: 'black',
  },
  bottomObject: {
    flex: 3,
    backgroundColor: 'green',
  },
});
