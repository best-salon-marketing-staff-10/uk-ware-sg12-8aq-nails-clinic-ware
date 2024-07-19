import { serviceList6 } from '/pages/core/info';

export default function Service6PriceList() {
    return (
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
                                    {serviceList6.service3}
                                </span>
                                <span className="price-list-details-services-name-notice">

                                </span>
                            </div>
                            <div className="price-list-details-services-time">
                                <span className="price-list-details-services-time">
                                    {serviceList6.service3Time}
                                </span>
                            </div>
                            <div className="price-list-details-services-description">
                                <span className="price-list-details-services-description">
                                    {serviceList6.service3Description}
                                </span>
                            </div>
                        </div>
                        <div className="price-list-details-services-price">
                            <span className="price-list-addition-info">

                            </span>
                            <span className="price-list-details-services-price">
                                £{serviceList6.service3Price}
                            </span>
                        </div>
                    </div>
                    <div className="price-list-details-services-container">
                        <div className="price-list-details-services-item">
                            <div className="price-list-details-services-name">
                                <span className="price-list-details-services-name">
                                    {serviceList6.service23}
                                </span>
                                <span className="price-list-details-services-name-notice">

                                </span>
                            </div>
                            <div className="price-list-details-services-time">
                                <span className="price-list-details-services-time">
                                    {serviceList6.service23Time}
                                </span>
                            </div>
                            <div className="price-list-details-services-description">
                                <span className="price-list-details-services-description">
                                    {serviceList6.service23Description}
                                </span>
                            </div>
                        </div>
                        <div className="price-list-details-services-price">
                            <span className="price-list-addition-info">

                            </span>
                            <span className="price-list-details-services-price">
                                £{serviceList6.service23Price}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}