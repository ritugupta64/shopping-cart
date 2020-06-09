import React from "react";
import { ShopCollection } from "../../components/shop-collection/shop-collection";
import { SHOP_DATA } from "../../json/shopping-data";

export const ShopPage = () => {
  return (
    <div>
      <h1>Shop Page</h1>
      <ShopCollection collectedData= {SHOP_DATA} />
    </div>
  );
};
