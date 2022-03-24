import React, { useState, useEffect } from 'react';
import "./BoxInfo.scss";
import { Col, Row, Container, Button, Image } from 'react-bootstrap'

const BoxInfo = props => {
  const { detailCourseData } = props;
  let prevLocalStorage = localStorage.getItem("userInfo");
  const [prevUserInfoStorage, setPrevUserInfoStorage] = useState(JSON.parse(prevLocalStorage));
  const [existValidate, setExistValidate] = useState(true);

  const addProducts = () => {
      let prevUserInfoData = {...prevUserInfoStorage};
      if (prevUserInfoStorage) {
        const changeUserInfoData = [...prevUserInfoStorage.cart, detailCourseData];
        prevUserInfoData["cart"] = changeUserInfoData;
        setPrevUserInfoStorage(prevUserInfoData);
        localStorage.setItem("userInfo", JSON.stringify(prevUserInfoData));
      }else {
        alert("برای خرید، اول ثبت نام کنید")
      }
  }

  useEffect(() => {
    if (prevUserInfoStorage) {
      const checkUserExist = prevUserInfoStorage.cart.findIndex(item => {
        return item.cardTitle === detailCourseData.cardTitle
      })
  
      if (checkUserExist === -1) setExistValidate(true)
      else setExistValidate(false);
    }
  }, [addProducts])

  return (
      <div dir='rtl' className="boxInfo">
          <Container fluid>
            <Row>
                <Col sm={12} md={6}>
                      <h2 className="pb-2">{detailCourseData.cardTitle}</h2>
                      <p className="mb-0">{detailCourseData.cardText}</p>
                      <p className="pb-2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                      <div>
                        <Row className="text-center">
                          <Col sm={12} md={6} className="p-2">{existValidate ?
                          (<Button className="w-100" size="xl" onClick={addProducts}>افزودن به سبد خرید</Button>):
                          (<Button className="w-100" size="xl" onClick={addProducts} disabled>افزودن به سبد خرید</Button>)}</Col>
                          <Col sm={12} md={5} className="p-2"><h4 className="pb-2">{detailCourseData.cardPrice} تومان</h4></Col>
                        </Row>
                      </div>
                </Col>
                <Col sm={12} md={6} className="text-center d-none d-md-block">
                  <Image src={`/assets/img/${detailCourseData.cardPath}.webp`} fluid className='w-75'/>
                </Col>
            </Row>
          </Container>
      </div>
  )
};

export default BoxInfo;