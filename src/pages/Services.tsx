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
  const services = [
    {
      title: "Air Freight",
      description: "Fast and reliable air cargo solutions for time-sensitive shipments. We offer global coverage and competitive rates."
    },
    {
      title: "Ocean Freight",
      description: "Cost-effective ocean transportation for large volumes. We handle both FCL (Full Container Load) and LCL (Less than Container Load)."
    },
    {
      title: "Customs Brokerage",
      description: "Navigating complex international customs regulations smoothly to prevent delays and ensure compliance."
    },
    {
      title: "Warehousing",
      description: "Secure storage facilities equipped with modern technology to manage your inventory effectively."
    },
    {
      title: "Export Services",
      description: "Comprehensive support for exporting goods worldwide, including documentation and compliance."
    },
    {
      title: "Supply Chain Consulting",
      description: "Expert advice to optimize your supply chain, reduce costs, and improve overall operational efficiency."
    }
  ];

  return (
    <PageContainer className="animate-fade-in">
      <HeaderSection>
        <Subtitle>What We Do</Subtitle>
        <Title>Our Services</Title>
      </HeaderSection>
      
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </PageContainer>
  );
}

export default Services;
