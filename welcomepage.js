import { View, Text ,Image} from 'react-native'
import React from 'react'
import { Searchbar, Avatar  } from 'react-native-paper';
import Search from './search.png'
import My from './image.jpg'


export default function welcomepage() {
    
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
  
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <Searchbar
          icon={Search}
          placeholder="Search products"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{margin: 10, marginTop: 15,flex:1}}
        />
          <Avatar.Image size={42.5} source={My} style={{marginRight: 15, marginTop: 19,flex:0.15}} />
          
    </View>
  )
}