import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Form from "../components/form";
import React, { useState } from "react";
import FormList from "../components/formlist";
import data from "../data-dummy/data.json";
import Header from "../components/header";
import list from "../components/list";
import List from "../components/list";
import { uid } from "uid";

export default function Home() {
  const [formList, setFormList] = useState(data);

  const [isUpdate, setIsUpdate] = useState({ id: null, status: false });

  const [userInput, setUserInput] = useState({
    title: "",
    quantity: "",
    price: "",
  });

  const handleChange = (e) => {
    let data = { ...userInput };
    data[e.target.name] = e.target.value;
    setUserInput(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Oke Bisa");

    if (
      (userInput.title === "",
      userInput.quantity === "",
      userInput.price === "")
    ) {
      return false;
    }

    let data = [...formList];

    if (isUpdate.status) {
      data.forEach((list) => {
        if (list.id === isUpdate.id) {
          list.title = userInput.title;
          list.quantity = userInput.quantity;
          list.price = userInput.price;
        }
      });
    } else {
      data.push({
        id: formList.length + 1,
        title: userInput.title,
        quantity: userInput.quantity,
        price: userInput.price,
      });
    }

    setFormList(data);
    setUserInput({ title: "", quantity: "", price: "" });
  };

  const handleEdit = (list) => {
    setUserInput({
      title: list.title,
      quantity: list.quantity,
      price: list.price,
    });
    setIsUpdate({ id: list.id, status: true });
    console.log(list.id);
  };

  const handleDelete = (list) => {
    let filtered = formList.filter((formList) => formList !== list);
    setFormList(filtered);
    console.log(filtered);
  };

  return (
    <div className="content">
      <Head>
        <title>List</title>
        <meta name="keywords" content="brands"></meta>
      </Head>

      <h2 className={styles.bgh1}>List Form</h2>

      <div className="form-container">
        <form id="form" className="form">
          <p>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="input"
              onChange={handleChange}
              value={userInput.title}
            />
          </p>
          <p>
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              className="input"
              onChange={handleChange}
              value={userInput.quantity}
            />
          </p>
          <p>
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="input"
              onChange={handleChange}
              value={userInput.price}
            />
          </p>
          <button type="button" onClick={handleSubmit} className="button">
            Submit
          </button>
        </form>
      </div>
      <Header />
      <FormList
        list={list}
        formList={formList}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}
