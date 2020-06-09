import React from "react";
import {withRouter} from 'react-router-dom'

const MenuList = ({ collection, history, match }) => {
    
  const { title, linkUrl } = collection;
  console.log(history, match)
  return (
    <div
      className="collection"
      onClick={()=>history.push(`${match.url}${linkUrl}`)}
      style={{
        width: "100px",
        height: "100px",
        border: "1px solid",
        float: 'left'
      }}
    >
      <div>{title}</div>
    </div>
  );
};

export default withRouter(MenuList)
