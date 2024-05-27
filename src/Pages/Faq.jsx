import React, { useState } from 'react';
import faqimg from '../assets/hero/faq.webp'
const faqs = [
  {
    question: "How Do We Create Course Content?",
    answer: "To create course content, follow our comprehensive guide on course creation, which includes steps for planning, structuring, and publishing your course."
  },
  {
    question: "How Do I Reset My Account Password?",
    answer: "You can reset your account password by clicking on 'Forgot Password' at the login screen and following the instructions sent to your registered email."
  },
  {
    question: "How Can I Manage My Account?",
    answer: "Managing your account is simple. Go to the account settings page where you can update your personal information, change your password, and manage your subscriptions."
  },
  {
    question: "What Are The Benefits Of Lemy Learning?",
    answer: "Lemy Learning offers numerous benefits including lifetime access to courses, learning at your own pace, and availability on any device."
  },
  {
    question: "Is Support For Learners Included?",
    answer: "Yes, we offer 24/7 support for all our learners. You can reach out to us via email, chat, or phone anytime you need assistance."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center p-4 lg:p-8 bg-[#F2F7FA]">
      <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
      <div className="w-full lg:w-3/4 ">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b border-gray-200">
            <button
              className="w-full flex justify-between items-center p-4 bg-white text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-gray-800">{faq.question}</span>
              <span className="text-gray-800">{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-100">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* <div className="mt-6 border border-green-500">
        <img
          src={faqimg}
          alt="Illustration"
          className="w-full h-auto max-w-sm mx-auto"
        />
      </div> */}
    </div>
  );
};

export default Faq;
