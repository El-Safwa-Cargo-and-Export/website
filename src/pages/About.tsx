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

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .img-placeholder {
    width: 100%;
    height: 400px;
    background: var(--bg-surface);
    border: var(--glass-border);
    border-radius: var(--border-radius);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--secondary);
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const TextSection = styled.div`
  p {
    font-size: 1.1rem;
    color: var(--text-muted);
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
`;

const MissionSection = styled.div`
  margin-top: 4rem;
  background: var(--bg-surface);
  padding: 3rem;
  border-radius: var(--border-radius);
  border: var(--glass-border);
  text-align: center;

  h2 {
    color: var(--secondary);
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    color: var(--text-main);
    max-width: 800px;
    margin: 0 auto;
  }
`;

function About() {
  const { t } = useTranslation();

  return (
    <PageContainer className="animate-fade-in">
      <HeaderSection>
        <Subtitle>{t('about.subtitle')}</Subtitle>
        <Title>{t('about.title')}</Title>
      </HeaderSection>
      
      <ContentGrid>
        <TextSection>
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <p>{t('about.p3')}</p>
        </TextSection>
        <ImageSection>
          <div className="img-placeholder">El Safwa Team & Fleet</div>
        </ImageSection>
      </ContentGrid>

      <MissionSection>
        <h2>{t('about.mission_title')}</h2>
        <p>{t('about.mission_desc')}</p>
      </MissionSection>
    </PageContainer>
  );
}

export default About;
