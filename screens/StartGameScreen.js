import React from 'react'
import { StyleSheet, Text, View ,TextInput,Button } from 'react-native'

import Card from '../components/Card'
import Colors from '../constants/color'
import Input from '../components/Input'

export default function StartGameScreen() {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>The Game Screen!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input style={styles.input} blurOnSubmit={true} autoCapitalize='none' autoCorrect={false} keyboardType="number-pad" maxLength={2} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button color={Colors.accent} title="Reset" onPress={() => {}} /></View>
                    <View style={styles.button}><Button color={Colors.primary} title="Confirm" onPress={() => {}} /></View>
                </View>
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
    }
})
