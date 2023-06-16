import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';
import { serviceList1 } from '/pages/core/info';
import { serviceList2 } from '/pages/core/info';
import { serviceList3 } from '/pages/core/info';
import { serviceList4 } from '/pages/core/info';
import { serviceList5 } from '/pages/core/info';
import { serviceList6 } from '/pages/core/info';

export default function Service6PriceList(){
    return(
        <>
        <div className="service-list-6">
            <div className="price-list-details-services">
                <div className="price-list-details-services-container">
                    <div className="price-list-details-services-item">
                        <div className="price-list-details-services-name">
                            <span className="price-list-details-services-name">
                                {serviceList6.service1}
                            </span>
                            <span className="price-list-details-services-name-notice">
                                
                            </span>
                        </div>
                        <div className="price-list-details-services-time">
                            <span className="price-list-details-services-time">
                                {serviceList6.service1Time}
                            </span>
                        </div>
                        <div className="price-list-details-services-description">
                            <span className="price-list-details-services-description">
                                {serviceList6.service1Description}
                            </span>
                        </div>
                    </div>
                    <div className="price-list-details-services-price">
                        <span className="price-list-addition-info">
                            
                        </span>
                        <span className="price-list-details-services-price">
                           £{serviceList6.service1Price}
                        </span>
                    </div>
                </div>
                <div className="price-list-details-services-container">
                    <div className="price-list-details-services-item">
                        <div className="price-list-details-services-name">
                            <span className="price-list-details-services-name">
                                {serviceList6.service13}
                            </span>
                            <span className="price-list-details-services-name-notice">
                                
                            </span>
                        </div>
                        <div className="price-list-details-services-time">
                            <span className="price-list-details-services-time">
                                {serviceList6.service13Time}
                            </span>
                        </div>
                        <div className="price-list-details-services-description">
                            <span className="price-list-details-services-description">
                                {serviceList6.service13Description}
                            </span>
                        </div>
                    </div>
                    <div className="price-list-details-services-price">
                        <span className="price-list-addition-info">
                            
                        </span>
                        <span className="price-list-details-services-price">
                           £{serviceList6.service13Price}
                        </span>
                    </div>
                </div>
                <div className="price-list-details-services-container">
                    <div className="price-list-details-services-item">
                        <div className="price-list-details-services-name">
                            <span className="price-list-details-services-name">
                                {serviceList6.service17}
                            </span>
                            <span className="price-list-details-services-name-notice">
                                
                            </span>
                        </div>
                        <div className="price-list-details-services-time">
                            <span className="price-list-details-services-time">
                                {serviceList6.service17Time}
                            </span>
                        </div>
                        <div className="price-list-details-services-description">
                            <span className="price-list-details-services-description">
                                {serviceList6.service17Description}
                            </span>
                        </div>
                    </div>
                    <div className="price-list-details-services-price">
                        <span className="price-list-addition-info">
                            
                        </span>
                        <span className="price-list-details-services-price">
                           £{serviceList6.service17Price}
                        </span>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}