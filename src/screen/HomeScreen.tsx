import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const HomeScreen =  () => {
    const navigation = useNavigation();
    const onPressSearch = () => {
        navigation.navigate("Search");
    }

    const onPressProfile = () => {
        navigation.navigate("Profile");
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.bodyText}>Home Screen</Text>
            </View>
            <View style={styles.navigationContainer}>
                <TouchableOpacity onPress={onPressProfile} style={styles.button}>
                    <Text style={styles.bodyText}>Go to Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressSearch} style={styles.button}>
                    <Text style={styles.bodyText}>Go to Search</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex:1,
        marginVertical: 10,
        alignItems: 'center'
    },
    bodyText: {
        fontSize: 20,
    },
    navigationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 20,
    },
    button: {
        backgroundColor: 'blue',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 20,
    }
});

export default HomeScreen;