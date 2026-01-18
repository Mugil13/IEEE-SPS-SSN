import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../app/globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #0a51a3 20%, #24a647 90%)', // Your specific background
          color: 'white',
          fontFamily: "'Montserrat', sans-serif",
          overflowX: 'hidden', // Prevents accidental horizontal scroll
        }}
      >
        <Navbar />
        
        <main
          style={{
            flex: 1, // This pushes the Footer to the bottom
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto', // Centers the content
            padding: '2rem 1rem',
            boxSizing: 'border-box',
            position: 'relative',
          }}
        >
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}