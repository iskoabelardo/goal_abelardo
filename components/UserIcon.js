import { StyleSheet, Text, TextInput, View, ScrollView, FlatList, Image, TouchableOpacity, Pressable, Modal} from 'react-native';
import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HideSourceSharpIcon from '@mui/icons-material/HideSourceSharp';
import { UserCircleIcon, ArrowLeftIcon } from 'react-native-heroicons/outline'



const UserIcon = () => {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal style= {style.modalView}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={style.modalContainer}>
          <View style={style.modalContent}>
            <Pressable style={style.modalButton} onPress={() => setModalVisible(false)}>
                <ArrowLeftIcon size="20" color="black"/>
            </Pressable>
            <Text style = {style.userText}> Baby what's your name? I am Angelo</Text>
          </View>
        </View>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}>
        <UserCircleIcon />
      </Pressable>
    </View>
  );
};

export default UserIcon;

const style = StyleSheet.create({
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    //justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
  },
  userText: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#C0B2AD',
    borderRadius: 10,
  },
  modalButton: {
    padding: 10,
    //marginBottom: 10,
    justifyContent: 'flex-start',
  }
})