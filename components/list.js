import React from "react";
import FormList from "./formlist";

const List = (props) => {
  const { list, handleEdit } = props;
  return (
    <div>
      <div className="list">
        {list.title} <br />
        {list.quantity} <br />
        {list.price}
        <div className="button-list">
          <button onClick={() => handleEdit(FormList.id)}>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default List;
