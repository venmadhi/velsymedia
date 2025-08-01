import React, { useState } from 'react';
import './Issueform.css';
export default function CustomerSupportForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [query, setQuery] = useState('');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleSubjectChange(event) {
    setSubject(event.target.value);
  }

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
    setName('');
    setEmail('');
    setSubject('');
    setQuery('');
  }

  return (
    <div className="formBox">
      <h2 className="title">Customer Support Form</h2>
      <form onSubmit={handleFormSubmit}>
        <p className="name">Name</p>
        <input
          className="inputName"
          type="text"
          value={name}
          onChange={handleNameChange}
          required
        />

        <p className="email">Email</p>
        <input
          className="inputEmail"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <p className="subject">Subject</p>
        <input
          className="inputSubject"
          type="text"
          value={subject}
          onChange={handleSubjectChange}
          required
        />

        <p className="query">Description / Query</p>
        <textarea
          className="inputQuery"
          rows="5"
          value={query}
          onChange={handleQueryChange}
          required
        ></textarea>

        <button className="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
