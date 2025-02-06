import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail.png'
import {Mail, Phone, MapPinHouse} from 'lucide-react'
import arrow from '../../assets/right-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2e496d04-93ad-4b62-b02b-6be67d16f298");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message <img src={mail_icon} alt=""/></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service.</p>
            <ul>
                <li><Mail className='l_icon'/>  unioncabins@gmail.com</li>
                <li><Phone className='l_icon'/>  +91 86520 05010 | +91 87937 05946</li>
                <li><MapPinHouse className='l_icon'/>  Shop No. E03, Vijay Nagar,<br/> Nallasopara (E) - 401 209</li>
            </ul>
        </div>
        <div className='contact-col'>
          <form onSubmit={onSubmit}>
            <label for="name">Your Name</label>
            <input type="text" name="name" placeholder="Enter your name" required/>
            <label for="name">Phone number</label>
            <input type="tel" name="phone" placeholder="Enter your mobile number" required/>
            <label for="name">Write your messsage</label>
            <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
            <button type="submit" className='btn dark-btn'>Send now<img src={arrow}/></button>
          </form>
          <span>{result}</span>
          </div>
    </div>
  )
}

export default Contact