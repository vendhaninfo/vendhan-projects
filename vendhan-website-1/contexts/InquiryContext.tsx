
import React, { createContext, useState, useEffect, useContext } from 'react';
import { Inquiry, AdminReply } from '../types';

interface InquiryContextType {
  inquiries: Inquiry[];
  addInquiry: (inquiry: Omit<Inquiry, 'id' | 'timestamp' | 'status' | 'adminReplies'>) => void;
  updateInquiryStatus: (id: string, status: Inquiry['status']) => void;
  addAdminReply: (inquiryId: string, replyText: string) => void; // New function
}

const InquiryContext = createContext<InquiryContextType | undefined>(undefined);

export const InquiryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [inquiries, setInquiries] = useState<Inquiry[]>(() => {
    const storedInquiries = localStorage.getItem('vendhanInquiries');
    if (storedInquiries) {
      try {
        // Ensure adminReplies is an array for each inquiry
        const parsedInquiries = JSON.parse(storedInquiries) as Inquiry[];
        return parsedInquiries.map(inq => ({
          ...inq,
          adminReplies: Array.isArray(inq.adminReplies) ? inq.adminReplies : []
        }));
      } catch (error) {
        console.error("Failed to parse inquiries from localStorage", error);
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('vendhanInquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  const addInquiry = (inquiryData: Omit<Inquiry, 'id' | 'timestamp' | 'status' | 'adminReplies'>) => {
    const newInquiry: Inquiry = {
      ...inquiryData,
      id: Date.now().toString(), // Simple unique ID
      timestamp: new Date().toISOString(),
      status: 'New',
      adminReplies: [], // Initialize adminReplies as an empty array
    };
    setInquiries(prevInquiries => [newInquiry, ...prevInquiries]);
  };

  const updateInquiryStatus = (id: string, status: Inquiry['status']) => {
    setInquiries(prevInquiries =>
      prevInquiries.map(inq => (inq.id === id ? { ...inq, status } : inq))
    );
  };

  const addAdminReply = (inquiryId: string, replyText: string) => {
    const newReply: AdminReply = {
      id: `reply-${Date.now().toString()}`,
      text: replyText,
      timestamp: new Date().toISOString(),
    };

    setInquiries(prevInquiries =>
      prevInquiries.map(inq => {
        if (inq.id === inquiryId) {
          return {
            ...inq,
            adminReplies: [...(inq.adminReplies || []), newReply], // Add to existing replies or initialize if undefined
          };
        }
        return inq;
      })
    );
  };

  return (
    <InquiryContext.Provider value={{ inquiries, addInquiry, updateInquiryStatus, addAdminReply }}>
      {children}
    </InquiryContext.Provider>
  );
};

export const useInquiries = (): InquiryContextType => {
  const context = useContext(InquiryContext);
  if (!context) {
    throw new Error('useInquiries must be used within an InquiryProvider');
  }
  return context;
};
