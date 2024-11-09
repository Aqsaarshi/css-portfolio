"use client";
import React, { useState } from "react";
import styles from "./Contact.module.css"; // Import the CSS module

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessageSent(true); // Show confirmation message
  };

  return (
    <div id="Contact">
      <section className="text-gray-600 body-font relative bg-6b46c1">
        <div
          className={`${styles.container} mx-auto flex sm:flex-nowrap flex-wrap`}
        >
          <div
            className="lg:w-2/3 md:w-1/2   bg[215, 20%, 65%]
 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
          >
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="Google Map Location"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924247.142545871!2d66.49599056601762!3d25.191740544180128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1729428400509!5m2!1sen!2s"
            />
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">Karachi , Pakistan </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  aqsaarshi5@gmail.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">03xxxxxxxxx</p>
              </div>
            </div>
          </div>
          <div
            className={`${styles.rightSection} flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0`}
          >
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Contact
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Feel free to contact
            </p>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.formInput}
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.formInput}
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.formInput}
                  rows={4}
                />
              </div>
              <button type="submit" className={styles.button}>
                Send Message
              </button>
            </form>

            {messageSent && (
              <p className={styles.confirmationMessage}>
                Your message has been sent!
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
