import React, { useState } from 'react';
import ResponsiveDashboardLayout from '../../components/layout/ResponsiveDashboardLayout';
import FormInput from '../../components/common/FormInput';
import Button from '../../components/common/Button';

const ProductManagementPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([
    {
      id: 1,
      name: '스마트폰 케이스',
      category: '액세서리',
      price: 15000,
      stock: 50,
      status: 'active'
    },
    {
      id: 2,
      name: '보호필름',
      category: '액세서리',
      price: 10000,
      stock: 100,
      status: 'active'
    },
    {
      id: 3,
      name: '블루투스 이어폰',
      category: '오디오',
      price: 67000,
      stock: 25,
      status: 'active'
    },
    {
      id: 4,
      name: '스마트워치',
      category: '웨어러블',
      price: 128000,
      stock: 15,
      status: 'inactive'
    }
  ]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddProduct = () => {
    setIsAddModalOpen(true);
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const getStatusText = (status) => {
    return status === 'active' ? '판매중' : '품절';
  };

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ResponsiveDashboardLayout>
      <div className="product-management-container">
        <div className="page-header">
          <h1 className="page-title">상품 관리</h1>
          <Button variant="primary" onClick={handleAddProduct}>
            + 상품 추가
          </Button>
        </div>
        
        <div className="search-container">
          <FormInput
            type="text"
            placeholder="상품명 또는 카테고리로 검색"
            value={searchTerm}
            onChange={handleSearchChange}
            icon="search"
          />
        </div>
        
        <div className="table-container">
          <table className="product-table">
            <thead>
              <tr>
                <th>상품명</th>
                <th>카테고리</th>
                <th>가격</th>
                <th>재고</th>
                <th>상태</th>
                <th>액션</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.price.toLocaleString()}원</td>
                  <td>{product.stock}</td>
                  <td>
                    <span className={`status-badge ${product.status}`}>
                      {getStatusText(product.status)}
                    </span>
                  </td>
                  <td className="action-buttons">
                    <Button 
                      variant="text" 
                      onClick={() => handleEditProduct(product)}
                    >
                      수정
                    </Button>
                    <Button 
                      variant="text" 
                      className="delete-button"
                    >
                      삭제
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Add and Edit modals would be implemented as separate components */}
      </div>
    </ResponsiveDashboardLayout>
  );
};

export default ProductManagementPage;