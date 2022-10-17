import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import contact data
import { contact } from "../data";
import { FiSend } from "react-icons/fi";

const Contact = () => {

  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [subject,setSubject] = useState("");
  const [message,setMessage] = useState("");

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kfbjrjh",
        "template_ds5622n",
        formRef.current,
        "721MdCSoGggK-8264"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")

        toast.success("Mail Send Successfully",toastOptions)

  };
  return (
    <section className="section bg-tertiary" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block border-b-4 border-gray-600">
            Contact me
          </h2>
          <p className="subtitle">
            Submit the Form to get in touch with me. Else you can reach out via
            other contact detials given below.
          </p>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1 text-paragraph">{subtitle}</p>
                    <p className="text-accent font-normal ">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            className="space-y-8 w-full max-w-[780px]"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <div className="flex gap-8">
              <input
                className="input"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="user_name"
                required
              />
              <input
                className="input"
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="user_email"
                required
              />
            </div>
            <input
              className="input"
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              name="user_subject"
              required
            />
            <textarea
              className="textarea"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              required
            ></textarea>
            <button className="btn btn-lg bg-accent hover:bg-secondary-hover">
              Send message&nbsp;&nbsp; <FiSend size={20} />
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </section>
  );
};

export default Contact;
