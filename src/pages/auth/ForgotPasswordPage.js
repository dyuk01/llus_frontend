import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/common/Button';
import FormInput from '../../components/common/FormInput';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  const validate = () => {
    if (!email) {
      setError('이메일을 입력해주세요');
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('유효한 이메일을 입력해주세요');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Password reset request logic will be implemented later
      // For now, just show success message
      setIsSubmitted(true);
    }
  };

  return (
    <ForgotPasswordContainer>
      <ForgotPasswordCard>
        <LogoContainer>
          <Logo src="/logo.png" alt="마켓봇 로고" />
          <LogoText>마켓봇</LogoText>
        </LogoContainer>
        
        {!isSubmitted ? (
          <>
            <Heading>비밀번호 찾기</Heading>
            <Subheading>
              가입하신 이메일 주소를 입력하시면, 비밀번호 재설정 링크를 보내드립니다.
            </Subheading>
            
            <Form onSubmit={handleSubmit}>
              <FormInput
                label="이메일"
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="이메일을 입력해주세요"
                error={error}
              />
              
              <ButtonContainer>
                <ResetButton type="submit">비밀번호 재설정 링크 보내기</ResetButton>
                <BackButton as={Link} to="/auth/login" variant="secondary">
                  로그인으로 돌아가기
                </BackButton>
              </ButtonContainer>
            </Form>
          </>
        ) : (
          <SuccessContainer>
            <SuccessIcon>✓</SuccessIcon>
            <SuccessHeading>이메일을 발송했습니다</SuccessHeading>
            <SuccessMessage>
              {email}로 비밀번호 재설정 링크를 보냈습니다. 메일함을 확인해주세요.
            </SuccessMessage>
            <SuccessNotes>
              메일이 도착하지 않았나요? 스팸함을 확인하시거나 다시 시도해주세요.
            </SuccessNotes>
            <BackToLoginButton as={Link} to="/auth/login">
              로그인으로 돌아가기
            </BackToLoginButton>
          </SuccessContainer>
        )}
      </ForgotPasswordCard>
    </ForgotPasswordContainer>
  );
};

// Styled components for the Forgot Password page
const ForgotPasswordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #F5F5F5;
  padding: 20px;
`;

const ForgotPasswordCard = styled.div`
  width: 100%;
  max-width: 480px;
  padding: 40px;
  background-color: #FFFFFF;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

const Logo = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 12px;
`;

const LogoText = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #1E88E5;
  margin: 0;
`;

const Heading = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #212121;
  margin-bottom: 16px;
  text-align: center;
`;

const Subheading = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 32px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
`;

const ResetButton = styled(Button)`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
`;

const BackButton = styled(Button)`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
`;

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SuccessIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #4CAF50;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin-bottom: 24px;
`;

const SuccessHeading = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #212121;
  margin-bottom: 16px;
`;

const SuccessMessage = styled.p`
  font-size: 16px;
  color: #616161;
  margin-bottom: 16px;
`;

const SuccessNotes = styled.p`
  font-size: 14px;
  color: #9E9E9E;
  margin-bottom: 24px;
`;

const BackToLoginButton = styled(Button)`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
`;

export default ForgotPasswordPage;