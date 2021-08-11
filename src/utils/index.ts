/* eslint-disable global-require */
import { CardDataType } from "../redux/reducers/card/types";
import { imagesType } from "./types";

export const shuffle = (array: CardDataType) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
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

const getDataItem = (arr: any): CardDataType => {
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
    case "simpsons":
      return getDataItem(simpsonsImages);
    case "pawPatrol":
      return getDataItem(pawPatrolImages);
    default:
      return [];
  }
};
