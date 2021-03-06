import React, { useState } from "react";

import { validateEmail } from "../../helpers/emailCheck";

function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submit, setSubmit] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, subject, message } = formState;

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState }),
    })
      .then((data) => {
        console.log(data);
        setSubmit(true);
      })
      .catch((error) => alert(error));
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage("Your email is invalid!");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(
          `${e.target.name[0].toUpperCase() + e.target.name.substring(1, e.target.name.length)} is required!`
        );
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <div className="my-10 flex flex-col md:flex-row">
      <div className="w-full md:w-2/3">
        <form
          name="contact"
          method="post"
          className="flex flex-col w-2/3 mx-auto"
          onSubmit={handleSubmit}
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name">Name</label>
          <input
            className="transition duration-200 shadow-sm hover:border-blue-500 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full h-8 p-2 sm:text-sm border border-blue-300 rounded-md"
            name="name"
            type="text"
            required
            defaultValue={name}
            onBlur={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            className="transition duration-200 shadow-sm hover:border-blue-500 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full h-8 p-2 sm:text-sm border border-blue-300 rounded-md"
            name="email"
            type="text"
            required
            defaultValue={email}
            onBlur={handleChange}
          />
          <label htmlFor="subject">Subject</label>
          <input
            className="transition duration-200 shadow-sm hover:border-blue-500 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full h-8 p-2 sm:text-sm border border-blue-300 rounded-md"
            name="subject"
            type="text"
            required
            defaultValue={subject}
            onBlur={handleChange}
          />
          <label htmlFor="message">Message</label>
          <textarea
            className="transition duration-200 shadow-sm hover:border-blue-500 resize-none focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full h-20 p-2 sm:text-sm border border-blue-300 rounded-md"
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            required
          ></textarea>
          {errorMessage && (
            <div>
              <p className="text-red-500">{errorMessage}</p>
            </div>
          )}
          {submit && (
            <div>
              <p className="text-green-500">Success! I will reach out to you in a moment.</p>
            </div>
          )}
          <button
            type="submit"
            className="w-20 h-10 my-3 transform scale-90 flex justify-center group self-end items-center rounded-lg transition duration-200 border-t-0 border-b-2 active:border-b-0 active:bg-green-400 hover:bg-blue-400 hover:border-b-3 border-blue-700 bg-blue-500 shadow-glowBlue active:shadow-glowGreen"
          >
            <i className="fas fa-stream mb-1 text-sm text-gray-700 group-hover:text-green-700 transition duration-200 transform -rotate-12 translate-y-1"></i>
            <i className="far fa-envelope mb-1 text-2xl text-gray-700 group-hover:text-green-700 ml-1 transition duration-200 transform -rotate-12"></i>
          </button>
        </form>
        <div className="flex mx-auto justify-around w-full py-2">
          <a
            className="px-4 py-2 bg-purple-500 text-white rounded-xl shadow-glowPurp focus:ring hover:bg-purple-800 transition duration-150 transform hover:scale-105 hover:shadow-lg"
            href="https://github.com/AbhiBiju/"
          >
            Github
          </a>
          <a
            className="px-4 py-2 bg-purple-500 text-white rounded-xl shadow-glowPurp focus:ring hover:bg-purple-800 transition duration-150 transform hover:scale-105 hover:shadow-lg"
            href="https://www.linkedin.com/in/abhinavbiju/"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="flex flex-col md:w-1/3 mx-20 my-5 text-center">
        <h2>My Contact Info</h2>
        <div>
          <p>Email: abhinavbiju29@gmail.com</p>
          <p>Phone: (305) 587-7032</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
