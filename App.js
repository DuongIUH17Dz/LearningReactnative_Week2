import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const randomDiceRoll = () => Math.floor(Math.random() * 6) + 1;

export default function App() {
  const [diceRoll, setDiceRoll] = useState(1);

  const rollDice = () => {
    setDiceRoll(randomDiceRoll());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dice Roll: {diceRoll}</Text>
      <Button title="Roll Dice" onPress={rollDice} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

