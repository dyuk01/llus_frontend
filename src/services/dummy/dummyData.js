// src/services/dummy/dummyData.js

// Dummy products data
export const products = [
    {
      id: 101,
      name: '스마트폰 케이스',
      category: '액세서리',
      price: 25000,
      description: '고급 실리콘 재질의 스마트폰 보호 케이스',
      stock: 150,
      images: ['smartphone-case-1.jpg', 'smartphone-case-2.jpg'],
      createdAt: '2024-01-10',
      lastUpdated: '2024-03-15',
      marketplaces: ['coupang', 'gmarket'],
      rating: 4.8,
      reviewCount: 120,
    },
    {
      id: 102,
      name: '블루투스 이어폰',
      category: '오디오',
      price: 100000,
      description: '무선 블루투스 5.0 이어폰, 노이즈 캔슬링 기능',
      stock: 75,
      images: ['bluetooth-earphones-1.jpg', 'bluetooth-earphones-2.jpg'],
      createdAt: '2024-01-15',
      lastUpdated: '2024-03-10',
      marketplaces: ['coupang', 'gmarket', '11st'],
      rating: 4.5,
      reviewCount: 85,
    },
    {
      id: 103,
      name: '무선 마우스',
      category: '컴퓨터 주변기기',
      price: 45000,
      description: '인체공학적 디자인의 무선 마우스, 긴 배터리 수명',
      stock: 100,
      images: ['wireless-mouse-1.jpg', 'wireless-mouse-2.jpg'],
      createdAt: '2024-01-20',
      lastUpdated: '2024-02-28',
      marketplaces: ['coupang', '11st'],
      rating: 4.7,
      reviewCount: 65,
    },
    {
      id: 104,
      name: '키보드 받침대',
      category: '컴퓨터 주변기기',
      price: 20000,
      description: '손목 보호를 위한 메모리폼 키보드 받침대',
      stock: 200,
      images: ['keyboard-rest-1.jpg', 'keyboard-rest-2.jpg'],
      createdAt: '2024-01-25',
      lastUpdated: '2024-02-20',
      marketplaces: ['coupang', 'gmarket', '11st'],
      rating: 4.3,
      reviewCount: 42,
    },
    {
      id: 105,
      name: '스마트 워치',
      category: '웨어러블',
      price: 210000,
      description: '심박수 측정 및 GPS 기능이 탑재된 스마트 워치',
      stock: 50,
      images: ['smart-watch-1.jpg', 'smart-watch-2.jpg'],
      createdAt: '2024-02-01',
      lastUpdated: '2024-03-18',
      marketplaces: ['coupang', 'gmarket'],
      rating: 4.9,
      reviewCount: 38,
    },
  ];
  
  // Dummy sales data
  export const salesOverview = {
    totalSales: 3580000,
    ordersCount: 35,
    averageOrderValue: 102285,
    period: {
      start: '2024-03-01',
      end: '2024-03-31',
    },
    comparisonWithPreviousPeriod: {
      totalSales: 12.5, // percentage increase
      ordersCount: 8.2, // percentage increase
      averageOrderValue: 4.1, // percentage increase
    },
    marketplaceBreakdown: [
      { name: 'Coupang', sales: 1850000, percentage: 51.7 },
      { name: 'Gmarket', sales: 980000, percentage: 27.4 },
      { name: '11st', sales: 750000, percentage: 20.9 },
    ],
  };
  
  // Dummy daily sales data
  export const dailySales = [
    { date: '2024-03-01', orders: 2, sales: 150000 },
    { date: '2024-03-02', orders: 1, sales: 80000 },
    { date: '2024-03-03', orders: 3, sales: 220000 },
    { date: '2024-03-04', orders: 2, sales: 175000 },
    { date: '2024-03-05', orders: 1, sales: 120000 },
    { date: '2024-03-06', orders: 0, sales: 0 },
    { date: '2024-03-07', orders: 2, sales: 130000 },
    { date: '2024-03-08', orders: 3, sales: 250000 },
    { date: '2024-03-09', orders: 1, sales: 95000 },
    { date: '2024-03-10', orders: 2, sales: 180000 },
    { date: '2024-03-11', orders: 1, sales: 110000 },
    { date: '2024-03-12', orders: 3, sales: 270000 },
    { date: '2024-03-13', orders: 2, sales: 160000 },
    { date: '2024-03-14', orders: 1, sales: 75000 },
    { date: '2024-03-15', orders: 2, sales: 210000 },
    { date: '2024-03-16', orders: 1, sales: 120000 },
    { date: '2024-03-17', orders: 0, sales: 0 },
    { date: '2024-03-18', orders: 1, sales: 85000 },
    { date: '2024-03-19', orders: 2, sales: 195000 },
    { date: '2024-03-20', orders: 3, sales: 320000 },
    { date: '2024-03-21', orders: 1, sales: 130000 },
    { date: '2024-03-22', orders: 0, sales: 0 },
    { date: '2024-03-23', orders: 1, sales: 95000 },
    { date: '2024-03-24', orders: 0, sales: 0 },
    { date: '2024-03-25', orders: 0, sales: 0 },
    { date: '2024-03-26', orders: 0, sales: 0 },
    { date: '2024-03-27', orders: 0, sales: 0 },
    { date: '2024-03-28', orders: 0, sales: 0 },
    { date: '2024-03-29', orders: 0, sales: 0 },
    { date: '2024-03-30', orders: 0, sales: 0 },
    { date: '2024-03-31', orders: 0, sales: 0 },
  ];
  
  // Dummy product sales data
  export const productSales = [
    { 
      id: 101,
      name: '스마트폰 케이스',
      quantity: 15,
      totalSales: 375000,
      averagePrice: 25000,
      marketplaceBreakdown: [
        { name: 'Coupang', sales: 200000, quantity: 8 },
        { name: 'Gmarket', sales: 175000, quantity: 7 },
      ]
    },
    { 
      id: 102,
      name: '블루투스 이어폰',
      quantity: 8,
      totalSales: 800000,
      averagePrice: 100000,
      marketplaceBreakdown: [
        { name: 'Coupang', sales: 500000, quantity: 5 },
        { name: 'Gmarket', sales: 200000, quantity: 2 },
        { name: '11st', sales: 100000, quantity: 1 },
      ]
    },
    { 
      id: 103,
      name: '무선 마우스',
      quantity: 12,
      totalSales: 540000,
      averagePrice: 45000,
      marketplaceBreakdown: [
        { name: 'Coupang', sales: 360000, quantity: 8 },
        { name: '11st', sales: 180000, quantity: 4 },
      ]
    },
    { 
      id: 104,
      name: '키보드 받침대',
      quantity: 25,
      totalSales: 500000,
      averagePrice: 20000,
      marketplaceBreakdown: [
        { name: 'Coupang', sales: 240000, quantity: 12 },
        { name: 'Gmarket', sales: 160000, quantity: 8 },
        { name: '11st', sales: 100000, quantity: 5 },
      ]
    },
    { 
      id: 105,
      name: '스마트 워치',
      quantity: 7,
      totalSales: 1470000,
      averagePrice: 210000,
      marketplaceBreakdown: [
        { name: 'Coupang', sales: 840000, quantity: 4 },
        { name: 'Gmarket', sales: 630000, quantity: 3 },
      ]
    },
  ];
  
  // Dummy chart data
  export const salesChartData = [
    { date: '2024-03-01', coupang: 80000, gmarket: 70000, elevst: 0 },
    { date: '2024-03-02', coupang: 80000, gmarket: 0, elevst: 0 },
    { date: '2024-03-03', coupang: 100000, gmarket: 70000, elevst: 50000 },
    { date: '2024-03-04', coupang: 75000, gmarket: 50000, elevst: 50000 },
    { date: '2024-03-05', coupang: 120000, gmarket: 0, elevst: 0 },
    { date: '2024-03-06', coupang: 0, gmarket: 0, elevst: 0 },
    { date: '2024-03-07', coupang: 80000, gmarket: 50000, elevst: 0 },
    { date: '2024-03-08', coupang: 150000, gmarket: 100000, elevst: 0 },
    { date: '2024-03-09', coupang: 45000, gmarket: 0, elevst: 50000 },
    { date: '2024-03-10', coupang: 80000, gmarket: 50000, elevst: 50000 },
    { date: '2024-03-11', coupang: 60000, gmarket: 0, elevst: 50000 },
    { date: '2024-03-12', coupang: 120000, gmarket: 100000, elevst: 50000 },
    { date: '2024-03-13', coupang: 80000, gmarket: 80000, elevst: 0 },
    { date: '2024-03-14', coupang: 75000, gmarket: 0, elevst: 0 },
    { date: '2024-03-15', coupang: 110000, gmarket: 100000, elevst: 0 },
    { date: '2024-03-16', coupang: 70000, gmarket: 0, elevst: 50000 },
    { date: '2024-03-17', coupang: 0, gmarket: 0, elevst: 0 },
    { date: '2024-03-18', coupang: 85000, gmarket: 0, elevst: 0 },
    { date: '2024-03-19', coupang: 95000, gmarket: 50000, elevst: 50000 },
    { date: '2024-03-20', coupang: 150000, gmarket: 120000, elevst: 50000 },
    { date: '2024-03-21', coupang: 80000, gmarket: 50000, elevst: 0 },
    { date: '2024-03-22', coupang: 0, gmarket: 0, elevst: 0 },
    { date: '2024-03-23', coupang: 45000, gmarket: 0, elevst: 50000 },
    { date: '2024-03-24', coupang: 0, gmarket: 0, elevst: 0 },
    { date: '2024-03-25', coupang: 0, gmarket: 0, elevst: 0 },
    { date: '2024-03-26', coupang: 0, gmarket: 0, elevst: 0 },
    { date: '2024-03-27', coupang: 0, gmarket: 0, elevst: 0 },
    { date: '2024-03-28', coupang: 0, gmarket: 0, elevst: 0 },
    { date: '2024-03-29', coupang: 0, gmarket: 0, elevst: 0 },
    { date: '2024-03-30', coupang: 0, gmarket: 0, elevst: 0 },
    { date: '2024-03-31', coupang: 0, gmarket: 0, elevst: 0 },
  ];
  
  // Dummy marketplace data
  export const marketplaces = [
    {
      id: 'coupang',
      name: 'Coupang',
      logo: 'coupang-logo.png',
      connected: true,
      status: 'active',
      products: 15,
      monthlyOrders: 18,
      monthlySales: 1850000,
    },
    {
      id: 'gmarket',
      name: 'Gmarket',
      logo: 'gmarket-logo.png',
      connected: true,
      status: 'active',
      products: 12,
      monthlyOrders: 10,
      monthlySales: 980000,
    },
    {
      id: '11st',
      name: '11번가',
      logo: '11st-logo.png',
      connected: true,
      status: 'active',
      products: 8,
      monthlyOrders: 7,
      monthlySales: 750000,
    },
    {
      id: 'auction',
      name: '옥션',
      logo: 'auction-logo.png',
      connected: false,
      status: 'inactive',
      products: 0,
      monthlyOrders: 0,
      monthlySales: 0,
    },
    {
      id: 'interpark',
      name: '인터파크',
      logo: 'interpark-logo.png',
      connected: false,
      status: 'inactive',
      products: 0,
      monthlyOrders: 0,
      monthlySales: 0,
    },
  ];
  
  // Function to simulate API calls
  export const simulateApiCall = (data, delay = 500) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, delay);
    });
  };
  
  // Get customers with pagination and filtering
  export const getCustomers = async (params = {}) => {
    const { page = 1, limit = 10, search = '', sortBy = 'name', sortOrder = 'asc' } = params;
    
    // Filter by search term
    let filteredCustomers = customers;
    if (search) {
      const searchLower = search.toLowerCase();
      filteredCustomers = customers.filter(customer => 
        customer.name.toLowerCase().includes(searchLower) ||
        customer.email.toLowerCase().includes(searchLower) ||
        customer.phone.includes(search)
      );
    }
    
    // Sort
    filteredCustomers.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      } else {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    });
    
    // Paginate
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedCustomers = filteredCustomers.slice(startIndex, endIndex);
    
    return simulateApiCall({
      data: paginatedCustomers,
      total: filteredCustomers.length,
      page,
      limit,
      totalPages: Math.ceil(filteredCustomers.length / limit),
    });
  };
  
  // Get orders with pagination and filtering
  export const getOrders = async (params = {}) => {
    const { page = 1, limit = 10, search = '', status = '', sortBy = 'orderDate', sortOrder = 'desc' } = params;
    
    // Filter by search term and status
    let filteredOrders = orders;
    if (search) {
      const searchLower = search.toLowerCase();
      filteredOrders = orders.filter(order => 
        order.id.toLowerCase().includes(searchLower) ||
        order.customerName.toLowerCase().includes(searchLower)
      );
    }
    
    if (status) {
      filteredOrders = filteredOrders.filter(order => order.status === status);
    }
    
    // Sort
    filteredOrders.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      } else {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    });
    
    // Paginate
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedOrders = filteredOrders.slice(startIndex, endIndex);
    
    return simulateApiCall({
      data: paginatedOrders,
      total: filteredOrders.length,
      page,
      limit,
      totalPages: Math.ceil(filteredOrders.length / limit),
    });
  };
  
  // Get products with pagination and filtering
  export const getProducts = async (params = {}) => {
    const { page = 1, limit = 10, search = '', category = '', sortBy = 'name', sortOrder = 'asc' } = params;
    
    // Filter by search term and category
    let filteredProducts = products;
    if (search) {
      const searchLower = search.toLowerCase();
      filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower)
      );
    }
    
    if (category) {
      filteredProducts = filteredProducts.filter(product => product.category === category);
    }
    
    // Sort
    filteredProducts.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      } else {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    });
    
    // Paginate
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    return simulateApiCall({
      data: paginatedProducts,
      total: filteredProducts.length,
      page,
      limit,
      totalPages: Math.ceil(filteredProducts.length / limit),
    });
  };
  
  // Export all dummy data functions
  export default {
    customers,
    orders,
    products,
    salesOverview,
    dailySales,
    productSales,
    salesChartData,
    marketplaces,
    getCustomers,
    getOrders,
    getProducts,
    simulateApiCall,
  };