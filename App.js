import { StatusBar } from 'expo-status-bar';
import React ,{ useState } from 'react';
import { StyleSheet, Text, View, Button,TextInput,ScrollView, FlatList,TouchableOpacity} from 'react-native';
import Header from './components/header';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'hello',key: '1'},
    {text: 'is a',key: '2'},
    {text: 'word',key: '3'},
  ]);
  const [name,setName]= useState('krish'); 
  const[age,setAge] = useState(' 30');
   

  const [person, setPerson] = useState ({ name :'karthick  ', age :   18});
  const clickhandler = () =>{
    setName('Radha krishna!!')
    setPerson({name:'cats  ', age:   14})
  }
  const[people,setPeople] = useState([
    {name: 'A', key:'1'},
    {name: 'B', key:'2'},
    {name: 'C', key:'3'},
    {name: 'D', key:'4'},
    {name: 'E', key:'5'},
    {name: 'F', key:'6'},
    {name: 'G', key:'7'},]
  
  );

  const pressHandler = (key) =>{
    console.log(key);
    setPeople((prevpeople) => {
      return prevpeople.filter(person => person.key != key);

    });
  

  }
  
  return ( 
   
    <View style={styles.container}>
     
      <Header />

      <View style={styles.content}>

        <View style={styles.list}>
          <FlatList
           
          data={todos}
          renderItem={({ item })=> (
            <Text>{item.text}</Text>

          )}

           
          
          />

        </View>

      
     </View>

      
      

    <FlatList
      numColumns={2}
      data={people}
      renderItem={ ( {item}) =>(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
          <Text style={styles.item}>{item.name}</Text>      
        </TouchableOpacity>
      )}
      /> 

     <ScrollView>
      { people.map((item) => {
        return(
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )
      })}
      </ScrollView>




      <Text>Enter name:</Text>

      <TextInput
      multiline
      keyboardType='Text'
      style={styles.input}
      placeholder='eg karthick'
      onChangeText={(val) => setName(val)}/>

      <Text>Enter age:</Text>    
      <TextInput 
      keyboardType='numeric'
      style={styles.input}
      placeholder='eg 10'
      onChangeText={(val) => setAge(val)}/>
      <Text>name: {name} ,age: {age}</Text>


      <Text>people calls me {name}</Text>
      <Text>his name is {person.name}and his age is{person.age}</Text>
      <View style={styles.ButtonContainer}>
        <Button title='update name' onPress={clickhandler}/>
      </View>


      <View style={styles.header}>
        <Text style={styles.boldText}> hello krish!! </Text>
    </View> */

      <View style={styles.body}>      
        <Text style={styles.boldText}>Radha krishna</Text>
        <Text>Radha krishna</Text>
    </View> 

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
  // header: {
  //   backgroundColor: '#ADD8E6',
  //   padding: 20,
  // },
  boldText:{
    fontWeight: 'bold',
  },
  body:{
    backgroundColor: 'green',
    padding: 20,
  },
  ButtonContainer: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    margin :12,
    width: 200,
  },
  item:{
    marginTop: 20,
    padding: 25,
    backgroundColor: 'pink',
    fontSize: 12,
    marginHorizontal: 10,
    marginTop: 20,
  },
  content: {
    padding: 40,
  },
  list:{
    backgroundColor:'blue',
    margin:20,
  },
  flexdirec:{
    flex: 1,
    flexDirection:'column',
    paddingTop: 40,
    backgroundColor: '#ddd',
  },
  
});
