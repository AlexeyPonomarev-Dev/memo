/* eslint-disable global-require */
import { BackHandler, Alert, ImageRequireSource } from "react-native";
import { CardDataType } from "../redux/reducers/game/types";
import { imagesType } from "./types";

export const shuffle = (array: CardDataType) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // eslint-disable-next-line no-param-reassign
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const simpsonsImages = [
  require("../assets/img/simpsons/bart-1.png"),
  require("../assets/img/simpsons/bart-2.png"),
  require("../assets/img/simpsons/bart-3.png"),
  require("../assets/img/simpsons/bart-4.png"),
  require("../assets/img/simpsons/homer-1.png"),
  require("../assets/img/simpsons/homer-2.png"),
  require("../assets/img/simpsons/homer-3.png"),
  require("../assets/img/simpsons/homer-4.png"),
  require("../assets/img/simpsons/liza.png"),
  require("../assets/img/simpsons/maggie.png"),
  require("../assets/img/simpsons/marge.png"),
  require("../assets/img/simpsons/simpsons.png"),
];

const pawPatrolImages = [
  require("../assets/img/paw-patrol/chase.png"),
  require("../assets/img/paw-patrol/everest.png"),
  require("../assets/img/paw-patrol/francios.png"),
  require("../assets/img/paw-patrol/marshal.png"),
  require("../assets/img/paw-patrol/mayorgoodway.png"),
  require("../assets/img/paw-patrol/paltus.png"),
  require("../assets/img/paw-patrol/rider.png"),
  require("../assets/img/paw-patrol/rocky.png"),
  require("../assets/img/paw-patrol/rubble.png"),
  require("../assets/img/paw-patrol/sky.png"),
  require("../assets/img/paw-patrol/tracker.png"),
  require("../assets/img/paw-patrol/zuma.png"),
];

export const imagesTypes: imagesType[] = ["Simpsons", "Paw-Patrol"];

const getDataItem = (arr: ImageRequireSource[]): CardDataType => {
  const data = [];
  for (let i = 0; i < arr.length * 2; i++) {
    const imageIndex = i + 1 > arr.length ? i - arr.length : i;
    data.push({
      id: i,
      value: arr[imageIndex],
      isOpen: false,
    });
  }

  return data;
};

export const getGameData = (type: imagesType): CardDataType => {
  switch (type) {
    case "Simpsons":
      return getDataItem(simpsonsImages);
    case "Paw-Patrol":
      return getDataItem(pawPatrolImages);
    default:
      return [];
  }
};

export const exitAppHandler = () => {
  Alert.alert("Приложение будет закрыто", "Вы действительно хотите выйти?", [
    {
      text: "Отмена",
      onPress: () => null,
      style: "cancel",
    },
    { text: "Выйти", onPress: () => BackHandler.exitApp() },
  ]);
};
