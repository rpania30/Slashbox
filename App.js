import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* Current Objectives*/}
      <View style = {styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Objectives</Text>

        <View style = {styles.items}>
          {/*This contains all tasks*/}
          <Task text = {'test 1'}/>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#708090',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:  {
    fontSize: 32,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 20,
  },
});
