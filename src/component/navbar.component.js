import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Link} from 'react-router-native';

const NavBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text style={styles.navu}>Exercises</Text>
        </Link>
        <Link to="/create" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text style={styles.navu} >Create Exercise</Text>
        </Link>
        <Link to="/user" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text style={styles.navu}>About</Text>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  
  },

  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  
  },
  navItem: {
    
    flex: 1,
    alignItems: 'center',
    padding: 5,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: 'center',
    fontSize: 15,
  },
  navu :{
    fontFamily:"monospace",
    fontWeight:"bold",
    textAlign:"center"
  }
});

export default NavBar;
