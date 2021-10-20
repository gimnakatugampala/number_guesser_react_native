import React, { useEffect, useRef, useState } from 'react'
import { Button, StyleSheet, Text, View,Alert } from 'react-native'


import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'


const generateRandomBetween = (min,max,exclude) =>{
    min = Math.ceil(min)
    max = Math.floor(max)
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if(rndNum === exclude){
        return generateRandomBetween(min,max,exclude)
    }else{
        return rndNum
    }
    
}

export default function GameScreen({userChoice,onGameOver}) {

    const [currentGuess, setcurrentGuess] = useState(generateRandomBetween(1,100,userChoice))

    const nextGuessHanlder = direction =>{
        if((direction === 'lower' && currentGuess < userChoice) || (direction === 'greater' && currentGuess > userChoice)){
            Alert.alert('Don\'t lie!','You know that this is wrong...',[{text:'Sorry!',style:'cancel'}])
            return;
        }
        const [rounds, setrounds] = useState(0)
        const currentLow = useRef(1)
        const currentHigh =  useRef(100)


        useEffect(() => {

            if(currentGuess === userChoice){
                onGameOver(rounds)
            }
            
        },[currentGuess,userChoice,onGameOver])



      if(direction === 'lower'){
          currentHigh.current = currentGuess
      }else{
        currentLow.current = currentGuess
      }

     const nextNumber =  generateRandomBetween(currentLow.current,currentHigh.current,currentGuess)
     setcurrentGuess(nextNumber)
     setrounds(curRounds => curRounds + 1)
    }

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessHanlder.bind(this,'lower')} />
                <Button title="GREATER" onPress={nextGuessHanlder.bind(this,'greater')} />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        width:300,
        maxWidth:'80%'
    }
})
