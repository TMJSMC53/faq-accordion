import { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Accordion = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card__header">
          <img src="assets/images/icon-star.svg" alt="icon star" />
          <h1>FAQs</h1>
        </div>
        {faqData.map((item, index) => (
          <Card
            key={item.id}
            question={item.question}
            answer={item.answer}
            isActive={activeIndex === index}
            onShow={() => handleAccordionToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

Accordion.propTypes = {
  faqData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Accordion;
