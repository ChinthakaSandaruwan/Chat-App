import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Signup() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, gap: 18, alignItems: "center" }}
          showsVerticalScrollIndicator={false}
        >
          <Image
            source={require("../assets/images/signup.jpg")}
            style={styles.img}
          />

          <View style={styles.textView}>
            <Text style={styles.titleTxt}>SignUp</Text>
            <Text style={styles.descriptionTxt}>
              Create an account to get started.
            </Text>
          </View>

          <View style={styles.inputView}>
            <AntDesign name="user" size={20} color="#696969" />
            <TextInput
              style={styles.input}
              placeholder="Enter your First Name"
            />
          </View>

          <View style={styles.inputView}>
            <AntDesign name="user" size={20} color="#696969" />
            <TextInput
              style={styles.input}
              placeholder="Enter your Last Name"
            />
          </View>

          <View style={styles.inputView}>
            <Entypo name="mobile" size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Enter your Mobile"
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputView}>
            <MaterialIcons name="lock-outline" size={22} color="#696969" />
            <TextInput
              style={styles.input}
              placeholder="Enter your Password"
              secureTextEntry
            />
          </View>

          <Pressable style={styles.btn}>
            <Text style={styles.btnTxt}>Sign Up</Text>
          </Pressable>

          <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
            <Text style={{ color: "#8b8b8b" }}>Already have an account?</Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 15, color: "#0066ff" }}
              onPress={() => router.back()}
            >
              Sign In
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  descriptionTxt: {
    color: "#707070",
    marginTop: 5,
  },
  titleTxt: {
    fontWeight: "bold",
    fontSize: 22,
  },
  textView: {
    alignItems: "center",
    marginBottom: 20,
  },
  btnTxt: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "#0066ff",
    borderRadius: 50,
    padding: 15,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  inputView: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#ececec",
    borderRadius: 50,
    paddingHorizontal: 18,
    paddingVertical: 12,
    alignItems: "center",
    gap: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  img: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  input: {
    flex: 1,
    fontSize: 15,
  },
});
