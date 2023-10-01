import { StyleSheet, Text, TextInput, View, ScrollView, FlatList, Image, TouchableOpacity, Pressable} from 'react-native';
import { useState, useRef } from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import DeleteButton from './components/DeleteButton';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    //setCourseGoals([...courseGoals, enteredGoalText]);
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, 
      {text: enteredGoalText, key: Math.random().toString()}]);
      };
  
  function deleteGoalHandler(goalKey) {
    setCourseGoals((currentCourseGoals) =>
        currentCourseGoals.filter((goal) => goal.key !== goalKey)
        );
      }    

  return (
    <View style={style.appContanier}>
      <Text style={style.heaDing}>Life Plan Before I Die</Text>
      <Image source={require('./assets/mclovin.jpg')} style={style.iMage}/>
      <GoalInput onAddGoal={addGoalHandler}/>

      <View style={style.goalListContainer}>
        <Text style={style.goalHeading}>List of Goals</Text>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return(
            <GoalItem text={itemData.item.text}
            onDelete={() => deleteGoalHandler(itemData.item.key)}/>
          );
        }} 
          />  
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  appContanier: {
    flex: 1,
    padding: 50,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#e8e8f9'
  },
  heaDing: {
    textAlign: 'center',
    fontSize: 26,
    paddingBottom: 30
  },
  goalContainer: {
    flex: 1
  },
  goalHeading: {
    fontSize: 20,
    marginTop: 5,
    textAlign: 'center',
    paddingBottom: 10
  },
  goalListContainer: {
    flex: 1,
    height: 50
  },
  iMage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    alignSelf: 'center',
    paddingBottom: 50
  }
});