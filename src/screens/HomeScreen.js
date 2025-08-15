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

// Componente funcional principal da tela
export default function HomeScreen() {
  // Estado para armazenar o texto da data de nascimento (ex: "25/12/1990")
  const [birthDateText, setBirthDateText] = useState('');
  // Estado para armazenar a idade calculada
  const [age, setAge] = useState(null);

  /**
   * Função para calcular a idade com base na data digitada.
   */
  const calculateAge = () => {
    // Verifica se uma data foi digitada
    if (!birthDateText) {
      Alert.alert('Atenção', 'Por favor, digite sua data de nascimento.');
      return;
    }

    // Valida o formato DD/MM/AAAA
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = birthDateText.match(regex);
    if (!match) {
      Alert.alert('Erro', 'Digite a data no formato DD/MM/AAAA.');
      return;
    }

    const day = parseInt(match[1], 10);
    const month = parseInt(match[2], 10) - 1; // Mês começa do zero no JS
    const year = parseInt(match[3], 10);

    const dob = new Date(year, month, day);
    const today = new Date();

    // Verifica se a data é válida e não está no futuro
    if (
      dob > today ||
      dob.getDate() !== day ||
      dob.getMonth() !== month ||
      dob.getFullYear() !== year
    ) {
      Alert.alert('Erro', 'Data inválida.');
      return;
    }

    // Calcula a idade
    let calculatedAge = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < dob.getDate())
    ) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Calculadora de Idade</Text>
      <Text style={styles.subtitle}>
        Digite sua data de nascimento para descobrir sua idade.
      </Text>

      {/* Campo de texto para digitar a data */}
      <TextInput
        style={styles.input}
        placeholder="DD/MM/AAAA"
        placeholderTextColor="#888"
        value={birthDateText}
        onChangeText={setBirthDateText}
        keyboardType="numeric"
        maxLength={10}
      />

      {/* Botão para acionar o cálculo */}
      <TouchableOpacity style={styles.button} onPress={calculateAge}>
        <Text style={styles.buttonText}>Calcular Idade</Text>
      </TouchableOpacity>

      {/* Exibe o resultado do cálculo */}
      {age !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Você tem</Text>
          <Text style={styles.ageText}>{age} anos</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

// Folha de estilos para o componente
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
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#333333',
    marginBottom: 20,
    color: '#FFFFFF',
    fontSize: 18,
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