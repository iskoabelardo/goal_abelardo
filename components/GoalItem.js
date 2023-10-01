import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import DeleteButton from './DeleteButton';

function GoalItem(props) {
    return(
        <View style={style.goalItems}>
            <Text style={style.goalText} > {props.text} </Text>
            <DeleteButton onPress={props.onDelete}/>
        </View>
    );
}

export default GoalItem;

const style = StyleSheet.create({
    goalItems: {
        marginTop: 5,
        padding: 5,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#484aaa',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      goalText: {
        fontSize: 18,
        padding: 5,
        textAlign: 'center'
      }
})
