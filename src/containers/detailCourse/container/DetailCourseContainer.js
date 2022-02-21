import React from 'react';
import BoxInfo from '../Components/boxInfo/BoxInfo'
import Navigation from '../Components/navigation/Navigation'
import MoreQuestion from '../Components/moreQuestion/MoreQuestion'
import CourseParts from '../Components/courseParts/CourseParts'
import { Container, Row, Col } from 'react-bootstrap'
import './DetailCourseContainer.scss';
import Description from '../Components/description/Description';
import TeacherPlace from '../Components/teacherPlace/TeacherPlace';
import SafeBuyCard from '../Components/safeBuyCard/SafeBuyCard';

const DetailCourseContainer = (props) => {
    const { detailCourse, keyParams } = props
    const descDetailCourseData = Object.values(detailCourse)[0];
    const qmDetailCourseData = Object.values(detailCourse)[1];
    const coursesPartData = Object.values(detailCourse)[2];
    let selectCourseTobic = null;
    let selectCourseTeacher = null
    if (keyParams == 0) {
      selectCourseTobic = "javascript";
      selectCourseTeacher = "shayan vosoughi"
    }else if(keyParams == 1) {
        selectCourseTobic = "reactjs";
        selectCourseTeacher = "shayan vosoughi"
    }else if (keyParams == 2) {
        selectCourseTobic = "php"
        selectCourseTeacher = "johnni barnett"
    }else {
        selectCourseTobic = "laravel"
        selectCourseTeacher = "jim steeves"
    }

    return (
            <Container fluid>
                <BoxInfo detailCourseData={detailCourse} />
                <Row>
                    <Col sm={12} md={9}>
                        <Navigation />
                        <Description
                         detailCourseData={descDetailCourseData}
                         detailCardPath={detailCourse.cardPath} 
                         detailCardTitle={detailCourse.cardTitle} />
                        <MoreQuestion
                         detailCourseData={qmDetailCourseData}/>
                        <CourseParts
                         detailCourseData={coursesPartData}
                         detailCardPath={detailCourse.cardPath}
                         selectCourseTobic={selectCourseTobic} />
                    </Col>
                    <Col sm={12} md={3} className="d-md-block d-none">
                        <TeacherPlace cardTitle={selectCourseTeacher}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                         </TeacherPlace>
                         <SafeBuyCard />
                    </Col>
                </Row>
            </Container>
    )
}

export default DetailCourseContainer;