// src/utils/validators.js

// Validate email
export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  // Validate password (at least 8 characters, with numbers and letters)
  export const validatePassword = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(String(password));
  };
  
  // Validate Korean phone number
  export const validateKoreanPhone = (phone) => {
    const re = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    return re.test(String(phone));
  };
  
  // Validate required field
  export const validateRequired = (value) => {
    return value !== null && value !== undefined && value.toString().trim() !== '';
  };
  
  // Validate number
  export const validateNumber = (value) => {
    return !isNaN(parseFloat(value)) && isFinite(value);
  };
  
  // Validate positive number
  export const validatePositiveNumber = (value) => {
    return validateNumber(value) && parseFloat(value) > 0;
  };
  
  // Validate minimum length
  export const validateMinLength = (value, minLength) => {
    return value && value.length >= minLength;
  };
  
  // Validate maximum length
  export const validateMaxLength = (value, maxLength) => {
    return value && value.length <= maxLength;
  };
  
  // Validate file size
  export const validateFileSize = (file, maxSizeMB) => {
    return file && file.size <= maxSizeMB * 1024 * 1024;
  };
  
  // Validate file type
  export const validateFileType = (file, allowedTypes) => {
    return file && allowedTypes.includes(file.type);
  };
  
  // Validate image dimensions
  export const validateImageDimensions = async (file, minWidth, minHeight) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const valid = img.width >= minWidth && img.height >= minHeight;
        resolve(valid);
      };
      img.onerror = () => {
        resolve(false);
      };
      img.src = URL.createObjectURL(file);
    });
  };
  
  // Validate URL
  export const validateUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  };
  
  // Validate Korean business registration number
  export const validateBusinessNumber = (number) => {
    const re = /^[0-9]{3}-[0-9]{2}-[0-9]{5}$/;
    return re.test(String(number));
  };