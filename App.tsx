import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {NavigationContainer, useNavigation} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useAnimatedKeyboard} from 'react-native-reanimated';

function Card() {
  useAnimatedKeyboard();

  return (
    <View
      style={StyleSheet.flatten({
        width: '100%',
        height: 100,
        backgroundColor: 'black',
        marginVertical: 4,
      })}
    />
  );
}

function ProfileScreen() {
  const array = Array(1000).fill(0);

  const renderHeader = () => (
    <View>
      <TextInput
        numberOfLines={10}
        placeholder="text input"
        style={StyleSheet.flatten({width: '100%', height: 500, borderWidth: 2})}
      />
    </View>
  );

  return (
    <SafeAreaView style={StyleSheet.flatten({padding: 16})}>
      <FlatList
        keyboardShouldPersistTaps="always"
        data={array}
        renderItem={() => <Card />}
        ListHeaderComponent={renderHeader}
      />
    </SafeAreaView>
  );
}

function AuthScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={StyleSheet.flatten({flex: 1,alignItems: 'center',paddingHorizontal: 16})}>
      <View style={StyleSheet.flatten({flex: 1,justifyContent: 'center',width: '100%'})}>
        <TouchableOpacity
          onPress={() => navigation.navigate('PROFILE_PAGE')}
          style={StyleSheet.flatten({
            borderRadius: 20,
            backgroundColor: '#14539A48',
            width: '100%',
            height: 100,
            justifyContent: 'center',
          })}>

          <Text style={StyleSheet.flatten({width: '100%',textAlign: 'center',fontSize: 20})}>
            Navigate to profile
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const AppNavigatorStack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigatorStack.Navigator>
          <AppNavigatorStack.Screen name="HOME_PAGE" component={AuthScreen} />

          <AppNavigatorStack.Screen
            name="PROFILE_PAGE"
            component={ProfileScreen}
          />
        </AppNavigatorStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
