import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/common/Button';
import FormInput from '../../components/common/FormInput';

const PageContainer = styled.div`
  padding: 2rem;
  background-color: var(--neutral-200);
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: var(--font-size-2xl);
  font-weight: 600;
  color: var(--neutral-900);
`;

const Card = styled.div`
  background-color: var(--neutral-100);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

const Th = styled.th`
  text-align: left;
  padding: 1rem;
  border-bottom: 1px solid var(--neutral-300);
  color: var(--neutral-700);
  font-weight: 600;
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid var(--neutral-300);
  color: var(--neutral-800);
`;

const ActionButton = styled(Button)`
  margin-right: 0.5rem;
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SearchInput = styled(FormInput)`
  flex: 1;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: var(--neutral-100);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  width: 100%;
  max-width: 500px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ModalTitle = styled.h2`
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--neutral-900);
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--neutral-600);
  
  &:hover {
    color: var(--neutral-900);
  }
`;

const FormRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  
  & > * {
    flex: 1;
  }
`;

const ProductManagementPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: '상품 A', category: '의류', price: 25000, stock: 100, status: '판매중' },
    { id: 2, name: '상품 B', category: '전자기기', price: 150000, stock: 50, status: '판매중' },
    { id: 3, name: '상품 C', category: '식품', price: 5000, stock: 200, status: '품절' },
    { id: 4, name: '상품 D', category: '가구', price: 80000, stock: 30, status: '판매중' },
    { id: 5, name: '상품 E', category: '도서', price: 15000, stock: 80, status: '판매중' },
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    status: '판매중'
  });
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const openAddModal = () => {
    setCurrentProduct(null);
    setFormData({
      name: '',
      category: '',
      price: '',
      stock: '',
      status: '판매중'
    });
    setIsModalOpen(true);
  };
  
  const openEditModal = (product) => {
    setCurrentProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price,
      stock: product.stock,
      status: product.status
    });
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (currentProduct) {
      // 상품 수정
      const updatedProducts = products.map(product => 
        product.id === currentProduct.id 
          ? { ...product, ...formData, price: Number(formData.price), stock: Number(formData.stock) } 
          : product
      );
      setProducts(updatedProducts);
    } else {
      // 새 상품 추가
      const newProduct = {
        id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
        ...formData,
        price: Number(formData.price),
        stock: Number(formData.stock)
      };
      setProducts([...products, newProduct]);
    }
    
    closeModal();
  };
  
  const handleDelete = (id) => {
    if (window.confirm('정말로 이 상품을 삭제하시겠습니까?')) {
      setProducts(products.filter(product => product.id !== id));
    }
  };
  
  return (
    <PageContainer>
      <Header>
        <Title>상품 관리</Title>
        <Button variant="primary" onClick={openAddModal}>+ 새 상품 추가</Button>
      </Header>
      
      <Card>
        <SearchContainer>
          <SearchInput
            placeholder="상품명 또는 카테고리로 검색"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Button variant="outline">검색</Button>
        </SearchContainer>
        
        <Table>
          <thead>
            <tr>
              <Th>ID</Th>
              <Th>상품명</Th>
              <Th>카테고리</Th>
              <Th>가격</Th>
              <Th>재고</Th>
              <Th>상태</Th>
              <Th>관리</Th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(product => (
              <tr key={product.id}>
                <Td>{product.id}</Td>
                <Td>{product.name}</Td>
                <Td>{product.category}</Td>
                <Td>{product.price.toLocaleString()}원</Td>
                <Td>{product.stock}</Td>
                <Td>
                  <span style={{ 
                    color: product.status === '판매중' ? 'var(--success)' : 'var(--error)',
                    fontWeight: 500
                  }}>
                    {product.status}
                  </span>
                </Td>
                <Td>
                  <ActionButton variant="text" size="small" onClick={() => openEditModal(product)}>
                    수정
                  </ActionButton>
                  <ActionButton variant="text" size="small" onClick={() => handleDelete(product.id)}>
                    삭제
                  </ActionButton>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
      
      {isModalOpen && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>{currentProduct ? '상품 수정' : '새 상품 추가'}</ModalTitle>
              <CloseButton onClick={closeModal}>&times;</CloseButton>
            </ModalHeader>
            
            <form onSubmit={handleSubmit}>
              <FormInput
                label="상품명"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              
              <FormInput
                label="카테고리"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              />
              
              <FormRow>
                <FormInput
                  label="가격"
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                />
                
                <FormInput
                  label="재고"
                  name="stock"
                  type="number"
                  value={formData.stock}
                  onChange={handleInputChange}
                  required
                />
              </FormRow>
              
              <FormInput
                label="상태"
                name="status"
                as="select"
                value={formData.status}
                onChange={handleInputChange}
                required
              >
                <option value="판매중">판매중</option>
                <option value="품절">품절</option>
                <option value="판매중지">판매중지</option>
              </FormInput>
              
              <Button type="submit" variant="primary" fullWidth style={{ marginTop: '1.5rem' }}>
                {currentProduct ? '상품 수정' : '상품 추가'}
              </Button>
            </form>
          </ModalContent>
        </Modal>
      )}
    </PageContainer>
  );
};

export default ProductManagementPage;
