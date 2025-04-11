// 더미 데이터 및 서비스 함수를 제공하는 파일
// 실제 백엔드 API가 구현되면 이 파일의 함수들을 실제 API 호출로 대체할 수 있습니다.

// 상품 더미 데이터
export const productsData = [
  { id: 1, name: '상품 A', category: '의류', price: 25000, stock: 100, status: '판매중' },
  { id: 2, name: '상품 B', category: '전자기기', price: 150000, stock: 50, status: '판매중' },
  { id: 3, name: '상품 C', category: '식품', price: 5000, stock: 200, status: '품절' },
  { id: 4, name: '상품 D', category: '가구', price: 80000, stock: 30, status: '판매중' },
  { id: 5, name: '상품 E', category: '도서', price: 15000, stock: 80, status: '판매중' },
  { id: 6, name: '상품 F', category: '의류', price: 35000, stock: 45, status: '판매중' },
  { id: 7, name: '상품 G', category: '전자기기', price: 200000, stock: 20, status: '판매중' },
  { id: 8, name: '상품 H', category: '식품', price: 8000, stock: 150, status: '판매중' },
  { id: 9, name: '상품 I', category: '가구', price: 120000, stock: 15, status: '판매중지' },
  { id: 10, name: '상품 J', category: '도서', price: 22000, stock: 60, status: '판매중' },
];

// 주문 더미 데이터
export const ordersData = [
  {
    id: 'ORD-2025-0001',
    customerName: '김철수',
    orderDate: '2025-04-05',
    totalAmount: 75000,
    status: '배송완료',
    items: [
      { id: 1, name: '상품 A', quantity: 2, price: 25000 },
      { id: 2, name: '상품 B', quantity: 1, price: 25000 }
    ],
    shippingInfo: {
      address: '서울시 강남구 테헤란로 123',
      contact: '010-1234-5678',
      courier: '우체국택배',
      trackingNumber: '1234567890'
    }
  },
  {
    id: 'ORD-2025-0002',
    customerName: '이영희',
    orderDate: '2025-04-06',
    totalAmount: 150000,
    status: '배송중',
    items: [
      { id: 2, name: '상품 B', quantity: 1, price: 150000 }
    ],
    shippingInfo: {
      address: '부산시 해운대구 해운대로 456',
      contact: '010-2345-6789',
      courier: 'CJ대한통운',
      trackingNumber: '2345678901'
    }
  },
  {
    id: 'ORD-2025-0003',
    customerName: '박지민',
    orderDate: '2025-04-07',
    totalAmount: 50000,
    status: '배송준비중',
    items: [
      { id: 3, name: '상품 C', quantity: 10, price: 5000 }
    ],
    shippingInfo: {
      address: '인천시 연수구 연수동 789',
      contact: '010-3456-7890',
      courier: '롯데택배',
      trackingNumber: ''
    }
  },
  {
    id: 'ORD-2025-0004',
    customerName: '최민수',
    orderDate: '2025-04-07',
    totalAmount: 80000,
    status: '주문접수',
    items: [
      { id: 4, name: '상품 D', quantity: 1, price: 80000 }
    ],
    shippingInfo: {
      address: '대전시 유성구 유성동 101',
      contact: '010-4567-8901',
      courier: '',
      trackingNumber: ''
    }
  },
  {
    id: 'ORD-2025-0005',
    customerName: '정수민',
    orderDate: '2025-04-03',
    totalAmount: 30000,
    status: '취소',
    items: [
      { id: 5, name: '상품 E', quantity: 2, price: 15000 }
    ],
    shippingInfo: {
      address: '광주시 서구 상무동 202',
      contact: '010-5678-9012',
      courier: '',
      trackingNumber: ''
    }
  }
];

// 고객 더미 데이터
export const customersData = [
  {
    id: 1,
    name: '김철수',
    email: 'kim@example.com',
    phone: '010-1234-5678',
    joinDate: '2024-01-15',
    status: '활성',
    totalOrders: 12,
    totalSpent: 750000,
    address: '서울시 강남구 테헤란로 123',
    orderHistory: [
      { id: 'ORD-2025-0001', date: '2025-04-05', amount: 75000, status: '배송완료' },
      { id: 'ORD-2024-0045', date: '2024-12-20', amount: 150000, status: '배송완료' },
      { id: 'ORD-2024-0023', date: '2024-08-15', amount: 50000, status: '배송완료' }
    ]
  },
  {
    id: 2,
    name: '이영희',
    email: 'lee@example.com',
    phone: '010-2345-6789',
    joinDate: '2024-02-20',
    status: '활성',
    totalOrders: 8,
    totalSpent: 520000,
    address: '부산시 해운대구 해운대로 456',
    orderHistory: [
      { id: 'ORD-2025-0002', date: '2025-04-06', amount: 150000, status: '배송중' },
      { id: 'ORD-2024-0050', date: '2024-12-25', amount: 80000, status: '배송완료' }
    ]
  },
  {
    id: 3,
    name: '박지민',
    email: 'park@example.com',
    phone: '010-3456-7890',
    joinDate: '2024-03-10',
    status: '활성',
    totalOrders: 5,
    totalSpent: 320000,
    address: '인천시 연수구 연수동 789',
    orderHistory: [
      { id: 'ORD-2025-0003', date: '2025-04-07', amount: 50000, status: '배송준비중' }
    ]
  },
  {
    id: 4,
    name: '최민수',
    email: 'choi@example.com',
    phone: '010-4567-8901',
    joinDate: '2024-04-05',
    status: '휴면',
    totalOrders: 2,
    totalSpent: 120000,
    address: '대전시 유성구 유성동 101',
    orderHistory: [
      { id: 'ORD-2024-0030', date: '2024-09-15', amount: 40000, status: '배송완료' },
      { id: 'ORD-2024-0015', date: '2024-06-20', amount: 80000, status: '배송완료' }
    ]
  },
  {
    id: 5,
    name: '정수민',
    email: 'jung@example.com',
    phone: '010-5678-9012',
    joinDate: '2024-05-15',
    status: '탈퇴',
    totalOrders: 1,
    totalSpent: 30000,
    address: '광주시 서구 상무동 202',
    orderHistory: [
      { id: 'ORD-2024-0010', date: '2024-05-25', amount: 30000, status: '배송완료' }
    ]
  }
];

// 매출 통계 더미 데이터
export const salesData = {
  totalSales: 3250000,
  totalOrders: 85,
  averageOrderValue: 38235,
  conversionRate: 3.2,
  salesChange: 12.5,
  ordersChange: 8.3,
  aovChange: 4.1,
  conversionChange: -0.5,
  topProducts: [
    { id: 1, name: '상품 B', sales: 750000, quantity: 5, percentageOfTotal: 23.1 },
    { id: 2, name: '상품 D', sales: 640000, quantity: 8, percentageOfTotal: 19.7 },
    { id: 3, name: '상품 A', sales: 500000, quantity: 20, percentageOfTotal: 15.4 },
    { id: 4, name: '상품 C', sales: 450000, quantity: 90, percentageOfTotal: 13.8 },
    { id: 5, name: '상품 E', sales: 300000, quantity: 20, percentageOfTotal: 9.2 }
  ],
  dailySales: [
    { date: '2025-04-01', sales: 120000, orders: 3 },
    { date: '2025-04-02', sales: 85000, orders: 2 },
    { date: '2025-04-03', sales: 150000, orders: 4 },
    { date: '2025-04-04', sales: 200000, orders: 5 },
    { date: '2025-04-05', sales: 175000, orders: 4 },
    { date: '2025-04-06', sales: 90000, orders: 2 },
    { date: '2025-04-07', sales: 110000, orders: 3 }
  ]
};

// 인증 관련 서비스 함수
export const authService = {
  login: async (email, password) => {
    // 실제 API 호출 대신 더미 로직
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          localStorage.setItem('isAuthenticated', 'true');
          localStorage.setItem('user', JSON.stringify({ email, name: '관리자', role: '프론트엔드 팀장' }));
          resolve({ success: true, message: '로그인 성공' });
        } else {
          reject({ success: false, message: '이메일 또는 비밀번호가 올바르지 않습니다.' });
        }
      }, 1000);
    });
  },
  
  signup: async (email, password) => {
    // 실제 API 호출 대신 더미 로직
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: '회원가입 성공' });
      }, 1000);
    });
  },
  
  forgotPassword: async (email) => {
    // 실제 API 호출 대신 더미 로직
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: '비밀번호 재설정 이메일 전송 성공' });
      }, 1000);
    });
  },
  
  logout: () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    window.location.href = '/';
  }
};

// 상품 관련 서비스 함수
export const productService = {
  getProducts: async () => {
    // 실제 API 호출 대신 더미 데이터 반환
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsData);
      }, 500);
    });
  },
  
  addProduct: async (product) => {
    // 실제 API 호출 대신 더미 로직
    return new Promise((resolve) => {
      setTimeout(() => {
        const newProduct = {
          id: Math.max(...productsData.map(p => p.id)) + 1,
          ...product
        };
        productsData.push(newProduct);
        resolve(newProduct);
      }, 500);
    });
  },
  
  updateProduct: async (id, product) => {
    // 실제 API 호출 대신 더미 로직
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = productsData.findIndex(p => p.id === id);
        if (index !== -1) {
          productsData[index] = { ...productsData[index], ...product };
          resolve(productsData[index]);
        }
      }, 500);
    });
  },
  
  deleteProduct: async (id) => {
    // 실제 API 호출 대신 더미 로직
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = productsData.findIndex(p => p.id === id);
        if (index !== -1) {
          productsData.splice(index, 1);
        }
        resolve({ success: true });
      }, 500);
    });
  }
};

// 주문 관련 서비스 함수
export const orderService = {
  getOrders: async () => {
    // 실제 API 호출 대신 더미 데이터 반환
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(ordersData);
      }, 500);
    });
  },
  
  getOrderById: async (id) => {
    // 실제 API 호출 대신 더미 로직
    return new Promise((resolve) => {
      setTimeout(() => {
        const order = ordersData.find(o => o.id === id);
        resolve(order);
      }, 500);
    });
  },
  
  updateOrderStatus: async (id, status) => {
    // 실제 API 호출 대신 더미 로직
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = ordersData.findIndex(o => o.id === id);
        if (index !== -1) {
          ordersData[index].status = status;
          resolve(ordersData[index]);
        }
      }, 500);
    });
  }
};

// 고객 관련 서비스 함수
export const customerService = {
  getCustomers: async () => {
    // 실제 API 호출 대신 더미 데이터 반환
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(customersData);
      }, 500);
    });
  },
  
  getCustomerById: async (id) => {
    // 실제 API 호출 대신 더미 로직
    return new Promise((resolve) => {
      setTimeout(() => {
        const customer = customersData.find(c => c.id === id);
        resolve(customer);
      }, 500);
    });
  },
  
  updateCustomer: async (id, data) => {
    // 실제 API 호출 대신 더미 로직
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = customersData.findIndex(c => c.id === id);
        if (index !== -1) {
          customersData[index] = { ...customersData[index], ...data };
          resolve(customersData[index]);
        }
      }, 500);
    });
  }
};

// 매출 통계 관련 서비스 함수
export const statisticsService = {
  getSalesData: async (dateRange) => {
    // 실제 API 호출 대신 더미 데이터 반환
    return new Promise((resolve) => {
      setTimeout(() => {
        // 실제 구현에서는 dateRange에 따라 다른 데이터 반환
        resolve(salesData);
      }, 500);
    });
  }
};
