 import { useState } from "react";
import { StyleSheet,ScrollView, Text, View, Button, TextInput } from "react-native";

export default function Page() {
  const [goal,setGoal]=useState('');
  const[goalItems,setGoalItems] = useState([]);
  function goalInput(input){
    setGoal(input)
  }
  function goalSubmit(){
    setGoalItems((currentGoal) => [...currentGoal,goal]);
    setGoal('');
  }
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <View
        style={styles.input}>
        <TextInput 
        onChangeText={goalInput}
        defaultValue={goal}
        placeholder="Enter Your Goal"/>
        </View>
        <View
        style={styles.ibutton}>
        <Button
        onPress={goalSubmit}
        title="tap"/>
        </View>
      </View>
      <View style={styles.subtitle}>
        <View>
        <Text style={styles.subtitle}>Your Goals</Text>
        </View>
        <ScrollView
        style={styles.goal}>
          <View>
          {goalItems.map((goalItems,index) => (
          <Text
          style={styles.goaltext} key={index}>{goalItems}</Text>
          ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
  input:{
    borderWidth: 2,
    borderCurve: "circular",
    marginEnd: 8,
    flex: 2,
    paddingLeft: 4,
    borderColor: '#0044',
    borderRadius: 6
  },
  ibutton:{
    borderColor: '#0044',
    borderRadius: 6,
    borderWidth: 4,
  },
  menu: {
    flexDirection: "row",
    marginHorizontal: 36,
    marginTop: 20,
    marginBottom:5,
    justifyContent: "center",
    borderColor: "#0003",
    borderBottomWidth: 2,
    paddingBottom: 30
  },
  subtitle: {
    fontSize: 26,
    marginVertical: 5,
    fontWeight: "600",
    alignItems: "center",
    color: 'green'
  },
  goal: {
    width: '90%',
    height: '80%'
  },
  goaltext: {
    margin: 5,
    padding: 5,
    backgroundColor: "#0df2",
    fontSize: 16,
    borderCurve: "circular",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#0803'
  }
});
