import React, { useState } from 'react';
import './IssueForm.css';

export default function CustomerSupportForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    query: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    setFormData({ name: '', email: '', subject: '', query: '' });
  };

  return (
    <div className="formBox">
      <h2 className="title">Submit a Support Request</h2>
      <form onSubmit={handleSubmit}>

        <p className="name">Name</p>
        <input
          className="inputName"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <p className="email">Email</p>
        <input
          className="inputEmail"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <p className="subject">Subject</p>
        <input
          className="inputSubject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <p className="query">Description / Query</p>
        <textarea
          className="inputQuery"
          name="query"
          rows="5"
          value={formData.query}
          onChange={handleChange}
          required
        />

        <button className="submitBtn" type="submit">Send</button>
      </form>
    </div>
  );
}
