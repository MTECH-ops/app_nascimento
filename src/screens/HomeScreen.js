import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Platform,
  SafeAreaView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

// Componente funcional principal da tela
export default function HomeScreen() {
  // Estado para armazenar o objeto da data de nascimento
  const [date, setDate] = useState(new Date());
  // Estado para controlar a visibilidade do seletor de data
  const [showPicker, setShowPicker] = useState(false);
  // Estado para armazenar o texto da data de nascimento (ex: "25/12/1990")
  const [birthDateText, setBirthDateText] = useState('');
  // Estado para armazenar a idade calculada
  const [age, setAge] = useState(null);

  /**
   * Mostra ou esconde o seletor de data.
   */
  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  /**
   * É chamada quando o usuário seleciona uma data no picker.
   * @param {object} event - O evento do seletor.
   * @param {Date} selectedDate - A data que foi selecionada.
   */
  const onChangeDate = ({ type }, selectedDate) => {
    // No Android, o picker é fechado manualmente
    if (Platform.OS === 'android') {
      toggleDatePicker();
    }
    // Se o usuário confirmou a seleção ('set')
    if (type === 'set') {
      const currentDate = selectedDate || date;
      setDate(currentDate);
      // Formata a data para o padrão brasileiro para exibição
      setBirthDateText(currentDate.toLocaleDateString('pt-BR'));
      setAge(null); // Limpa a idade anterior ao selecionar nova data
    }
  };

  /**
   * Função para calcular a idade com base na data selecionada.
   */
  const calculateAge = () => {
    // Verifica se uma data foi selecionada
    if (!birthDateText) {
      Alert.alert('Atenção', 'Por favor, selecione uma data de nascimento primeiro.');
      return;
    }

    const today = new Date();
    const dob = new Date(date);

    // Verifica se a data de nascimento não está no futuro
    if (dob > today) {
        Alert.alert('Erro', 'A data de nascimento não pode ser no futuro.');
        return;
    }

    // Calcula a idade
    let calculatedAge = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();

    // Ajusta a idade se o aniversário deste ano ainda não ocorreu
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
      calculatedAge--;
    }

    // Define a idade no estado
    setAge(calculatedAge);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Calculadora de Idade</Text>
      <Text style={styles.subtitle}>
        Selecione sua data de nascimento para descobrir sua idade.
      </Text>

      {/* O seletor de data só é exibido quando showPicker for true */}
      {showPicker && (
        <DateTimePicker
          mode="date"
          display="spinner"
          value={date}
          onChange={onChangeDate}
          maximumDate={new Date()} // Impede selecionar datas futuras
        />
      )}

      {/* Botão que parece um input para abrir o seletor de data */}
      <TouchableOpacity style={styles.inputButton} onPress={toggleDatePicker}>
        <Text style={styles.inputText}>{birthDateText || 'DD/MM/AAAA'}</Text>
      </TouchableOpacity>

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
  inputButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#333333',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 18,
    color: '#FFFFFF',
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
