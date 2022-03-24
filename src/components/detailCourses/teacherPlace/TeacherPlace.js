import React from 'react';
import './TeacherPlace.scss'
import { Card } from 'react-bootstrap'

const TeacherPlace = props => {
  return (
      <Card className="text-center mt-3 teacer-card">
          <div className="p-2">
            <Card.Img src={`/assets/img/me.jpg`} fluid className="rounded-circle w-25"/>
          </div>
          <div>
            <span>{props.cardTitle}</span>
          </div>
          <div className="p-3">
              <Card.Text>
                  {props.children}
              </Card.Text>
          </div>
      </Card>
  )
};

export default TeacherPlace;