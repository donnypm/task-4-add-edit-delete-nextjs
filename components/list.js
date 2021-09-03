import React from "react";

const List = ({ list }) => {
  return (
    <div>
      <div className="list">
        {list.title} <br />
        {list.quantity} <br />
        {list.price}
        <div className="button-list">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default List;
