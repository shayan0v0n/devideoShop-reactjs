import React from 'react';
import './Navigation.scss'
import { Nav, Container } from 'react-bootstrap'

const Navigation = () => {
  return (
      <Container fluid className="sticky-style">
          <Nav className="detail-course-navigation">
              <a className="detail-course-navigation__items" href="#description">توضیحات</a>
              <a className="detail-course-navigation__items" href="#morequestion">سوالات متدول</a>
              <a className="detail-course-navigation__items" href="#seasons">جلسات دوره</a>
          </Nav>
      </Container>
  )
};

export default Navigation;