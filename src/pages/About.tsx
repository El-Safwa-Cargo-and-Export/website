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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding: 0 2rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TextBlock = styled.div`
  p {
    font-size: 1.1rem;
    color: var(--text-muted);
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
`;

const HighlightBox = styled.div`
  background: var(--bg-surface);
  border: var(--glass-border);
  border-radius: var(--border-radius);
  padding: 3rem;
  box-shadow: var(--glass-shadow);
  
  h3 {
    font-size: 1.8rem;
    color: var(--secondary);
    margin-bottom: 1rem;
  }
`;

function About() {
  return (
    <PageContainer className="animate-fade-in">
      <HeaderSection>
        <Subtitle>Who We Are</Subtitle>
        <Title>Delivering the World</Title>
      </HeaderSection>
      
      <ContentGrid>
        <TextBlock>
          <p>
            At El Safwa Cargo and Export, we have built our reputation on reliability, 
            efficiency, and an unwavering commitment to our clients' success. Based in Alexandria, 
            Egypt, we are strategically positioned at the crossroads of global trade.
          </p>
          <p>
            Our expertise spans decades in the freight forwarding industry, allowing us to 
            navigate the complexities of international logistics with ease. Whether by air, sea, 
            or land, we ensure your cargo reaches its destination safely and on schedule.
          </p>
          <p>
            We are proud of our IATA certification, which underscores our adherence to the highest 
            industry standards for safety and operational excellence.
          </p>
        </TextBlock>
        
        <HighlightBox>
          <h3>Our Mission</h3>
          <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', lineHeight: '1.6' }}>
            To provide world-class logistics and freight forwarding solutions that empower 
            businesses to thrive globally. We aim to exceed expectations through innovation, 
            dedication, and a customer-first approach.
          </p>
        </HighlightBox>
      </ContentGrid>
    </PageContainer>
  );
}

export default About;
