import React from 'react';
import './TeacherPlace.scss'
import { Card } from 'react-bootstrap'

const TeacherPlace = props => {
  let imagePersonHandler = "me";
  if (props.cardTitle === "jim steeves") {
    imagePersonHandler = "jim steeves";
  }else if(props.cardTitle === "johnni barnett") {
    imagePersonHandler = "johnni barnett";
  }else {
    imagePersonHandler = "me";
  }
  return (
      <Card className="text-center mt-3 teacer-card">
          <div className="p-2">
            <Card.Img src={`/assets/img/${imagePersonHandler}.jpg`} fluid className="rounded-circle w-25"/>
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