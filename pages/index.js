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

  const [isUpdate, setIsUpdate] = useState({ list: null, status: false });

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
    if ((inputTitle === "", inputQuantity === "", inputPrice === "")) {
      return false;
    }

    if (isUpdate.status) {
      updateData();
      alert("Update");
    } else {
      addData();
      alert("Tambah");
    }

    setIsUpdate({ list: null, status: true });
    setUserInput("");
  };

  const addData = () => {
    let add = [...formList];
    add = [
      ...add,
      {
        id: formList.length + 1,
        title: inputTitle,
        quantity: inputQuantity,
        price: inputPrice,
      },
    ];
    setFormList(add);
    setInputTitle("");
    setInputQuantity("");
    setInputPrice("");
    console.log(add);
  };

  const updateData = () => {
    let update = formList.filter((formList) => formList !== list);
    update = [
      ...update,
      {
        id: formList.length + 1,
        title: inputTitle,
        quantity: inputQuantity,
        price: inputPrice,
      },
    ];
    setFormList(update);
    setInputTitle("");
    setInputQuantity("");
    setInputPrice("");
    console.log(update);
  };

  const handleEdit = (list) => {
    setInputTitle(list.title);
    setInputQuantity(list.quantity);
    setInputPrice(list.price);
  };

  const handleDelete = (list) => {
    let filtered = formList.filter((formList) => formList !== list);
    setFormList(filtered);
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
      <FormList
        list={list}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        formList={formList}
      />
    </div>
  );
}
