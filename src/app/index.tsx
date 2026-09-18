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

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Hide the default Expo Router header for this screen */}
      <Stack.Screen options={{ headerShown: false }} />

      {/* Scrollable Content */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Header */}
        <View style={styles.headerRow}>
          <Image
            source={require("@/assets/images/backarrow.png")}
            style={styles.headerIcon}
          />

          <View style={styles.titleGroup}>
            <Text style={styles.header}>Public Profile</Text>
            <Text style={styles.subtext}>jim_davis_garfield</Text>
          </View>

          {/* Invisible spacer keeps the title centered now that the trailing icon was removed */}
          <View style={styles.headerIcon} />
        </View>
        {/* End Profile Header */}

        {/* Avatar & Stats Row */}
        <View style={styles.statsRow}>
          <View style={styles.avatarFrame}>
            <Image
              source={require("@/assets/images/profile.jpg")}
              style={styles.avatarImage}
            />
          </View>

          <View style={styles.statItem}>
            <Text style={styles.boldText}>1,624</Text>
            <Text>posts</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={styles.boldText}>1M</Text>
            <Text>followers</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={styles.boldText}>32</Text>
            <Text>following</Text>
          </View>
        </View>
        {/* End Avatar & Stats Row */}

        {/* Bio Section */}
        <View style={styles.bioSection}>
          <Text style={styles.displayName}>Garfield</Text>
          <Text>Weekly Comics strips by artist Jim Davis</Text>
          <Text>Lasagna enthusiast. Anti Mondays. Napping influencer.</Text>
        </View>
        {/* End Bio Section */}

        {/* Follow & Message Buttons */}
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
        {/* End Follow & Message Buttons */}

        {/* Photo Grid */}
        <View style={styles.gridContainer}>
          {profileGridImages.map((imageSource, index) => (
            <View key={index} style={styles.gridBox}>
              <Image
                source={imageSource}
                style={styles.gridImage}
                resizeMode="cover"
              />
            </View>
          ))}
        </View>
        {/* End Photo Grid */}
      </ScrollView>
      {/* End Scrollable Content */}

      {/* Floating Footer Alert Button */}
      <View style={styles.floatButton}>
        <Button
          title="Alert"
          onPress={() => Alert.alert("Alert Button pressed")}
        />
      </View>
      {/* End Floating Footer Alert Button */}
    </View>
  );
}

// Source images rendered in the photo grid below
const profileGridImages = [
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
  titleGroup: {
    alignItems: "center",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  headerIcon: {
    width: 25,
    height: 25,
  },
  avatarImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  avatarFrame: {
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
  statItem: {
    alignItems: "center",
  },
  bioSection: {
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
    // Slightly under 33% so 3 columns fit alongside the gridContainer gap
    width: "32.2%",
    aspectRatio: 1,
    backgroundColor: "#e1e1e1",
    overflow: "hidden",
  },
  gridImage: {
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
