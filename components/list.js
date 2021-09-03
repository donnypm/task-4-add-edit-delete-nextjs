import React from "react";
import formList from "./formlist";

const List = ({ list }) => {
  return (
    <div>
      <div className="list">
        {list.title} <br />
        {list.quantity} <br />
        {list.price}
        <div className="button-list">
          <button onClick={() => handleEdit(formList.id)}>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default List;
