import React from "react";

const List = (props) => {
  const { list, handleEdit, handleDelete } = props;
  return (
    <div>
      <div className="list">
        <div className="p-list">
          <p className="list-title">{list.title} </p>
          <p>{list.quantity} </p>
          <p>{list.price}</p>
        </div>
        <div className="button-list">
          <button onClick={() => handleEdit(list)} className="button-edit">
            Edit
          </button>
          <button onClick={() => handleDelete(list)} className="button-delete">
            Delete
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default List;
