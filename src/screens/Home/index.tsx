import { View, Text } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { ToDo } from "../../components/ToDo";

export function Home(){
  return(
    <View style={styles.container}>
      <Header />
      <ToDo />
    </View>
  )
}