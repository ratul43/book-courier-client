import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          Contact <span className="text-primary">BookCourier</span>
        </h1>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Have questions, feedback, or need support? We’d love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="card bg-base-100 shadow-md p-6 flex items-center gap-4">
            <FaPhoneAlt className="text-3xl text-primary" />
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-500">(509) 427-0133</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md p-6 flex items-center gap-4">
            <FaMapMarkerAlt className="text-3xl text-primary" />
            <div>
              <h3 className="text-lg font-semibold">Address</h3>
              <p className="text-gray-500">
                805 Celilo St <br />
                North Bonneville, WA 98639
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md p-6 flex items-center gap-4">
            <FaEnvelope className="text-3xl text-primary" />
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-500">support@bookcourier.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card bg-base-100 shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

          <form className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                rows="4"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button className="btn btn-primary w-full mt-4">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
