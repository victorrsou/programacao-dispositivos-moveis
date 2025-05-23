import { View, FlatList } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

function Grid() {
  const navigation = useNavigation();
  const categorias = [
    "Restaurantes",
    "Bares",
    "Lanchonetes",
    "Pizzarias",
    "Sorveterias",
    "Cafeterias",
    "Padarias",
    "Mercados",
  ];

  return (
    <View>
      <FlatList
        data={categorias}
        numColumns={2}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <View style={{ width: "48%", padding: 8 }}>
            <Button
              mode="contained"
              onPress={() => navigation.navigate("Lojas", { categoria: item })}
            >
              {item}
            </Button>
          </View>
        )}
      />
    </View>
  );
}

export default Grid;