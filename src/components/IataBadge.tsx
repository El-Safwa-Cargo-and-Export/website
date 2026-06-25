import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const BadgeContainer = styled.a`
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(100, 255, 218, 0.3);
  padding: 8px 16px;
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  margin-top: 10px;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    border-color: rgba(100, 255, 218, 0.8);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(100, 255, 218, 0.2);
  }
`;

const IataLogoText = styled.span`
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.2rem;
  color: #fff;
  margin-right: 12px;
  letter-spacing: 1px;
`;

const IataDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-family: var(--font-sans);
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1;
  margin-bottom: 2px;
`;

const Code = styled.span`
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--secondary);
  line-height: 1;
`;

function IataBadge() {
  const { t } = useTranslation();
  return (
    <BadgeContainer 
      href="https://www.iata.org/en/publications/directories/cargolink/directory/el-safwa-cargo-and-export/8723/" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="IATA CargoLink Directory for El Safwa Cargo and Export"
    >
      <IataLogoText>IATA</IataLogoText>
      <IataDetails>
        <Title>{t('iata.code')}</Title>
        <Code>9047181</Code>
      </IataDetails>
    </BadgeContainer>
  );
}

export default IataBadge;
