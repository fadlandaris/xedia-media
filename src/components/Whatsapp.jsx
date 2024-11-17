import React from 'react';
import { FaWhatsapp } from "react-icons/fa6";

const Whatsapp = () => {
  const phoneNumber = "+6282328713200";
  const message = "Hello!"; // You can customize the initial message or leave it empty
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappURL} className='p-2 rounded-full bg-green-500 fixed bottom-4 right-4 text-white z-50'>
      <FaWhatsapp className='text-xl'/>
    </a>
  );
};

export default Whatsapp;
