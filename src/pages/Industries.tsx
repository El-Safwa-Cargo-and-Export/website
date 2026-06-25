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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
`;

const IndustryCard = styled.div`
  background: var(--bg-surface);
  border: var(--glass-border);
  padding: 2rem;
  border-radius: var(--border-radius);
  text-align: center;
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    border-color: var(--secondary);
    background: rgba(100, 255, 218, 0.05);
  }

  h3 {
    color: var(--text-main);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-muted);
    font-size: 1rem;
  }
`;

function Industries() {
  const industries = [
    { title: "Pharmaceuticals", desc: "Temperature-controlled logistics ensuring the integrity of critical medical supplies." },
    { title: "Automotive", desc: "Just-in-time delivery for parts and complete vehicles worldwide." },
    { title: "Technology", desc: "Secure and rapid transportation of high-value electronics and components." },
    { title: "Retail & FMCG", desc: "Scalable solutions to meet seasonal demands and keep supply chains flowing." },
    { title: "Agriculture", desc: "Specialized handling for perishable goods ensuring maximum freshness." },
    { title: "Manufacturing", desc: "Heavy-lift and oversized cargo management for industrial equipment." }
  ];

  return (
    <PageContainer className="animate-fade-in">
      <HeaderSection>
        <Subtitle>Sectors We Serve</Subtitle>
        <Title>Industries</Title>
      </HeaderSection>

      <ContentGrid>
        {industries.map((ind, i) => (
          <IndustryCard key={i}>
            <h3>{ind.title}</h3>
            <p>{ind.desc}</p>
          </IndustryCard>
        ))}
      </ContentGrid>
    </PageContainer>
  );
}

export default Industries;
