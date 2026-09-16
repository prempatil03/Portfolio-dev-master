'use client';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

const EmailJSProvider = ({ children }) => {
  useEffect(() => {
    emailjs.init({ publicKey: 'pSQt4rEkbvjU9Y71P' });
  }, []);

  return <>{children}</>;
};

export default EmailJSProvider;