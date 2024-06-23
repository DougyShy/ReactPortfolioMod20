import { useState } from 'react';
import './style.css';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers.js';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setmessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setmessage(inputValue);
    }
  };

  const handleBlur = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputValue == '') {
      if (inputType == 'userName') {
        alert('The name field cannot be left empty.');
      } else if (inputType == 'email') {
        alert('The email field cannot be left empty.');
      } else {
        alert('The message field cannot be left empty.');
      }
    }
  };

  const handleContactSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!userName || !message) {
      setErrorMessage("Name, email, or message is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
    } else if (!validateEmail(email)) {
      setErrorMessage('Email address seems invalid');
      return;
    }
  


    // CAN BE USED LATER TO APPROVE A message or password
    /*
    if (!checkmessage(message)) {
      setErrorMessage(
        `Choose a more secure message for the account: ${userName}`
      );
      return;
    }
    alert(`Hello ${userName}`);
  */

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    alert(`Thank you ${userName}!! Your message has been sent...`);
    setUserName('');
    setmessage('');
    setEmail('');
  };

  return (
    <div className="container-fluid text-center bgColor">
      <h1>Contact Me</h1>
      <form className="form" onSubmit={handleContactSubmit}>
        
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
          onBlur={handleBlur} 
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          onBlur={handleBlur}
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="textarea"
          placeholder="message"
          onBlur={handleBlur}
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
           <p className="error-text m-0">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
