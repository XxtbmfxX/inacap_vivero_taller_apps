import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button } from '@rneui/themed';
import { useRouter } from 'expo-router';

export default function TermsAndConditions() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Términos y Condiciones</Text>
        <Text style={styles.paragraph}>
          Bienvenido a nuestra aplicación. Al usar este servicio, usted acepta cumplir con estos términos y condiciones. Por favor, léalos cuidadosamente.
        </Text>
        <Text style={styles.paragraph}>
          1. Uso del servicio: Usted se compromete a utilizar nuestro servicio de manera responsable y de acuerdo con todas las leyes aplicables.
        </Text>
        <Text style={styles.paragraph}>
          2. Privacidad: Respetamos su privacidad y protegemos su información personal de acuerdo con nuestra política de privacidad.
        </Text>
        <Text style={styles.paragraph}>
          3. Propiedad intelectual: Todo el contenido y la funcionalidad de la aplicación están protegidos por derechos de autor y otras leyes de propiedad intelectual.
        </Text>
        <Text style={styles.paragraph}>
          4. Limitación de responsabilidad: No nos hacemos responsables de cualquier daño directo, indirecto, incidental o consecuente que resulte del uso de nuestro servicio.
        </Text>
      </ScrollView>
      <Button 
        title="Volver" 
        onPress={() => router.back()} 
        containerStyle={styles.buttonContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 15,
  },
  buttonContainer: {
    marginTop: 20,
  },
});