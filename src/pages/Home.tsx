import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import IataBadge from '../components/IataBadge';

const HomeContainer = styled.div`
  padding-top: 80px; /* Accounts for fixed navbar */
`;

const HeroSection = styled.section`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroSubtitle = styled.p`
  color: var(--secondary);
  font-family: var(--font-sans);
  font-weight: 500;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const HeroTitle = styled.h1`
  font-size: clamp(3rem, 6vw, 5rem);
  color: var(--text-main);
  margin-bottom: 1.5rem;
  max-width: 800px;
  
  span {
    color: var(--text-inverse);
    -webkit-text-stroke: 1px var(--text-main);
    color: transparent;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-muted);
  max-width: 600px;
  margin-bottom: 3rem;
  line-height: 1.8;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled.button`
  background: var(--secondary);
  color: var(--primary);
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 700;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: var(--transition);
  font-family: var(--font-sans);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(100, 255, 218, 0.2);
  }
`;

const FeaturesSection = styled.section`
  max-width: 1200px;
  margin: 5rem auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  background: var(--bg-surface);
  padding: 2.5rem;
  border-radius: var(--border-radius);
  border: var(--glass-border);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-10px);
    border-color: var(--secondary);
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-main);
  }
  
  p {
    color: var(--text-muted);
    font-size: 0.95rem;
  }
`;

const TrustSection = styled.section`
  max-width: 1200px;
  margin: 6rem auto;
  padding: 4rem 2rem;
  background: var(--primary-light);
  border-radius: var(--border-radius);
  text-align: center;
  border: var(--glass-border);
`;

const TrustTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

function Home() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <HeroSection className="animate-fade-in">
        <HeroSubtitle>Global Logistics Excellence</HeroSubtitle>
        <HeroTitle>
          We Deliver <span>Beyond</span> Expectations
        </HeroTitle>
        <HeroDescription>
          El Safwa Cargo and Export provides reliable, efficient, and innovative logistics solutions worldwide. 
          Seamless freight forwarding ensuring your goods reach their destination safely and on time.
        </HeroDescription>
        <ButtonGroup>
          <PrimaryButton onClick={() => navigate('/contact')}>Request a Quote</PrimaryButton>
        </ButtonGroup>
      </HeroSection>

      <FeaturesSection>
        <FeatureCard>
          <h3>Air & Sea Freight</h3>
          <p>Comprehensive international logistics combining the speed of air with the scale of sea transport for optimal delivery.</p>
        </FeatureCard>
        <FeatureCard>
          <h3>Global Network</h3>
          <p>Extensive reach across continents backed by deep local expertise to navigate complex international regulations.</p>
        </FeatureCard>
        <FeatureCard>
          <h3>Supply Chain Solutions</h3>
          <p>End-to-end management ensuring complete visibility, efficiency, and reliability for your valuable cargo.</p>
        </FeatureCard>
      </FeaturesSection>

      <TrustSection>
        <TrustTitle>Internationally Certified</TrustTitle>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          We are proud to be a fully certified IATA Freight Forwarder, upholding the highest standards of safety and efficiency in global aviation cargo.
        </p>
        <IataBadge />
      </TrustSection>
    </HomeContainer>
  );
}

export default Home;
