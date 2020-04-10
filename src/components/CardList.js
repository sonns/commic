import React from "react";
import Card from "./Card";

const CardList = ({ comics }) => {
  console.log("CardList");
  return (
    <div>
      {comics.map((comic, i) => {
        return (
          <Card
            key={i}
            id={comics[i].id}
            title={comics[i].title}
            body={comics[i].body}
          />
        );
      })}
    </div>
  );
};

export default CardList;
