import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {

    const [profileImage, setProfileImage] = useState("");

    async function imagePick() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
        });

        if(!result.canceled){

            const uri = result.assets[0].uri;
            setProfileImage(uri);

        }

    }

    return (
        <SafeAreaView style={styles.container}>

            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>

                <ScrollView contentContainerStyle={{ flexGrow: 1, gap: 18, alignItems: "center" }}>

                    <Pressable onPress={imagePick}>
                        <Image
                            source={{ uri: (profileImage) ? profileImage : "https://cdn-icons-png.flaticon.com/512/4140/4140073.png" }}
                            style={styles.img}
                        />
                    </Pressable>

                    <View style={styles.textView}>
                        <Text style={styles.titleTxt}>0776655444</Text>
                    </View>

                    <View style={styles.inputView}>
                        <AntDesign name="user-add" size={20} color="#696969" />
                        <TextInput style={styles.input} value='Fname' />
                    </View>

                    <View style={styles.inputView}>
                        <AntDesign name="user-add" size={20} color="#696969" />
                        <TextInput style={styles.input} value='Lname' />
                    </View>

                    <View style={styles.inputView}>
                        <MaterialIcons name="lock-outline" size={22} color="#696969" />
                        <TextInput style={styles.input} value='password' />
                    </View>

                    <Pressable style={[styles.btn, { marginTop: 30 }]} onPress={() => {

                    }}>
                        <Text style={styles.btnTxt}>Update</Text>
                    </Pressable>

                    <Pressable style={[styles.btn, { backgroundColor: "red" }]} onPress={() => {

                    }}>
                        <Text style={styles.btnTxt}>Logout</Text>
                    </Pressable>



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
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    input: {
        width: "90%",
        padding: 5,
    },
});