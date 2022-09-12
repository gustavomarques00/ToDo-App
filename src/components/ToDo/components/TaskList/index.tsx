import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { ListDashes } from "phosphor-react-native";
import { Task } from "../Task";

export function TaskList() {
  return (
    <View style={styles.container}>
      <View style={styles.resume}>
        <View style={styles.createdBox}>
          <Text style={styles.createdName}>Criadas</Text>
          <Text style={styles.createdQuantity}>0</Text>
        </View>
        <View style={styles.createdBox}>
          <Text style={styles.createdName}>Concluídas</Text>
          <Text style={styles.createdQuantity}>2</Text>
        </View>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={["zsfdczsxc"]}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Task
            key={item}
            text={item}
            onRemove={() => console.log(item)}
          />
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyList}>
            <ListDashes size={80} color="#262626"/>
            <Text style={styles.titleEmpty}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.subtitleEmpty}>Crie tarefas e organize seus itens a fazer</Text>
          </View>
        )}
      />
    </View>
  );
}
