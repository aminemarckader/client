import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const { register, watch, handleSubmit,formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      role="form"
     
    >
      <div className="form-group has-validation">
        <input
          type="text"
          name="username"
          className={`form-control ${errors.username ? 'is-invalid' : ''}`}
          id="name"
          placeholder="Your Name*"
          {...register("username",{ required: true })}
        />
		<div className="invalid-feedback">{errors.username && "First name is required"}</div>
      </div>
      <div className="form-group mt-3">
        <input
          type="email"
          className="form-control"
          name="email"
          id="email"
          placeholder="Your Email*"
          {...register("email",{ required: true })}
        />
		<span>{errors.email && "your email is required"}</span>
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control"
          name="subject"
          id="subject"
          placeholder="Subject*"
          {...register("subject",{ required: true })}
        />
      </div>
      <div className="form-group mt-3">
        <textarea
          className="form-control"
          name="message"
          rows={5}
          placeholder="Message*"
          {...register("message",{ required: true })}
        />
      </div>
      <div className="my-3">
        <div className="loading">Loading</div>
        <div className="error-message" />
        <div className="sent-message">
          Your message has been sent. Thank you!
        </div>
      </div>
      <div className="text-center">
        <button type="submit" title="Send Message">
          Send Message
        </button>
      </div>
    </form>
  );
}

export default Contact;
