import { Image, StyleSheet, Text, View } from "react-native";

interface PizzaCardItemProps {
  id: number;
  image: string;
  name: string;
  ingredient: string;
  price: number;
}

export default function PizzaCardItem({ id, image, name, ingredient, price }: PizzaCardItemProps) {
  return (
    <View key={id} style={styles.pizzaCard}>
      <Image source={{ uri: image }} alt="pizza image" style={styles.pizaImg} />
      <View style={{ display: "flex", gap: 4, backgroundColor: "#f7f7f7" }}>
        <Text style={styles.subTitle}>{name}</Text>
        <Text>{ingredient}</Text>
        <Text style={styles.price}>Rp.{price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pizzaCard: {
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    borderRadius: 16,
    gap: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  pizaImg: {
    // width: 120,
    // height: 120,
    width: "35%",
    aspectRatio: 1,
    objectFit: "cover",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
