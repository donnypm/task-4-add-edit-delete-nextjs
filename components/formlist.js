import List from "./list";
import React, { useState } from "react";

const FormList = (props) => {
  const { formList, handleEdit, handleDelete } = props;
  const [inputSearch, setInputSearch] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setInputSearch(e.target.value);
  };

  return (
    <div>
      <div className="search">
        <input
          name={inputSearch}
          type="text"
          placeholder="Search Title Here..."
          onChange={handleChange}
          value={inputSearch}
          className="searchTerm"
        />
      </div>

      {formList
        .filter((list) => {
          if (inputSearch === "") {
            return list;
          } else if (
            list.title.toLowerCase().includes(inputSearch.toLowerCase())
          ) {
            return list;
          }
        })
        .map((list) => {
          return (
            <List
              list={list}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              key={list.id}
            />
          );
        })}
    </div>
  );
};

export default FormList;
