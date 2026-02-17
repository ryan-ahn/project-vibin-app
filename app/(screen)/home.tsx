import { Pressable, View } from "react-native";

import Text from "@components/text";
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
  const { routeToSearch } = useRouter();
  // render
  return (
    <View style={[flex.full, flex.center]}>
      <Pressable onPress={() => routeToSearch("123")}>
        <Text variant="heading-3">Go to Sample</Text>
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
        <Text variant="heading-3">Open Modal</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
