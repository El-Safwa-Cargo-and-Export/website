import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeroSection = styled.section`
  background: url('/path/to/your/image.jpg') no-repeat center center/cover;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
`;

const CTAButton = styled.button`
  background: #007bff;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  margin-top: 1rem;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #0056b3;
  }
`;

function Home() {
  const navigate = useNavigate();

  const handleRequestQuote = () => {
    navigate('/contact');
  };

  return (
    <div>
      <HeroSection>
        <h1>Your Trusted Partner in Global Cargo and Export Solutions</h1>
        <CTAButton onClick={handleRequestQuote}>Request a Quote</CTAButton>
      </HeroSection>
      <section>
        <h2>Introduction</h2>
        <p>
          With decades of experience, El Safwa Cargo and Export delivers reliable, efficient, and innovative cargo solutions tailored to meet your business needs worldwide. We specialize in seamless logistics, ensuring your goods reach their destination safely and on time.
        </p>
      </section>
      <section>
        <h2>Key Features</h2>
        <ul>
          <li>Trusted partner in international logistics.</li>
          <li>Expertise in air and sea freight.</li>
          <li>Global reach with local expertise.</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
