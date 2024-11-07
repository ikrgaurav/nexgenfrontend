import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from '../../context/TranslationContext';

export default function ContactForm() {
  const { getTranslatedText } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    query: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_hiu23dq',
      'template_1zuuxqu',
      formData,
      'bKfQa6PdnDVgMPC2S'
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setStatus(getTranslatedText('Email sent successfully!'));
    }).catch((err) => {
      console.error('FAILED...', err);
      setStatus(getTranslatedText('Failed to send email. Please try again.'));
    });
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-4xl font-semibold text-center my-8">
        {getTranslatedText('Contact Us')}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">{getTranslatedText('Our Address')}</h2>
          <p className="text-gray-600">
            Danapur,<br />
            Patna,<br />
            Bihar - 000 000
          </p>
          <p className="mt-4">
            <strong>{getTranslatedText('Mobile:')}</strong> 0512-2304044
          </p>
          <p>
            <strong>{getTranslatedText('Email:')}</strong>
            <a href="mailto:kkr2810@yahoo.com" className="text-blue-500">
              kkr2810@yahoo.com
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">{getTranslatedText('Ask a Query')}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              className="w-full border rounded-md p-3" 
              type="text" 
              name="name"
              placeholder={getTranslatedText('Your Name')} 
              value={formData.name}
              onChange={handleChange}
              required 
            />
            <input 
              className="w-full border rounded-md p-3" 
              type="email" 
              name="email"
              placeholder={getTranslatedText('Your Email')} 
              value={formData.email}
              onChange={handleChange}
              required 
            />
            <input 
              className="w-full border rounded-md p-3" 
              type="tel" 
              name="number"
              placeholder={getTranslatedText('Your Number')} 
              value={formData.number}
              onChange={handleChange}
              required 
            />
            <textarea 
              className="w-full border rounded-md p-3" 
              name="query"
              placeholder={getTranslatedText('Your Query')} 
              value={formData.query}
              onChange={handleChange}
              required 
            />
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-3 rounded-md transition-colors hover:bg-blue-700"
            >
              {getTranslatedText('Submit')}
            </button>
          </form>
          {status && <p className="mt-4 text-green-500">{status}</p>}
        </div>
      </div>
    </div>
  );
}
