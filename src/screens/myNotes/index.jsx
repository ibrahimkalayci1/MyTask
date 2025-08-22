import { SafeAreaView,  StyleSheet, View,Text, FlatList} from 'react-native'
import { screenStyle } from '../../styles/screenStyle'
import Header from '../../components/router/header'
import FloatActionButton from '../../components/ui/floatActionButton'
import { useNavigation } from '@react-navigation/native'
import { ADDNOTE } from '../../utils/router'
import { mockData } from '../../utils/mockData'
import NoteCard from '../../components/myNotes/noteCard'
import { useEffect, useState } from 'react'



const MyNotes = () => {
const navigation = useNavigation()

const [notes,setNotes] = useState([
  {
      id: 1,
      title: 'Design Engineer',
      description: "Bu Birinci notun açıklamasıdır",
      date: '12:25',
  },
  {
      id: 2,
      title: 'React Native Developer',
      description: "Bu ikinci notun açıklamasıdır",
      date: '12:25',
  },
  {
      id: 3,
      title: 'Backend Developer',
      description: "Bu üçüncü notun açıklamasıdır",
      date: '12:25',
  },
  {
      id: 4,
      title: 'Frontend Developer',
      description: "Bu dördüncü notun açıklamasıdır",
      date: '12:25',
  },
])

let note1 = {
  id: 5,
      title: 'ibrahim kalaycı',
      description: "Bu beşinci notun açıklamasıdır",
      date: '12:25',
}

let note2 = {
  id: 6,
      title: 'ecrin  kalaycı',
      description: "Bu altıncı notun açıklamasıdır",
      date: '12:25',
}
let note3 = {
  id: 7,
      title: 'alya özcan',
      description: "Bu yedinci notun açıklamasıdır",
      date: '12:25',
}

//ekleme fonksiyonu
const addNote = item => {
  setNotes([...notes, item ])
}

// silme fonksiyonu

const deleteNote = id => {
const updateItems = notes.filter(item => item.id !== id);
setNotes(updateItems)
}

useEffect(() => {
  setTimeout(() => {
    setNotes([...notes, note2])
  }, 2000);
}, [] )



return (
    <SafeAreaView  style={screenStyle.container} >
      <View style={screenStyle.container}> 
        <Header /> 

    <FlatList  
    data={notes}
    renderItem={({item}) => (
    <NoteCard  item={item} deleteItem={item => deleteNote(item.id)} />  
  )}
    keyExtractor={item => item.id.toString() }
    />
    
    

    <FloatActionButton  
    onPress = {()  => addNote(note3) }
    // onPress={() => navigation.navigate(ADDNOTE, {type: "add"} ) } 
    />      
       </View>
    </SafeAreaView>
  )
}

export default MyNotes

const styles = StyleSheet.create({})