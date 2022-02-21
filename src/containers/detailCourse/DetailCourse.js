import React, { useEffect } from 'react';
import './DetailCourse.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { detailCourseAction } from '../../actions/courses-action';
import SpinnerLoading from '../../components/spinnerLoading/SpinnerLoading';
import ErrorAlert from '../../components/errorAlert/ErrorAlert';
import DetailCourseContainer from './container/DetailCourseContainer'

const DetailCourse = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const keyParams = Object.keys(params);
    const detailCourseData = useSelector(state => state.detailCourseDatas)
    useEffect(() => {
        dispatch(detailCourseAction(Number(keyParams[0])))
    }, dispatch);

    const findDetailCourse = (detailCourse) => {
        const valueParams = Object.values(params);
        const findedDetailCourse = detailCourse.find(item => {
            return item.cardPath === valueParams[0]
        })
        return findedDetailCourse
    }

    let detailCourseDOM = null;
    if (detailCourseData.error) {
        detailCourseDOM = (
            <ErrorAlert>
                لطفا فیلترشکن خود را روشن کنید...
            </ErrorAlert>
        )
    }else {
        if (detailCourseData.loading) {
            detailCourseDOM = (
                <SpinnerLoading />
            )
        }else {
            if (findDetailCourse(detailCourseData.detailCourse)) {
                const findedDetailCourse = findDetailCourse(detailCourseData.detailCourse)
                detailCourseDOM = (
                    <DetailCourseContainer detailCourse={findedDetailCourse} keyParams={keyParams} />
                )
            }
        }
    }


    return (
        <main dir='rtl'>
            {detailCourseDOM}
        </main>
    )
}

export default DetailCourse;