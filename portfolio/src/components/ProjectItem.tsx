import styled from 'styled-components';
import type { ProjectItemProps } from '../types/projectItem';

function ProjectItem(props: ProjectItemProps) {
  return (
    <Container>
      <Id>{props.id}</Id>
      <Image src={Array.isArray(props.images) ? props.images[0] : props.images} alt={props.title} />
      <TextContainer>
        <ColBox>
          <RowBox>
            <Title>{props.title}</Title>
            <Period>{props.period}</Period>
          </RowBox>
          <Description>{props.description}</Description>
          <Role>{props.role}</Role>
        </ColBox>
        <TechContainer>
          {props.technologies && props.technologies.map((tech) => <Tech key={tech}>{tech}</Tech>)}
        </TechContainer>
      </TextContainer>
    </Container>
  );
}

export default ProjectItem;

const Container = styled.div`
  width: fit-content;
  height: 300px;
  padding: 20px;
  display: flex;
  border-top: 1px solid #ddd;
`;

const Id = styled.div`
  margin: auto 0;
  margin-right: 20px;
  font-size: 100px;
  font-weight: 600;
  color: #f0f0f0;
`;

const Image = styled.img`
  height: 250px;
  border-radius: 10px;
`;

const RowBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ColBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px;
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 500;
  color: #333;
`;

const Period = styled.span`
  font-size: 14px;
  font-weight: 300;
  color: #474747;
  letter-spacing: -0.7px;
`;

const Role = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: #333;
  white-space: pre-line;
  word-break: keep-all;
`;

const Description = styled.p`
  width: 600px;
  white-space: pre-line;
  word-break: keep-all;
  font-size: 17px;
  font-weight: 300;
  color: #474747;
  letter-spacing: -0.7px;
`;

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tech = styled.span`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: white;
  color: #595959;
  border: 1px solid #595959;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.7px;
`;
