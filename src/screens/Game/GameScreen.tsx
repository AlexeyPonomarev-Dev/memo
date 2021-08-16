import React from "react";
import { BottomModal } from "../../components/containers/BottomModal";
import { CardBoard } from "../../components/containers/CardBoard";

const GameScreen = () => {
  return (
    <>
      <CardBoard />
      <BottomModal />
    </>
  );
};

export { GameScreen };
