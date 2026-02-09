import { Text, SafeAreaView,} from 'react-native';
import  Sobrenome  from './src/telas/sobrenome';

export default function App() {
  return (
    <SafeAreaView >
      <Text>NJ DA XM8.</Text>
      <Sobrenome nome='thithi pipi' />
      <Sobrenome nome='marinho pipi no cuzinho' />
      <Sobrenome nome='vinizito musculito' />
      <Sobrenome nome='guigui gostozito' />
      <Sobrenome nome='pepe chupeta' />
      <Sobrenome nome='adrianzito cuzito' />
    </SafeAreaView>
  );
}

