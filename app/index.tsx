import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flex: 1, gap: 18, alignItems: "center" }}
      >
        <Image
          source={require("../assets/images/bg-signin.jpg")}
          style={styles.img}
        />

        <View style={styles.textView}>
          <Text style={styles.titleTxt}>SignIn</Text>
          <Text style={styles.descriptionTxt}>Please Sign in to continue.</Text>
        </View>

        <View style={styles.inputView}>
          <AntDesign name="user-add" size={20} color="#696969" />
          <TextInput style={styles.input} placeholder="Enter your Mobile" />
        </View>

        <View style={styles.inputView}>
          <MaterialIcons name="lock-outline" size={22} color="#696969" />
          <TextInput style={styles.input} placeholder="Enter your Password" />
        </View>

        <Pressable style={styles.btn}>
          <Text style={styles.btnTxt}>Sign In</Text>
        </Pressable>

        <View style={{ flexDirection: "row", gap: 10 }}>
          <Text style={{ color: "#8b8b8b" }}>Don't have account?</Text>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Sign Up</Text>
        </View>
      </ScrollView>
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
    padding: 10,
    width: "100%",
    alignItems: "center",
  },
  inputView: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
    backgroundColor: "#ececec",
    borderRadius: 50,
    paddingHorizontal: 18,
    paddingVertical: 8,
    justifyContent: "center",
    gap: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
    gap: 18,
  },
  img: {
    width: 300,
    height: 300,
  },
  input: {
    width: "90%",
    padding: 5,
  },
});