import React from "react";
import Card from "../../components/Card";
import Search from "../../components/Search";
import VSCodeShortcuts from "../../components/VSCodeShortcuts";
import Goals from "../../components/Goals";
import Counter from "../../components/Counter";

const Home = () => {
  return (
    <div>
      <h1 className="text-center">{/* style={(paddingTop: "30%")}> */}</h1>

      <div>
        <Card />
        <Search />
        <VSCodeShortcuts />
        <Goals />
        <Counter />
      </div>
    </div>
  );
};

export default Home;
