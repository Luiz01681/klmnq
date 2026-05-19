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
} from 'react-native';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'login' | 'home'>('login');

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
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#fff',
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
    borderColor: '#dadce0',
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
    color: '#202124',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#202124',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 55,
    borderWidth: 1,
    borderColor: '#dadce0',
    borderRadius: 4,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 8,
  },
  linkText: {
    color: '#1a73e8',
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
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginTop: 40,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 20,
    color: '#5f6368',
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 20,
    color: '#5f6368',
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
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f3f4',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  searchIcon: {
    fontSize: 16,
    color: '#5f6368',
  },
  searchInput: {
    flex: 1,
    padding: 12,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 22,
    color: '#202124',
    fontWeight: '400',
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#5f6368',
    marginBottom: 20,
  },
  grid: {
    gap: 15,
  },
  card: {
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dadce0',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
  },
  cardDesc: {
    fontSize: 14,
    color: '#5f6368',
    lineHeight: 20,
  },
  chip: {
    backgroundColor: '#e8f0fe',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  chipText: {
    color: '#1967d2',
    fontSize: 12,
    fontWeight: '600',
  },
});
