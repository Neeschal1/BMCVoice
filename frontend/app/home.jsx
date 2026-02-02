import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import fetchdetails from "./api";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [readItems, setReadItems] = useState({});

  useEffect(() => {
    const getData = async () => {
      const result = await fetchdetails();
      if (result) setData(result);
    };
    getData();
  }, []);

  const handlePress = (index, item) => {
    // mark as read
    setReadItems((prev) => ({ ...prev, [index]: true }));

    // navigate with item data
    router.push({
      pathname: "/details",
      params: {
        item: JSON.stringify(item),
      },
    });
  };

  const img =
    "https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/600273998_25753692107569516_949076227462107236_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=T7K2-qx0d9oQ7kNvwE8LtT6&_nc_oc=AdlcE0ROTStbC_FJ3hWJF3KmMpK0Kl8iX-ce4mSpjR1gubJ-781SZekdambf9FoJ53C_0M7zNTMhpbzgNKj6cpXD&_nc_zt=23&_nc_ht=scontent.fbwa1-1.fna&_nc_gid=xdrdQLCDfkUuMvktryhJ8g&oh=00_AftSL07cLu8y_XWR_REViGJzmZ1aH-3Ngl26xrSgzjvXpw&oe=698689CA";

  return (
    <View>
      <View style={{ marginTop: 60, marginLeft: 20, flexDirection: 'row', gap: 10 }}>
        <Image
          source={{ uri: img }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
          }}
        />
        <View>
          <Text style={{ fontSize: 20 }}>Welcome!</Text>
          <Text style={{ fontSize: 20 }}>Dr. Arun Chhetri :)</Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 20 }}
      >
        <View style={{ paddingHorizontal: 10 }}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handlePress(index, item)}
              style={{
                backgroundColor: readItems[index] ? "#fff" : "#D8D4FF",
                padding: 15,
                borderRadius: 12,
                marginBottom: 12,
              }}
            >
              {/* Header */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 6,
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "600" }}>
                  {item.Name}
                </Text>
                <Text style={{ fontSize: 13 }}>{item.Address}</Text>
              </View>

              {/* Content preview (2 lines only) */}
              <Text numberOfLines={2} ellipsizeMode="tail">
                {item.Content}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
