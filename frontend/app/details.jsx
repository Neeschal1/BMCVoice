import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Details = () => {
  const { item } = useLocalSearchParams();
  const data = item ? JSON.parse(item) : null;

  if (!data) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No details available</Text>
      </View>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 20 }}>
      <View style={{ gap: 10 }}>
        <View
          style={{
            backgroundColor: "#D8D4FF",
            paddingVertical: 10,
            borderRadius: 20,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 26, fontWeight: "700", marginBottom: 5 }}>
            {data.Name}
          </Text>

          <Text>{data.Address}</Text>
          <Text style={{ marginBottom: 15 }}>{data.Phone_Number}</Text>
        </View>

        <View
          style={{
            backgroundColor: "white",
            paddingVertical: 10,
            borderRadius: 20,
            alignItems: "center",
            paddingHorizontal: 15,
          }}
        >
          <Text style={{ fontSize: 16, lineHeight: 24, marginTop: 10, marginBottom: 10 }}>{data.Content}</Text>
        </View>

        <View style={{gap: 10}}>
          <View>
            {data.Image_1 ? (
              <Image
                style={{ height: 200, width: "100%", borderRadius: 12 }}
                source={{ uri: data.Image_1 }}
                resizeMode="cover"
              />
            ) : null}
          </View>
          <View>
            {data.Image_2 ? (
              <Image
                style={{ height: 200, width: "100%", borderRadius: 12 }}
                source={{ uri: data.Image_2 }}
                resizeMode="cover"
              />
            ) : null}
          </View>
          <View>
            {data.Image_3 ? (
              <Image
                style={{ height: 200, width: "100%", borderRadius: 12 }}
                source={{ uri: data.Image_3 }}
                resizeMode="cover"
              />
            ) : null}
          </View>
          <View>
            {data.Image_4 ? (
              <Image
                style={{ height: 200, width: "100%", borderRadius: 12 }}
                source={{ uri: data.Image_4 }}
                resizeMode="cover"
              />
            ) : null}
          </View>
          <View>
            {data.Image_5 ? (
              <Image
                style={{ height: 200, width: "100%", borderRadius: 12 }}
                source={{ uri: data.Image_5 }}
                resizeMode="cover"
              />
            ) : null}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Details;
