import ProjectItem from './ProjectItem';
import { projectItems } from '../data';
import styled from 'styled-components';
import { useState } from 'react';

function ProjectItemList() {
  const allItems = projectItems;
  const [filteredItems, setFilteredItems] = useState(allItems);

  const onClickFilter = (role: string) => {
    const filtered = allItems.filter((item) => item.role?.includes(role));
    setFilteredItems(filtered);
  };

  return (
    <Container>
      {/** APP/WEB 필터 메뉴 **/}
      <FilterMenu>
        <Button onClick={() => setFilteredItems(allItems)}>ALL</Button>
        <Button onClick={() => onClickFilter('WEB')}>WEB</Button>
        <Button onClick={() => onClickFilter('APP')}>APP</Button>
      </FilterMenu>

      {/** 프로젝트 아이템 리스트 */}
      {filteredItems.map((item) => (
        <ProjectItem key={item.id} {...item} />
      ))}
    </Container>
  );
}

export default ProjectItemList;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FilterMenu = styled.nav`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10px;
  padding: 10px 15px;
`;

const Button = styled.button`
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
`;
