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

const ContactGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 0 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoBox = styled.div`
  background: var(--bg-surface);
  border: var(--glass-border);
  padding: 2rem;
  border-radius: var(--border-radius);
  
  h3 {
    color: var(--secondary);
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  
  p {
    color: var(--text-muted);
    line-height: 1.6;
    margin: 0;
  }
`;

function Contact() {
  const { t } = useTranslation();

  return (
    <PageContainer className="animate-fade-in">
      <HeaderSection>
        <Subtitle>{t('contact.subtitle')}</Subtitle>
        <Title>{t('contact.title')}</Title>
      </HeaderSection>

      <ContactGrid>
        <ContactInfo>
          <InfoBox>
            <h3>{t('contact.hq')}</h3>
            <p>
              {t('contact.addr1')}<br />
              {t('contact.addr2')}<br />
              {t('contact.addr3')}<br />
              {t('contact.addr4')}
            </p>
          </InfoBox>
          <InfoBox>
            <h3>{t('contact.details')}</h3>
            <p>
              {t('contact.phone')} +2034242810<br />
              {t('contact.email')} info@elsafwacargo.com
            </p>
          </InfoBox>
          <InfoBox>
            <h3>{t('contact.hours')}</h3>
            <p>
              {t('contact.h_mon_fri')} {t('contact.h_mon_fri_time')}<br />
              {t('contact.h_sat')} {t('contact.h_sat_time')}<br />
              {t('contact.h_sun')} {t('contact.h_sun_time')}
            </p>
          </InfoBox>
        </ContactInfo>
      </ContactGrid>
    </PageContainer>
  );
}

export default Contact;
