import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  useColorScheme,
} from 'react-native';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'login' | 'home'>('login');
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const styles = createStyles(isDarkMode);

  const LoginScreen = () => (
    <View style={styles.loginContainer}>
      <View style={styles.loginCard}>
        <View style={styles.logoContainer}>
          <Text style={[styles.logoLetter, { color: '#4285F4' }]}>G</Text>
          <Text style={[styles.logoLetter, { color: '#EA4335' }]}>o</Text>
          <Text style={[styles.logoLetter, { color: '#FBBC05' }]}>o</Text>
          <Text style={[styles.logoLetter, { color: '#4285F4' }]}>g</Text>
          <Text style={[styles.logoLetter, { color: '#34A853' }]}>l</Text>
          <Text style={[styles.logoLetter, { color: '#EA4335' }]}>e</Text>
        </View>

        <Text style={styles.title}>Fazer login</Text>
        <Text style={styles.subtitle}>Use sua Conta do Google</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail ou telefone"
          placeholderTextColor="#5f6368"
        />

        <TouchableOpacity>
          <Text style={styles.linkText}>Esqueceu seu e-mail?</Text>
        </TouchableOpacity>

        <View style={styles.loginFooter}>
          <TouchableOpacity onPress={() => setCurrentScreen('home')}>
            <Text style={styles.linkText}>Criar conta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => setCurrentScreen('home')}
          >
            <Text style={styles.buttonText}>Próxima</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const HomeScreen = () => (
    <SafeAreaView style={styles.homeContainer}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.menuIcon}>☰</Text>
          <Text style={styles.headerTitle}>App</Text>
        </View>
        <View style={styles.profileCircle}>
          <Text style={styles.profileLetter}>G</Text>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput placeholder="Pesquisar arquivos..." style={styles.searchInput} />
        </View>

        <Text style={styles.sectionTitle}>Bem-vindo de volta</Text>
        <Text style={styles.sectionSubtitle}>Aqui estão seus projetos recentes.</Text>

        <View style={styles.grid}>
          {[
            { t: 'Projeto de Design', c: 'Importante', d: 'Editado há 2 horas por você.' },
            { t: 'Relatório Mensal', c: 'Financeiro', d: 'Compartilhado com a equipe.' },
            { t: 'Ideias de Produto', c: 'Draft', d: 'Rascunhos para o próximo trimestre.' },
          ].map((item, i) => (
            <View key={i} style={styles.card}>
              <Text style={styles.cardTitle}>{item.t}</Text>
              <Text style={styles.cardDesc}>{item.d}</Text>
              <View style={styles.chip}>
                <Text style={styles.chipText}>{item.c}</Text>
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={[styles.primaryButton, { marginTop: 20, alignSelf: 'center' }]}
          onPress={() => setCurrentScreen('login')}
        >
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );

  return (
    <View style={{ flex: 1 }}>
      {currentScreen === 'login' ? <LoginScreen /> : <HomeScreen />}
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
    </View>
  );
}

const createStyles = (isDarkMode: boolean) => {
  const backgroundColor = isDarkMode ? '#121212' : '#fff';
  const cardBackground = isDarkMode ? '#1e1e1e' : '#fff';
  const borderColor = isDarkMode ? '#303030' : '#dadce0';
  const textPrimary = isDarkMode ? '#f5f5f5' : '#202124';
  const textSecondary = isDarkMode ? '#b0b0b0' : '#5f6368';
  const inputBackground = isDarkMode ? '#232323' : '#fff';
  const searchBackground = isDarkMode ? '#232323' : '#f1f3f4';
  const chipBackground = isDarkMode ? '#2a2a2a' : '#e8f0fe';
  const chipText = isDarkMode ? '#8ab4f8' : '#1967d2';

  return StyleSheet.create({
    loginContainer: {
      flex: 1,
      backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    loginCard: {
      width: '100%',
      maxWidth: 400,
      padding: 40,
      borderRadius: 8,
      borderWidth: 1,
      borderColor,
      backgroundColor: cardBackground,
      alignItems: 'center',
    },
    logoContainer: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    logoLetter: {
      fontSize: 24,
      fontWeight: '600',
    },
    title: {
      fontSize: 24,
      color: textPrimary,
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      color: textSecondary,
      marginBottom: 40,
    },
    input: {
      width: '100%',
      height: 55,
      borderWidth: 1,
      borderColor,
      backgroundColor: inputBackground,
      borderRadius: 4,
      paddingHorizontal: 15,
      fontSize: 16,
      marginBottom: 8,
      color: textPrimary,
    },
    linkText: {
      color: '#8ab4f8',
      fontWeight: '600',
      fontSize: 14,
      alignSelf: 'flex-start',
    },
    loginFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginTop: 40,
    },
    primaryButton: {
      backgroundColor: '#1a73e8',
      paddingVertical: 10,
      paddingHorizontal: 24,
      borderRadius: 4,
    },
    buttonText: {
      color: '#fff',
      fontWeight: '600',
      fontSize: 14,
    },
    homeContainer: {
      flex: 1,
      backgroundColor,
    },
    header: {
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      borderBottomWidth: 1,
      borderBottomColor: borderColor,
      marginTop: 40,
      backgroundColor,
    },
    headerLeft: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    menuIcon: {
      fontSize: 20,
      color: textSecondary,
      marginRight: 15,
    },
    headerTitle: {
      fontSize: 20,
      color: textSecondary,
    },
    profileCircle: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: '#7b1fa2',
      alignItems: 'center',
      justifyContent: 'center',
    },
    profileLetter: {
      color: '#fff',
      fontWeight: 'bold',
    },
    content: {
      padding: 20,
      backgroundColor,
    },
    searchBar: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: searchBackground,
      borderRadius: 8,
      paddingHorizontal: 15,
      marginBottom: 30,
    },
    searchIcon: {
      fontSize: 16,
      color: textSecondary,
    },
    searchInput: {
      flex: 1,
      padding: 12,
      fontSize: 16,
      color: textPrimary,
    },
    sectionTitle: {
      fontSize: 22,
      color: textPrimary,
      fontWeight: '400',
    },
    sectionSubtitle: {
      fontSize: 14,
      color: textSecondary,
      marginBottom: 20,
    },
    grid: {
      gap: 15,
    },
    card: {
      padding: 20,
      borderRadius: 8,
      borderWidth: 1,
      borderColor,
      backgroundColor: cardBackground,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: '500',
      marginBottom: 5,
      color: textPrimary,
    },
    cardDesc: {
      fontSize: 14,
      color: textSecondary,
      lineHeight: 20,
    },
    chip: {
      backgroundColor: chipBackground,
      paddingHorizontal: 12,
      paddingVertical: 4,
      borderRadius: 16,
      alignSelf: 'flex-start',
      marginTop: 10,
    },
    chipText: {
      color: chipText,
      fontSize: 12,
      fontWeight: '600',
    },
  });
};
