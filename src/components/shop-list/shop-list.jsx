import React from "react";

export const ShopList = ({ categories }) => {
  return categories.filter((item, index) => index < 4).map((itm) => {
    return (
      <div
        key={itm.id}
        style={{maxWidth: '300px', padding: '10px'}}
      >
       
          <h3>{itm.name}</h3>
          <img src={itm.imageUrl} alt={itm.name} />
          <div>{`Price: ${itm.price}`}</div>
      
      </div>
    );
  });
};

