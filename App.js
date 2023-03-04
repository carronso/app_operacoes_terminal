import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [nome, setNome] = useState("Maria");
	
  function lerNome(){
	  setNome("Ana");
  }
  return (
    <View style={styles.container}>
      
		<Text style={styles.titulo}>Teste</Text>

		  <View style={styles.bloco}>
			  <Text style={styles.label}> Nome: </Text>
			  <TextInput 
				  style={styles.input}
				  value={nome}
				  onChangeText={(texto)=>setNome(texto)}
			  />
			  <TouchableOpacity style={styles.botao} onPress={lerNome}>
				  <Text style={styles.txtBotao}>Enviar</Text>
			  </TouchableOpacity>
			  
			  <Text style={styles.titulo}>Nome: {nome}</Text>
		  </View>
    </View>
	
  );
}

const styles = StyleSheet.create({
  botao:{
	backgroundColor:'#000',
	alignItems:'center',
	marginTop:20
  },
  txtBotao:{
	color:"#FFF",
	fontSize:30
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
titulo:{
	fontSize:30,
	color:'#F00'
},
label:{
  fontSize:30
},
input:{
	borderWidth:2,
	fontSize:20	
}
});
