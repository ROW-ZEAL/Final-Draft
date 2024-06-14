import { StyleSheet, View, Text } from "react-native";
import styled from "styled-components";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  labelText: {
    marginBottom: 5,
    marginLeft: 10,
    fontSize: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 15,
    fontSize: 15,
  },
  inputWithLabel: {
    marginBottom: 10,
    marginTop: 5,
  },
});

const toastConfig = {
  warning: ({ text1, props }) => (
    <View
      style={{
        height: 30,
        width: "100%",
        backgroundColor: "orange",
        padding: 4,
      }}
    >
      <Text>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  ),
  done: ({ text1, props }) => (
    <View
      style={{
        height: 30,
        width: "100%",
        backgroundColor: "#1affc6",
        padding: 4,
      }}
    >
      <Text>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  ),
};

export { styles, toastConfig };

const StatusBarHeight = Constants.statusBarHeight;
export const Colors = {
  primary: "#ffffff", // white
  secondary: "#f8f8f8", // light grey
  tertiary: "#e0e0e0", // grey
  darkLight: "#a9a9a9", // dark grey
  brand: "#6200ee", // purple
  green: "#4caf50", // green
  red: "#f44336", // red
};

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 10}px;
  background-color: ${primary};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const PageLogo = styled.Image`
  width: 200px;
  height: 100px;
`;

export const DashboardContainer = styled(InnerContainer)`
  padding: 25px;
  padding-top: 10px;
  justify-content: center;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${secondary};
  margin-bottom: 10px;
  margin-top: 10px;
  align-self: center; /* Centering the Avatar */
`;

export const DashboardImage = styled.Image`
  height: 50%;
  min-width: 100%;
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 10px;

  ${(props) =>
    props.welcome &&
    `
  font-size:35px;
  `}
`;

export const PageTitle2 = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 5px;
  margin-top: -30px; /* Adjust this value to move the title up or down */

  ${(props) =>
    props.welcome &&
    `
    font-size: 30px;
  `}
`;

export const SubTitle = styled.Text`
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  color: ${tertiary};
  color: #000000; /* Dark black color */

  ${(props) =>
    props.welcome &&
    `
  margin-bottom :5px;
  font-weight:normal;
  `}
`;

export const StyledFormArea = styled.View`
  width: 90%;
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
  font-size: 13px;
  text-align: center;
  color: ${tertiary};
  color: #000000; /* Dark black color */
  margin-left: -190px;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.View`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${brand};
  justify-content: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;
  align-items: center;
  ${(props) =>
    props.google == true &&
    `
  background-color:${green};
  flex-direction:row;
  justify-content:center;
  align-items: center;
  `}
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;
  ${(props) =>
    props.google == true &&
    `
  padding:5px;
  `}
`;

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${darkLight};
  margin-vertical: 10px;
`;

export const ExtraText = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${tertiary};
  color: #000000;
  font-size: 15px;
`;

export const ExtraView = styled.View`
  justify-content: center;
  flec-direction: row;
  align-items: center;
  padding: 10px;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const TextLinkContent = styled.Text`
  color: ${brand};
  color: #000000;
  font-size: 15px;
  font-weight: bold;
`;
