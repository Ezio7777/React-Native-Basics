import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';

const App = () => {
  const [data, setData] = useState(0);
  const fun = () => {
    // console.warn('call me?');
    setData(data + 1);
  };
  return (
    <View>
      <Text style={{fontSize: 30}}>Hello app</Text>
      <Button title="Press" color={'green'} onPress={fun}></Button>
      <Text style={{fontSize: 30}}>Data{data}</Text>
    </View>
  );
};

export default App;
