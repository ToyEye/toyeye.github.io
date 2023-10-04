import PropTypes from 'prop-types';

const Work = ({ work }) => {
  return (
    <div>
      <h3>
        {work.position} <span>{work.company}</span>
      </h3>
      <p>{work.period}</p>

      <p>Duties:</p>
      <ul>
        {work.duties.map(dutie => {
          return <li key={dutie}>{dutie}</li>;
        })}
      </ul>
      {work.achievements.lenght > 0 && (
        <>
          <p>Achievements:</p>
          <ul>
            {work.achievements.map(achievement => {
              return <li key={achievement}>{achievement}</li>;
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default Work;

Work.propTypes = {
  work: PropTypes.object,
};
