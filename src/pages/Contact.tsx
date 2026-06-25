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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding: 0 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: var(--bg-surface);
  padding: 3rem;
  border-radius: var(--border-radius);
  border: var(--glass-border);
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  color: var(--text-main);
  font-family: var(--font-sans);
  
  &:focus {
    outline: none;
    border-color: var(--secondary);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  color: var(--text-main);
  font-family: var(--font-sans);
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--secondary);
  }
`;

const SubmitButton = styled.button`
  background: var(--secondary);
  color: var(--primary);
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(100, 255, 218, 0.2);
  }
`;

function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you shortly.');
  };

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

        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Input type="text" placeholder="Subject" required />
          <TextArea placeholder="Your Message" required />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </Form>
      </ContactGrid>
    </PageContainer>
  );
}

export default Contact;
