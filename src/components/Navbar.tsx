import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const NavHeader = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: var(--transition);
  padding: ${({ $scrolled }) => ($scrolled ? '1rem 0' : '1.5rem 0')};
  background: ${({ $scrolled }) => ($scrolled ? 'rgba(10, 25, 47, 0.85)' : 'transparent')};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(10px)' : 'none')};
  box-shadow: ${({ $scrolled }) => ($scrolled ? '0 10px 30px -10px rgba(2, 12, 27, 0.7)' : 'none')};
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  color: var(--secondary);
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: 1px;
  
  &:hover {
    color: var(--secondary);
  }
`;

const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: var(--secondary);
  border-radius: 8px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-weight: 800;
  font-size: 1.2rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ $active: boolean }>`
  color: ${({ $active }) => ($active ? 'var(--secondary)' : 'var(--text-main)')};
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: ${({ $active }) => ($active ? '100%' : '0')};
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: var(--secondary);
    transition: var(--transition);
  }

  &:hover {
    color: var(--secondary);
    &::after {
      width: 100%;
    }
  }
`;

const CtaButton = styled(Link)`
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: var(--secondary);
  border: 1px solid var(--secondary);
  border-radius: var(--border-radius);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: var(--transition);
  
  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
    transform: translateY(-3px);
  }
`;

const LangSelect = styled.select`
  background: transparent;
  color: var(--text-main);
  border: 1px solid var(--secondary);
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  font-family: var(--font-sans);
  cursor: pointer;
  
  option {
    background: var(--primary);
    color: var(--text-main);
  }
`;

const MobileLangWrapper = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <NavHeader $scrolled={scrolled} className="animate-fade-in">
      <NavContainer>
        <LogoContainer to="/">
          <LogoIcon>ES</LogoIcon>
          El Safwa
        </LogoContainer>
        <NavLinks>
          <NavLink to="/" $active={isActive('/')}>{t('nav.home')}</NavLink>
          <NavLink to="/about" $active={isActive('/about')}>{t('nav.about')}</NavLink>
          <NavLink to="/services" $active={isActive('/services')}>{t('nav.services')}</NavLink>
          <NavLink to="/industries" $active={isActive('/industries')}>{t('nav.industries')}</NavLink>
          <CtaButton to="/contact">{t('nav.contact')}</CtaButton>
          <LangSelect onChange={handleLangChange} value={i18n.resolvedLanguage || 'en'}>
            <option value="en">EN</option>
            <option value="ar">AR</option>
            <option value="fr">FR</option>
            <option value="it">IT</option>
          </LangSelect>
        </NavLinks>
        <MobileLangWrapper>
          <LangSelect onChange={handleLangChange} value={i18n.resolvedLanguage || 'en'}>
            <option value="en">EN</option>
            <option value="ar">AR</option>
            <option value="fr">FR</option>
            <option value="it">IT</option>
          </LangSelect>
        </MobileLangWrapper>
      </NavContainer>
    </NavHeader>
  );
}

export default Navbar;
