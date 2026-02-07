import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Image,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import fetchdetails from "./readoperation";

const Home = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [readItems, setReadItems] = useState({});
  const [refreshing, setRefreshing] = useState(false);

  // Fetch data
  const fetchData = async () => {
    try {
      const result = await fetchdetails();
      if (result) setData(result);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Pull-to-refresh
  const onRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };

  // Handle card press
  const handlePress = (index, item) => {
    setReadItems((prev) => ({ ...prev, [index]: true }));

    router.push({
      pathname: "/details",
      params: {
        item: JSON.stringify(item),
      },
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F6F6F6", width: "100%" }}>
      {/* Top Section */}
      <View
        style={{
          marginTop: 60,
          marginLeft: 20,
          flexDirection: "row",
          gap: 12,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/arunchhetri.jpg")}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
          }}
        />
        <View>
          <Text style={{ fontSize: 18, color: "#666" }}>Welcome!</Text>
          <Text style={{ fontSize: 20, fontWeight: "600" }}>
            Dr. Arun Kshetree 🙂
          </Text>
        </View>
      </View>

      {/* List */}
      <ScrollView
        style={{ marginTop: 20 }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#6C63FF"]} // Android
            tintColor="#6C63FF" // iOS
          />
        }
      >
        <View style={{ paddingHorizontal: 12, paddingBottom: 20 }}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handlePress(index, item)}
              activeOpacity={0.8}
              style={{
                backgroundColor: readItems[index] ? "#FFFFFF" : "#D8D4FF",
                padding: 15,
                borderRadius: 14,
                marginBottom: 12,
                elevation: 2,
              }}
            >
              {/* Card Header */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 6,
                }}
              >
                <Text style={{ fontSize: 17, fontWeight: "600" }}>
                  {item.Name}
                </Text>
                <Text style={{ fontSize: 13, color: "#555" }}>
                  {item.Address}
                </Text>
              </View>

              {/* Preview Content */}
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={{ color: "#333", lineHeight: 20 }}
              >
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
