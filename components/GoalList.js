import GoalListItem from "./GoalListItem";
import { FlatList } from "react-native";

const GoalList = ({ goals = [{ text: "", uniqueKey: "" }], deleteItem = (uniqueKey) => {} }) => {
    return (
        <FlatList
            data={goals}
            renderItem={(itemData) => (
                <GoalListItem goalText={itemData.item.text} onItemPressed={() => deleteItem(itemData.item.uniqueKey)} />
            )}
            keyExtractor={(item) => item.uniqueKey}
        />
    );
};

export default GoalList;
