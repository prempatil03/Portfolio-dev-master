import './globals.css';
import EmailJSProvider from '../components/EmailJSProvider';  // Fix the import path

export const metadata = {
  title: 'Premanand Patil - Developer Engineer',
  description: 'Portfolio of Premanand Patil, Developer Engineer',
  icons: {
    icon: '/faviconp1p.png',  // Update this to match your file name
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" type="image/png" href="/faviconp1p.png" />
      </head>
      <body className="bg-white text-gray-900" suppressHydrationWarning={true}>
        <EmailJSProvider>
          {children}
        </EmailJSProvider>
      </body>
    </html>
  );
}