import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/common/Button'
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

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const FilterItem = styled.div`
  flex: 1;
  min-width: 200px;
`;

const StatsSummary = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background-color: var(--neutral-100);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const StatLabel = styled.div`
  font-size: var(--font-size-sm);
  color: var(--neutral-600);
  margin-bottom: 0.5rem;
`;

const StatValue = styled.div`
  font-size: var(--font-size-2xl);
  font-weight: 600;
  color: var(--primary-300);
`;

const StatChange = styled.div`
  font-size: var(--font-size-sm);
  margin-top: 0.5rem;
  color: ${props => props.positive ? 'var(--success)' : 'var(--error)'};
  display: flex;
  align-items: center;
  
  &::before {
    content: '${props => props.positive ? '▲' : '▼'}';
    margin-right: 0.25rem;
  }
`;

const ChartContainer = styled.div`
  height: 400px;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
`;

const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ChartTitle = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--neutral-800);
`;

const ChartTypeSelector = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ChartTypeButton = styled.button`
  padding: 0.5rem 0.75rem;
  border-radius: var(--border-radius-md);
  background-color: ${props => props.active ? 'var(--primary-300)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--neutral-700)'};
  border: 1px solid ${props => props.active ? 'var(--primary-300)' : 'var(--neutral-300)'};
  font-size: var(--font-size-sm);
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary-400)' : 'var(--neutral-200)'};
  }
`;

const ChartPlaceholder = styled.div`
  flex: 1;
  background-color: var(--neutral-200);
  border-radius: var(--border-radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--neutral-600);
  font-size: var(--font-size-lg);
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

const TabContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid var(--neutral-300);
  margin-bottom: 1.5rem;
`;

const Tab = styled.button`
  padding: 0.75rem 1.5rem;
  background: none;
  border: none;
  border-bottom: 2px solid ${props => props.active ? 'var(--primary-300)' : 'transparent'};
  color: ${props => props.active ? 'var(--primary-300)' : 'var(--neutral-700)'};
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    color: var(--primary-300);
  }
`;

// 차트를 그리는 함수 (실제로는 Chart.js 등의 라이브러리를 사용할 것)
const renderChart = (chartType, data) => {
  // 실제 구현에서는 Chart.js 등을 사용하여 차트를 그림
  return (
    <ChartPlaceholder>
      {chartType === 'bar' && '막대 차트 - 실제 구현 시 Chart.js 등의 라이브러리로 대체됩니다.'}
      {chartType === 'line' && '선 차트 - 실제 구현 시 Chart.js 등의 라이브러리로 대체됩니다.'}
      {chartType === 'pie' && '파이 차트 - 실제 구현 시 Chart.js 등의 라이브러리로 대체됩니다.'}
    </ChartPlaceholder>
  );
};

const SalesStatisticsPage = () => {
  const [dateRange, setDateRange] = useState('이번 달');
  const [activeTab, setActiveTab] = useState('overview');
  const [salesChartType, setSalesChartType] = useState('bar');
  const [productChartType, setProductChartType] = useState('pie');
  
  // 더미 데이터 - 실제로는 API에서 가져올 것
  const salesData = {
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
  
  const handleDateRangeChange = (e) => {
    setDateRange(e.target.value);
    // 실제 구현에서는 여기서 API 호출하여 데이터 업데이트
  };
  
  return (
    <PageContainer>
      <Header>
        <Title>매출 통계</Title>
        <Button variant="outline" onClick={() => window.print()}>보고서 출력</Button>
      </Header>
      
      <FilterContainer>
        <FilterItem>
          <FormInput
            label="기간 선택"
            as="select"
            value={dateRange}
            onChange={handleDateRangeChange}
          >
            <option value="오늘">오늘</option>
            <option value="어제">어제</option>
            <option value="이번 주">이번 주</option>
            <option value="이번 달">이번 달</option>
            <option value="지난 달">지난 달</option>
            <option value="올해">올해</option>
            <option value="작년">작년</option>
            <option value="custom">직접 설정</option>
          </FormInput>
        </FilterItem>
        
        {dateRange === 'custom' && (
          <>
            <FilterItem>
              <FormInput
                label="시작일"
                type="date"
              />
            </FilterItem>
            <FilterItem>
              <FormInput
                label="종료일"
                type="date"
              />
            </FilterItem>
          </>
        )}
        
        <FilterItem style={{ display: 'flex', alignItems: 'flex-end' }}>
          <Button variant="primary" style={{ height: '38px', marginTop: '1.5rem' }}>적용</Button>
        </FilterItem>
      </FilterContainer>
      
      <TabContainer>
        <Tabs>
          <Tab 
            active={activeTab === 'overview'} 
            onClick={() => setActiveTab('overview')}
          >
            개요
          </Tab>
          <Tab 
            active={activeTab === 'products'} 
            onClick={() => setActiveTab('products')}
          >
            상품별 매출
          </Tab>
          <Tab 
            active={activeTab === 'daily'} 
            onClick={() => setActiveTab('daily')}
          >
            일별 매출
          </Tab>
        </Tabs>
        
        {activeTab === 'overview' && (
          <>
            <StatsSummary>
              <StatCard>
                <StatLabel>총 매출</StatLabel>
                <StatValue>{salesData.totalSales.toLocaleString()}원</StatValue>
                <StatChange positive={salesData.salesChange > 0}>
                  {Math.abs(salesData.salesChange)}% {salesData.salesChange > 0 ? '증가' : '감소'}
                </StatChange>
              </StatCard>
              
              <StatCard>
                <StatLabel>총 주문 수</StatLabel>
                <StatValue>{salesData.totalOrders}건</StatValue>
                <StatChange positive={salesData.ordersChange > 0}>
                  {Math.abs(salesData.ordersChange)}% {salesData.ordersChange > 0 ? '증가' : '감소'}
                </StatChange>
              </StatCard>
              
              <StatCard>
                <StatLabel>평균 주문 금액</StatLabel>
                <StatValue>{salesData.averageOrderValue.toLocaleString()}원</StatValue>
                <StatChange positive={salesData.aovChange > 0}>
                  {Math.abs(salesData.aovChange)}% {salesData.aovChange > 0 ? '증가' : '감소'}
                </StatChange>
              </StatCard>
              
              <StatCard>
                <StatLabel>전환율</StatLabel>
                <StatValue>{salesData.conversionRate}%</StatValue>
                <StatChange positive={salesData.conversionChange > 0}>
                  {Math.abs(salesData.conversionChange)}% {salesData.conversionChange > 0 ? '증가' : '감소'}
                </StatChange>
              </StatCard>
            </StatsSummary>
            
            <Card>
              <ChartHeader>
                <ChartTitle>매출 추이</ChartTitle>
                <ChartTypeSelector>
                  <ChartTypeButton 
                    active={salesChartType === 'bar'} 
                    onClick={() => setSalesChartType('bar')}
                  >
                    막대
                  </ChartTypeButton>
                  <ChartTypeButton 
                    active={salesChartType === 'line'} 
                    onClick={() => setSalesChartType('line')}
                  >
                    선
                  </ChartTypeButton>
                </ChartTypeSelector>
              </ChartHeader>
              <ChartContainer>
                {renderChart(salesChartType, salesData.dailySales)}
              </ChartContainer>
            </Card>
            
            <Card>
              <ChartHeader>
                <ChartTitle>상위 5개 상품</ChartTitle>
              </ChartHeader>
              <Table>
                <thead>
                  <tr>
                    <Th>순위</Th>
                    <Th>상품명</Th>
                    <Th>판매량</Th>
                    <Th>매출액</Th>
                    <Th>비율</Th>
                  </tr>
                </thead>
                <tbody>
                  {salesData.topProducts.map((product, index) => (
                    <tr key={product.id}>
                      <Td>{index + 1}</Td>
                      <Td>{product.name}</Td>
                      <Td>{product.quantity}개</Td>
                      <Td>{product.sales.toLocaleString()}원</Td>
                      <Td>{product.percentageOfTotal}%</Td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </>
        )}
        
        {activeTab === 'products' && (
          <Card>
            <ChartHeader>
              <ChartTitle>상품별 매출 분포</ChartTitle>
              <ChartTypeSelector>
                <ChartTypeButton 
                  active={productChartType === 'pie'} 
                  onClick={() => setProductChartType('pie')}
                >
                  파이
                </ChartTypeButton>
                <ChartTypeButton 
                  active={productChartType === 'bar'} 
                  onClick={() => setProductChartType('bar')}
                >
                  막대
                </ChartTypeButton>
              </ChartTypeSelector>
            </ChartHeader>
            <ChartContainer>
              {renderChart(productChartType, salesData.topProducts)}
            </ChartContainer>
            <Table>
              <thead>
                <tr>
                  <Th>상품명</Th>
                  <Th>판매량</Th>
                  <Th>매출액</Th>
                  <Th>비율</Th>
                </tr>
              </thead>
              <tbody>
                {salesData.topProducts.map(product => (
                  <tr key={product.id}>
                    <Td>{product.name}</Td>
                    <Td>{product.quantity}개</Td>
                    <Td>{product.sales.toLocaleString()}원</Td>
                    <Td>{product.percentageOfTotal}%</Td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        )}
        
        {activeTab === 'daily' && (
          <Card>
            <ChartHeader>
              <ChartTitle>일별 매출 및 주문 수</ChartTitle>
              <ChartTypeSelector>
                <ChartTypeButton 
                  active={salesChartType === 'bar'} 
                  onClick={() => setSalesChartType('bar')}
                >
                  막대
                </ChartTypeButton>
                <ChartTypeButton 
                  active={salesChartType === 'line'} 
                  onClick={() => setSalesChartType('line')}
                >
                  선
                </ChartTypeButton>
              </ChartTypeSelector>
            </ChartHeader>
            <ChartContainer>
              {renderChart(salesChartType, salesData.dailySales)}
            </ChartContainer>
            <Table>
              <thead>
                <tr>
                  <Th>날짜</Th>
                  <Th>주문 수</Th>
                  <Th>매출액</Th>
                </tr>
              </thead>
              <tbody>
                {salesData.dailySales.map(day => (
                  <tr key={day.date}>
                    <Td>{day.date}</Td>
                    <Td>{day.orders}건</Td>
                    <Td>{day.sales.toLocaleString()}원</Td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        )}
      </TabContainer>
    </PageContainer>
  );
};

export default SalesStatisticsPage;
