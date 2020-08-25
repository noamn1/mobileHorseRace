
import React from 'react';
import {View} from 'react-native';
import {StyleSheet, Text} from 'react-native';
import {horseContext} from '../horseContext';


export default class Horse extends React.Component {
    
    componentDidUpdate(){}

    render (){
        return (
            <horseContext.Consumer>
            {
                    () => { 
                       return (                           
                       <View style={[styles.horse, {top:this.props.getPosition(this.props.horseId)}]}>
                           <Text>{this.props.horseId}</Text>
                       </View>)
                        }
            }
            </horseContext.Consumer>
            )
    }
}

const styles = StyleSheet.create({
    horse: {
        width: 50,
        height: 50,
        backgroundColor: 'yellow',
        position: 'absolute',
        top:0,
        left:0
        
    }
});