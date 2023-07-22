import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import AddGoalModal from "./components/AddGoalModal";
import GoalList from "./components/GoalList";

const App = () => {
    const [goals, setGoals] = useState([]);
    const [addGoalModalVisible, setAddGoalModalVisible] = useState(false);

    const handleAddGoal = (goalText) => {
        setGoals((prevGoals) => [
            ...prevGoals,
            {
                uniqueKey: `${goalText}${new Date().toUTCString()}${Math.random()}`,
                text: goalText,
            },
        ]);
        setAddGoalModalVisible(false);
    };

    const deleteGoal = (uniqueKey) => {
        setGoals((prevGoals) => {
            return prevGoals.filter((goal) => goal.uniqueKey !== uniqueKey);
        });
    };

    return (
        <>
            <StatusBar style="light" />
            <View style={styles.appContainer}>
                <View style={styles.addGoalContainer}>
                    <Button title="Add New Goal" color="#6f00c6" onPress={() => setAddGoalModalVisible(true)} />
                </View>
                <AddGoalModal
                    visible={addGoalModalVisible}
                    onAddGoal={handleAddGoal}
                    onCancel={() => setAddGoalModalVisible(false)}
                />
                <View style={styles.goalListContainer}>
                    <GoalList goals={goals} deleteItem={deleteGoal} />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: "5%",
        paddingHorizontal: "5%",
        width: "100%",
    },

    addGoalContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        marginBottom: 24,
    },

    goalListContainer: {
        flex: 8,
    },
});

export default App;
