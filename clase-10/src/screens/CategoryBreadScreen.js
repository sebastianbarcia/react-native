import {  FlatList} from 'react-native'
import { BREADS } from '../data/breads'
import React from 'react'
import BreadItem from '../components/Breaditem';

function CategoryBreadScreen({navigation , route}) {

  const { categoryId } = route.params

  const breads = BREADS.filter(bread => bread.category === categoryId);

  const handleSelected = (item) =>{
    navigation.navigate('Detail' , {
      bread : item
    })
  }

  const renderItemBread = ({item}) => (<BreadItem item={item} onSelected={handleSelected}/>)

  return (
   <FlatList 
   data={breads}
   keyExtractor={(item) => item.id}
   renderItem={renderItemBread}
   />
  )
  } 
  
export default CategoryBreadScreen

