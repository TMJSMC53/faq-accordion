import PropTypes from 'prop-types';

const Card = ({ question, answer, isActive, onShow }) => {
  return (
    <main
      className={`card ${isActive ? 'active' : ''}`}
      onClick={() => onShow(!isActive)}
    >
      <div className="card__header">
        <img src="assets/images/icon-star.svg" alt="icon star" />
        <h1>FAQs</h1>
      </div>
      <div className="card__title">
        <h3>{question}</h3>
        <img
          src={`assets/images/${isActive ? 'icon-minus' : 'icon-plus'}.svg`}
          alt={isActive ? 'icon minus' : 'icon plus'}
        />
      </div>
      {isActive && <p className="card__content">{answer}</p>}
    </main>
  );
};

Card.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onShow: PropTypes.func.isRequired,
};

export default Card;
