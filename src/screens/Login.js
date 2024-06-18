import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import styles from "../config/styles";
import { Image } from "expo-image";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../config/firebase";


export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const fazerLogin = async () => {

    try {
      const usuario = await signInWithEmailAndPassword(auth, email, senha);
      navigation.navigate('App', { screen: 'Home' });
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={require("../../assets/imagem_login_universo.jpg")}
          style={{ width: 200, height: 200, alignSelf: "center" }}
        />
        <Text variant="headlineLarge" style={styles.selfCenter}>
          Faça seu login
        </Text>
        <Text variant="bodySmall" style={styles.selfCenter}>
          Utilize suas credenciais
        </Text>

        <TextInput
          label="Email"
          mode="outlined"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          label="Senha"
          mode="outlined"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        <Button onPress={() => navigation.navigate("RecoverPassword")}>
          Recuperar senha
        </Button>
        <Button onPress={() => navigation.navigate("Register")}>
          Registre-se
        </Button>
        <Button
          mode="outlined"
          style={{
            marginTop: 10,
            maxWidth: 260,
            alignSelf: "flex-end",
          }}
          onPress={fazerLogin}
        >
          Entrar
        </Button>
      </View>
    </View>
  );
}
