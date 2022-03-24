import React from 'react';
import './CoursePart.scss';

const CoursePart = props => {
    return (
        <a href={`/assets/video/${props.selectCourseTobic}-video.mp4`} className="video-link" >
            <div onClick={props.coursePartHander} className="course-part">
                {props.children}
            </div>
        </a>
    )
}

export default CoursePart;