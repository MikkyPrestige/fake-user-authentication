// REGISTER COMPONENT: This component is for the form to register with the company in the app

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/booking.css";

const Booking = () => {
  // State for the form
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    businessNumber: "",
    businessAddress: "",
    businessType: "",
    OrderMessage: "",
  });

  // State for the errors
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State for the success message
  const [successMessage, setSuccessMessage] = useState("");

  // Function to handle the form
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form reset after values are validated to be true
  const handleReset = () => {
    setForm({
      fullName: "",
      email: "",
      phone: "",
      businessName: "",
      businessNumber: "",
      businessAddress: "",
      businessType: "",
      OrderMessage: "",
    });
  };

  // Function to handle the form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    setErrors(validate(form));
    setIsSubmitting(true);
  };

  // Function to validate the form
  const validate = (form) => {
    let errors = {};

    // Validate name
    if (!form.fullName) {
      errors.name = "Name is required";
    } else if (!/^[a-zA-Z ]{2,30}$/.test(form.name)) {
      errors.name = "Name is invalid";
    }

    // Validate email
    if (!form.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Email is invalid";
    }

    // Validate phone
    if (!form.phone) {
      errors.phone = "Phone is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      errors.phone = "Phone is invalid";
    }

    // Validate Order Message
    if (!form.OrderMessage) {
      errors.OrderMessage = "Order Message is required";
    } else if (!/^[a-zA-Z ]{2,30}$/.test(form.OrderMessage)) {
      errors.OrderMessage = "Order Message is invalid";
    }


    return errors;
  };

  // Function to handle the success message
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setSuccessMessage("Form submitted successfully!");
      handleReset();
    }
  }, [errors]);

  return (
    <div className="booking">
      <div className="booking__container">
        <div className="booking__container__left">
          <div className="booking__container__left__text">
            <h1>Book our Services!!!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              quibusdam, quas, voluptatum, voluptatem voluptas quod voluptates
              quia voluptatibus quidem ipsam dolorum. Quisquam, quia. Quod
              voluptates, voluptatibus dolorum repellat quae quas.
            </p>
          </div>
        </div>
        <div className="booking__container__right">
          <div className="booking__container__right__form">
            <h1>Book a free consultation</h1>
            <form onSubmit={handleSubmit}>
              <div className="booking__container__right__form__input">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={form.fullName}
                  onChange={handleForm}
                />
                {errors.fullName && <p>{errors.fullName}</p>}
              </div>
              <div className="booking__container__right__form__input">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleForm}
                />
                {errors.email && <p>{errors.email}</p>}
              </div>
              <div className="booking__container__right__form__input">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleForm}
                />
                {errors.phone && <p>{errors.phone}</p>}
              </div>
              <div className="booking__container__right__form__input">
                <input
                  type="text"
                  name="businessName"
                  placeholder="Business Name"
                  value={form.businessName}
                  onChange={handleForm}
                />
                {errors.businessName && <p>{errors.businessName}</p>}
              </div>
              <div className="booking__container__right__form__input">
                <input
                  type="text"
                  name="businessNumber"
                  placeholder="Business Number"
                  value={form.businessNumber}
                  onChange={handleForm}
                />
                {errors.businessNumber && <p>{errors.businessNumber}</p>}
              </div>
              <div className="booking__container__right__form__input">
                <input
                  type="text"
                  name="businessAddress"
                  placeholder="Business Address"
                  value={form.businessAddress}
                  onChange={handleForm}
                />
                {errors.businessAddress && <p>{errors.businessAddress}</p>}
              </div>
              <div className="booking__container__right__form__input">
                <input
                  type="text"
                  name="businessType"
                  placeholder="Business Type"
                  value={form.businessType}
                  onChange={handleForm}
                />
                {errors.businessType && <p>{errors.businessType}</p>}
              </div>
              <div className="booking__container__right__form__input">
                <textarea
                  name="OrderMessage"
                  placeholder="Order Message"
                  value={form.OrderMessage}
                  onChange={handleForm}
                />
                {errors.OrderMessage && <p>{errors.OrderMessage}</p>}
              </div>
              <div className="booking__container__right__form__input">
                <button type="submit">Submit</button>
              </div>
            </form>
            {successMessage && <p>{successMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;

//   return (
//     <div className="booking">
//       <div className="booking__wrapper">
//         <div className="booking__content">
//           <h1 className="booking__title">Book our Services!!!</h1>
//           <div className="booking__description">
//             <p className="booking__paragraph">
//               While the world has changed a lot over the years, one thing
//               remains the same: everyone needs clean clothes! We have all types
//               of services to meet your needs.
//             </p>
//             <h2 className="booking__head">
//               Fill out the form to book a service with us...
//             </h2>
//             <p>
//               We offer a wide range of services to our customers. We offer
//               pickup and delivery services, wash and fold services, dry cleaning
//               services and more. We are located in Asaba, Delta State, Nigeria.
//               We are open from 9am to 9pm, Monday to Saturday. We are closed on
//               Sundays and public holidays.
//             </p>
//             <p>
//               We have a team of experienced professionals who are dedicated to
//               providing the best service to our customers. We are committed to
//               providing the best service to our customers.
//             </p>
//             <p className="booking__appreciation">
//               Thank you for choosing us. We look forward to serving you.
//             </p>
//           </div>
//         </div>
//         <form className="booking__form" onSubmit={handleSubmit}>
//           <div className="booking__form--group">
//             <label htmlFor="firstName" className="booking__form--label">
//               First Name *
//             </label>
//             <input
//               type="text"
//               name="firstName"
//               id="firstName"
//               placeholder="Enter your First Name"
//               className="booking__form--input"
//               onChange={handleChange}
//               // required
//             />
//             {error.firstName && (
//               <p className="booking__form--error">{error.firstName}</p>
//             )}
//           </div>
//           <div className="booking__form--group">
//             <label htmlFor="lastName" className="booking__form--label">
//               Last Name *
//             </label>
//             <input
//               type="text"
//               name="lastName"
//               id="lastName"
//               placeholder="Enter your Last Name"
//               className="booking__form--input"
//               onChange={handleChange}
//               // required
//             />
//             {error.lastName && (
//               <p className="booking__form--error">{error.lastName}</p>
//             )}
//           </div>
//           <div className="booking__form--group">
//             <label htmlFor="email" className="booking__form--label">
//               Email *
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               placeholder="Enter your Email"
//               className="booking__form--input"
//               onChange={handleChange}
//               // required
//             />
//             {error.email && (
//               <p className="booking__form--error">{error.email}</p>
//             )}
//           </div>
//           <div className="booking__form--group">
//             <label htmlFor="phone" className="booking__form--label">
//               Phone *
//             </label>
//             <input
//               type="tel"
//               name="phone"
//               id="phone"
//               placeholder="Enter your Phone Number"
//               className="booking__form--input"
//               onChange={handleChange}
//               // required
//             />
//             {error.phone && (
//               <p className="booking__form--error">{error.phone}</p>
//             )}
//           </div>
//           <div className="booking__form--group">
//             <label htmlFor="businessName" className="booking__form--label">
//               Business Name (optional)
//             </label>
//             <input
//               type="text"
//               name="businessName"
//               id="businessName"
//               placeholder="Enter your Business Name"
//               className="booking__form--input"
//               onChange={handleChange}
//             />
//           </div>
//           <div className="booking__form--group">
//             <label htmlFor="businessAddress" className="booking__form--label">
//               Business Address (optional)
//             </label>
//             <input
//               type="text"
//               name="businessAddress"
//               id="businessAddress"
//               placeholder="Enter your Business Address"
//               className="booking__form--input"
//               onChange={handleChange}
//             />
//           </div>
//           <div className="booking__form--group">
//             <label htmlFor="businessPhone" className="booking__form--label">
//               Business Phone (optional)
//             </label>
//             <input
//               type="text"
//               name="businessPhone"
//               id="businessPhone"
//               placeholder="Enter your Business Phone"
//               className="booking__form--input"
//               onChange={handleChange}
//             />
//           </div>
//           <div className="booking__form--group">
//             <label htmlFor="order" className="booking__form--label">
//               Tell us about your laundry needs *
//             </label>
//             <textarea
//               name="order"
//               id="order"
//               cols="30"
//               rows="5"
//               placeholder="Enter your laundry needs"
//               className="booking__form--input"
//               onChange={handleChange}
//               // required
//             ></textarea>
//             {error.order && (
//               <p className="booking__form--error">{error.order}</p>
//             )}
//           </div>
//           <button onClick={resetForm} className="booking__form--button">Submit</button>
//           {success && (
//           <p className="booking__form--success">
//             Your order is received and been fast tracked.
//             <span>Thank you for choosing us.</span>
//           </p>
//         )}
//         </form>
//       </div>
//       <Link to="/" className="booking__link">
//         Back
//       </Link>
//     </div>
//   );
// };

// export default Booking;
