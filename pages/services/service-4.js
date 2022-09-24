import Head from 'next/head';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import ButtonViewDetailsService4 from '/pages/Components/buttons/button-view-details-service-4.js';
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';

export default function Service4(){
    return(
        <>
            <div className="service">
                <div className="service-content">
                    <div className="service-content-anh">
                        <Carousel fade={true} controls={false} interval="1800">
                            <Carousel.Item>
                                <div className="carousel-image">
                                    <img className="d-block w-100" alt={thongTinTiem2.serviceList4Image1Alt} src={thongTinTiem1.serviceList4Image1} />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-image">
                                    <img className="d-block w-100" alt={thongTinTiem2.serviceList4Image2Alt} src={thongTinTiem1.serviceList4Image2} />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-image">
                                    <img className="d-block w-100" alt={thongTinTiem2.serviceList4Image3Alt} src={thongTinTiem1.serviceList4Image3} />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-image">
                                    <img className="d-block w-100" alt={thongTinTiem2.serviceList4Image4Alt} src={thongTinTiem1.serviceList4Image4} />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-image">
                                    <img className="d-block w-100" alt={thongTinTiem2.serviceList4Image5Alt} src={thongTinTiem1.serviceList4Image5} />
                                </div>
                            </Carousel.Item>
                        </Carousel> 
                    </div>       
                </div>
                <div className="service-content-text">
                    <div className="service-content-title">
                        <h2 className="service-content-title">
                            {thongTinTiem1.mainService4}
                        </h2>
                    </div> 
                    <div className="service-content-description">
                        <p className="service-content-description">
                            {thongTinTiem2.mainService4Description} 
                        </p>
                    </div>
                    <div className="button-view-detail-services">
                        <ButtonViewDetailsService4 />
                    </div>
                </div>
            </div>
        </>
    )
}



