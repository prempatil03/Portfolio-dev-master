'use client';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

const EmailJSProvider = ({ children }) => {
  useEffect(() => {
    emailjs.init("PV85hYmJrUsVpp2bA");
  }, []);

  return <>{children}</>;
};

export default EmailJSProvider;