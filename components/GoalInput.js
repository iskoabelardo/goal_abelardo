import { Button, TextInput, View, StyleSheet, Pressable} from 'react-native';
import { useState, useRef} from 'react';

function GoalInput(props) {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const clear = useRef(null);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
      props.onAddGoal(enteredGoalText);
      setEnteredGoalText('');
      clear.current.clear();
    };

    return(
      <View style={style.inputContainer}>
        <TextInput placeholder='Enter your goal: ' ref={clear} style = {style.textInput} onChangeText={goalInputHandler}/>
        <Pressable>
          <Button title='Add Goal' onPress={addGoalHandler}/>
        </Pressable>
      </View>
    );
}

export default GoalInput;

const style = StyleSheet.create({
  
  inputContainer: {
    //flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    paddingBottom: 25,
    borderColor: '#484aaa',
    paddingTop: 25
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    marginRight: 10,
    padding: 10,
    width: "100%"
  },
  pressBtn:{
    margin: 1,
    padding: 5
  },
  pressText: {
    fontSize: 12
  }
})

