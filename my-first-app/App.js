
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Alert,
  SafeAreaView,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.title}>
          Мій перший мобільний застосунок
        </Text>

        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600'
          }}
          style={styles.image}
        />

        <Text style={styles.name}>
          Роман Чернета
        </Text>

        <Text style={styles.group}>
          Група: IT-32
        </Text>

        <Text style={styles.description}>
          Це мій перший мобільний застосунок,
          створений за допомогою React Native та Expo.
          У ньому я знайомлюся з компонентами,
          стилями та інтерактивністю.
        </Text>

        <Pressable
          style={styles.button}
          onPress={() =>
            Alert.alert(
              'Вітаю!',
              'Ви створили свій перший застосунок!'
            )
          }
        >
          <Text style={styles.buttonText}>
            Привітатися
          </Text>
        </Pressable>

        <Pressable
          style={styles.secondButton}
          onPress={() =>
            Alert.alert(
              'Про застосунок',
              'Цей проєкт створений у межах практичної роботи №1 з React Native та Expo.'
            )
          }
        >
          <Text style={styles.buttonText}>
            Про застосунок
          </Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F0FE',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#173B70',
    textAlign: 'center',
    marginBottom: 25,
  },

  image: {
    width: 180,
    height: 150,
    borderRadius: 20,
    marginBottom: 20,
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 8,
  },

  group: {
    fontSize: 19,
    color: '#15803D',
    marginBottom: 15,
  },

  description: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 25,
  },

  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
  },

  secondButton: {
    backgroundColor: '#15803D',
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
