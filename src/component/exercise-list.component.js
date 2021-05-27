import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet,TouchableOpacity,ScrollView,SafeAreaView,Button} from 'react-native';
import axios from 'axios';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';

const ExerciseList = () => {
  const [state, setstate] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('https://exercise-server-backend.herokuapp.com/exercises/');
      if (request.data !== []) {
        setstate(
          ...state,
          request.data.map(item => {
            return [item.username, item.description, item.duration, item.date];
          }),
        );
      }

      return request;
    }
    fetchData();
  }, []);

  // const deletecell=()=>{useEffect(() => {
  //   async function deleteExercise(id) {
  //     const deletew = await axios.delete('http://192.168.42.175:5000/exercises/'+id)
  //       .then(response =>  console.log(response.data));

  //       setState({
  //         exercises:state.exercises.filter(el => el._id !== id)
  //         })
    

  //     return deletew;
  //       }
  //   deleteExercise();
  // }, []);}

  // const deleteExercise = (id) =>{
  //   axios.delete('http://192.168.42.175:5000/exercises/'+id)
  //     .then(response => { console.log(response.data)});

  //  setState({
  //     exercises:state.exercises.filter(el => el._id !== id)
  //   })
  // }

  console.log(state);
  

  let tabledata = {
    tableHead: ['Username', 'Description', 'Duration', 'Date'],
    tableData: state,
  };

 


  return (
    
   
      <ScrollView style={styles.scrollView}>
      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>

        <Row
          data={tabledata.tableHead}
          style={styles.head}
          textStyle={styles.text}
          
        />
        <Rows data={tabledata.tableData} textStyle={styles.text} >
        </Rows>
            
        
           
      
        {/* <TouchableOpacity onClick={i => handleDeleteRow(i)}><Text>Delete Row</Text></TouchableOpacity> */}
      </Table>
      </ScrollView>
      

  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 100, backgroundColor: '#f1f8ff'},
  text: {margin: 6},
  scrollView: {
   
    marginHorizontal: 20,
  }
});

export default ExerciseList;
