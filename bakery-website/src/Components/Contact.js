import React, { useState } from 'react';
import '../index.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const validateForm = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.message) {
      errors.message = 'Message is required';
    }
    return errors;
  };
  const handleSubmit =async event => {
    event.preventDefault();
    console.log('Form data submitted:', formData);
  // Display the user's message on the page
   
    try {
      const response = await fetch('/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('Thank you for your message!'); // Display a success message
      } else {
        alert('Oops, something went wrong.'); // Display an error message
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Oops, something went wrong.'); // Display an error message
    }
      // Implement form submission or validation here
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Form is valid, you can handle form submission here
      console.log('Form submitted:', formData);
      // Reset form data after submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="contact">
      <h2>Fill this Form please</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder='enter your name'
          value={formData.name}
          onChange={handleInputChange}
        />
        {formErrors.name && <p className="error">{formErrors.name}</p>}
      
        <input
          type="email"
          name="email"
          placeholder='email'
          value={formData.email}
          onChange={handleInputChange}
        />
        {formErrors.email && <p className="error">{formErrors.email}</p>}
        <textarea
          name="message"
          placeholder='enter your message here'
          value={formData.message}
          onChange={handleInputChange}

        />
        {formErrors.message && <p className="error">{formErrors.message}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
