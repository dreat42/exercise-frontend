import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NativeRouter, Route, Link} from 'react-router-native';

import CreateExercise from './src/component/create-exercise.component';
import About from './src/component/About.srceen';

import ExerciseList from './src/component/exercise-list.component';
import NavBar from './src/component/navbar.component';

const App = () => {
  return (
    <NativeRouter>
      <NavBar />

      <Route exact path="/" component={ExerciseList} />
      <Route path="/create" component={CreateExercise} /> 
      <Route path="/user" component={About} />
    </NativeRouter>
  );
};

export default App;
