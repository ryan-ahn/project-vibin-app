import { Pressable, Text, View } from "react-native";

import { useRouter } from "@hooks/useRouter";
import { useModalStore } from "@stores/modal";
import { flex } from "@theme/styles";

/**
 * ===============================
 * Home 스크린
 * ===============================
 */
const HomeScreen = () => {
  // hooks
  const { openModal } = useModalStore();
  const { routeToSample } = useRouter();
  // render
  return (
    <View style={[flex.full, flex.center]}>
      <Pressable onPress={() => routeToSample("123")}>
        <Text>Go to Sample</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          openModal({
            title: "Modal",
            description: "This is a modal",
            primaryButton: {
              text: "Close",
              onClickFunction: () => {
                console.log("Close");
              },
            },
          });
        }}>
        <Text>Open Modal</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
