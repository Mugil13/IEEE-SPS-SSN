'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Users, Calendar, BookOpen, FileText, Image, Mail, Home, Menu, X } from 'lucide-react';

const dropdowns = [
  {
    label: 'Members',
    icon: <Users className="h-4 w-4" />,
    items: [
      { name: 'Current Members', path: '/members/current' },
      { name: 'Past Members', path: '/members/past' },
    ],
  },
  {
    label: 'Events',
    icon: <Calendar className="h-4 w-4" />,
    items: [
      { name: 'Upcoming Events', path: '/events/upcoming' },
      { name: 'Past Events', path: '/events/past' },
    ],
  },
  {
    label: 'Resources',
    icon: <BookOpen className="h-4 w-4" />,
    items: [
      { name: 'Funding', path: '/funding' },
      { name: 'Mentoring', path: '/mentoring' },
    ],
  },
];

const navLinks = [
  { name: 'Home', path: '/', icon: <Home className="h-4 w-4" /> },
  { name: 'Magazine', path: '/magazine', icon: <FileText className="h-4 w-4" /> },
  { name: 'Gallery', path: '/gallery', icon: <Image className="h-4 w-4" /> },
  { name: 'Contact', path: '/contact', icon: <Mail className="h-4 w-4" /> },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [closingDropdown, setClosingDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const navListRef = useRef<HTMLUListElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  // Check if navigation should switch to hamburger menu (with debounce)
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    const debouncedCheck = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (navRef.current && navListRef.current && logoRef.current) {
          const navWidth = navRef.current.clientWidth;
          const logoWidth = logoRef.current.clientWidth;

          // Temporarily force display to measure actual width needed
          const wasHidden = navListRef.current.style.display === 'none';
          if (wasHidden) {
            navListRef.current.style.display = 'flex';
            navListRef.current.style.visibility = 'hidden';
            navListRef.current.style.position = 'absolute';
            navListRef.current.style.top = '-9999px';
          }

          const navListWidth = navListRef.current.scrollWidth;
          const padding = 100; // Account for padding, gaps, and some buffer

          // Reset styles if we changed them
          if (wasHidden) {
            navListRef.current.style.display = 'none';
            navListRef.current.style.visibility = '';
            navListRef.current.style.position = '';
            navListRef.current.style.top = '';
          }

          const shouldShowHamburger = logoWidth + navListWidth + padding > navWidth;

          // Always set state — React will skip no-change renders internally
          setShowHamburger(shouldShowHamburger);

          // Close mobile menu when switching back to desktop
          if (!shouldShowHamburger && isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
            setOpenDropdown(null);
          }
        }
      }, 150);
    };

    // Initial check
    debouncedCheck();

    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(debouncedCheck);
    });

    if (navRef.current) {
      resizeObserver.observe(navRef.current);
    }
    if (navListRef.current) {
      resizeObserver.observe(navListRef.current);
    }

    const handleResize = () => {
      requestAnimationFrame(debouncedCheck);
    };

    const handleZoom = () => {
      setTimeout(debouncedCheck, 200); // zoom can be delayed
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    window.addEventListener('wheel', handleZoom, { passive: true });
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '0')) {
        setTimeout(debouncedCheck, 200);
      }
    });

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      window.removeEventListener('wheel', handleZoom);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeDropdown(openDropdown);
        setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  const openDropdownMenu = (label: string) => {
    setClosingDropdown(null);
    setOpenDropdown(label);
  };

  const closeDropdown = (label: string | null) => {
    if (!label) return;
    setClosingDropdown(label);
    setTimeout(() => {
      setClosingDropdown(null);
      setOpenDropdown(null);
    }, 300);
  };

  const toggleDropdown = (label: string) => {
    if (openDropdown === label) {
      closeDropdown(label);
    } else {
      openDropdownMenu(label);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };

  const renderNavItems = (isMobile = false) => (
    <>
      {/* Home Link */}
      <li>
        <Link href="/">
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: hoveredItem === 'home' ? '#78BE20' : '#ffffff',
              fontWeight: 600,
              fontSize: isMobile ? '1.1rem' : 'clamp(1rem, 2vw, 1.15rem)',
              transition: 'color 0.3s ease',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              padding: isMobile ? '0.75rem 0' : '0',
            }}
            onMouseEnter={() => setHoveredItem('home')}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => isMobile && setIsMobileMenuOpen(false)}
          >
            <Home className="h-4 w-4" /> Home
          </span>
        </Link>
      </li>

      {/* Dropdowns */}
      {dropdowns.map((dropdown) => {
        const isOpen = openDropdown === dropdown.label;
        const isClosing = closingDropdown === dropdown.label;
        return (
          <li key={dropdown.label} style={{ position: 'relative' }}>
            <button
              aria-haspopup="menu"
              aria-expanded={isOpen}
              onClick={() => toggleDropdown(dropdown.label)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'none',
                border: 'none',
                color: hoveredItem === dropdown.label || isOpen ? '#78BE20' : '#ffffff',
                fontWeight: 600,
                fontSize: isMobile ? '1.1rem' : 'clamp(1rem, 2vw, 1.15rem)',
                cursor: 'pointer',
                padding: isMobile ? '0.75rem 0' : '0.5rem 0.75rem',
                borderRadius: '6px',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
                width: isMobile ? '100%' : 'auto',
                justifyContent: isMobile ? 'flex-start' : 'center',
              }}
              onMouseEnter={() => setHoveredItem(dropdown.label)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {dropdown.icon}
              {dropdown.label}
              <span
                style={{
                  marginLeft: '0.5rem',
                  fontSize: '0.8rem',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  display: 'inline-block',
                }}
              >
                ▼
              </span>
            </button>
            {(isOpen || isClosing) && (
              <ul
                role="menu"
                style={{
                  listStyle: 'none',
                  position: isMobile ? 'static' : 'absolute',
                  top: isMobile ? '0' : '100%',
                  left: isMobile ? '0' : '-0.5rem',
                  minWidth: isMobile ? '100%' : '200px',
                  background: isMobile
                    ? 'rgba(0,30,50,0.8)'
                    : 'linear-gradient(145deg, rgba(0,40,70,0.98) 0%, rgba(0,30,50,0.98) 100%)',
                  borderRadius: isMobile ? '8px' : '12px',
                  boxShadow: isMobile
                    ? '0 4px 20px rgba(0,0,0,0.2)'
                    : '0 12px 40px rgba(0, 98, 155, 0.4), 0 8px 20px rgba(0,0,0,0.3)',
                  padding: '0.75rem 0',
                  zIndex: 10000,
                  border: '1px solid rgba(120,190,32,0.4)',
                  backdropFilter: 'blur(15px)',
                  animation: `${isClosing ? 'floatDown' : 'floatUp'} 0.3s ease-out`,
                  marginTop: isMobile ? '0.5rem' : '0.5rem',
                  marginLeft: isMobile ? '1rem' : '0',
                }}
              >
                {dropdown.items.map((item) => (
                  <li key={item.name}>
                    <Link href={item.path}>
                      <span
                        style={{
                          display: 'block',
                          padding: '0.75rem 1.25rem',
                          color: hoveredItem === `${dropdown.label}-${item.name}` ? '#78BE20' : '#ffffff',
                          fontWeight: 500,
                          fontSize: isMobile ? '1rem' : '1rem',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          borderRadius: '8px',
                          margin: '0.25rem 0.5rem',
                          background:
                            hoveredItem === `${dropdown.label}-${item.name}` ? 'rgba(120,190,32,0.2)' : 'transparent',
                          transform:
                            hoveredItem === `${dropdown.label}-${item.name}` ? 'translateX(4px)' : 'translateX(0)',
                          borderLeft:
                            hoveredItem === `${dropdown.label}-${item.name}` ? '3px solid #78BE20' : '3px solid transparent',
                        }}
                        onMouseEnter={() => setHoveredItem(`${dropdown.label}-${item.name}`)}
                        onMouseLeave={() => setHoveredItem(null)}
                        onClick={() => {
                          closeDropdown(dropdown.label);
                          isMobile && setIsMobileMenuOpen(false);
                        }}
                      >
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}

      {/* Other Nav Links */}
      {navLinks.slice(1).map((link) => (
        <li key={link.name}>
          <Link href={link.path}>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: hoveredItem === link.name.toLowerCase() ? '#78BE20' : '#ffffff',
                fontWeight: 600,
                fontSize: isMobile ? '1.1rem' : 'clamp(1rem, 2vw, 1.15rem)',
                transition: 'color 0.3s ease',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                padding: isMobile ? '0.75rem 0' : '0',
              }}
              onMouseEnter={() => setHoveredItem(link.name.toLowerCase())}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => isMobile && setIsMobileMenuOpen(false)}
            >
              {link.icon} {link.name}
            </span>
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <>
      <nav
        ref={navRef}
        style={{
          background: 'linear-gradient(135deg, rgba(0,98,155,0.95) 0%, rgba(0,70,110,0.9) 100%)',
          borderBottom: '2px solid #78BE20',
          padding: '0.5rem 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 9999,
          fontFamily: 'Montserrat, Arial, sans-serif',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 20px rgba(0, 98, 155, 0.3)',
          boxSizing: 'border-box',
          minHeight: '80px',
        }}
      >
        {/* LEFT: LOGO + TITLE */}
        <div 
          ref={logoRef}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}
        >
          <Link href="/" passHref>
            <img
              src="/SSN_SPS_LOGO.jpg"
              alt="SPS Logo"
              style={{
                width: '60px',
                height: '60px',
                objectFit: 'contain',
                borderRadius: '50%',
                backgroundColor: 'white',
                padding: '4px',
                cursor: 'pointer',
              }}
            />
          </Link>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontWeight: 'bold',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
              lineHeight: 1,
            }}
          >
            <span style={{ color: '#ffffff' }}>IEEE</span>
            &nbsp;
            <span style={{ color: '#78BE20' }}>SPS SSN</span>
          </div>
        </div>

        {/* DESKTOP NAV (always rendered for measurements) */}
        <ul
          ref={navListRef}
          style={{
            listStyle: 'none',
            display: showHamburger ? 'none' : 'flex',
            alignItems: 'center',
            margin: 0,
            padding: 0,
            gap: 'clamp(1rem, 3vw, 2rem)',
            marginLeft: 'auto',
            justifyContent: 'flex-end',
            flexWrap: 'nowrap',
          }}
        >
          {renderNavItems()}
        </ul>

        {/* HAMBURGER BUTTON */}
        {showHamburger && (
          <div style={{ marginLeft: 'auto' }}>
            <button
              onClick={toggleMobileMenu}
              style={{
                background: 'none',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                padding: '0.5rem',
                borderRadius: '6px',
                transition: 'background-color 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(120,190,32,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        )}

        {/* MOBILE MENU DROPDOWN */}
        {showHamburger && isMobileMenuOpen && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'linear-gradient(145deg, rgba(0,40,70,0.98) 0%, rgba(0,30,50,0.98) 100%)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(120,190,32,0.4)',
              borderTop: 'none',
              boxShadow: '0 8px 32px rgba(0, 98, 155, 0.4)',
              animation: 'floatUp 0.3s ease-out',
              zIndex: 10000,
            }}
          >
            <ul
              style={{
                listStyle: 'none',
                margin: 0,
                padding: '1rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              {renderNavItems(true)}
            </ul>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div style={{ height: '80px' }}></div>

      {/* Animations */}
      <style jsx>{`
        @keyframes floatUp {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatDown {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
      `}</style>
    </>
  );
}
