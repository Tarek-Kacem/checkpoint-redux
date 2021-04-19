import React from "react";
import { useDispatch } from "react-redux";


const FilterLink = ({ filter, children }) => {
  const dispatch = useDispatch()
  return (
    <div style={{margin: 5}}>
      <a href="#"
        onClick={e => {
          e.preventDefault();
          dispatch({
            type: "SET_VISIBILLITY_FILTER",
            filter
          })
        }}
      >
        {children}
      </a>
      
    </div>
  );
};

export default FilterLink;
