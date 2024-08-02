import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Definir la interfaz del objeto
interface DataObject {
  [key: string]: string | number | Date | any[];
}

// Definir la interfaz de las props
interface CardProps {
  dataArray: DataObject[];
}

const renderValue = (key: string, value: any) => {
  if (typeof value === 'string') {
    return <Text key={key} style={styles.text}>{key}: {value}</Text>;
  }
  if (typeof value === 'number') {
    return <Text key={key} style={styles.text}>{key}: {value}</Text>;
  }
  if (value instanceof Date) {
    return <Text key={key} style={styles.text}>{key}: {value.toDateString()}</Text>;
  }
  if (Array.isArray(value)) {
    return (
      <View key={key} style={styles.arrayContainer}>
        <Text style={styles.text}>{key}:</Text>
        {value.map((item, index) => (
          <Text key={`${key}-${index}`} style={styles.text}>- {item}</Text>
        ))}
      </View>
    );
  }
  return null;
};

const DataCard: React.FC<{ data: DataObject }> = ({ data }) => {
  return (
    <View style={styles.card}>
      {Object.keys(data).map(key => renderValue(key, data[key]))}
    </View>
  );
};

const DataCardList: React.FC<CardProps> = ({ dataArray }) => {
  return (
    <View style={styles.container}>
      {dataArray.map((data, index) => (
        <DataCard key={index} data={data} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  arrayContainer: {
    marginBottom: 10,
  },
});

export default DataCardList;
