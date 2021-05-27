import React, {useState,useEffect} from 'react';


import axios from 'axios';
import DatePicker from 'react-native-datepicker';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-paper';
// import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

const CreateExercise = () => {
  const [inputVal, setInputVal] = useState();
  const [duration, setDuration] = useState(0);
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('09-10-2020');
  // const addNote = () => {
    
  //     console.log({inputVal , description, duration,date} );

    
  // };


// async function componentDidMount () {
//     await axios.get('http://192.168.42.175:5000/users/')
//       .then(response => {
//         if (response.data.length > 0) {
//           setInputVal({
//             users: response.data.map(user => user.inputVal),
//             inputVal: response.data[0].inputVal
//           })
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       })

//   };
  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await axios.get('http://192.168.42.175:5000/users/')
  //     .then(response => {
     
  //         setInputVal({
  //           users: response.data.map(user => user.username),
  //           username: response.data[0].username
  //         })
     
  //     })
      
  //     return request;
  //   }
  //   fetchData();
  // }, []);

  const onSubmit= () =>  {
    


    const exercise = {
      username:inputVal,
      duration:parseInt(duration),
      description:description,
      date:date

      

    }

      console.log(exercise);

      axios.post('https://exercise-server-backend.herokuapp.com/exercises/add',exercise)   
            .then(response =>{
              console.log(response.data);
            })
            .catch(error => {
              console.log(error.response.data);
            });

         

  };
  

  return (
    <View style={styles.center}>
      <View  >
      <Text>Username</Text>
      <TextInput
          style={styles.input}
          onChangeText={userInput => setInputVal(userInput)}
          value={inputVal}></TextInput>
      </View>
      <View>
      <Text>Description</Text>
        <TextInput
          style={styles.input}
          onChangeText={userInput => setDescription(userInput)}
          value={description}></TextInput>
      </View>
      <View>
        <Text>Duration (in minutes)</Text>
        <TextInput
          style={styles.input}
          onChangeText={userInput => setDuration(userInput)}
          value={duration}></TextInput>
      </View>
      <Text>Date</Text>
      <View style={styles.Button}>
      
      <DatePicker
      
          date={date} 
          onDateChange={(date) => {setDate(date);
          }}
        />
        </View>
      <TouchableOpacity onPress={onSubmit} style={styles.Button}>
        <Text>Create Exercise log</Text>        
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 10,
    borderColor: 'black',
    borderWidth: 2,
  },
  center:{
    marginLeft:20,
    marginRight:20

  },
  Button:{
    alignItems:'center'

  }
  
});

export default CreateExercise;
