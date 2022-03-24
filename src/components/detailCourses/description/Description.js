import React from 'react';
import './Description.scss'
import { Container } from 'react-bootstrap';

const Description = (props) => {
  const { detailCourseData, detailCardPath, detailCardTitle } = props;
  const checkDescExist = (textType) => textType ? (textType) : null;
  let descriptionDOM = null;
  if (detailCourseData) {
    descriptionDOM = (
      <div>
        <p>{checkDescExist(detailCourseData.description)}</p>
        <h3>{checkDescExist(detailCourseData.paraHeader1)}</h3>
        <p>{checkDescExist(detailCourseData.para1Desc1)}</p>
        <p>{checkDescExist(detailCourseData.para2Desc1)}</p>
        <p>{checkDescExist(detailCourseData.para3Desc1)}</p>
        <img
         src={`/assets/img/${detailCardPath}-desc.jpg`}
         title={detailCardTitle} alt={detailCardTitle}
         className="desc-img" />
        <h3>{checkDescExist(detailCourseData.paraHeader2)}</h3>
        <p>{checkDescExist(detailCourseData.para1Desc2)}</p>
        <p>{checkDescExist(detailCourseData.para2Desc2)}</p>
        <p>{checkDescExist(detailCourseData.para3Desc2)}</p>
      </div>
    )
  }
  return (
    <Container fluid>
      <div className="description-body">
        <h2 id="description">.توضیحات</h2>
        {descriptionDOM}
      </div>
    </Container>
  )
};

export default Description;