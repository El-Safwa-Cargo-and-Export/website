import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  margin-top: 0.5rem;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  margin-top: 0.5rem;
`;

const Button = styled.button`
  background: #007bff;
  color: #fff;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #0056b3;
  }
`;

const CaptchaImage = styled.img`
  margin-top: 0.5rem;
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
`;

function Contact() {
  const emailUser = "ashraf";
  const emailDomain = "elsafwacargo.com";
  const [captcha, setCaptcha] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState('');

  const generateCaptcha = () => {
    const randomString = Math.random().toString(36).substring(2, 8);
    setCaptcha(randomString);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (captcha !== captchaInput) {
      setCaptchaError('Invalid CAPTCHA');
      return;
    }

    setCaptchaError('');
    const formData = new FormData(event.target as HTMLFormElement);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const mailtoLink = `mailto:${emailUser}@${emailDomain}?subject=Contact Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  React.useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div>
      <h1>Contact Us</h1>
      <section>
        <h2>Office Locations</h2>
        <p>Address: ALEXANDRIA NOZHA INTERNATIONAL AIRPORT, AGENTS COMPOUND BESI
        ALEXANDRIA EG
        Egypt
        </p>
        <p>Phone: <a href="tel:+2034242810">+20 3 4242810</a> (Landline)</p>
        <p>Phone: <a href="tel:+201223173850">‭+20 122 3173850‬</a> (Cell)</p>
        <p>IATA: <a href="https://www.iata.org/en/publications/directories/cargolink/directory/el-safwa-cargo-and-export/8723/" target="_blank" rel="noopener noreferrer">El Safwa Cargo and Export</a></p>
      </section>
      <section>
        <h2>Get in Touch</h2>
        <Form onSubmit={handleSubmit}>
          <Label>
            Name:
            <Input type="text" name="name" required />
          </Label>
          <Label>
            Email:
            <Input type="email" name="email" required />
          </Label>
          <Label>
            Message:
            <Textarea name="message" required></Textarea>
          </Label>
          <Label>
            CAPTCHA:
            <CaptchaImage src={`https://dummyimage.com/100x40/000/fff&text=${captcha}`} alt="CAPTCHA" />
            <Input type="text" value={captchaInput} onChange={(e) => setCaptchaInput(e.target.value)} required />
          </Label>
          {captchaError && <ErrorMessage>{captchaError}</ErrorMessage>}
          <Button type="submit">Submit</Button>
        </Form>
        <br />
      </section>
    </div>
  );
}

export default Contact;
