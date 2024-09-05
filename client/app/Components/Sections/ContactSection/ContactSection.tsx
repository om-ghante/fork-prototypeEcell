"use client";  
import { useState, ChangeEvent, FormEvent } from 'react';
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import React from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5000/send-mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();
    if (data.success) {
      alert('Email sent successfully!');
    } else {
      alert('Failed to send email.');
    }
  };

  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-2 bg-2 overflow-hidden">
      <div className="relative pl-6 pr-6 lg:pr-0 md:pl-8 lg:pl-16 xl:pl-[18rem] py-[6rem] text-white z-20">
        <h4 className="py-2 px-4 text-sm uppercase md:font-semibold md:text-base mb-4 rounded-tl-[12px] rounded-br-[12px] gradient-purple">
          Reach out to us
        </h4>
        <h2 className="font-bold text-xl md:text-4xl">
          To get instant guidance and support, please contact us.
        </h2>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full p-4"
              value={formData.name} 
              onChange={handleChange} 
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-4"
              value={formData.email} 
              onChange={handleChange} 
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              className="w-full p-4 resize-none"
              value={formData.message} 
              onChange={handleChange} 
              rows={6}
            />
          </div>
          <button
            type="submit"  
            className="bg-purple-500 text-white font-semibold py-4 rounded-md
            hover:bg-purple-500/90 transition-all duration-200 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="relative z-20 hidden lg:inline-block">
        <Image
          src="/images/vcba.jpg"
          width={500}
          height={500}
          alt="Engineer"
          className="object-cover w-full h-full absolute top-0 left-[3rem]"
        />
      </div>
      <BackgroundBeams />
    </section>
  );
}
