import React, { useState } from "react";
import HeaderTop from "../HeaderTop/HeaderTop";
import Header from "../Header/Header";
import FilterBar from "../FilterBar/FilterBar";
import Cards from "../CardComponent/Cards";
import LeftSide from "../LeftSide/LeftSide";

const Home = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div style={styles.home}>
      <HeaderTop />
      <Header />
      <br />
      <FilterBar
        toggleFilterVisibility={toggleFilterVisibility}
        isFilterVisible={isFilterVisible}
      />
      <div style={styles.content}>
        {isFilterVisible && (
          <div style={styles.leftSide}>
            <LeftSide />
          </div>
        )}
        <div
          style={{
            ...styles.cards,
            ...(isFilterVisible ? {} : styles.noFilter),
          }}
        >
          <Cards />
        </div>
      </div>
    </div>
  );
};

const styles = {
  home: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  content: {
    display: "flex",
    width: "100%",
    maxWidth: "1216px",
    justifyContent: "space-between",
  },
  leftSide: {
    width: "280px",
    marginRight: "24px",
  },
  cards: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
    gap: "24px",
    justifyContent: "center",
  },
  noFilter: {
    marginLeft: "0",
  },
};

export default Home;
