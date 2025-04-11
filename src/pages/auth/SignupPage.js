import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FormInput from '../../components/common/FormInput';
import Button from '../../components/common/Button';

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: var(--neutral-200);
`;

const SignupCard = styled.div`
  background-color: var(--neutral-100);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
`;

const SignupHeader = styled.div`
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

const ErrorMessage = styled.div`
  color: var(--error);
  margin-bottom: 1rem;
  font-size: var(--font-size-sm);
`;

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
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
    } else if (formData.password.length < 6) {
      newErrors.password = '비밀번호는 최소 6자 이상이어야 합니다.';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = '비밀번호 확인을 입력해주세요.';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = '비밀번호가 일치하지 않습니다.';
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
      console.log('회원가입 시도:', formData);
      
      // 회원가입 성공 시뮬레이션 (2초 후)
      setTimeout(() => {
        console.log('회원가입 성공!');
        setIsLoading(false);
        // 실제 구현 시: navigate('/login');
      }, 2000);
      
    } catch (error) {
      console.error('회원가입 실패:', error);
      setErrors({
        general: '회원가입에 실패했습니다. 다시 시도해주세요.'
      });
      setIsLoading(false);
    }
  };
  
  return (
    <SignupContainer>
      <SignupCard>
        <SignupHeader>
          <Title>회원가입</Title>
          <Subtitle>새 계정을 만들어 서비스를 이용하세요</Subtitle>
        </SignupHeader>
        
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
          
          <FormInput
            label="비밀번호 확인"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="비밀번호를 다시 입력하세요"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            required
          />
          
          <Button 
            type="submit" 
            variant="primary" 
            fullWidth 
            disabled={isLoading}
          >
            {isLoading ? '처리 중...' : '회원가입'}
          </Button>
        </Form>
        
        <LoginPrompt>
          이미 계정이 있으신가요? <LoginLink to="/login">로그인</LoginLink>
        </LoginPrompt>
      </SignupCard>
    </SignupContainer>
  );
};

export default SignupPage;
