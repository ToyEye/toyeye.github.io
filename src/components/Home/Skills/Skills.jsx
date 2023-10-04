import { SkillsWrapper, SkillsTitle } from './Skills.styled';
import { SkillList } from './SkillList/SkillList';
import { Section } from '/src/components/reusable/';

import hardSkills from './skillsData/hardSkills.json';
import softSkills from './skillsData/softSkills.json';
import language from './skillsData/language.json';

export const Skills = () => {
  return (
    <Section>
      <SkillsWrapper>
        <div>
          <SkillsTitle>Tech Skills</SkillsTitle>
          <SkillList skills={hardSkills} />
        </div>

        <div>
          <SkillsTitle>Soft Skills</SkillsTitle>
          <SkillList skills={softSkills} />
        </div>

        <div>
          <SkillsTitle>Language</SkillsTitle>
          <SkillList skills={language} lang />
        </div>
      </SkillsWrapper>
    </Section>
  );
};
