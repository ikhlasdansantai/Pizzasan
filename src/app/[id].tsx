import products from "@/assets/data/products";
import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, Image, StyleSheet, Button, Pressable, ScrollView } from "react-native";
import { useState } from "react";

export default function ProductId() {
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState("M");

  const filterPizzaItem = products.find((product) => product?.id?.toString() === id);
  const { id: pizzaId, name, image, price, ingredient } = filterPizzaItem ?? { id: 404, name: "Pizza Not Found", image: undefined, price: 696969, ingredient: "not found either" };
  const pizzaSizes = ["XL", "L", "M", "P"];

  if (!ProductId) return <Text>Product Not Found :(</Text>;

  return (
    <ScrollView>
      <Stack.Screen options={{ title: "Pizza Details" }} />

      <View>
        <Image source={{ uri: image }} alt="pizza pict" style={styles.pizzaImage} resizeMode="contain" />
        <View style={styles.container}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quod libero facilis veniam aliquid culpa earum sed ipsa possimus quis!</Text>

          <View style={{ display: "flex", flexDirection: "column", rowGap: 10, marginTop: 20 }}>
            <Text style={styles.text}>
              Ingredients: <Text style={{ fontWeight: "700" }}>{ingredient}</Text>
            </Text>
            <Text>
              Price: <Text style={{ fontWeight: "700" }}>{price}</Text>
            </Text>
          </View>

          <Text style={{ fontSize: 18, marginTop: 30, fontWeight: "bold" }}>Choose Your Pizza Size</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            {pizzaSizes.map((size) => (
              <Pressable onPress={() => setSelectedSize(size)} key={size} style={[styles.sizesContainer, { backgroundColor: selectedSize === size ? "#fb9e19" : "white" }]}>
                <Text style={[styles.sizesText, { color: selectedSize === size ? "black" : "grey" }]}>{size}</Text>
              </Pressable>
            ))}
          </View>

          {/* SOON, harus cari asset nya dulu, males ey:( */}
          {/* <Text style={{ fontSize: 18, marginTop: 30, fontWeight: "bold" }}>Choose The One You Want To Add</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            {pizzaSizes.map((size) => (
              <Pressable onPress={() => setSelectedSize(size)} key={size} style={[styles.sizesContainer, { backgroundColor: selectedSize === size ? "#fb9e19" : "white" }]}>
                <Text style={[styles.sizesText, { color: selectedSize === size ? "black" : "grey" }]}>{size}</Text>
              </Pressable>
            ))}
          </View> */}

          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Add To Cart</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,

    marginTop: 16,
    display: "flex",
    flexDirection: "column",
    rowGap: 10,
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    lineHeight: 22,
  },
  pizzaImage: {
    marginTop: 16,
    width: "100%",
    height: 250,
  },
  sizesContainer: {
    marginTop: 10,
    backgroundColor: "#e7e7e7",
    width: 60,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  sizesText: {
    fontWeight: "700",
    fontSize: 18,
  },
  button: {
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#fb9e19",
    padding: 16,
    borderRadius: 10,
  },
  buttonText: {
    backgroundColor: "#fb9e19",
    alignItems: "center",
    color: "white",
  },
});
