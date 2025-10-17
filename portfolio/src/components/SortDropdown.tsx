import { useState } from 'react';
import styled from 'styled-components';

type SortOption = 'default' | 'latest' | 'oldest';

const SortDropdown = ({ onSortChange }: { onSortChange: (v: SortOption) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<SortOption>('default');

  const handleSelect = (option: SortOption) => {
    setSelected(option);
    onSortChange(option);
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <Selected onClick={() => setIsOpen(!isOpen)}>
        {selected === 'default' ? '기본순' : selected === 'latest' ? '최신순' : '오래된순'}
        <Arrow $isOpen={isOpen}>▼</Arrow>
      </Selected>

      {isOpen && (
        <Menu>
          <Option onClick={() => handleSelect('default')} $active={selected === 'default'}>
            기본
          </Option>
          <Option onClick={() => handleSelect('latest')} $active={selected === 'latest'}>
            최신순
          </Option>
          <Option onClick={() => handleSelect('oldest')} $active={selected === 'oldest'}>
            오래된순
          </Option>
        </Menu>
      )}
    </Wrapper>
  );
};

export default SortDropdown;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  min-width: 100px;
  font-size: 14px;
`;

const Selected = styled.button`
  width: 100%;
  padding: 8px 12px;
  background-color: white;
  border: none;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    border-color: #888;
  }
`;

const Arrow = styled.span<{ $isOpen: boolean }>`
  transition: transform 0.2s;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  font-size: 8px;
`;

const Menu = styled.ul`
  position: absolute;
  top: 38px;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  z-index: 10;
`;

const Option = styled.li<{ $active?: boolean }>`
  padding: 8px 12px;
  cursor: pointer;
  background: ${({ $active }) => ($active ? '#f2f6ff' : 'white')};
  color: ${({ $active }) => ($active ? '#1e4fff' : '#333')};

  &:hover {
    background: #f0f0f0;
  }

  &:first-child {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  &:last-child {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;
