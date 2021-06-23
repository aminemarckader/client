import React from "react";
import { useForm } from "react-hook-form";
import { useToasts } from 'react-toast-notifications'

function Contact() {
  const { register, handleSubmit,formState: { errors } } = useForm();
  const { addToast } = useToasts();
  const onSubmit = (data) => {
    //alert(JSON.stringify(data));
    addToast("Message sent successfully", {
      appearance: 'success',
      autoDismiss: true,
    })
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          name="email"
          id="email"
          placeholder="Your Email*"
          {...register("email",{ required: true })}
        />
		<span className="invalid-feedback">{errors.email && "your email is required"}</span>
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
          name="subject"
          id="subject"
          placeholder="Subject*"
          {...register("subject",{ required: true })}
        />
        	<span className="invalid-feedback">{errors.subject && "the subject is required"}</span>
      </div>
      <div className="form-group mt-3">
        <textarea
          className={`form-control ${errors.message ? 'is-invalid' : ''}`}
          name="message"
          rows={5}
          placeholder="Message*"
          {...register("message",{ required: true })}
        />
        	<span className="invalid-feedback">{errors.message && "your message is required"}</span>
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
