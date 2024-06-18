import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '../components/ThemeContext';

function Theme() {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <TouchableOpacity style={styles.button} onPress={toggleTheme}>
        <Text style={styles.buttonText}>Toggle Theme</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkContainer: {
    backgroundColor: 'black',
  },
  button: {
    backgroundColor: 'blue', // Cor de fundo do botão
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white', // Cor do texto do botão
    fontSize: 18,
  },
});

export default Theme;
