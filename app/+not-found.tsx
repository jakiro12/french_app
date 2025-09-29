import { Text, View } from "react-native";
import styles from '../stylesScreens/index-styles'
import { Link, Stack } from "expo-router";
export default function NotFound() {
  return (
    <>
    <Stack.Screen options={{title:'!Opps, Route nor Found'}}/>
    <View
      style={styles.container}
    >
      <Text>Not found screen</Text>
        <Link href="/">
            Go back!
        </Link>
    </View>
    </>
  );
}
