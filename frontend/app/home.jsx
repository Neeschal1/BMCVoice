import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import fetchdetails from "./api";

const Home = () => {
  const [read, setRead] = useState(false);
  const [data, setData] = useState([]);
  const [readItems, setReadItems] = useState({});

  useEffect(() => {
    const getData = async () => {
      const result = await fetchdetails();
      if (result) setData(result);
    };
    getData();
  }, []);

  const handlePress = () => {
    if (!read) {
      setRead(true);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20 }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ gap: 15 }}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handlePress(index)}
              style={{
                backgroundColor: readItems[index] ? "white" : "#D8D4FF",
                width: "96%",
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 10,
                gap: 5,
                alignSelf: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "600" }}>
                  {item.Name}
                </Text>
                <Text>{item.Address}</Text>
              </View>
              <Text>{item.Content}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
