import { Text, useWindowDimensions } from "react-native";

interface TitleTextProps {
  text: string;
}

const TitleText = (props: TitleTextProps) => {
  const { text } = props;
  const { fontScale } = useWindowDimensions();

  return (
    <Text
      style={{
        fontSize: 30 / fontScale,
        color: "#000000",
        fontWeight: "700",
        maxWidth: "95%",
      }}
    >
      {text}
    </Text>
  );
};

export default TitleText;
