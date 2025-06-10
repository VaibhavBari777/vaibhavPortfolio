import React from 'react';

const Contacts = () => {
  return (
    <section
      id="contact"
      className="p-4 border-white border-gray-400 rounded  animate-gradient bg-black text- white "
    >
      <h2 className=" text-white text-3.5xl   animation-bouncing text-left ">Contact</h2>
      <br>
      </br>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-lg">
        <p className="text-2xl text-white text-left-1/2"><strong>Phone:</strong> 7249833471</p>
        <p className="text-2xl text-white text-right-1/2"><strong>Email:</strong> <a href="mailto:vaibhavbari999@gmail.com" className="underline hover:text-gray-500">vaibhavbari999@gmail.com</a></p>
        <p className="text-2xl text-white text-left-1/2 "><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/vaibhav-r-bari-a8a03b258/" target="_blank" rel="noreferrer" className="underline hover:text-gray-500">LinkedIn</a></p>
        <p className="text-2xl text-white text-right-1/2"><strong>Address:</strong> Shirpur, Maharashtra 425002</p>
      </div>
    </section>
  );
};

export default Contacts;
