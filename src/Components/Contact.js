import React, { useEffect } from "react";
import "../styles/Contact.css";
import Footer from "./Footer";


function Contact() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Perform form submission logic
  //   console.log(formData);
  //   // Reset form after submission
  //   setFormData({
  //     name: "",
  //     email: "",
  //     subject: "",
  //     message: "",
  //   });
  // };

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((element) => {
      element.classList.add("fade-in-animation");
    });
  }, []);

  return (
    <div className="contact" id="contact">
      <h1 className="fade-in">Contact Me</h1>
      <form className="fade-in" action="mailto:gauravcodes123@gmail.com" method="post" encType="text/plain" autoComplete="on">
        <div className="form-group">
          <label htmlFor="name"></label>
          <input
          placeholder="Name"
            type="text"
            name="name"
            id="name"
            // value={formData.name}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input
          placeholder="Email"
            type="email"
            name="email"
            id="email"
            // value={formData.email}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject"></label>
          <input
          placeholder="Subject"
            type="text"
            name="subject"
            id="subject"
            autoComplete="off"
            // value={formData.subject}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message"></label>
          <textarea
          placeholder="Message"
            name="message"
            id="message"
            rows="5"
            // value={formData.message}
            // onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <Footer section=""/>
    </div> 
  );
}

export default Contact;
