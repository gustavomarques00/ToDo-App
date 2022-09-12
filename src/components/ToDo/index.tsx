import { View} from "react-native";
import { styles } from "./styles";
import { InputTask } from "./components/InputTask";
import { TaskList } from "./components/TaskList";
 
export function ToDo(){
  return(
    <View style={styles.container}>
      <InputTask />
      <TaskList />
    </View>
  )
}