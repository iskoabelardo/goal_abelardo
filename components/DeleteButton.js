import { StyleSheet, Text, TouchableOpacity, View, Modal, Button } from 'react-native';
import { useState } from 'react';
//import DeleteIcon from '@mui/icons-material/Delete';

const DeleteButton = ({ onPress }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={style.deleteButton}>
        <Text style={style.deleteButtonText}> Remove </Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={style.modalContainer}>
          <View style={style.modalContent}>
            <Text style = {style.removeText}>Do you want to remove this item? </Text>
            <TouchableOpacity style={style.modalButton} onPress={() => setModalVisible(false)}>
              <Text> Cancel </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.modalButton} onPress={onPress}>
              <Text> Remove </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
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
