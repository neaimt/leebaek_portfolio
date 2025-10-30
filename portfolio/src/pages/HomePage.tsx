import ProfileCard from '../components/ProfileCard';
import ProjectItemList from '../components/ProjectItemList';
import Section from '../components/Section';

function HomePage() {
  return (
    <div>
      <Section>
        <ProfileCard />
      </Section>

      <Section title={'프로젝트'}>
        <ProjectItemList />
      </Section>
    </div>
  );
}

export default HomePage;
