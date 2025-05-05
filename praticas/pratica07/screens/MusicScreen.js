import { FAB } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";

function MusicScreen({ navigation }) {
    return (
        <View>
            <View style={styles.containerMusica}>
                <FAB icon="music"/>
                <View>
                    <Text>Música 1</Text>
                    <Text>Artista 1</Text>
                </View>
            </View>
            <View style={styles.containerMusica}>
                <FAB icon="music"/>
                <View>
                    <Text>Música 2</Text>
                    <Text>Artista 2</Text>
                </View>
            </View>
            <View style={styles.containerMusica}>
                <FAB icon="music"/>
                <View>
                    <Text>Música 3</Text>
                    <Text>Artista 3</Text>
                </View>
            </View>
            <View style={styles.containerMusica}>
                <FAB icon="music"/>
                <View>
                    <Text>Música 4</Text>
                    <Text>Artista 4</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerMusica: {
        flexDirection: "row",
    },
})

export default MusicScreen;