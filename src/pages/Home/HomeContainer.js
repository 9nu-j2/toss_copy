import React from "react";
import HomePresenter from "./HomePresenter";

const HomeContainer = ({ navigation }) => {
  return <HomePresenter {...{ navigation }} />;
};

export default HomeContainer;
