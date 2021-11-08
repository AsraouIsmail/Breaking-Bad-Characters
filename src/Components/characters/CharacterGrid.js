import React from "react";
import Spinner from "../ui/Spinner";
import CharactemItem from "./CharactemItem";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharactemItem key={item.char_id} item={item}></CharactemItem>
      ))}
    </section>
  );
};

export default CharacterGrid;
