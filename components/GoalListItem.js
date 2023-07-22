import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalListItem = ({ goalText = "", onItemPressed = () => {} }) => {
    return (
        <View style={styles.goalListItem}>
            <Pressable onPress={onItemPressed} android_ripple={styles.pressedItem}>
                <Text style={styles.goalListItemText}>{goalText}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    goalListItem: {
        borderRadius: 8,
        backgroundColor: "#6f00c6",
        marginBottom: 8,
    },

    goalListItemText: {
        padding: 16,
        borderRadius: 8,
        color: "white",
    },

    pressedItem: {
        color: "#4e00a5",
    },
});

export default GoalListItem;
