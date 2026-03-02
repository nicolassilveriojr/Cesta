import { View } from 'react-native';
import Cesta from './scr/Telas/Cesta';
import {SafeAreaView } from 'react-native-web';

import  {
       useFonts,
       Montserrat_400Regular,
       Montserrat_700bold
      } from '@expo-google-fonts/montserrat';

export default function App() {
 const [fontCarregada] = useFonts({
   "Montserratregular": Montserrat_400Regular,
   "MontserratBold": Montserrat_700bold
 });


 if(!fontCarregada){
   return<view />
 }


 return (
   <SafeAreaView>
    <Cesta />
   </SafeAreaView>
 );
}