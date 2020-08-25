import React from 'react';
import HorseLane from './HorseLane';
import {StyleSheet, View, Dimensions, Text} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import {horseContext} from '../horseContext';

const numOfHorses = 2;
export default class Race extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            horses: new Array(numOfHorses + 1).fill(0),
            interval: null,
            winner: -1,
        };
    }

    getPosition = (horseId) =>{
        return this.state.horses[horseId];
    }

    render() {
        return (
        <horseContext.Provider value={{getPosition: this.getPosition}}>
            <View style={styles.container}>
                <Text style={styles.title}>Mobile Horse Race</Text>
                <TouchableHighlight onPress={this.onStart} style={styles.btn}>
                    <Text style={styles.btnText}>Start</Text>
                </TouchableHighlight>
                <View style={styles.race}>
                    <HorseLane getPosition={this.getPosition} horseId="1"/>
                    <HorseLane getPosition={this.getPosition} horseId="2"/>
                    
                </View>
            </View>
            
        </horseContext.Provider>);
    } 

    onStart = () => {
        interval = setInterval(()=>{
            const horses = [];
            let foundStop = false;
            let winner = 0;
            for(let i = 1; i<= numOfHorses; i++ ){
                const newPos = this.state.horses[i] + Math.floor(Math.random() * 11);  
                if(newPos >= this.state.screenWidth) {
                    foundStop = true;
                    winner = i;
                    break;
                }
                horses[i] = newPos;
            }

            if(foundStop){
                clearInterval(this.state.interval);
                this.setState({stopRace: true, winner});
            }
            this.setState({horses});
        }, 70);
        this.setState({interval, stopRace: false});  
    }

    componentWillUnmount(){
        clearInterval(this.state.interval);
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop:50,
        marginTop: 80,
        flex:1,
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    race:{
        borderWidth:1,
        borderColor: 'blue',
        height:Dimensions.get('window').height-50, 
        width:Dimensions.get('window').width-8,
        margin:5,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    btn: {
        width:Dimensions.get("window").width / 2 ,
        height:70,
        backgroundColor:'green',
        borderWidth:1,
        borderColor: '#33B283',
        justifyContent: 'center', 
        alignItems: 'center', 
        
    },
    title: {
        fontSize: 30,
        
    },
    btnText: {
        fontSize: 30,
    }
});