import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const Home = () => {
  const [read, setRead] = useState(false);
  const handlePress = () => {
    if (!read) {
      setRead(true);
    }
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20 }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ gap: 15 }}>
          <TouchableOpacity
            onPress={handlePress}
            style={{
              flex: 1,
              backgroundColor: read ? "white" : "#D8D4FF",
              width: "96%",
              paddingVertical: 10,
              paddingHorizontal: 15,
              borderRadius: 10,
              gap: 5,
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "600" }}>
                Nischal Pokharel
              </Text>
              <Text>Golpark, Butwal</Text>
            </View>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been...
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
