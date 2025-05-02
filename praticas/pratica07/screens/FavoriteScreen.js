import { FAB } from "react-native-paper";
import { View, StyleSheet } from "react-native";

function FavoriteScreen({ navigation }) {
    return (
        <View>
            <View style={styles.containerFavorito}>
                <FAB icon="music" />
                <View>
                    <Text>Música Favorita 1</Text>
                    <Text>Artista 1</Text>
                </View>
            </View>
            <View style={styles.containerFavorito}>
                <FAB icon="music" />
                <View>
                    <Text>Música Favorita 2</Text>
                    <Text>Artista 2</Text>
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    containerFavorito: {
        flexDirection: "row",
    },
});

export default FavoriteScreen;
