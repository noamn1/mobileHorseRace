
import React from 'react';
import {View} from 'react-native';
import Horse from './Horse';
import {StyleSheet, Dimensions} from 'react-native';

export default class HorseLane extends React.Component {

    render() {
        return(
        <View style={styles.horseLane}>
            <Horse getPosition={this.props.getPosition} horseId={this.props.horseId}></Horse>
        </View>);
    }
}

const styles = StyleSheet.create({
    horseLane: {
        height: Dimensions.get('window').height-30,
        borderColor: 'black',
        borderWidth: 1,
        width: 70
    }
});