"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  botcheck: boolean;
}

const ContactForm = ({ w3ckey = "0cd2f07b-e2ea-4f0c-95bf-6834a30f0152" }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm<FormState>({
    mode: "onTouched"
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const { submit: onSubmit } = useWeb3Forms({
    access_key: w3ckey,
    settings: {
      from_name: "Contact Form Submission",
      subject: "New Message from Contact Form"
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg ) => {
      setIsSuccess(false);
      setMessage(msg);
    }
  });

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
      {isSubmitSuccessful && isSuccess ? (
        <motion.div 
          className="flex flex-col items-center justify-center py-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-16 h-16 bg-success-500 rounded-full flex items-center justify-center mb-4">
            <Check className="text-white" size={32} />
          </div>
          <h3 className="text-2xl font-semibold text-primary-600 mb-2">Thank You!</h3>
          <p className="text-center text-neutral-600 mb-6">
            {message || "Your message has been sent successfully. We'll get back to you soon!"}
          </p>
          <button 
            onClick={() => {
              setIsSuccess(false);
              setMessage("");
            }}
            className="btn-primary"
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="checkbox"
            id="botcheck"
            className="hidden"
            {...register("botcheck")}
          />

          <h3 className="text-2xl font-semibold text-primary-600 mb-6">Get in Touch</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-neutral-700 mb-1">Full Name*</label>
              <input
                type="text"
                id="name"
                {...register("name", {
                  required: "Full name is required",
                  maxLength: 80
                })}
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 transition-all ${
                  errors.name ? 'border-error-500' : 'border-neutral-300'
                }`}
                placeholder="John Doe"
              />
              {errors.name && <p className="text-error-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-neutral-700 mb-1">Email Address*</label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email"
                  }
                })}
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 transition-all ${
                  errors.email ? 'border-error-500' : 'border-neutral-300'
                }`}
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-error-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-neutral-700 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                {...register("phone")}
                className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 transition-all"
                placeholder="Optional"
              />
            </div>
            
            {/* Service */}
            <div>
              <label htmlFor="service" className="block text-neutral-700 mb-1">Service Required*</label>
              <select
                id="service"
                {...register("service", {
                  required: "Please select a service"
                })}
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 transition-all ${
                  errors.service ? 'border-error-500' : 'border-neutral-300'
                }`}
              >
                <option value="" disabled>Select a service</option>
                <option value="roofing">Roofing</option>
                <option value="extensions">Extensions</option>
                <option value="tiling">Tiling</option>
                <option value="electrical">Electrical Work</option>
                <option value="general">General Construction</option>
                <option value="other">Other</option>
              </select>
              {errors.service && <p className="text-error-500 text-sm mt-1">{errors.service.message}</p>}
            </div>
          </div>
          
          {/* Message */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-neutral-700 mb-1">Your Message*</label>
            <textarea
              id="message"
              {...register("message", {
                required: "Message is required"
              })}
              rows={5}
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 transition-all ${
                errors.message ? 'border-error-500' : 'border-neutral-300'
              }`}
              placeholder="Please provide details about your project..."
            ></textarea>
            {errors.message && <p className="text-error-500 text-sm mt-1">{errors.message.message}</p>}
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`btn-primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? (
              <svg
                className="w-5 h-5 mx-auto text-white animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              'Send Message'
            )}
          </button>

          {isSubmitSuccessful && !isSuccess && (
            <div className="mt-3 text-sm text-center text-error-500">
              {message || "Something went wrong. Please try later."}
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default ContactForm;