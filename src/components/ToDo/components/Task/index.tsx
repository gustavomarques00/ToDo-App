import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Trash } from "phosphor-react-native";
import Checkbox from 'expo-checkbox';
import { styles } from "./styles";

type Props = {
  text: string;
  onRemove: () => void;
};

export function Task({ text, onRemove }: Props) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.container}>
      <Checkbox
        disabled={false}
        color="#4EA8DE"
        style={styles.checkbox}
        value={toggleCheckBox}
        onValueChange={(newValue) => setToggleCheckBox(newValue)}
      />
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Trash size={32} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
