import { Pressable, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  return (
    <SafeAreaView>
      <Text>Login</Text>

      <TextInput placeholder="email"></TextInput>
      <TextInput placeholder="password"></TextInput>

      <Pressable>
        <Text>Login</Text>
      </Pressable>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

    
});
