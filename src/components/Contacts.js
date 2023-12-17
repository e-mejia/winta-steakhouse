import React from "react";

import "../stylesheets/Contacts.css";

import Ribeye from "../img/Ribeye-Steak-Garlic-Butter.jpg";

export default function Contacts() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    textarea: "",
  });

  function handleChange(event) {
    console.log(event.target.name);
    setFormData((prevInput) => {
      return {
        ...prevInput,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div className="contact">
      <div className="name">
        <h3>winta</h3>
        <p>STEAKHOUSE+BAR</p>
      </div>

      <img src={Ribeye} alt="Ribeye stake" className="ribeye" />

      <h3>Want to learn more about Winta, or share your experience?</h3>
      <fieldset className="fieldset">
        <legend>Contact Us</legend>
        <form>
          <p>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={formData.name}
            />
          </p>
          <p>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
            />
          </p>
          <p>
            <label htmlFor="textarea" className="comments">
              Comments:
            </label>
            <br />
            <textarea
              name="textarea"
              id=""
              cols="125"
              rows="15"
              placeholder="Share your comments"
              onChange={handleChange}
              value={formData.textarea}
            ></textarea>
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>
      </fieldset>
      <p>
        <div className="about-home">
          <a href="/">Home</a>
        </div>
      </p>
    </div>
  );
}
