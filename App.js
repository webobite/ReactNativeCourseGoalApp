import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoal, setCourseGoal] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoal(currentGoals => [...currentGoals, enteredGoal]);
  }

  return (
    <View style={styles.mainLayout}>
      <View style={styles.subLayout}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal} />
        <Button 
          title="ADD"
          onPress={addGoalHandler} />
      </View>
      <View>
        {courseGoal.map((goal) => <View key={goal} style={styles.listItem}><Text >{goal}</Text></View>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainLayout: {
    padding: 50
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    width: 200
  },
  subLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  listItem : { 
    borderColor : 'black',
    borderWidth : 1,
    padding : 10,
    backgroundColor: '#ccc',
    margin : 10,
    justifyContent: "flex-start"
  }
});
