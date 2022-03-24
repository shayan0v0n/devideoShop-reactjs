import React, { useState } from 'react';
import CoursePart from './coursePart/CoursePart'
import { Button, Collapse, Container } from 'react-bootstrap'
import './CourseParts.scss';

const CourseParts = props => {
  const { detailCourseData, selectCourseTobic } = props;


  console.log(selectCourseTobic)
  return (
    <Container>
      <div className="coursepart-body">
        <h3 id='seasons'>جلسات دوره</h3>
        {detailCourseData.map(item => (
          <CoursePart selectCourseTobic={selectCourseTobic}>
            {item}
          </CoursePart>
        ))}
      </div>
    </Container>
  )
};

export default CourseParts;