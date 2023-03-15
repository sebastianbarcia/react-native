import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';

 const sneakerst = [
   {id:1 , brand : "nike" , img : "https://images.stockx.com/images/Nike-Air-Force-1-Low-Supreme-Baroque-Brown.jpg?fit=fill&bg=FFFFFF&w=500&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1677481787" },
   {id:2 , brand : "adidas" , img : "https://images.stockx.com/images/Nike-Air-Force-1-Low-Supreme-Baroque-Brown.jpg?fit=fill&bg=FFFFFF&w=500&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1677481787" }
 ]
 
export default function App() {
  
  const [sneaker , setSneakers] = useState([])

// const options = {
//   method: 'GET',
//   url: 'https://v1-sneakers.p.rapidapi.com/v1/sneakers',
//   params: {limit: '10'},
//   headers: {
//     'X-RapidAPI-Key': '5ac05c4122msh9bf5fda93bbe945p186834jsn9fbc69b33fad',
//     'X-RapidAPI-Host': 'v1-sneakers.p.rapidapi.com'
//   }
// };

// useEffect(() => {
//   axios.request(options).then(function (response) {
//     console.log(response.data.results);
//     setSneakers(response.data.results)
//   }).catch(function (error) {
//     console.error(error);
//   });

// },[])


  
     return (
       <View style={styles.container}>

       {/* {
         sneaker.map((item) => {
           return(
             <View key={item.id}>
             <Text>
               {item.brand}
             </Text>
           
             </View>
           )
         })
       } */}
     {
         sneakerst.map((item) => {
           return(
             <View key={item.id}>
             <Text>
               {item.brand}
             </Text>
           
             </View>
           )
         })
       }  
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
})
