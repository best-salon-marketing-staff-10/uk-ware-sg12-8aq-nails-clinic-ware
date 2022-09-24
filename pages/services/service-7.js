import Head from 'next/head';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import ButtonViewDetailsService7 from '/pages/Components/buttons/button-view-details-service-7.js';
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';

export default function Service7(){
    return(
        <>
            <div className="service">
                <div className="service-content">
                    <div className="service-content-anh">
                        <Carousel fade={true} controls={false} interval="1800">
                            <Carousel.Item>
                                <div className="carousel-image">
                                    <img className="service-content-anh" alt={thongTinTiem2.serviceList7Image1Alt} src={thongTinTiem1.serviceList7Image1} />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-image">
                                    <img className="service-content-anh" alt={thongTinTiem2.serviceList7Image2Alt} src={thongTinTiem1.serviceList7Image2} />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-image">
                                    <img className="service-content-anh" alt={thongTinTiem2.serviceList7Image3Alt} src={thongTinTiem1.serviceList7Image3} />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-image">
                                    <img className="service-content-anh" alt={thongTinTiem2.serviceList7Image4Alt} src={thongTinTiem1.serviceList7Image4} />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-image">
                                    <img className="service-content-anh" alt={thongTinTiem2.serviceList7Image5Alt} src={thongTinTiem1.serviceList7Image5} />
                                </div>
                            </Carousel.Item>
                        </Carousel> 
                        
                    </div>       
                </div>
                <div className="service-content-text">
                    <div className="service-content-title">
                        <h2 className="service-content-title">
                            {thongTinTiem1.mainService7}
                        </h2>
                    </div> 
                    <div className="service-content-description">
                        <p className="service-content-description">
                            {thongTinTiem2.mainService7Description} 
                        </p>
                    </div>
                    <div className="button-view-detail-services">
                        <ButtonViewDetailsService7 />
                    </div>
                </div>
            </div>
        </>
    )
}



