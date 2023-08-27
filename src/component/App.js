import React from "react";
import Header from "./Header";
import Body from "./body";
import Card from "./card";
import Itemlist from "./Itemlist";

export default function App() {

  let cards = Itemlist.map((items) => {

    return( <Card 
         key={items.id} 
         items={items} 
        //  {...items} // this is spread object syntax either use above or this. if you use thid you need to remove all in .items in props ( props.img etc.)

         />);
  });

  return (
    <div className="container">
      <Header />
      <Body />
      <div className="box">{cards}</div>
    </div>
  );
}
