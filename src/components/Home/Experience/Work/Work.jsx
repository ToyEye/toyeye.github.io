import PropTypes from 'prop-types';

import {
  WorkTitle,
  Period,
  SubTitle,
  AboutWorkList,
  AboutWorkListItem,
} from './Work.styled';

const Work = ({ work }) => {
  return (
    <div>
      <WorkTitle>{work.position}</WorkTitle>

      <WorkTitle>
        <span>{work.company}</span>
      </WorkTitle>
      <Period>{work.period}</Period>

      <SubTitle>Duties:</SubTitle>
      <AboutWorkList>
        {work.duties.map(dutie => {
          return (
            <AboutWorkListItem key={dutie}>
              <span> {dutie}</span>
            </AboutWorkListItem>
          );
        })}
      </AboutWorkList>
      {work.achievements.length > 0 && (
        <>
          <SubTitle>Achievements:</SubTitle>
          <AboutWorkList>
            {work.achievements.map(achievement => {
              return (
                <AboutWorkListItem key={achievement}>
                  <span>{achievement}</span>
                </AboutWorkListItem>
              );
            })}
          </AboutWorkList>
        </>
      )}
    </div>
  );
};

export default Work;

Work.propTypes = {
  work: PropTypes.object,
};
