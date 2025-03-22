import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

function ProdutoScreen() {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.appBar}>
                <Text style={styles.appTitle}>Detalhes do Produto</Text>
            </View>
            <View style={styles.container}>
                <Image style={styles.photo} source={{ uri: "https://picsum.photos/200/300?random=1" }} />
                <Text style={styles.productName}>Nome do Produto</Text>
                <Text style={styles.productDetail}>Características do Produto</Text>
                <View style={styles.sectionQtyPrc}>
                    <View style={styles.sectionButtons}>
                        <TouchableOpacity>
                            <View style={styles.buttonQty}><Text style={styles.textQty}>-</Text></View>
                        </TouchableOpacity>
                        <View style={{marginRight: 16}}><Text style={styles.textQty}>1</Text></View>
                        <TouchableOpacity>
                            <View style={styles.buttonQty}><Text style={styles.textQty}>+</Text></View>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.price}>R$ 99,99</Text>
                </View>
                <TouchableOpacity>
                    <View style={styles.buttonAdd}>
                        <Text style={styles.textAdd}>Adicionar ao Carrinho</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appBar: {
        height: 64,
        backgroundColor: "green",
        padding: 16,
        justifyContent: "center",
        elevation: 3,
        marginBottom: 8
    },
    appTitle: {
        fontSize: 24,
        color: "white"
    },
    container: {
        flex: 1,
        padding: 16
    },
    photo: {
        borderRadius: 8,
        height: 200,
        width: "100%",

    },
    productName: {
        fontSize: 16,
        fontWeight: "600",
        marginVertical: 8,
    },
    productDetail: {
        fontSize: 12,
        color: "gray",
        marginBottom: 64   
    },
    sectionQtyPrc: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    sectionButtons: {
        flexDirection: "row",
        alignItems: "center"
    },
    buttonQty: {
        height: 48,
        width: 48,
        borderRadius: 8,
        backgroundColor: "lightgreen",
        marginRight: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    textQty: {
        fontSize: 24,
        fontWeight: "600"
    },
    price: {
        fontSize: 24,
        color: "green"
    },
    buttonAdd: {
        marginTop: 32,
        borderWidth: 1,
        borderColor: "green",
        borderRadius: 24,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    textAdd: {
        fontSize: 16,
        fontWeight: "600",
        color: "green"
    }
});

export default ProdutoScreen;
