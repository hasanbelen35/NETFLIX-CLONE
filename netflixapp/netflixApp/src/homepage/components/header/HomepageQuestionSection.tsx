import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaPlus } from "react-icons/fa";

function HomepageQuestionSection() {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleIsOpened = () => {
    setIsOpened(!isOpened);
  };

  return (
    <section className="homepage-questionsPage-section">
      <div className="homepage-questionPage-section-title">
        <h1>Frequently Asked Questions</h1>
      </div>
      <Container>
        <Row style={{ display: "flex", flexDirection: "column" }}>
          <Col>
            <div onClick={handleIsOpened} className='question-div'>
              <h1>What is Netflix?</h1>
              <FaPlus />
              {isOpened && (
                <div className="newText">
                  Netflix, çok çeşitli ödüllü TV şovları, filmler, anime, belgeseller ve daha fazlasını içeren bir yayın hizmetidir. Her zaman izlemek istediğiniz şeyi bulacaksınız; üstelik reklamsız olarak her zaman eklenen yeni bir şeyler vardır.
                </div>
              )}
            </div>
            <div className='question-div'>
              <h1>How much does Netflix cost?</h1>
              <FaPlus />
            </div>
            <div className='question-div'>
              <h1>Where can I watch?</h1>
              <FaPlus />
            </div>
            <div className='question-div'>
              <h1>How do I cancel?</h1>
              <FaPlus />
            </div>
            <div className='question-div'>
              <h1>What can I watch on Netflix?</h1>
              <FaPlus />
            </div>
          </Col>
        </Row>
        <div className="homepage-question-section-form">
          <h6>Ready to watch? Enter your email to create or restart your membership.</h6>
          <span>
            <input type="text" className="homepage-question-section-form-input" />
            <button className='homepage-question-section-form-button'>Get Started</button>
          </span>
        </div>
      </Container>
    </section>
  );
}

export default HomepageQuestionSection;
