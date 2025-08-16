// PunchCard.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';

export default function Card({ visitCount, rewardStatus, userName }) {
  return (
    <View style={styles.container}>
        <Image  style={styles.logo} source={require('../assets/b-studio-logo.jpg')} />
      <Text style={styles.header}>Loyalty Card</Text>
      <Text style={styles.info}>
        {rewardStatus === 'none'
          ? `You’re ${5 - (visitCount % 5)} visits from your next reward`
          : `🎉 Collect stamps for rewards ${rewardStatus}!`}
      </Text>
      <View style={styles.circles}>
        {[...Array(10)].map((_, i) => (
          <View
            key={i}
            style={[styles.circle, i < visitCount ? styles.filled : styles.empty]}
          />
        ))}
      </View>
      <Text style={styles.info}>After you 5th visit, you will get:💖 15% Discount </Text>
      <Text style={styles.info}>After you 10th visit, you will get: 💖 25% Discount </Text>
      <View>
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  circles: { flexDirection: 'row', flexWrap: 'wrap', width: 200, justifyContent: 'center' },
  circle: { width: 30, height: 30, borderRadius: 15, margin: 5,  },
  filled: { backgroundColor: '#FF69B4' },
  empty: { borderWidth: 1,borderColor:'#efa3b4' },
  info: { margin: 15, fontSize: 16, width: 300, textAlign: 'center', },
  logo: {width: 300, height: 300,}
});
