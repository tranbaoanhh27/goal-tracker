import { StyleSheet, TextInput, Button, Modal, View, Image } from "react-native";
import { useState } from "react";

const AddGoalModal = ({ onAddGoal = (goalText) => {}, onCancel = () => {}, visible = false }) => {
    const [goalInput, setGoalInput] = useState("");

    return (
        <Modal visible={visible} transparent={true} animationType="slide">
            <View style={styles.container}>
                <View style={styles.modal}>
                    <Image source={require("../assets/images/goal.png")} style={styles.image} />
                    <TextInput
                        style={styles.addGoalInput}
                        placeholder="Enter your goal..."
                        value={goalInput}
                        onChangeText={(text) => setGoalInput(text)}
                    />
                    <View style={styles.buttonContainer}>
                        <Button title="Cancel" onPress={onCancel} color="#ff007d" />
                        <Button title="Add Goal" onPress={() => onAddGoal(goalInput)} color="#c538f2" />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        backgroundColor: "#6f00c6",
        height: "50%",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: "10%",
        borderTopStartRadius: 24,
        borderTopEndRadius: 24,
        borderWidth: 3,
        borderColor: "#350060",
    },

    container: {
        flex: 1,
        justifyContent: "flex-end",
    },

    image: {
        width: 100,
        height: 100,
        marginBottom: 32,
    },

    addGoalInput: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#cccccc",
        backgroundColor: "#e8b7ff",
        color: "black",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
    },

    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 16,
        width: "100%",
    },
});

export default AddGoalModal;
