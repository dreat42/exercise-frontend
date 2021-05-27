import React,{useState} from 'react';
import {View , Text,StyleSheet} from 'react-native';
import axios from 'axios';





const About = () => {
    

        return (
            <View style={styles.bg}>

                <Text style={styles.input}> Copyright © Sethi Industries 2021 All Rights Reserved</Text>
                <View>
                 <Text style={styles.para}>
                

                 {"\n"}All files and information contained in this application or Blog are copyright by Sethi Industries , and may not be duplicated, copied, modified or adapted, in any way without our written permission. Our application or Blog may contain our service marks or trademarks as well as those of our affiliates or other companies, in the form of words, graphics, and logos.

Your use of our application, Blog or Services does not constitute any right or license for you to use our service marks or trademarks, without the prior written permission of Sethi Industries.

Our Content, as found within our application, Blog and Services, is protected under United States and foreign copyrights. The copying, redistribution, use or publication by you of any such Content, is strictly prohibited. Your use of our application and Services does not grant you any ownership rights to our Content.

                </Text>
                </View>
                </View>
              
             
      
        )
}

const styles = StyleSheet.create({
    input: {
    
        textAlign:"center",
        marginTop:60,
},
para: {
    fontSize: 15,
    textAlign:"center",
    letterSpacing: 2
   
}
});
  

export  default About;