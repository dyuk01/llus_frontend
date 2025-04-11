import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FormInput from '../../components/common/FormInput';
import Button from '../../components/common/Button';

const ForgotPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: var(--neutral-200);
`;

const ForgotPasswordCard = styled.div`
  background-color: var(--neutral-100);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
`;

const ForgotPasswordHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: var(--font-size-2xl);
  font-weight: 600;
  color: var(--primary-300);
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: var(--font-size-md);
  color: var(--neutral-600);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LoginPrompt = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  font-size: var(--font-size-sm);
  color: var(--neutral-700);
`;

const LoginLink = styled(Link)`
  color: var(--primary-300);
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const SuccessMessage = styled.div`
  background-color: rgba(52, 199, 89, 0.1);
  border: 1px solid var(--success);
  border-radius: var(--border-radius-md);
  padding: 1rem;
  margin-bottom: 1rem;
  color: var(--success);
  font-size: var(--font-size-sm);
`;

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (error) setError('');
  };

  const validateForm = () => {
    if (!email) {
      setError('이메일을 입력해주세요.');
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('유효한 이메일 주소를 입력해주세요.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // 실제 API 연동 시 여기에 axios 요청 코드 작성
      // 지금은 더미 데이터로 대체
      console.log('비밀번호 재설정 이메일 전송 시도:', email);

      // 이메일 전송 성공 시뮬레이션 (2초 후)
      setTimeout(() => {
        console.log('비밀번호 재설정 이메일 전송 성공!');
        setIsLoading(false);
        setIsSubmitted(true);
      }, 2000);
      
    } catch (error) {
      console.error('비밀번호 재설정 이메일 전송 실패:', error);
      setError('이메일 전송에 실패했습니다. 다시 시도해주세요.');
      setIsLoading(false);
    }
  };

  return (
    <ForgotPasswordContainer>
      <ForgotPasswordCard>
        <ForgotPasswordHeader>
          <Title>비밀번호 찾기</Title>
          <Subtitle>가입한 이메일로 비밀번호 재설정 링크를 보내드립니다</Subtitle>
        </ForgotPasswordHeader>

        {isSubmitted ? (
          <>
            <SuccessMessage role="alert" aria-live="polite">
              비밀번호 재설정 이메일이 전송되었습니다. 이메일을 확인해주세요.
            </SuccessMessage>
            <Button 
              variant="primary" 
              fullWidth 
              onClick={() => window.location.href = '/'}
            >
              로그인 페이지로 돌아가기
            </Button>
          </>
        ) : (
          <Form onSubmit={handleSubmit} noValidate>
            <FormInput
              label="이메일"
              id="email"
              name="email"
              type="email"
              placeholder="가입한 이메일 주소를 입력하세요"
              value={email}
              onChange={handleChange}
              error={error}
              required
            />
            {error && (
              <div role="alert" style={{ color: 'var(--error)', fontSize: 'var(--font-size-sm)' }}>
                {error}
              </div>
            )}
            <Button 
              type="submit" 
              variant="primary" 
              fullWidth 
              disabled={isLoading}
            >
              {isLoading ? '처리 중...' : '비밀번호 재설정 이메일 보내기'}
            </Button>
          </Form>
        )}

        <LoginPrompt>
          비밀번호가 기억나셨나요? <LoginLink to="/">로그인</LoginLink>
        </LoginPrompt>
      </ForgotPasswordCard>
    </ForgotPasswordContainer>
  );
};

export default ForgotPasswordPage;
