import styled from 'styled-components';
import type { ProjectItemProps } from '../types/projectItem';

interface ProjectDetailProps {
  item: ProjectItemProps;
}

function ProjectDetail({ item }: ProjectDetailProps) {
  if (!item || !item.detail) return null;

  const { detail } = item;

  return (
    <Wrapper>
      {/* 주요 기능 섹션 */}
      {detail && (
        <Section>
          <SectionHeader>
            <SectionTitle>주요 기능 및 개발</SectionTitle>
          </SectionHeader>

          {detail.functions.map((func, idx) => (
            <Card key={idx}>
              <CardTitle>{func.title}</CardTitle>
              <DescriptionList>
                {func.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </DescriptionList>
            </Card>
          ))}
        </Section>
      )}

      {/* 트러블 슈팅 섹션 */}
      {detail && detail.TroubleshootingCases && (
        <>
          <Divider />
          <Section>
            <SectionHeader>
              <SectionTitle>트러블 슈팅</SectionTitle>
            </SectionHeader>

            {detail.TroubleshootingCases.map((caseItem, idx) => (
              <Card key={idx}>
                <CardTitle>{caseItem.title}</CardTitle>

                <SubSection>
                  <SubTitle>문제 상황</SubTitle>
                  <SubText>{caseItem.issue.situation}</SubText>
                </SubSection>

                <SubSection>
                  <SubTitle>원인 분석</SubTitle>
                  <SubText>{caseItem.issue.analysis}</SubText>
                </SubSection>

                <SubSection>
                  <SubTitle>해결 과정</SubTitle>
                  <OrderedList>
                    {caseItem.resolution.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </OrderedList>
                </SubSection>

                <SubSection>
                  <SubTitle>배운 점</SubTitle>
                  <DescriptionList>
                    {caseItem.learnings.map((learn, i) => (
                      <li key={i}>{learn}</li>
                    ))}
                  </DescriptionList>
                </SubSection>
              </Card>
            ))}
          </Section>
        </>
      )}

      {/* 관련 링크 섹션 */}
      {item && item.links && item.links.length > 0 && (
        <>
          <Divider />
          <Section>
            <LinkList>
              {item.links.map((link, idx) => (
                <LinkItem key={idx}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.text || link.url}
                  </a>
                </LinkItem>
              ))}
            </LinkList>
          </Section>
        </>
      )}
    </Wrapper>
  );
}

export default ProjectDetail;

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  color: #1e293b;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e2e8f0;
  margin: 2rem 0;
`;

const Card = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  background: #fff;
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: #0f172a;
`;

const DescriptionList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  color: #475569;
  line-height: 1.6;
`;

const OrderedList = styled.ol`
  list-style-type: decimal;
  padding-left: 1.5rem;
  color: #475569;
  line-height: 1.6;
`;

const SubSection = styled.div`
  margin-top: 1rem;
`;

const SubTitle = styled.h4`
  font-weight: 600;
  color: #334155;
  margin-bottom: 0.3rem;
`;

const SubText = styled.p`
  color: #475569;
  line-height: 1.6;
`;

const LinkList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 0.8rem;

  a {
    color: #2563eb;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;
