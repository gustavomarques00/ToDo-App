import { View, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { PlusCircle } from "phosphor-react-native";
import { useState } from "react";

export function InputTask() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante existe",
        "Já existe um participante na lista com esse nome!"
      );
    }

    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
  }

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor='#6b6b6b'
        onChangeText={setParticipantName}
        value={participantName}
      />

      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <PlusCircle size={32} color='#fff' />
      </TouchableOpacity>
    </View>
  );
}
