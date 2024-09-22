import React from 'react';
import { SafeAreaView, StyleSheet, View,Text,TouchableOpacity,Image } from 'react-native';

const YourApp = () => {
  const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnbpIzcbNgmoZOfkVJYnQ-3tdAEpUN1W1gDQ&s';
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box1}>
       <View style={styles.box1top}>

        <Image 
         source={{ uri: imageUrl }} 
         style={styles.image} 
         />
        </View>

        
        
      </View>
      <View style={styles.box2} >
        <Text style={styles.text}>GROW </Text>
        <Text  style={styles.text}>YOUR BUSINESS </Text>
        

      </View>
      <View style={styles.box3} ><Text style={styles.text1}> We will help to grow up your business using   </Text>
        <Text  style={styles.text1}>online server </Text>
        </View>
      
        
      <View style={styles.box4} >      
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  box1: {
    flex: 8,
    
    

  },
  box1top:{
    marginLeft: 20,
    justifyContent:'left'
    

  },
  
  box2: {
    backgroundColor: 'gray',
    flex: 8,
  },
  image:{
    width: 100, // Chiều rộng hình ảnh
    height: 150, // Chiều cao hình ảnh

  },
  box3: {
    
    flex: 4,
  },
  
  
   text: {
    fontSize: 22,
    color: 'black', 
    textAlign: 'center', 
    textShadowOffset:{width:1,height:1}



  },
  text1: {
    fontSize: 14,
    justifyContent: 'top',
    color: 'black', 
    textAlign: 'center', 
    textShadowOffset:{width:1,height:1}



  },
  button: {
    backgroundColor: 'orange', // Màu nền của nút
    borderRadius: 5, // Đường cong viền của nút
    paddingVertical: 10, // Khoảng cách dọc bên trong nút
    paddingHorizontal: 20, // Khoảng cách ngang bên trong nút
    marginHorizontal: 10, // Khoảng cách giữa các nút
  },
  buttonText: {
    color: 'black', // Màu chữ của nút
    fontSize: 16, // Kích thước chữ
    textAlign: 'center', // Căn giữa chữ trong nút
  },

});

export default YourApp;
