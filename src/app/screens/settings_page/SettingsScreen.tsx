import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  Text,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import ProfileSection from "./section/ProfileSection";
import CityTemp from "../../../features/settings/components/CityTemp";

export const SettingsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ProfileSection
        image="https://lh3.googleusercontent.com/a/ACg8ocKsdU4O2pjzqAc1T32ZYA0evdG9Khg4A7f8LOCvMSe92l8NxqY=s288-c-no"
        name="Nikola Rankovic"
        error={null}
        loading={false}
        onNotificationPress={() => setModalVisible(true)}
      />
      <CityTemp
        image="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
        city="New York"
        condition="fine"
        temp={23}
        error="dasds"
        loading={false}
      />
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Notifications</Text>
                <Text>This is a dialog modal</Text>
                <Button title="Close" onPress={() => setModalVisible(false)} />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)", // Poluprovidna pozadina
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default SettingsScreen;
