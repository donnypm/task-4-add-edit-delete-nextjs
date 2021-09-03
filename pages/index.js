import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Form from "../components/form";
import React, { useState } from "react";
import FormList from "../components/formlist";
import data from "../data-dummy/data.json";
import Header from "../components/header";

export default function Home() {
  const [formList, setFormList] = useState(data);
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(userInput);
    setUserInput("");
  };

  const addData = (userInput) => {
    let copy = [...formList];
    copy = [
      ...copy,
      {
        id: formList.length + 1,
        title: userInput.title,
        quantity: userInput.quantity,
        price: userInput.price,
      },
    ];
    setFormList(copy);
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
      <FormList formList={formList} />
    </div>
  );
}
