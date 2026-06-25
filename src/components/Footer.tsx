import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import IataBadge from './IataBadge';

const FooterWrapper = styled.footer`
  background: var(--primary-light);
  color: var(--text-muted);
  padding: 4rem 2rem 2rem;
  border-top: var(--glass-border);
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BrandName = styled.h2`
  color: var(--text-main);
  font-family: var(--font-heading);
  font-size: 1.5rem;
  margin: 0;
`;

const Description = styled.p`
  max-width: 400px;
  font-size: 0.9rem;
  line-height: 1.6;
`;

const LinksSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SectionTitle = styled.h3`
  color: var(--text-main);
  font-size: 1.1rem;
  margin: 0 0 0.5rem 0;
`;

const FooterLink = styled(Link)`
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
  transition: var(--transition);

  &:hover {
    color: var(--secondary);
    transform: translateX(5px);
  }
`;

const BottomBar = styled.div`
  max-width: 1200px;
  margin: 3rem auto 0;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterContainer>
        <BrandSection>
          <BrandName>El Safwa Cargo & Export</BrandName>
          <Description>
            {t('footer.desc')}
          </Description>
          <div>
            <IataBadge />
          </div>
        </BrandSection>
        
        <LinksSection>
          <SectionTitle>{t('footer.quick_links')}</SectionTitle>
          <FooterLink to="/about">{t('nav.about')}</FooterLink>
          <FooterLink to="/services">{t('nav.services')}</FooterLink>
          <FooterLink to="/industries">{t('nav.industries')}</FooterLink>
          <FooterLink to="/contact">{t('nav.contact')}</FooterLink>
        </LinksSection>

        <LinksSection>
          <SectionTitle>{t('footer.contact')}</SectionTitle>
          <Description>
            Alexandria Nozha International Airport<br />
            Agents Compound Besi<br />
            Alexandria, Egypt
          </Description>
          <Description>
            info@elsafwacargo.com<br />
            Phone: +2034242810
          </Description>
        </LinksSection>
      </FooterContainer>
      
      <BottomBar>
        <span>&copy; {currentYear} El Safwa Cargo and Export. {t('footer.rights')}</span>
      </BottomBar>
    </FooterWrapper>
  );
}

export default Footer;
