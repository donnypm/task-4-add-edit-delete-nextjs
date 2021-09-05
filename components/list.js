import React from "react";

const List = (props) => {
  const { list, handleEdit, handleDelete } = props;
  return (
    <div>
      <div className="list">
        {list.title} <br />
        {list.quantity} <br />
        {list.price}
        <div className="button-list">
          <button onClick={() => handleEdit(list)}>Edit</button>
          <button onClick={() => handleDelete(list)}>Delete</button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default List;
