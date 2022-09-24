import Head from 'next/head';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import ButtonViewDetailsService6 from '/pages/Components/buttons/button-view-details-service-6.js';
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';

export default function Service6(){
    return(
        <>
            <div className="service">
                <div className="service-content">
                    <div className="service-content-anh">
                        <Carousel fade={true} controls={false} interval="1800">
                            <Carousel.Item>
                                <div className="carousel-image">
                                    <img className="service-content-anh" alt={thongTinTiem2.serviceList6Image1Alt} src={thongTinTiem1.serviceList6Image1} />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-image">
                                    <img className="service-content-anh" alt={thongTinTiem2.serviceList6Image2Alt} src={thongTinTiem1.serviceList6Image2} />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-image">
                                    <img className="service-content-anh" alt={thongTinTiem2.serviceList6Image3Alt} src={thongTinTiem1.serviceList6Image3} />
                                </div>
                            </Carousel.Item>
                        </Carousel> 
                        
                    </div>       
                </div>
                <div className="service-content-text">
                    <div className="service-content-title">
                        <h2 className="service-content-title">
                            {thongTinTiem1.mainService6}
                        </h2>
                    </div> 
                    <div className="service-content-description">
                        <p className="service-content-description">
                            {thongTinTiem2.mainService6Description} 
                        </p>
                    </div>
                    <div className="button-view-detail-services">
                        <ButtonViewDetailsService6 />
                    </div>
                </div>
            </div>
        </>
    )
}



