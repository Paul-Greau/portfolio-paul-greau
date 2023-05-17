/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/classnames-order */

import React, { useState, useRef } from "react";

import emailjs from "@emailjs/browser";

import { styles } from "../assets/styles/styles";

import EarthCanva from "./canvas/Earth";

function Contact() {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const mail = import.meta.env.VITE_APP_EMAILJS_GMAIL_ADD;
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "PG Web Dev",
          from_email: form.email,
          to_email: mail,
          message: form.message,
          phone: form.phone,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Merci. Je reviendrai vers vous dans les plus brefs délais");
          setForm({
            name: "",
            email: "",
            message: "",
            phone: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert(" Veuillez réessayer. Quelque chose n'a pas fonctionné");
        }
      );
  };
  return (
    <section id="contact" className="flex flex-col h-auto sm:flex-row ">
      <div className="bg-secondary w-[100%] h-[50%] mt-[64px] sm:w-[50%] xl:px-40 px-5 mb-5 py-20">
        <h2 className={`${styles.title_black} sm:pt-20`}>
          Contactez moi&nbsp;!
        </h2>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-10">
          <div>
            <label className="sr-only" htmlFor="name">
              Name
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-4 text-sm"
              placeholder="Name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                className="w-full rounded-lg border-black-200 p-4 text-sm"
                placeholder="Email address"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">
                Phone
              </label>
              <input
                className="w-full rounded-lg border-black-200 p-4 text-sm"
                placeholder="Phone Number"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="sr-only" htmlFor="message">
              Message
            </label>

            <textarea
              className="w-full rounded-lg border-black-200 p-4 text-sm"
              placeholder="Message"
              rows="8"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-secondary sm:w-auto"
            >
              {loading ? "Envoie en cours..." : "Envoyer"}
            </button>
          </div>
        </form>
      </div>

      <div className=" bg-primary w-[100%] h-[100vh] mt-[64px] sm:w-[50%] touch-none">
        <EarthCanva />
      </div>
    </section>
  );
}

export default Contact;
