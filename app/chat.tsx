import { View, Text, StyleSheet, Image, TextInput, Pressable, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from '@expo/vector-icons/Entypo';

export default function Chat() {
    return (
        <SafeAreaView style={style.container}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
            <View style={style.headerView}>
                <Entypo name="chevron-with-circle-left" size={36} color="#333" />
                <Image
                    source={{ uri: "https://cdn-icons-png.flaticon.com/512/4140/4140073.png" }}
                    style={style.profilePic}
                />
                <View style={style.textContainer}>
                    <Text style={style.nameText}>Fname And Lname</Text>
                    <View style={style.statusContainer}>
                        <View style={style.statusBall}></View>
                        <Text style={style.statusText}>Online</Text>
                    </View>
                </View>
            </View>

            <View style={style.bodyView}>
                {/* Sent Message */}
                <View style={style.sendView}>
                    <Text style={style.sendMessage}>what is your 20 ?</Text>
                    <Text style={style.timeText}>10:00 AM</Text>
                </View>

                {/* Received Message */}
                <View style={style.receiveView}>
                    <Text style={style.receiveMessage}>Im in my room</Text>
                    <Text style={style.timeText}>10:02 AM</Text>
                </View>
            </View>

        
                <View style={style.inputView}>
                    <TextInput
                        style={style.input}
                        placeholder="Type a message..."
                    />
                    <Pressable style={style.sendButton}>
                    <Entypo name="paper-plane" size={24} color="#ffffffff" />
                    </Pressable>
                </View>
         </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5"
    },
    headerView: {
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 12, 
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "#eee"
    },
    profilePic: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        marginLeft: 12,
        marginRight: 12
    },
    textContainer: {
        justifyContent: "center"
    },
    nameText: {
        color: "#222",
        fontWeight: "600",
        fontSize: 16
    },
    statusContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 2
    },
    statusText: {
        color: "#4CAF50",
        fontSize: 12,
        fontWeight: "500"
    },
    statusBall: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#4CAF50",
        marginRight: 5
    },
    bodyView: {
        flex: 1,
        padding: 16,
    },
    sendView: {
        maxWidth: "80%",
        backgroundColor: "#DCF8C6",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 12,
        alignSelf: "flex-end",
        borderTopRightRadius: 2,
        alignItems: "flex-end",
        marginBottom: 12, 
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 1
    },
    sendMessage: {
        color: "#333",
        fontSize: 15,
        lineHeight: 20,
        alignSelf: "flex-start"
    },
    receiveView: {
        maxWidth: "80%",
        backgroundColor: "white",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 12,
        alignSelf: "flex-start", 
        borderTopLeftRadius: 2,  
        alignItems: "flex-end",
        marginBottom: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 1
    },
    receiveMessage: {
        color: "#333",
        fontSize: 15,
        lineHeight: 20,
        alignSelf: "flex-start"
    },
    timeText: {
        fontSize: 10,
        color: "#666",
        marginTop: 4,
        alignSelf: "flex-end"
    },

    inputView: {
        backgroundColor: "white",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: "#eee",
        width: "100%",
        flexDirection: "row",
        alignItems: "center"
    },

    input: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 16,
        color: "#333"
    },
    sendButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#1100ffff",
        justifyContent: "center",
        alignItems: "center"
        
    }


});
