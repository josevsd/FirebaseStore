import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { collection, getDocs, doc, getDoc, deleteDoc } from "firebase/firestore";
import  {db} from "./config/index";

export default function App() {
  
  async function dadosGeral(){
    const querySnapshot = await getDocs(collection(db, "Usuario"));
    querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    });
  }

  async function dadosUnicos(){
    const docRef = doc(db, "Usuario", "Felipe");
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else{
      console.log("No such document!");
    }
  }
  
  async function deletarDados(){
    await deleteDoc(doc(db, "Usuario", "Felipe"))
  }

  return (
    <View style={styles.container}>
      <Text>dados Geral</Text>
      <Button onPress={dadosGeral}></Button>
      <Text>dados Unico</Text>
      <Button onPress={dadosUnicos}></Button>
      <Text>Deletar dados</Text>
      <Button onPress={deletarDados}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
