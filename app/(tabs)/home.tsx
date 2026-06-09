import Octicons from '@expo/vector-icons/Octicons';
import { useEffect, useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Home() {

    const [chatData,setChatData] = useState();

    async function loadChats() {

        try {

            const apiUrl = process.env.EXPO_PUBLIC_API_URL;

            const response = await fetch(apiUrl + "/chat/get-chats?mobile=0713018095");

            const data = await response.json();

            if (response.ok) {

                setChatData(data);

            } else {

                alert(response.status + " : " + data.msg);
            }

        } catch (err) {
            console.log(err);
        }

    }

    useEffect(() => {
        loadChats();
    }, []);


    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.headerView}>
                <Text style={{ fontSize: 18 }}>User Name</Text>
                <Octicons name="bell" size={20} color="#a1a1a1" />
            </View>

            <View style={styles.searchView}>
                <Octicons name="search" size={20} color="#a1a1a1" />
                <TextInput placeholder='Search' autoFocus={false} />
            </View>

            <FlatList
                data={chatData}
                renderItem={({ item }) => {
                    return (
                        <Pressable style={styles.chatView}>
                            <Image
                                source={{ uri: "https://cdn-icons-png.flaticon.com/512/4140/4140073.png" }}
                                style={styles.profilePic}
                            />
                            <View style={{ gap: 3 }}>
                                <Text style={styles.nameTxt}>{item.user.fname +" "+ item.user.lname}</Text>
                                <Text style={styles.msgTxt}>Hello😍</Text>
                            </View>
                            <Text style={styles.time}>10:20 PM</Text>
                        </Pressable>
                    );
                }}
            />





        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 10,
        gap: 15,
        backgroundColor: "white",
        flex: 1
    },
    headerView: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
    },
    searchView: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f3f3f3",
        paddingHorizontal: 15,
        borderRadius: 50,
        gap: 5,
    },
    profilePic: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    chatView: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        paddingBottom:15,
    },
    msgTxt: {
        fontSize: 14,
        color: "#a1a1a1"
    },
    nameTxt: {
        fontSize: 16,
        fontWeight: "600"
    },
    time: {
        flex: 1,
        textAlign: 'right',
        color: "#979797"
    }
});