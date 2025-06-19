
import React, { useState } from 'react';
import { useInquiries } from '../contexts/InquiryContext';
import { useTheme } from '../contexts/ThemeContext';

const InquiryForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { addInquiry } = useInquiries();
  const { isDarkMode } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !projectDetails) {
        alert("Please fill in all required fields (Name, Email, Project Details).");
        return;
    }
    addInquiry({ name, email, company, projectDetails });
    setName('');
    setEmail('');
    setCompany('');
    setProjectDetails('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000); // Hide message after 5 seconds
  };
  
  const inputBaseClass = `w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2`;
  const inputLightClass = "bg-gray-100 border border-gray-300 text-gray-900 focus:ring-primary focus:border-primary";
  const inputDarkClass = "bg-gray-700 border border-gray-600 text-white focus:ring-primary focus:border-primary";
  const labelBaseClass = `block text-sm font-medium mb-1`;
  const labelLightClass = "text-gray-700";
  const labelDarkClass = "text-gray-300";


  return (
    <form onSubmit={handleSubmit} className={`p-8 rounded-lg shadow-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} max-w-2xl mx-auto`}>
      <h2 className={`text-3xl font-bold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Send us an Inquiry</h2>
      {submitted && (
        <div className="mb-4 p-3 rounded-md bg-green-100 text-green-700 text-center">
          Thank you! Your inquiry has been submitted successfully.
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className={`${labelBaseClass} ${isDarkMode ? labelDarkClass : labelLightClass}`}>Full Name*</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required 
          className={`${inputBaseClass} ${isDarkMode ? inputDarkClass : inputLightClass}`} />
        </div>
        <div>
          <label htmlFor="email" className={`${labelBaseClass} ${isDarkMode ? labelDarkClass : labelLightClass}`}>Email Address*</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required 
          className={`${inputBaseClass} ${isDarkMode ? inputDarkClass : inputLightClass}`} />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="company" className={`${labelBaseClass} ${isDarkMode ? labelDarkClass : labelLightClass}`}>Company (Optional)</label>
        <input type="text" id="company" value={company} onChange={(e) => setCompany(e.target.value)} 
        className={`${inputBaseClass} ${isDarkMode ? inputDarkClass : inputLightClass}`} />
      </div>
      <div className="mb-8">
        <label htmlFor="projectDetails" className={`${labelBaseClass} ${isDarkMode ? labelDarkClass : labelLightClass}`}>Project Details*</label>
        <textarea id="projectDetails" value={projectDetails} onChange={(e) => setProjectDetails(e.target.value)} rows={5} required 
        className={`${inputBaseClass} ${isDarkMode ? inputDarkClass : inputLightClass}`}></textarea>
      </div>
      <button type="submit" className="w-full bg-primary text-text-on-primary font-semibold py-3 px-6 rounded-lg hover:bg-opacity-80 transition duration-300 text-lg">
        Submit Inquiry
      </button>
    </form>
  );
};

export default InquiryForm;
