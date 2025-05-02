import { FAB } from "react-native-paper";
import { View, StyleSheet } from "react-native";

function PlaylistScreen({ navigation }) {
    return (
        <View>
            <View style={styles.containerPlaylist}>
                <FAB icon="play" />
                <View>
                    <Text>Playlist 1</Text>
                    <Text>10 músicas</Text>
                </View>
            </View>
            <View style={styles.containerPlaylist}>
                <FAB icon="play" />
                <View>
                    <Text>Playlist 2</Text>
                    <Text>5 músicas</Text>
                </View>
            </View>
            <View style={styles.containerPlaylist}>
                <FAB icon="play" />
                <View>
                    <Text>Playlist 3</Text>
                    <Text>8 músicas</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerPlaylist: {
        flexDirection: "row",
    }
});

export default PlaylistScreen;
