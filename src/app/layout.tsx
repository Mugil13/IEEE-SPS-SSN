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
          background: 'linear-gradient(135deg, #0a51a3 20%, #24a647 90%)',
          color: 'white',
          fontFamily: "'Montserrat', sans-serif",
          overflowX: 'hidden',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {/* Horizontal scrollbar container */}
<div
  style={{
    overflowX: 'auto',
    overflowY: 'hidden',
    whiteSpace: 'nowrap',
    width: '100%',
    height: '12px', // forces space for the bar
  }}
>
  {/* Wide dummy content just to trigger scrollbar */}
  <div style={{ width: '300vw', height: '1px' }}></div>
</div>


        <Navbar />
        <main
          style={{
            flex: 1,
            padding: '2rem 1rem',
            maxWidth: '1200px',
            margin: '0 auto',
            width: '100%',
            boxSizing: 'border-box',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
