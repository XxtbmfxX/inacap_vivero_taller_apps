import { View } from 'react-native';
import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text } from '@rneui/base';


export default function Modal() { 
  const isPresented = router.canGoBack();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {!isPresented && <Link href="../">Dismiss</Link>}
      
      <Text>Texto de react native components</Text>

    </View>
  );
}
