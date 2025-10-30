import styled, { keyframes } from 'styled-components';
import flower1 from '../assets/pixelFlower1.png';
import flower2 from '../assets/pixelFlower2.png';

function ProfileCard() {
  return (
    <>
      <Title>{'사용자 경험을 최우선으로 생각하며\n성장하는 프론트엔드 개발자 이백입니다.'}</Title>
      <Description>
        {
          'I’m Baek Lee, a frontend developer dedicated to creating user-centered experiences and growing every day.'
        }
      </Description>
      <AnimatedFlower />
    </>
  );
}

export default ProfileCard;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 600;
  white-space: pre-line;
  color: #333;
  white-space: pre-line;
`;

const Description = styled.p`
  margin-top: 20px;
  font-size: 18px;
  font-weight: 300;
  color: #474747;
`;

const flicker = keyframes`
  0%, 49% { background-image: url(${flower1}); }
  50%, 100% { background-image: url(${flower2}); }
`;

const AnimatedFlower = styled.div`
  width: 100%;
  height: 200px;
  margin-top: -100px;
  margin-left: -30px;
  background-size: contain;
  background-repeat: no-repeat;
  animation: ${flicker} 0.8s infinite steps(1); /* 빠르게 번갈아 */
`;
