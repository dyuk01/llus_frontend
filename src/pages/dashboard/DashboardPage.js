import React, { useState } from 'react';
import styled from 'styled-components';
import ResponsiveDashboardLayout from '../../components/layout/ResponsiveDashboardLayout';

const DashboardPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  // Mock data for dashboard stats
  const stats = [
    { id: 1, title: '총 상품 수', value: '320', trend: '+12%', trendUp: true },
    { id: 2, title: '이번 달 판매량', value: '89', trend: '+5%', trendUp: true },
    { id: 3, title: '활성 마켓', value: '4', trend: '0%', trendUp: null },
    { id: 4, title: '평균 판매 가격', value: '₩35,000', trend: '-2%', trendUp: false }
  ];
  
  // Mock data for recent activities
  const activities = [
    { id: 1, type: 'new_product', message: '애플 아이폰 14 Pro 상품이 등록되었습니다.', time: '1시간 전' },
    { id: 2, type: 'order', message: '주문 #12345가 발송 완료되었습니다.', time: '3시간 전' },
    { id: 3, type: 'market', message: '당근마켓 연동이 완료되었습니다.', time: '어제' },
    { id: 4, type: 'alert', message: '번개장터 상품 가격이 경쟁사보다 높습니다.', time: '어제' },
    { id: 5, type: 'system', message: '시스템 점검이 예정되어 있습니다.', time: '2일 전' }
  ];
  
  return (
    <ResponsiveDashboardLayout title="대시보드">
      <DashboardContent>
        <WelcomeSection>
          <WelcomeHeading>안녕하세요, 사용자님!</WelcomeHeading>
          <WelcomeSubheading>오늘의 판매 현황을 확인하세요.</WelcomeSubheading>
        </WelcomeSection>
        
        <StatsGrid>
          {stats.map(stat => (
            <StatCard key={stat.id}>
              <StatTitle>{stat.title}</StatTitle>
              <StatValueContainer>
                <StatValue>{stat.value}</StatValue>
                {stat.trend && (
                  <StatTrend trendUp={stat.trendUp}>
                    {stat.trend}
                  </StatTrend>
                )}
              </StatValueContainer>
            </StatCard>
          ))}
        </StatsGrid>
        
        <DashboardSections>
          <Section>
            <SectionHeader>
              <SectionTitle>최근 활동</SectionTitle>
              <ViewAllLink href="#">전체 보기</ViewAllLink>
            </SectionHeader>
            <ActivityList>
              {activities.map(activity => (
                <ActivityItem key={activity.id}>
                  <ActivityIcon type={activity.type} />
                  <ActivityContent>
                    <ActivityMessage>{activity.message}</ActivityMessage>
                    <ActivityTime>{activity.time}</ActivityTime>
                  </ActivityContent>
                </ActivityItem>
              ))}
            </ActivityList>
          </Section>
          
          <Section>
            <SectionHeader>
              <SectionTitle>판매 통계</SectionTitle>
              <ViewAllLink href="#">자세히 보기</ViewAllLink>
            </SectionHeader>
            <ChartContainer>
              {/* Chart component will be implemented later */}
              <ChartPlaceholder>판매 통계 차트가 표시될 영역입니다.</ChartPlaceholder>
            </ChartContainer>
          </Section>
        </DashboardSections>
      </DashboardContent>
    </ResponsiveDashboardLayout>
  );
};

// Styled components for Dashboard
const DashboardContent = styled.div`
  padding: 24px;
`;

const WelcomeSection = styled.div`
  margin-bottom: 32px;
`;

const WelcomeHeading = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #212121;
  margin: 0 0 8px 0;
`;

const WelcomeSubheading = styled.p`
  font-size: 16px;
  color: #757575;
  margin: 0;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const StatCard = styled.div`
  background-color: #FFFFFF;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
`;

const StatTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: #757575;
  margin: 0 0 16px 0;
`;

const StatValueContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

const StatValue = styled.span`
  font-size: 28px;
  font-weight: 700;
  color: #212121;
`;

const StatTrend = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-left: 8px;
  color: ${props => props.trendUp === true ? '#4CAF50' : props.trendUp === false ? '#F44336' : '#757575'};
`;

const DashboardSections = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Section = styled.section`
  background-color: #FFFFFF;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #212121;
  margin: 0;
`;

const ViewAllLink = styled.a`
  font-size: 14px;
  color: #1E88E5;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ActivityList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ActivityItem = styled.li`
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid #EEEEEE;
  
  &:last-child {
    border-bottom: none;
  }
`;

const ActivityIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${props => {
    switch(props.type) {
      case 'new_product': return '#E3F2FD';
      case 'order': return '#E8F5E9';
      case 'market': return '#FFF3E0';
      case 'alert': return '#FFEBEE';
      default: return '#F5F5F5';
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  flex-shrink: 0;
  
  &:before {
    content: '${props => {
      switch(props.type) {
        case 'new_product': return '📦';
        case 'order': return '🛒';
        case 'market': return '🏪';
        case 'alert': return '⚠️';
        default: return '🔔';
      }
    }}';
    font-size: 18px;
  }
`;

const ActivityContent = styled.div`
  flex: 1;
`;

const ActivityMessage = styled.p`
  font-size: 14px;
  color: #424242;
  margin: 0 0 4px 0;
`;

const ActivityTime = styled.span`
  font-size: 12px;
  color: #9E9E9E;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
`;

const ChartPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F5F5F5;
  border-radius: 8px;
  color: #757575;
  font-size: 14px;
`;

export default DashboardPage;