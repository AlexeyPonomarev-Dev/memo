import { ImageRequireSource } from "react-native";

export interface Props {
  id: number;
  value: ImageRequireSource;
  opened: boolean;
  size: { width: number; height: number };
  gameStarted: boolean;
}
