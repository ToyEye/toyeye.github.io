import { SkillListStyled } from './SkillList.styled';
import PropTypes from 'prop-types';

export const SkillList = ({ skills, lang = '' }) => {
  return (
    <SkillListStyled lang={lang}>
      {skills.map(skill => (
        <li key={skill}>{skill}</li>
      ))}
    </SkillListStyled>
  );
};

SkillList.propTypes = {
  skills: PropTypes.array.isRequired,
  lang: PropTypes.bool,
};
