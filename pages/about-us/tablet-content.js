import Head from 'next/head'
import Link from 'next/link'
import Button2 from '/pages/Components/buttons/button-2.js'
import TimeSchedule from '/pages/Components/time-schedule/time-schedule.js'
import DongVien1 from '/pages/Components/dong-vien/dong-vien-1.js'
import DongVien2 from '/pages/Components/dong-vien/dong-vien-2.js'
import CustomerReview from '/pages/Components/customer-review.js'
import OurStory from '/pages/about-us/our-story'
import Carousel from 'react-bootstrap/Carousel'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';


export default function TabletContent(){
    
    return(
        <>
            <div className="tablet-about-us">
                <div>
                    <Carousel fade={true} controls={false} interval="1800">
                        <Carousel.Item>
                            <div className="carousel-image">
                                <img className="d-block w-100" alt={thongTinTiem2.tabletAboutUsImage1Alt} src={thongTinTiem1.tabletAboutUsImage1} />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-image">
                                <img className="d-block w-100" alt={thongTinTiem2.tabletAboutUsImage2Alt} src={thongTinTiem1.tabletAboutUsImage2} />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-image">
                                <img className="d-block w-100" alt={thongTinTiem2.tabletAboutUsImage3Alt} src={thongTinTiem1.tabletAboutUsImage3} />
                            </div>
                        </Carousel.Item>
                    </Carousel> 
                </div>

                <div className="mobile-about-us-our-story">
                    <OurStory />
                </div>
                <div className="button">
                        <Button2 />
                </div>
                <div className="mobile-about-us-dong-vien">
                    <DongVien1 />
                </div>
                <div className="mobile-about-us-dong-vien">
                    <DongVien2 />
                </div>
                <div className="mobile-about-us-dong-vien">
                    <div className="time-schedule">
                        <TimeSchedule />
                    </div>
                </div>
            </div>
        </>
    )
}