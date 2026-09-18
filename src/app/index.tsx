import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  Image,
  Pressable,
  ScrollView,
} from "react-native";

import { Stack } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* HIDE OLD HEADER */}
      <Stack.Screen options={{ headerShown: false }} />

      {/* SCROLLVIEW */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View style={styles.topIconRow}>
          <Image
            source={require("@/assets/images/backarrow.png")}
            style={styles.plusHeader}
          />

          <View style={styles.topHeader}>
            <Text style={styles.header}>Public Profile</Text>
            <Text style={styles.subtext}>jim_davis_garfield</Text>
          </View>

          <View style={styles.plusHeader} />
        </View>
        {/* HEADER END*/}

        {/* icon + numbers + post .. */}
        <View style={styles.rowsIcons}>
          <View style={styles.whiteCircleIcon}>
            <Image
              source={require("@/assets/images/profile.jpg")}
              style={styles.circleIcon}
            />
          </View>

          <View style={styles.alignItemsCenter}>
            <Text style={styles.boldText}>1,624</Text>
            <Text>posts</Text>
          </View>

          <View style={styles.alignItemsCenter}>
            <Text style={styles.boldText}>1M</Text>
            <Text>followers</Text>
          </View>

          <View style={styles.alignItemsCenter}>
            <Text style={styles.boldText}>32</Text>
            <Text>following</Text>
          </View>
        </View>
        {/* icon + numbers + post .. END*/}

        {/* Text Section */}
        <View style={styles.textUp}>
          <Text style={styles.displayName}>Garfield</Text>
          <Text>Weekly Comics strips by artist Jim Davis</Text>
          <Text>Lasagna enthusiast. Anti Mondays. Napping influencer.</Text>
        </View>
        {/* Text Section END */}

        {/* Buttons Members */}
        <View style={styles.buttonRow}>
          <Pressable
            style={styles.followButton}
            onPress={() => Alert.alert("Follow Button pressed")}
          >
            <Text style={styles.followButtonText}>Follow</Text>
          </Pressable>

          <Pressable
            style={styles.messageButton}
            onPress={() => Alert.alert("Message Button pressed")}
          >
            <Text style={styles.buttonText}>Message</Text>
          </Pressable>
        </View>
        {/* Buttons Members END */}

        {/* 3x4 GRID*/}
        <View style={styles.gridContainer}>
          {gridImages.map((imageSource, index) => (
            <View key={index} style={styles.gridBox}>
              <Image
                source={imageSource}
                style={styles.gridimage}
                resizeMode="cover"
              />
            </View>
          ))}
        </View>
        {/* GRID END */}
      </ScrollView>
      {/* scroll view END */}

      {/* FLOATING FOOTER BUTTON */}
      <View style={styles.floatButton}>
        <Button
          title="Alert"
          onPress={() => Alert.alert("Alert Button pressed")}
        />
      </View>
      {/* FLOATING FOOTER BUTTON END*/}
    </View>
  );
}

const gridImages = [
  require("@/assets/images/garf01.jpg"),
  require("@/assets/images/garf02.jpg"),
  require("@/assets/images/garf03.jpg"),
  require("@/assets/images/garf04.jpg"),
  require("@/assets/images/garf05.jpg"),
  require("@/assets/images/garf06.jpg"),
  require("@/assets/images/garf07.jpg"),
  require("@/assets/images/garf08.jpg"),
  require("@/assets/images/garf09.jpg"),
  require("@/assets/images/garf10.jpg"),
  require("@/assets/images/garf11.jpg"),
  require("@/assets/images/garf12.jpg"),
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingTop: 60,
    paddingHorizontal: 20,
    // Reserves space so the last grid row isn't hidden behind the floating button
    paddingBottom: 110,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
  },
  subtext: {
    color: "#bcbcbc",
  },
  topHeader: {
    alignItems: "center",
  },
  topIconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
  },
  rowsIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  plusHeader: {
    width: 25,
    height: 25,
  },
  circleIcon: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  whiteCircleIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c85e8e",
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  alignItemsCenter: {
    alignItems: "center",
  },
  textUp: {
    marginTop: 15,
    marginBottom: 15,
    gap: 2,
  },
  displayName: {
    fontWeight: "bold",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 20,
  },
  followButton: {
    flex: 1,
    backgroundColor: "#0095F6",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 8,
  },
  followButtonText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#FFFFFF",
  },
  messageButton: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderColor: "#ececec",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 14,
  },

  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 4,
    width: "100%",
  },
  gridBox: {
    // 32.2%
    width: "32.2%",
    aspectRatio: 1,
    backgroundColor: "#e1e1e1",
    overflow: "hidden",
  },
  gridimage: {
    width: "100%",
    height: "100%",
  },
  floatButton: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    // paddingTop/paddingBottom control the button's floating offset from the screen edge
    paddingBottom: 50,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
});
