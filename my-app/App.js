
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
} from 'react-native';

// Завдання 1. Компонент Counter
function Counter() {
  const [count, setCount] = useState(0);

  // Додатковий useEffect
  useEffect(() => {
    console.log('Значення лічильника:', count);
  }, [count]);

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Лічильник</Text>

      <Text
        style={[
          styles.counter,
          count === 0 && styles.zero,
          count > 0 && count <= 10 && styles.positive,
          count > 10 && styles.warning,
        ]}
      >
        {count}
      </Text>

      <View style={styles.buttons}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => setCount((prev) => prev + 1)}
        >
          <Text style={styles.buttonText}>+</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => setCount((prev) => Math.max(0, prev - 1))}
        >
          <Text style={styles.buttonText}>−</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.resetButton,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => setCount(0)}
        >
          <Text style={styles.buttonText}>Скинути</Text>
        </Pressable>
      </View>
    </View>
  );
}

// Завдання 2. Компонент ProductCard
function ProductCard({ title, price, image }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <Pressable
      style={styles.productCard}
      onLongPress={() =>
        Alert.alert(
          'Інформація про товар',
          `Назва: ${title}\nЦіна: ${price} грн`
        )
      }
    >
      <Image source={{ uri: image }} style={styles.productImage} />

      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.price}>{price} грн</Text>

      <Pressable
        style={({ pressed }) => [
          styles.favoriteButton,
          isFavorite && styles.favoriteActive,
          pressed && styles.buttonPressed,
        ]}
        onPress={toggleFavorite}
      >
        <Text style={styles.buttonText}>
          {isFavorite ? 'В обраному ♥' : 'В обране ♡'}
        </Text>
      </Pressable>
    </Pressable>
  );
}

// Завдання 3. Компонент Timer
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Таймер</Text>

      <Text style={styles.timerText}>{seconds} сек.</Text>

      <Pressable
        style={({ pressed }) => [
          styles.resetButton,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => setSeconds(0)}
      >
        <Text style={styles.buttonText}>Скинути таймер</Text>
      </Pressable>
    </View>
  );
}

// Головний компонент застосунку
export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Практична робота №5</Text>
      <Text style={styles.subtitle}>
        Стан, події та стилізація в React Native
      </Text>

      <Counter />

      <Timer />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Наші товари</Text>

        <View style={styles.products}>
          <ProductCard
            title="Смартфон"
            price={15000}
            image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"
          />

          <ProductCard
            title="Ноутбук"
            price={25000}
            image="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400"
          />

          <ProductCard
            title="Навушники"
            price={3000}
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
          />
        </View>
      </View>
    </ScrollView>
  );
}

// Завдання 4 і 5. Стилізація та Flexbox
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    paddingTop: 45,
    gap: 20,
    backgroundColor: '#F2F4F8',
    alignItems: 'center',
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#222222',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
  },

  section: {
    width: '100%',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    alignItems: 'center',
    gap: 12,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#222222',
  },

  counter: {
    fontSize: 45,
    fontWeight: 'bold',
  },

  zero: {
    color: 'gray',
  },

  positive: {
    color: 'green',
  },

  warning: {
    color: 'red',
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    flexWrap: 'wrap',
  },

  button: {
    backgroundColor: '#2878D0',
    padding: 14,
    borderRadius: 10,
    minWidth: 55,
    alignItems: 'center',
  },

  resetButton: {
    backgroundColor: '#E67E22',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonPressed: {
    opacity: 0.5,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  timerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2878D0',
  },

  products: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'stretch',
    gap: 12,
  },

  productCard: {
    width: 145,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    alignItems: 'center',
    gap: 8,
  },

  productImage: {
    width: 120,
    height: 100,
    borderRadius: 8,
  },

  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222222',
  },

  price: {
    fontSize: 15,
    color: '#2878D0',
    fontWeight: 'bold',
  },

  favoriteButton: {
    backgroundColor: '#777777',
    padding: 9,
    borderRadius: 8,
  },

  favoriteActive: {
    backgroundColor: '#E91E63',
  },
});
