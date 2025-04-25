
{/*
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const [name, setName] = useState("");
  const [gmail, setGmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { name, gmail, message });
  
    setName('')
    setGmail('')
    setMessage('')

    toast.success("Feedback sent successfully !",
      {
        position:"top-center",
        autoClose:3000,
        theme:"dark",
      }
    )

 };
  return (
    
    <div className="min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-6 text-center">Get In Touch</h1>

              <div className="w-full max-w-2xl p-6 border-2 border-orange-500 rounded-lg bg-transparent text-white">

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
    
        <div>
          <label htmlFor="name" className="block mb-1">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Name"
            className="w-full p-2 bg-transparent border border-white rounded outline-none placeholder-white text-white"
          />
        </div>
        <div>
          <label htmlFor="gmail" className="block mb-1">Gmail:</label>
          <input
            id="gmail"
            type="email"
            value={gmail}
            onChange={(e) => setGmail(e.target.value)}
            placeholder="Enter your Gmail"
            className="w-full p-2 bg-transparent border border-white rounded outline-none placeholder-white text-white"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Your Feedback:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Provide your valuable feedback"
            rows="4"
            className="w-full p-2 bg-transparent border border-white rounded outline-none placeholder-white text-white"
          ></textarea>
        </div>
        <button
          type="submit"
          className="mt-4 p-2 bg-orange-500 hover:bg-orange-600 rounded text-black font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
    <ToastContainer/>
  </div>
  );
};

export default Contact;
*/}
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const [name, setName] = useState('');
  const [gmail, setGmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !gmail || !message) {
      toast.error('Please fill all fields!');
      return;
    }

    const templateParams = {
      name: name,
      gmail: gmail,
      message: message,
    };

    emailjs.send(
      'service_g9rxpkk', 
      'template_fd43ye6', 
      templateParams,
      'qTWehmjZslmlOlTds'    
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      toast.success('Email sent successfully!');
      setName('');
      setGmail('');
      setMessage('');
    })
    .catch((error) => {
      console.error('FAILED...', error);
      toast.error('Failed to send email.');
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">

      <h1 className="text-4xl font-bold text-white mb-8">Get in Touch</h1>

    
      <form
        onSubmit={onSubmit}
        className="w-full max-w-2xl border-2 border-orange-500 bg-transparent p-8 rounded-lg flex flex-col gap-6"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="text-white mb-2">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Enter your Name"
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 bg-transparent border border-white rounded outline-none placeholder-white text-white"
            required    />
        </div>

        <div className="flex flex-col">
          <label htmlFor="gmail" className="text-white mb-2">Gmail:</label>
          <input
            type="email"
            id="gmail"
            value={gmail}
            placeholder="Enter your Gmail"
            onChange={(e) => setGmail(e.target.value)}
            className="w-full p-2 bg-transparent border border-white rounded outline-none placeholder-white text-white"
            required  />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-white mb-2">Your Feedback:</label>
          <textarea
            id="message"
            value={message}
            placeholder="Provide your valuable feedback"
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 bg-transparent border border-white rounded outline-none placeholder-white text-white"
              required      />
        </div>

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full mt-4 transition-all duration-300"
        >
          Send
        </button>
      </form>
      

    </div>
  );
};

export default Contact;
