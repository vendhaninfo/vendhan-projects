import React, { useState } from 'react';
import { useInquiries } from '../../contexts/InquiryContext';
import { Inquiry } from '../../types';
import { useTheme } from '../../contexts/ThemeContext';

const InquiryList: React.FC = () => {
  const { inquiries, updateInquiryStatus, addAdminReply } = useInquiries();
  const { isDarkMode } = useTheme();
  const [replyTexts, setReplyTexts] = useState<{ [key: string]: string }>({});

  const handleStatusChange = (id: string, newStatus: Inquiry['status']) => {
    updateInquiryStatus(id, newStatus);
  };

  const handleReplyTextChange = (inquiryId: string, text: string) => {
    setReplyTexts(prev => ({ ...prev, [inquiryId]: text }));
  };

  const handleSubmitNote = (inquiryId: string) => {
    const text = replyTexts[inquiryId];
    if (text && text.trim() !== "") {
      addAdminReply(inquiryId, text.trim());
      // Optionally clear textarea after saving note, or leave it for email composition
      // setReplyTexts(prev => ({ ...prev, [inquiryId]: "" })); 
      alert("Note saved internally.");
    } else {
      alert("Please type a note to save.");
    }
  };

  const handleComposeEmail = (inquiry: Inquiry) => {
    const text = replyTexts[inquiry.id] || "";
    const subject = encodeURIComponent(`Re: Your Inquiry - ${inquiry.name}`);
    const body = encodeURIComponent(text);
    const mailtoLink = `mailto:${inquiry.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const cardBaseClass = `rounded-lg shadow-lg p-6 mb-6`;
  const cardLightClass = "bg-white";
  const cardDarkClass = "bg-gray-700";
  const textLightClass = "text-gray-600";
  const textDarkClass = "text-gray-300";
  const titleLightClass = "text-gray-800";
  const titleDarkClass = "text-white";
  
  const inputBaseClass = `w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary text-sm`;
  const inputLightClass = "bg-gray-50 border-gray-300 text-gray-900";
  const inputDarkClass = "bg-gray-600 border-gray-500 text-white";
  
  const buttonBaseClass = `px-4 py-2 text-xs font-medium rounded-md text-text-on-primary transition duration-300`;
  const primaryButtonClass = `bg-primary hover:bg-opacity-80`;
  const secondaryButtonClass = `${isDarkMode ? 'bg-gray-500 hover:bg-gray-400' : 'bg-gray-600 hover:bg-gray-500'}`;


  if (inquiries.length === 0) {
    return <p className={`text-center p-6 ${isDarkMode ? textDarkClass : textLightClass}`}>No inquiries yet.</p>;
  }

  return (
    <div className="space-y-6 p-1">
       <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Client Inquiries</h2>
      {inquiries.map((inquiry) => (
        <div key={inquiry.id} className={`${cardBaseClass} ${isDarkMode ? cardDarkClass : cardLightClass}`}>
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
            <div>
                <h3 className={`text-xl font-semibold ${isDarkMode ? titleDarkClass : titleLightClass}`}>{inquiry.name}</h3>
                <p className={`text-sm ${isDarkMode ? textDarkClass : textLightClass}`}>{inquiry.email} {inquiry.company && `(${inquiry.company})`}</p>
            </div>
            <p className={`text-xs mt-2 md:mt-0 ${isDarkMode ? textDarkClass : textLightClass}`}>
              Received: {new Date(inquiry.timestamp).toLocaleString()}
            </p>
          </div>
          <p className={`mb-4 whitespace-pre-wrap ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>{inquiry.projectDetails}</p>
          <div className="flex items-center mb-4">
            <label htmlFor={`status-${inquiry.id}`} className={`mr-2 text-sm font-medium ${isDarkMode ? textDarkClass : textLightClass}`}>Status:</label>
            <select
              id={`status-${inquiry.id}`}
              value={inquiry.status}
              onChange={(e) => handleStatusChange(inquiry.id, e.target.value as Inquiry['status'])}
              className={`rounded-md p-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary ${isDarkMode ? 'bg-gray-600 text-white border-gray-500' : 'bg-gray-50 text-gray-900 border-gray-300'}`}
            >
              <option value="New">New</option>
              <option value="Viewed">Viewed</option>
              <option value="Contacted">Contacted</option>
              <option value="Archived">Archived</option>
            </select>
          </div>

          {/* Admin Replies Section */}
          <div className={`mt-4 pt-4 border-t ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
            <h4 className={`text-md font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Admin Actions & Notes:</h4>
            {inquiry.adminReplies && inquiry.adminReplies.length > 0 ? (
              <div className="space-y-3 mb-3 max-h-40 overflow-y-auto p-2 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}">
                {inquiry.adminReplies.map(reply => (
                  <div key={reply.id} className={`p-3 rounded-md text-xs ${isDarkMode ? 'bg-gray-600 text-gray-200' : 'bg-gray-100 text-gray-700'}`}>
                    <p className="whitespace-pre-wrap">{reply.text}</p>
                    <p className={`text-right text-xxs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Note Saved: {new Date(reply.timestamp).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className={`text-xs mb-3 ${isDarkMode ? textDarkClass : textLightClass}`}>No internal notes saved yet.</p>
            )}
            <div>
              <textarea
                rows={3}
                placeholder="Type your reply or internal note here..."
                value={replyTexts[inquiry.id] || ""}
                onChange={(e) => handleReplyTextChange(inquiry.id, e.target.value)}
                className={`${inputBaseClass} ${isDarkMode ? inputDarkClass : inputLightClass} mb-2`}
                aria-label={`Reply to ${inquiry.name}`}
              />
              <div className="flex space-x-2">
                <button
                  onClick={() => handleSubmitNote(inquiry.id)}
                  className={`${buttonBaseClass} ${secondaryButtonClass}`}
                  aria-label={`Save internal note for ${inquiry.name}`}
                >
                  Save Note
                </button>
                <button
                  onClick={() => handleComposeEmail(inquiry)}
                  className={`${buttonBaseClass} ${primaryButtonClass}`}
                  aria-label={`Reply via email to ${inquiry.name}`}
                >
                  Reply via Email
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InquiryList;