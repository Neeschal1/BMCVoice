import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, Modal, Dimensions } from "react-native";
import { useLocalSearchParams } from "expo-router";
import ImageViewer from "react-native-image-zoom-viewer";

const { width } = Dimensions.get("window");

const Details = () => {
  const { item } = useLocalSearchParams();
  const data = item ? JSON.parse(item) : null;

  const [modalVisible, setModalVisible] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  if (!data) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No details available</Text>
      </View>
    );
  }

  // Prepare images array
  const images = [data.Image_1, data.Image_2, data.Image_3, data.Image_4, data.Image_5]
    .filter(Boolean)
    .map((uri) => ({ url: uri }));

  const openModal = (index) => {
    setImageIndex(index);
    setModalVisible(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 20 }}>
        {/* Header */}
        <View style={{ gap: 10 }}>
          <View
            style={{
              backgroundColor: "#D8D4FF",
              paddingVertical: 10,
              borderRadius: 20,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 26, fontWeight: "700", marginBottom: 5 }}>{data.Name}</Text>
            <Text>{data.Address}</Text>
            <Text style={{ marginBottom: 15 }}>{data.Phone_Number}</Text>
          </View>

          {/* Content */}
          <View
            style={{
              backgroundColor: "white",
              paddingVertical: 10,
              borderRadius: 20,
              alignItems: "center",
              paddingHorizontal: 15,
            }}
          >
            <Text style={{ fontSize: 16, lineHeight: 24, marginVertical: 10 }}>{data.Content}</Text>
          </View>

          {/* Images */}
          <View style={{ gap: 10, marginTop: 10 }}>
            {images.map((img, idx) => (
              <TouchableOpacity key={idx} onPress={() => openModal(idx)}>
                <Image
                  source={{ uri: img.url }}
                  style={{ height: 200, width: "100%", borderRadius: 12 }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Zoomable Image Modal */}
      <Modal visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)}>
        <ImageViewer
          imageUrls={images}
          index={imageIndex}
          enableSwipeDown={true}
          onSwipeDown={() => setModalVisible(false)}
        />
      </Modal>
    </View>
  );
};

export default Details;
