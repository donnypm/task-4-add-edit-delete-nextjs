import React from "react";
import List from "./list";

const FormList = ({ formList }) => {
  return (
    <div>
      {formList.map((list) => {
        return <List list={list} />;
      })}
    </div>
  );
};

export default FormList;
