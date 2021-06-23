import React from "react";
import { useForm } from "react-hook-form";
import { useToasts } from 'react-toast-notifications'
import {useTranslation} from 'react-i18next';

function Contact() {

  const { register, handleSubmit,formState: { errors } } = useForm();
  const { addToast } = useToasts();
  const { t } = useTranslation();
  const onSubmit = (data) => {
    //alert(JSON.stringify(data));
    addToast(t('Thank You'), {
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
          placeholder={t('Name')+'*'}
          {...register("username",{ required: true })}
        />
		<div className="invalid-feedback">{errors.username && t('Name required')}</div>
      </div>
      <div className="form-group mt-3">
        <input
          type="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          name="email"
          id="email"
          placeholder={t('Email')+'*'}
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
          placeholder={t('Subject')+'*'}
          {...register("subject",{ required: true })}
        />
        	<span className="invalid-feedback">{errors.subject && "the subject is required"}</span>
      </div>
      <div className="form-group mt-3">
        <textarea
          className={`form-control ${errors.message ? 'is-invalid' : ''}`}
          name="message"
          rows={5}
          placeholder={t('Message')+'*'}
          {...register("message",{ required: true })}
        />
        	<span className="invalid-feedback">{errors.message && "your message is required"}</span>
      </div>
      
      <div className="text-center my-3">
        <button type="submit" title="{t('Send Message')}">
          {t('Send Message')}
        </button>
      </div>
    </form>
  );
}

export default Contact;
