import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Form from "../components/form";
import React, { useState } from "react";
import FormList from "../components/formlist";
import data from "../data-dummy/data.json";
import Header from "../components/header";
import list from "../components/list";

export default function Home() {
  const [formList, setFormList] = useState(data);

  const [isUpdate, setIsUpdate] = useState({ id: null, status: false });

  const [userInput, setUserInput] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputQuantity, setInputQuantity] = useState("");
  const [inputPrice, setInputPrice] = useState("");

  const handleChangeTitle = (e) => {
    setInputTitle(e.currentTarget.value);
  };

  const handleChangeQuantity = (e) => {
    setInputQuantity(e.currentTarget.value);
  };

  const handleChangePrice = (e) => {
    setInputPrice(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(userInput);
    setUserInput("");
  };

  const addData = (userInput) => {
    let copy = [...formList];

    if (inputTitle.title === "") {
      return false;
    }
    if (inputQuantity.quantity === "") {
      return false;
    }
    if (inputPrice.price === "") {
      return false;
    }

    if (isUpdate.status) {
      copy.forEach((formList) => {
        if (formList.id === isUpdate.id) {
          formList.title = inputTitle.title;
          formList.quantity = inputQuantity.quantity;
          formList.price = inputPrice.price;
        }
      });
    } else {
      copy = [
        ...copy,
        {
          id: formList.length + 1,
          title: inputTitle,
          quantity: inputQuantity,
          price: inputPrice,
        },
      ];
    }

    setIsUpdate({ id: null, status: false });
    setFormList(copy);
    setInputTitle("");
    setInputQuantity("");
    setInputPrice("");
  };

  const handleEdit = (id) => {
    let copy = [...formList];
    let foundData = copy.find((formList) => formList.id === id);
    setFormList({
      title: foundData.title,
      quantity: foundData.quantity,
      price: foundData.price,
    });
    setIsUpdate({ id: id, status: true });
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
              onChange={handleChangeTitle}
              value={inputTitle}
            />
          </p>
          <p>
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              className="input"
              onChange={handleChangeQuantity}
              value={inputQuantity}
            />
          </p>
          <p>
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="input"
              onChange={handleChangePrice}
              value={inputPrice}
            />
          </p>
          <button type="button" onClick={handleSubmit} className="button">
            Submit
          </button>
        </form>
      </div>
      <Header />
      <FormList list={list} handleEdit={handleEdit} formList={formList} />
    </div>
  );
}
