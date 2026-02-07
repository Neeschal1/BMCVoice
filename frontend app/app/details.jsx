import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import deletedetails from "./deleteoperation";

const { width } = Dimensions.get("window");

const Details = () => {

  const router = useRouter()

  const { item } = useLocalSearchParams();
  const data = item ? JSON.parse(item) : null;

  const [modalVisible, setModalVisible] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [deletedetail, setDeleteDetail] = useState(false);

  if (!data) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No details available</Text>
      </View>
    );
  }

  // Prepare images array
  const images = [
    data.Image_1,
    data.Image_2,
    data.Image_3,
    data.Image_4,
    data.Image_5,
  ]
    .filter(Boolean)
    .map((uri) => ({ url: uri }));

  const openModal = (index) => {
    setImageIndex(index);
    setModalVisible(true);
  };

  const handleDelete = async () => {
  setDeleteDetail(false);

  const success = await deletedetails(data.id);

  if (success) {
    router.replace("/");
  }
};

  return (
    <View style={{ flex: 1, width: "100%" }}>
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
            <Text>{data.id}</Text>
            <Text style={{ fontSize: 26, fontWeight: "700", marginBottom: 5 }}>
              {data.Name}
            </Text>
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
            <Text style={{ fontSize: 16, lineHeight: 24, marginVertical: 10 }}>
              {data.Content}
            </Text>
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
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <ImageViewer
          imageUrls={images}
          index={imageIndex}
          enableSwipeDown={true}
          onSwipeDown={() => setModalVisible(false)}
        />
      </Modal>
      {/* Delete Confirmation Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={deletedetail}
        onRequestClose={() => setDeleteDetail(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "85%",
              backgroundColor: "white",
              borderRadius: 20,
              padding: 20,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 10 }}>
              Delete Record?
            </Text>

            <Text style={{ fontSize: 15, color: "#555", marginBottom: 20 }}>
              Are you sure you want to delete this record? This action cannot be
              undone.
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                gap: 10,
              }}
            >
              {/* Cancel */}
              <TouchableOpacity
  onPress={() => setDeleteDetail(false)}
  style={{
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#E5E5E5",
  }}
>
  <Text style={{ fontWeight: "600" }}>Cancel</Text>
</TouchableOpacity>

              {/* Confirm Delete */}
              <TouchableOpacity
  onPress={handleDelete}
  style={{
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "red",
  }}
>
  <Text style={{ color: "white", fontWeight: "600" }}>
    Delete
  </Text>
</TouchableOpacity>

            </View>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => {
          setDeleteDetail(true);
        }}
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 20,
          backgroundColor: "red",
        }}
      >
        <Text style={{ color: "white", fontSize: 16, fontWeight: 500 }}>
          Delete record
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;
