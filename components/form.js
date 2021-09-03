const Form = () => {
  return (
    <div className="form-container">
      <form id="form" className="form">
        <p>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="input"
            value={inputTitle}
          />
        </p>
        <p>
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            className="input"
            value={inputQuantity}
          />
        </p>
        <p>
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="input"
            value={userPrice}
          />
        </p>
        <button type="button" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
