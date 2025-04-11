import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FormInput from '../../components/common/FormInput';
import Button from '../../components/common/Button';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: var(--neutral-200);
`;

const LoginCard = styled.div`
  background-color: var(--neutral-100);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
`;

const LoginHeader = styled.div`
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

const ForgotPasswordLink = styled(Link)`
  font-size: var(--font-size-sm);
  color: var(--primary-300);
  text-align: right;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const SignupPrompt = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  font-size: var(--font-size-sm);
  color: var(--neutral-700);
`;

const SignupLink = styled(Link)`
  color: var(--primary-300);
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ErrorMessage = styled.div`
  color: var(--error);
  margin-bottom: 1rem;
  font-size: var(--font-size-sm);
`;

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = '이메일을 입력해주세요.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '유효한 이메일 주소를 입력해주세요.';
    }
    
    if (!formData.password) {
      newErrors.password = '비밀번호를 입력해주세요.';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // 실제 API 연동 시 여기에 axios 요청 코드 작성
      console.log('로그인 시도:', formData);
      
      // 로그인 성공 시뮬레이션 (2초 후)
      setTimeout(() => {
        console.log('로그인 성공!');
        setIsLoading(false);
        // 실제 구현 시: navigate('/dashboard');
      }, 2000);
      
    } catch (error) {
      console.error('로그인 실패:', error);
      setErrors({
        general: '로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.'
      });
      setIsLoading(false);
    }
  };
  
  return (
    <LoginContainer>
      <LoginCard>
        <LoginHeader>
          <Title>로그인</Title>
          <Subtitle>계정에 로그인하여 서비스를 이용하세요</Subtitle>
        </LoginHeader>
        
        <Form onSubmit={handleSubmit} noValidate>
          {errors.general && (
            <ErrorMessage role="alert" aria-live="polite">
              {errors.general}
            </ErrorMessage>
          )}
          
          <FormInput
            label="이메일"
            id="email"
            name="email"
            type="email"
            placeholder="이메일 주소를 입력하세요"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
          
          <FormInput
            label="비밀번호"
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            required
          />
          
          <ForgotPasswordLink to="/forgot-password">
            비밀번호를 잊으셨나요?
          </ForgotPasswordLink>
          
          <Button 
            type="submit" 
            variant="primary" 
            fullWidth 
            disabled={isLoading}
          >
            {isLoading ? '로그인 중...' : '로그인'}
          </Button>
        </Form>
        
        <SignupPrompt>
          계정이 없으신가요? <SignupLink to="/signup">회원가입</SignupLink>
        </SignupPrompt>
      </LoginCard>
    </LoginContainer>
  );
};

export default LoginPage;
