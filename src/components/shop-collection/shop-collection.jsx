import React from "react";
import { ShopList } from "../shop-list/shop-list";


export const ShopCollection = ({collectedData}) => {
  return collectedData.map((data) => {
    return (
      <div key={data.id}>
        <h2>{data.title.toUpperCase()}</h2>
        <div
          style={{
            display: "flex",
            border: "1px solid #000",
            flexWrap: "wrap",
          }}
        >
          <ShopList categories={data.items} />
        </div>
      </div>
    );
  });
};
