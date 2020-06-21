import React, { Component } from 'react'
import {View, Text} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import { TextInput } from 'react-native';
import { styles } from "../constants/styles";

const listWidth = 1250;

export const prices = {
    11: { color: 470, cink: 380},
    1: { color: 380, cink: 300},
    2: { color: 310, cink: 240},
    3: { color: 230, cink: 175},
    4: { color: 210, cink: 165},
    5: { color: 185, cink: 155},
    6: { color: 175, cink: 145},
    7: { color: 165, cink: 135},
    8: { color: 155, cink: 125},
    9: { color: 140, cink: 120},
    10: { color: 95, cink: 80}
}

class Calculator extends Component {
    state = {
        width: '',
        piecesPerSheet: 0,
        length: '',
        roundedLength: 0,
        priceCink: 0,
        priceColor: 0
    };

    onChangeWidth(value) {
        const { roundedLength } = this.state;
        const res = (value > 830) ? 11 : parseInt(listWidth / value);
        const priceColor = (res && roundedLength) ? prices[res].color * roundedLength : 0;
        const priceCink = (res && roundedLength) ? prices[res].cink * roundedLength : 0;
        this.setState({
            width: value,
            piecesPerSheet: res,
            priceColor: priceColor,
            priceCink: priceCink
        })
    }

    onChangeLength(value) {
        const { piecesPerSheet } = this.state;
        const res = value ? Math.round(value / 1000) : 0;
        const priceColor = (res && piecesPerSheet) ? prices[piecesPerSheet].color * res : 0;
        const priceCink = (res && piecesPerSheet) ? prices[piecesPerSheet].cink * res : 0;
        this.setState({
            length: value,
            roundedLength: res,
            priceColor: priceColor,
            priceCink: priceCink
        })
    }

    render() {
        const { width, length, priceCink, priceColor } = this.state;

        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.getStartedContainer}>
                        <Text style={styles.getStartedText}>Введите общую ширину детали (мм):</Text>
                        <TextInput
                            style={{ height: 30, width: 100, marginTop: 20, marginBottom: 20, textAlign: 'center', borderColor: 'gray', borderWidth: 1 }}
                            onChangeText={text => this.onChangeWidth(text)}
                            value={width.toString()}
                        />
                        <Text style={styles.getStartedText}>Введите длину детали (мм):</Text>
                        <TextInput
                            style={{ height: 30, width: 100, marginTop: 20, marginBottom: 20, textAlign: 'center', borderColor: 'gray', borderWidth: 1 }}
                            onChangeText={text => this.onChangeLength(text)}
                            value={length.toString()}
                        />
                    </View>

                    <View style={styles.helpContainer}>
                        <Text style={styles.getStartedText}>Стоимость окрашенной детали:</Text>
                        <Text style={styles.getStartedText}>{priceColor}</Text>
                        <Text style={styles.getStartedText}>Стоимость оцинкованной детали:</Text>
                        <Text style={styles.getStartedText}>{priceCink}</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default Calculator
