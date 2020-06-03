import React from "react";
import item1 from "../img/collections/collections1.jpg";
import item2 from "../img/collections/collections2.jpg";
import item3 from "../img/collections/collections3.jpg";
const images = [item1, item2, item3];

export const Collection = () => (
  <section className="collection">
    <h3>Kolleksiyalar</h3>
    <div className="items">
      <Item item={item1} name="Text 1" />
      <Item item={item2} name="Text 2" />
      <Item item={item3} name="Text 3" />
    </div>
  </section>
);

const Item = ({ item, name }) => (
  <a href="">
    <div className="card">
      <p>{name}</p>
      <img src={item} alt="" />
    </div>
  </a>
);
