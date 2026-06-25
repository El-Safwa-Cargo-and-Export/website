import React from 'react';
import styled from 'styled-components';

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
  return (
    <PageContainer className="animate-fade-in">
      <HeaderSection>
        <Subtitle>Get in Touch</Subtitle>
        <Title>Contact Us</Title>
      </HeaderSection>

      <ContactGrid>
        <ContactInfo>
          <InfoBox>
            <h3>Headquarters</h3>
            <p>
              Alexandria Nozha International Airport<br />
              Agents Compound Besi<br />
              Alexandria, EG<br />
              Egypt
            </p>
          </InfoBox>
          <InfoBox>
            <h3>Contact Details</h3>
            <p>
              Phone: +2034242810<br />
              Email: info@elsafwacargo.com
            </p>
          </InfoBox>
          <InfoBox>
            <h3>Business Hours</h3>
            <p>
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 2:00 PM<br />
              Sunday: Closed
            </p>
          </InfoBox>
        </ContactInfo>
      </ContactGrid>
    </PageContainer>
  );
}

export default Contact;
