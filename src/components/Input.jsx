import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  onChangeText, // <-- Add onChangeText prop
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <View style={{ marginBottom: 7 }}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: isFocused ? "purple" : "black",
            borderWidth: isFocused ? 1 : 0.5,
          },
        ]}
      >
        <Icon
          name={iconName}
          style={{ fontSize: 22, color: "purple", marginRight: 10 }}
        />
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          onChangeText={onChangeText} // <-- Pass onChangeText to TextInput
          style={{ color: "darkblue", flex: 1 }}
          {...props}
        />
      </View>

      {isError ? (
        <Text style={{ color: "red", fontSize: 12, marginTop: 5 }}>{error}</Text>
      ) : null}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: "grey",
  },
  inputContainer: {
    height: 55,   
    marginBottom:7,
    backgroundColor: "#F2F3FD",
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 0.5,
    alignItems: "center",
  },
});
