import { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Accordion = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
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
