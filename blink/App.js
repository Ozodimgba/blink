import React from 'react';
import { ImageBackground, SafeAreaView, View, FlatList,  ScrollView, StyleSheet, Text, StatusBar, Image } from 'react-native';
import  ImageOne  from './assets/Images/1.png';
import { useFonts } from 'expo-font';



const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    pics:{ ImageOne},
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    pics: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
   pics: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
   pics: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
   pics: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
   pics: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
   pics: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
   pics: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
   pics: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
   pics: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
   pics: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
   pics: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
   pics: 'Third Item',
  },
];

const Item = ({ pics }) => (
  <View style={styles.item}>
    
    <ImageBackground
            source={ImageOne}
            style={{ width: 300, height: 300, borderRadius: 5, justifyContent: "space-between", }}
          >
            <View style={{padding: 9,}}><View style={{backgroundColor: "#000000", height: 30, width: 30, borderRadius: 5,}}>
              </View>
              </View>
            <View style={{padding: 10,}}>
            <Text style={styles.headline}>Elsa Majimgbo graces forbes cover..</Text>
            </View>
            </ImageBackground>
            
  </View>
);

const App = () => {
  const [loaded] = useFonts({
    'DMSans-Black': require('./assets/fonts/DMSans-Bold.ttf'),
    'DMSans-Med': require('./assets/fonts/DMSans-Medium.ttf'),
    'DMSans-Regu': require('./assets/fonts/DMSans-Regular.ttf'),
   
  });
  
  if (!loaded) {
    return null;
  }


  const renderItem = ({ item }) => (
    <Item pic={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      
        
           <ScrollView
           horizontal={true}
           >
           <View>
           
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={false}
        numColumns={5}
      />
     </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#0A0A0A",
  },
  headline: {
  fontFamily: 'DMSans-Med',
  color: "white",
  fontSize: 32,
  lineHeight: 33,

  
  },
  item: {
    marginVertical: 3,
    marginHorizontal: 3,
    borderRadius: 10,
  },
  title: {
    fontSize: 32,
  },
});

export default App;