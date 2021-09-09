import React from "react";
import { BestResultModal } from "../../components/containers/BestResultModal";
import { BottomModal } from "../../components/containers/BottomModal";
import { CardBoard } from "../../components/containers/CardBoard";

const GameScreen = () => {
  return (
    <>
      <CardBoard />
      <BottomModal />
      <BestResultModal />
    </>
  );
};

export { GameScreen };
