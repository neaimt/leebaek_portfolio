import styled from 'styled-components';

interface Props {
  title?: string;
  children: React.ReactNode;
}

function Section({ title, children }: Props) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  );
}

export default Section;

const Container = styled.section`
  width: 1200px;
  margin: 0 auto;
  padding: 60px 0;
`;

const Title = styled.h1`
  padding-left: 30px;
  padding-bottom: 20px;
  font-size: 36px;
  font-weight: 600;
  color: #333;
`;
