import React from 'react';
import { Card } from 'react-bootstrap';
import './SafeBuyCard.scss'

const SafeBuyCard = props => {
    return (
        <Card className="text-center mt-3 safebuycard-style sticky-style">
            <div>
                <Card.Img src="/assets/img/suportImg.webp" fluid className="w-50 pt-2" />
            </div>
            <div className="py-2">
                <span className='lead'>گارانتی بازگشت وجه</span>
            </div>
            <div>
                <p className="px-3 py-1">
                برای آنکه به شما اطمینان دهیم، که ما از محتوای دوره‌های خود ۱۰۰ درصد مطمئن هستیم، برای این دوره گارانتی بازگشت وجه قرار داده‌ایم و این به این معنی است که اگر شما محتوای این دوره را به شکل کامل مشاهده کنید، اما نتیجه‌ای که به شما قول دادیم را دریافت نکنید ۱۰۰ درصد مبلغ پرداختی شما را برگشت خواهیم زد
                </p>
            </div>
        </Card>
    )
}

export default SafeBuyCard