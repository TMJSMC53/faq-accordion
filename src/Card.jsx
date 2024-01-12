import PropTypes from 'prop-types';

const Card = ({ question, answer, isActive, onShow }) => {
  return (
    <div className="line" onClick={() => onShow(!isActive)}>
      <div className="card__title">
        <h3>{question}</h3>
        <img
          src={`assets/images/${isActive ? 'icon-minus' : 'icon-plus'}.svg`}
          alt={isActive ? 'icon minus' : 'icon plus'}
        />
      </div>
      {isActive && <p className="card__content">{answer}</p>}
    </div>
  );
};

Card.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onShow: PropTypes.func.isRequired,
};

export default Card;
