import Head from 'next/head';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button3 from '/pages/Components/buttons/button-3';
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';





export default function CustomerReview() {
    return (
        <>
            <div className="customer-review">
                <div className="customer-review-text">
                    <div className="customer-review-title">
                        <h1 className="customer-review-title-1">
                            WHAT OUR CUSTOMERS SAY
                        </h1>
                    </div>
                    <div className="divider">
                    </div>
                </div>
                
                <div className="customer-review-carousel">
                    <Carousel fade={true} controls={false} interval="1800">
                        <Carousel.Item >
                            <div className="carousel-image">
                                <img
                                    className="d-block w-100"
                                    src={thongTinTiem1.cusReviewImage1}
                                    alt={thongTinTiem2.cusReviewImage1Alt}
                                />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-image">
                                <img
                                    className="d-block w-100"
                                    src={thongTinTiem1.cusReviewImage2}
                                    alt={thongTinTiem2.cusReviewImage2Alt}
                                />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-image">
                                <img
                                    className="d-block w-100"
                                    src={thongTinTiem1.cusReviewImage3}
                                    alt={thongTinTiem2.cusReviewImage3Alt}
                                />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-image">
                                <img
                                    className="d-block w-100"
                                    src={thongTinTiem1.cusReviewImage4}
                                    alt={thongTinTiem2.cusReviewImage4Alt}
                                />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-image">
                                <img
                                    className="d-block w-100"
                                    src={thongTinTiem1.cusReviewImage5}
                                    alt={thongTinTiem2.cusReviewImage5Alt}
                                />
                            </div>
                        </Carousel.Item>
                    </Carousel> 
                </div>    
                <div className="button">
                    
                </div>       
            </div>
        </>
    )
}