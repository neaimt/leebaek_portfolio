import ProjectItem from './ProjectItem';
import { projectItems } from '../data';
import { useState, useEffect } from 'react';
import SortDropdown from './SortDropdown';
import styled, { css } from 'styled-components';

function ProjectItemList() {
  const allItems = projectItems;
  const [filteredItems, setFilteredItems] = useState(allItems);
  const [filterOption, setFilterOption] = useState('ALL'); // 필터 상태
  const [sortOption, setSortOption] = useState('default'); // 정렬 상태
  const [isClosing, setIsClosing] = useState(false);
  const [selectedItemIdx, setSelectedItemIdx] = useState<number | null>(null); // 선택된 프로젝트 인덱스
  const [selectedItem, setSelectedItem] = useState<number | null>(null); // 선택된 프로젝트 ID

  // 날짜 파싱 함수
  const parseStartDate = (period: string) => {
    const match = period.match(/^(\d{4})\.(\d{2})/);
    if (!match) return 0;
    const [_, year, month] = match;
    return new Date(Number(year), Number(month) - 1).getTime();
  };

  // 필터 + 정렬을 함께 처리하는 함수
  const applyFilterAndSort = () => {
    let updated = [...allItems];

    // 필터 적용
    if (filterOption !== 'ALL') {
      updated = updated.filter((item) => item.role?.includes(filterOption));
    }

    // 정렬 적용
    if (sortOption === 'latest') {
      updated.sort((a, b) => parseStartDate(b.period) - parseStartDate(a.period));
    } else if (sortOption === 'oldest') {
      updated.sort((a, b) => parseStartDate(a.period) - parseStartDate(b.period));
    }

    setFilteredItems(updated);
  };

  // 필터나 정렬 옵션이 바뀔 때마다 자동으로 반영
  useEffect(() => {
    applyFilterAndSort();
    closeDetail();
  }, [filterOption, sortOption]);

  // 필터 클릭 핸들러
  const onClickFilter = (role: string) => {
    setFilterOption(role);
  };

  // 정렬 드롭다운 변경 핸들러
  const onSortChange = (option: string) => {
    setSortOption(option);
  };

  // 아이템 클릭 시 상세 보기 열기
  const onClickItem = (id: number, idx: number) => {
    if (selectedItemIdx === idx) {
      closeDetail();
      return;
    }

    if (selectedItem !== null) {
      setIsClosing(true);

      // 닫는 애니메이션이 끝난 뒤 새 아이템 열기
      setTimeout(() => {
        setSelectedItem(id);
        setSelectedItemIdx(idx);
        setIsClosing(false);
      }, 400);
    } else {
      // 아무것도 안 열려 있으면 바로 열기
      setSelectedItem(id);
      setSelectedItemIdx(idx);
    }
  };

  // 상세보기 닫기 핸들러
  const closeDetail = () => {
    setIsClosing(true);

    setTimeout(() => {
      setSelectedItem(null);
      setIsClosing(false);
      setSelectedItemIdx(null);
    }, 400);
  };

  return (
    <Container>
      <SortFilterBar>
        {/** APP/WEB 필터 메뉴 **/}
        <FilterMenu>
          <Button onClick={() => onClickFilter('ALL')} $isActive={filterOption === 'ALL'}>
            ALL
          </Button>
          <Button onClick={() => onClickFilter('WEB')} $isActive={filterOption === 'WEB'}>
            WEB
          </Button>
          <Button onClick={() => onClickFilter('APP')} $isActive={filterOption === 'APP'}>
            APP
          </Button>
        </FilterMenu>

        {/** 정렬 기능 */}
        <SortDropdown onSortChange={onSortChange} />
      </SortFilterBar>
      {/** 프로젝트 아이템 리스트 */}
      <ul>
        {filteredItems.map((item, idx) => (
          <li key={item.id} onClick={() => onClickItem(item.id, idx)}>
            <ProjectItem key={item.id} idx={idx} {...item} />
          </li>
        ))}
      </ul>

      {/* 오른쪽 상세보기 화면 */}
      {selectedItem && (
        <DetailPanel $isClosing={isClosing} $id={selectedItemIdx! + 1}>
          <CloseButton onClick={closeDetail}>×</CloseButton>
        </DetailPanel>
      )}
    </Container>
  );
}

export default ProjectItemList;

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SortFilterBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
`;

const FilterMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Button = styled.button<{ $isActive: boolean }>`
  font-size: 14px;
  font-weight: 500;
  padding: 8px 18px;
  border: none;
  color: #cccccc;
  background-color: transparent;

  &:hover {
    color: #000000;
    cursor: pointer;
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: #000000;
    `}
`;

const DetailPanel = styled.div<{ $isClosing: boolean; $id: number }>`
  position: absolute;
  top: ${({ $id }) => 60 + ($id - 1) * 300}px; /* id에 따라 top 변경 */
  right: 0;
  width: 56%;
  height: 290px;
  background-color: #ffffff;
  border-left: 1px solid #ddd;

  overflow-y: auto;
  animation: ${({ $isClosing }) => ($isClosing ? 'slideOut' : 'slideIn')} 0.4s ease forwards;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 28px;
  background: none;
  border: none;
  cursor: pointer;
  color: #999;

  &:hover {
    color: #000;
  }
`;
