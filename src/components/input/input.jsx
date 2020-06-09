import React from "react";

export const Input = ({ type, name, value, id, handlechange, label }) => {
  return (
    <div style={{marginBottom: '10px'}}>
      {label ? <label htmlFor={id} style={{display:'block'}}>{label}</label> : null}
      <input
        type={type}
        name={name}
        value={value}
        onChange={handlechange}
        id={id}
      />
    </div>
  );
};
