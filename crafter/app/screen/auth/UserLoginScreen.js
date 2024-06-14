import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Image, // Import Image component
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles, toastConfig } from "../../../style";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";

const UserLoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clearTextInput = () => {
    setEmail("");
    setPassword("");
  };

  const handleFormSubmit = () => {
    if (email && password) {
      console.log("Login Success");
      const formData = { email, password };
      console.log(formData);
      clearTextInput();
      Toast.show({
        type: "done",
        position: "top",
        topOffset: 0,
        text1: "Login Success",
      });
      navigation.navigate("UserPanelTab");
    } else {
      console.log("All fields are Required");
      Toast.show({
        type: "warning",
        position: "top",
        topOffset: 0,
        text1: "All fields are Required",
      });
    }
  };

  return (
    <SafeAreaView>
      <Toast config={toastConfig} />
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{ marginHorizontal: 30 }}>
          <View style={{ alignSelf: "center", marginBottom: 10 }}>
            <Image
              source={require("../../../assets/img/1.jpg")} // Replace path_to_your_image with the actual path to your image file
              style={{ width: 150, height: 150 }} // Adjust width, height, and tint color as needed
            />
          </View>
          <View style={[styles.inputWithLabel, { marginBottom: 10 }]}>
            <Text style={styles.labelText}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Write Your Email"
              onPress={console.log(email)}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputWithLabel}>
            <Text style={styles.labelText}>Password</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Write Your Password"
              onPress={console.log(password)}
              secureTextEntry={true}
            />
          </View>
          <View style={{ width: 200, alignSelf: "center", margin: 20 }}>
            <Button title="Login" onPress={handleFormSubmit} color="purple" />
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate("SendPasswordResetEmail");
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Forgot Password?</Text>
              </TouchableWithoutFeedback>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate("Registration");
                }}
              >
                <Text style={{ fontWeight: "bold" }}>
                  New User? Registration
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserLoginScreen;
