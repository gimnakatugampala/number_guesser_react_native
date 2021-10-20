import React, { useState } from 'react'
import { StyleSheet, Text, View ,TextInput,Button,TouchableWithoutFeedback,Keyboard,Alert} from 'react-native'

import Card from '../components/Card'
import Colors from '../constants/color'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'

export default function StartGameScreen() {

    const [enteredValue, setenteredValue] = useState('')
    const [confirmed, setconfirmed] = useState(false)
    const [selectedNumber, setselectedNumber] = useState()

    const numberInputHandler = inputText => {
        setenteredValue(inputText)
    }

    const resetInputhandler = () =>{
        setenteredValue('')
        setconfirmed(false)

    }

    const confirmInputHandler = () =>{

        const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid number!','Number has to be a number between 1 and 99',[{text:'Okay',style:'destructive',onPress:resetInputhandler}])
            return;
        }
        setconfirmed(true)
        setenteredValue('')
        setselectedNumber(parseInt(enteredValue))

        Keyboard.dismiss()

    }

    let confirmedOutput;

    if(confirmed){
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text>You Selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="START BUTTON" />
            </Card>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
        <View style={styles.screen}>
            <Text style={styles.title}>The Game Screen!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input style={styles.input} blurOnSubmit={true} autoCapitalize='none' autoCorrect={false} keyboardType="number-pad" maxLength={2} onChangeText={numberInputHandler} value={enteredValue} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button color={Colors.accent} title="Reset" onPress={resetInputhandler} /></View>
                    <View style={styles.button}><Button color={Colors.primary} title="Confirm" onPress={confirmInputHandler} /></View>
                </View>
                {confirmedOutput}
            </Card>
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    title:{
        fontSize:20,
        marginVertical:10,
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
    },
    button:{
        width:100
    },
    input:{
        width:50,
        textAlign:'center'
    },
    summaryContainer:{
        marginTop:20,
        alignItems:'center'
    }
})
