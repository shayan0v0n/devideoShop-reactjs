import React from 'react';
import './MoreQuestion.scss';
import { Container, Accordion } from 'react-bootstrap';


const MoreQuestion = (props) => {
  const { detailCourseData } = props;
  const checkContentExist = (content) => {
    return content ? true : false;
  }
  const buildAccordian = (ID, contentHeader, contentText, contentCheckExist) => {
    if (contentCheckExist) {
      return (
        <Accordion.Item eventKey={ID} className="mqaccordionItem-custom">
          <Accordion.Header>{contentHeader}</Accordion.Header>
          <Accordion.Body>
            {contentText}
          </Accordion.Body>
        </Accordion.Item>
      )
    } else {
      return null
    }
  }
  let moreQuestionDOM = null;
  if (detailCourseData) {
    moreQuestionDOM = (
      <Accordion>
          {buildAccordian(
           1,
           detailCourseData.title1,
           detailCourseData.description1,
           checkContentExist(detailCourseData.title1))}
          {buildAccordian(
           2,
           detailCourseData.title2,
           detailCourseData.description2,
           checkContentExist(detailCourseData.title2))}
          {buildAccordian(
           3,
           detailCourseData.title3,
           detailCourseData.description3,
           checkContentExist(detailCourseData.title3))}
          {buildAccordian(
           4,
           detailCourseData.title4,
           detailCourseData.description4,
           checkContentExist(detailCourseData.title4))}
      </Accordion>
    )
  }
  return (
    <Container fluid>
      <div className="accordian-body">
        <h3 id='morequestion'>.سوالات متدول</h3>
        {moreQuestionDOM}
      </div>
    </Container>
  )
};

export default MoreQuestion;