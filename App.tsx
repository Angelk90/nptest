import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function App() {
  const [value, setValue] = React.useState('');
  const [dishs, setDishs] = React.useState([]);

  const isDark = false;

  const checkNumber = (array, numb) => {
    return array.findIndex(({ dish }) => dish === parseInt(numb));
  };

  const addNumber = (numb) => {
    const found = checkNumber(dishs, numb);
    if (found === -1) setDishs([...dishs, { dish: parseInt(numb), times: 1 }]);
    else {
      const clone = JSON.parse(JSON.stringify(dishs));
      clone[found].times++;
      setDishs(clone);
    }
  };

  return (
    <View style={{ flex: 1, padding: 46 }}>
      <TextInput
        dense
        mode="outlined"
        label="Dish"
        placeholder="Dish"
        keyboardType="phone-pad"
        maxLength={3}
        value={value}
        onChangeText={setValue}
        onSubmitEditing={({ nativeEvent: { text } }) => {
          setValue('');
          if (text === '' || isNaN(text)) return;
          addNumber(text);
        }}
        theme={{
          colors: {
            placeholder: isDark ? '#FFFFFF' : '#000',
            text: '#1E90FF',
            primary: '#1E90FF',
            background: isDark ? '#1B1A23' : '#EFEFEF',
          },
        }}
      />
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          backgroundColor: '#ccc010',
        }}>
        <TextInput
          dense
          mode="outlined"
          label="Dish"
          placeholder="Dish"
          keyboardType="phone-pad"
          maxLength={3}
          value={value}
          onChangeText={setValue}
          onSubmitEditing={({ nativeEvent: { text } }) => {
            setValue('');
            if (text === '' || isNaN(text)) return;
            addNumber(text);
          }}
          theme={{
            colors: {
              placeholder: isDark ? '#FFFFFF' : '#000',
              text: '#1E90FF',
              primary: '#1E90FF',
              background: isDark ? '#1B1A23' : '#EFEFEF',
            },
          }}
          //style={{ flexGrow: 1 }}
        />
        <Button
          style={{
            backgroundColor: '#1E90FF',
            width: 100,
            height: 40,
            marginLeft: 150,
            marginBottom: 2,
          }}
          mode="contained">
          Send
        </Button>
      </View>
      {dishs.map(({ dish }, key) => (
        <Text key={key}>{dish}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
