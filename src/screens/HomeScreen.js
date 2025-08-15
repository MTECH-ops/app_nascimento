import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  TextInput,
} from 'react-native';

export default function HomeScreen() {
  const [birthDateText, setBirthDateText] = useState('');
  const [age, setAge] = useState(null);
  const [error, setError] = useState('');

  const calculateAge = () => {
    setError('');
    if (!birthDateText) {
      setError('Por favor, digite sua data de nascimento.');
      setAge(null);
      return;
    }

    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = birthDateText.match(regex);
    if (!match) {
      setError('Digite a data no formato DD/MM/AAAA.');
      setAge(null);
      return;
    }

    const day = parseInt(match[1], 10);
    const month = parseInt(match[2], 10) - 1;
    const year = parseInt(match[3], 10);

    const dob = new Date(year, month, day);
    const today = new Date();

    if (
      dob > today ||
      dob.getDate() !== day ||
      dob.getMonth() !== month ||
      dob.getFullYear() !== year
    ) {
      setError('Data inválida.');
      setAge(null);
      return;
    }

    let calculatedAge = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < dob.getDate())
    ) {
      calculatedAge--;
    }

    setAge(calculatedAge);
    setError('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Calculadora de Idade</Text>
      <Text style={styles.subtitle}>
        Digite sua data de nascimento para descobrir sua idade.
      </Text>

      {/* Label com campo de texto embutido */}
      <View style={styles.inlineLabel}>
        <Text style={styles.label}>Data de nascimento: </Text>
        <TextInput
          style={styles.inputInline}
          placeholder="DD/MM/AAAA"
          placeholderTextColor="#888"
          value={birthDateText}
          onChangeText={setBirthDateText}
          keyboardType="numeric"
          maxLength={10}
        />
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={calculateAge}>
        <Text style={styles.buttonText}>Calcular Idade</Text>
      </TouchableOpacity>

      {age !== null && !error && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Você tem</Text>
          <Text style={styles.ageText}>{age} anos</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#B0B0B0',
    marginBottom: 30,
    textAlign: 'center',
  },
  inlineLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    width: '100%',
  },
  label: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  inputInline: {
    flex: 1,
    height: 40,
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#333333',
    color: '#FFFFFF',
    fontSize: 18,
  },
  errorText: {
    color: '#FF5252',
    fontSize: 15,
    marginBottom: 10,
    marginTop: 2,
    alignSelf: 'flex-start',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#6200EE',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 22,
    color: '#B0B0B0',
  },
  ageText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#BB86FC',
    marginTop: 5,
  },
});