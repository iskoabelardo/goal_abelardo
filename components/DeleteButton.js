import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const DeleteButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style.deleteButton}>
      <Text style={style.deleteButtonText}> Remove </Text>
    </TouchableOpacity>
  );
};

export default DeleteButton;

const style = StyleSheet.create({
  deleteButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
    margin: 5,
    justifyContent: 'flex-end'
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  }
});
