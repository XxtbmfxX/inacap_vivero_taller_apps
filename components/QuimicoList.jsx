import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { supabase } from '../lib/supabase';

const QuimicoList = () => {
  const [quimicos, setQuimicos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuimicos = async () => {
      const { data, error } = await supabase
        .from('quimico')
        .select('*');
      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setQuimicos(data);
      }

      setLoading(false);
    };

    fetchQuimicos();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={quimicos}
      keyExtractor={(item) => item.id_quimico.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>ID: {item.id}</Text>
          <Text style={styles.itemText}>ID: {item.nombre_quimico}</Text>
        
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
});

export default QuimicoList;
