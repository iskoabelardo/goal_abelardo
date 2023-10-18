import { StyleSheet, Text, TextInput, View, ScrollView, FlatList, Image, TouchableOpacity, Pressable, Modal} from 'react-native';
import { useState, useEffect, useRef } from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import UserIcon from './components/UserIcon';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    if (courseGoals.length > 5) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  }, [courseGoals]);

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
      <UserIcon/>
      <Text style={style.heaDing}>Life Plan Before I Die</Text>
      <Image source={require('./assets/mclovin.jpg')} style={style.iMage}/>
      <GoalInput onAddGoal={addGoalHandler}/>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={style.modalContainer}>
          <View style={style.modalContent}>
            <Text style = {style.removeText}>You have added 5 goals! </Text>
            <Pressable style={style.modalButton} onPress={() => setModalVisible(false)}>
              <Text> Exit </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.10)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
  },
  removeText: {
    padding: 10,
    marginBottom: 10,
  },
  modalButton: {
    padding: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#C0B2AD'
  }
});