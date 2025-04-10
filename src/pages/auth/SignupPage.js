import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/common/Button';
import FormInput from '../../components/common/FormInput';

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = '이름을 입력해주세요';
    if (!formData.email) tempErrors.email = '이메일을 입력해주세요';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = '유효한 이메일을 입력해주세요';
    
    if (!formData.password) tempErrors.password = '비밀번호를 입력해주세요';
    else if (formData.password.length < 8) tempErrors.password = '비밀번호는 최소 8자 이상이어야 합니다';
    
    if (!formData.confirmPassword) tempErrors.confirmPassword = '비밀번호 확인을 입력해주세요';
    else if (formData.password !== formData.confirmPassword) tempErrors.confirmPassword = '비밀번호가 일치하지 않습니다';
    
    if (!formData.agreeTerms) tempErrors.agreeTerms = '이용약관에 동의해주세요';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Signup logic will be implemented later
      // For now, navigate to login
      navigate('/auth/login');
    }
  };

  return (
    <SignupContainer>
      <SignupCard>
        <LogoContainer>
          <Logo src="/logo.png" alt="마켓봇 로고" />
          <LogoText>마켓봇</LogoText>
        </LogoContainer>
        
        <SignupHeading>회원가입</SignupHeading>
        
        <Form onSubmit={handleSubmit}>
          <FormInput
            label="이름"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="이름을 입력해주세요"
            error={errors.name}
          />
          
          <FormInput
            label="이메일"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="이메일을 입력해주세요"
            error={errors.email}
          />
          
          <FormInput
            label="비밀번호"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="비밀번호를 입력해주세요"
            error={errors.password}
          />
          
          <FormInput
            label="비밀번호 확인"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="비밀번호를 다시 입력해주세요"
            error={errors.confirmPassword}
          />
          
          <CheckboxContainer>
            <CheckboxInput
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
            />
            <CheckboxLabel htmlFor="agreeTerms">
              <Link to="/terms">이용약관</Link>에 동의합니다
            </CheckboxLabel>
          </CheckboxContainer>
          {errors.agreeTerms && <ErrorMessage>{errors.agreeTerms}</ErrorMessage>}
          
          <SignupButton type="submit">회원가입</SignupButton>
        </Form>
        
        <LoginPrompt>
          이미 계정이 있으신가요? <LoginLink to="/auth/login">로그인</LoginLink>
        </LoginPrompt>
      </SignupCard>
    </SignupContainer>
  );
};

// Styled components for the Signup page
const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #F5F5F5;
  padding: 20px;
`;

const SignupCard = styled.div`
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

const SignupHeading = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #212121;
  margin-bottom: 32px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxInput = styled.input`
  margin-right: 8px;
`;

const CheckboxLabel = styled.label`
  font-size: 14px;
  color: #616161;
  
  a {
    color: #1E88E5;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ErrorMessage = styled.span`
  font-size: 12px;
  color: #F44336;
  margin-top: -12px;
`;

const SignupButton = styled(Button)`
  margin-top: 16px;
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
`;

const LoginPrompt = styled.div`
  text-align: center;
  margin-top: 32px;
  font-size: 14px;
  color: #616161;
`;

const LoginLink = styled(Link)`
  color: #1E88E5;
  font-weight: 500;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export default SignupPage;