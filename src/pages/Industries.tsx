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
  const { t } = useTranslation();

  return (
    <PageContainer className="animate-fade-in">
      <HeaderSection>
        <Subtitle>{t('industries.subtitle')}</Subtitle>
        <Title>{t('industries.title')}</Title>
      </HeaderSection>

      <ContentGrid>
        <IndustryCard>
          <h3>{t('industries.i1_title')}</h3>
          <p>{t('industries.i1_desc')}</p>
        </IndustryCard>
        <IndustryCard>
          <h3>{t('industries.i2_title')}</h3>
          <p>{t('industries.i2_desc')}</p>
        </IndustryCard>
        <IndustryCard>
          <h3>{t('industries.i3_title')}</h3>
          <p>{t('industries.i3_desc')}</p>
        </IndustryCard>
        <IndustryCard>
          <h3>{t('industries.i4_title')}</h3>
          <p>{t('industries.i4_desc')}</p>
        </IndustryCard>
        <IndustryCard>
          <h3>{t('industries.i5_title')}</h3>
          <p>{t('industries.i5_desc')}</p>
        </IndustryCard>
        <IndustryCard>
          <h3>{t('industries.i6_title')}</h3>
          <p>{t('industries.i6_desc')}</p>
        </IndustryCard>
      </ContentGrid>
    </PageContainer>
  );
}

export default Industries;
