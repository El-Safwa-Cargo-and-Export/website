import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const PageContainer = styled.div`
  padding-top: 100px;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 5rem;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  padding: 0 2rem;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: var(--text-main);
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: var(--secondary);
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
`;

const ServiceCard = styled.div`
  background: var(--bg-surface);
  border: var(--glass-border);
  border-radius: var(--border-radius);
  padding: 2.5rem;
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    border-color: var(--secondary);
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  }

  h3 {
    font-size: 1.5rem;
    color: var(--text-main);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-muted);
    font-size: 1rem;
    line-height: 1.6;
  }
`;

function Services() {
  const { t } = useTranslation();

  return (
    <PageContainer className="animate-fade-in">
      <HeaderSection>
        <Subtitle>{t('services.subtitle')}</Subtitle>
        <Title>{t('services.title')}</Title>
      </HeaderSection>

      <ServicesGrid>
        <ServiceCard>
          <h3>{t('services.s1_title')}</h3>
          <p>{t('services.s1_desc')}</p>
        </ServiceCard>
        <ServiceCard>
          <h3>{t('services.s2_title')}</h3>
          <p>{t('services.s2_desc')}</p>
        </ServiceCard>
        <ServiceCard>
          <h3>{t('services.s3_title')}</h3>
          <p>{t('services.s3_desc')}</p>
        </ServiceCard>
        <ServiceCard>
          <h3>{t('services.s4_title')}</h3>
          <p>{t('services.s4_desc')}</p>
        </ServiceCard>
        <ServiceCard>
          <h3>{t('services.s5_title')}</h3>
          <p>{t('services.s5_desc')}</p>
        </ServiceCard>
        <ServiceCard>
          <h3>{t('services.s6_title')}</h3>
          <p>{t('services.s6_desc')}</p>
        </ServiceCard>
      </ServicesGrid>
    </PageContainer>
  );
}

export default Services;
