import Link from 'next/link';
import Head from 'next/head';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoNav from '/pages/Components/logo-nav/logo-nav';
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';

export default function TabletFooter(){

    return(
        <>
            <Head>
            </Head>
            <div className="footer">
                <Link href="/" legacyBehavior>
                    <div className="footer-ten-tiem">
                        <LogoNav />
                    </div>
                </Link>
                <div className="divider">
                    <hr />
                </div>
                <div className="footer-navigation">
                    <div className="footer-navigation-item-group-1">
                        <div className="footer-navigation-item">
                            <Link href={thongTinTiem1.linkTomainMenu1} className="footer-navigation-item">
                                    {thongTinTiem1.mainMenu1}
                            </Link>
                        </div>
                    
                        <div className="footer-navigation-item">
                            <div className="footer-navigation-item-services">
                                <Link href={thongTinTiem1.linkTomainMenu4} className="footer-navigation-item">
                                        {thongTinTiem1.mainMenu4}
                                </Link>
                            </div>
                            <div className="footer-navigation-item-detail-services">
                                <div className="footer-navigation-item-detail-services">
                                    <Link href={thongTinTiem1.linkTomainService1} className="services-list-1">
                                            {thongTinTiem1.mainService1}
                                    </Link>
                                </div>
                                <div className="footer-navigation-item-detail-services">
                                    <Link href={thongTinTiem1.linkTomainService2} className="services-list-2">
                                            {thongTinTiem1.mainService2}
                                    </Link>
                                </div>
                                <div className="footer-navigation-item-detail-services">
                                    <Link href={thongTinTiem1.linkTomainService3} className="services-list-3">
                                            {thongTinTiem1.mainService3}
                                    </Link>
                                </div>
                                <div className="footer-navigation-item-detail-services">
                                    <Link href={thongTinTiem1.linkTomainService4} className="services-list-4">
                                            {thongTinTiem1.mainService4}
                                    </Link>
                                </div>
                                <div 
                                className="footer-navigation-item-detail-services">
                                    <Link href={thongTinTiem1.linkTomainService5} className="services-list-5">
                                            {thongTinTiem1.mainService5}
                                    </Link>
                                </div>
                                <div className="footer-navigation-item-detail-services">
                                    <Link href={thongTinTiem1.linkTomainService6} className="services-list-6">
                                            {thongTinTiem1.mainService6}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-navigation-item-group-2">
                        <div className="footer-navigation-item">
                            <Link href={thongTinTiem1.linkTomainMenu3} className="footer-navigation-item">
                                    {thongTinTiem1.mainMenu3}
                            </Link>
                        </div>
                        <div className="footer-navigation-item">
                            <Link href={thongTinTiem1.linkTomainMenu2} className="footer-navigation-item">
                                    {thongTinTiem1.mainMenu2}
                            </Link>
                        </div>
                        <div className="footer-navigation-item">
                            <Link href={thongTinTiem1.linkTomainMenu5} className="footer-navigation-item">
                                    {thongTinTiem1.mainMenu5}
                            </Link>
                        </div>
                        <div className="footer-navigation-item">
                            <div className="footer-navigation-item">
                                <Link href="/" className="footer-navigation-item">
                                        Contact us
                                </Link>
                            </div>
                            <div className="footer-navigation-item-details">
                                <Link href={thongTinTiem2.callTiem} legacyBehavior>
                                    <div className="footer-navigation-item-details-1">
                                        <div>
                                            <img className="footer-image" alt={thongTinTiem2.footerImagePhoneIconAlt} src={thongTinTiem1.footerImagePhoneIcon} />
                                        </div>
                                        <div>
                                            <a className="footer-navigation-item-details">
                                                {thongTinTiem1.phoneTiem}
                                            </a>
                                        </div>
                                    </div>
                                </Link>  
                                <Link href={thongTinTiem1.linkToMapTiem} legacyBehavior>  
                                    <div className="footer-navigation-item-details-2">
                                        <div>
                                            <img className="footer-image" alt={thongTinTiem2.footerImageMapPointerIconAlt}  src={thongTinTiem1.footerImageMapPointerIcon} />
                                        </div>
                                        <div>
                                            <a className="footer-navigation-item-details">
                                                {thongTinTiem2.addressTiemTopBar}
                                            </a>
                                        </div>
                                    </div>
                                </Link>
                            </div>       
                        </div>
                    </div>
                </div>
                <div className="footer-navigation-item">
                    <iframe src={thongTinTiem1.iframeMapLink} width="1024" height="500" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    
                </div>
                <div className="footer-copyright">
                    <Link href="https://bestsalonmarketing.com" className="footer-copyright" rel="dofollow">
                        © Copyright and Powered by Best Salon Marketing
                    </Link>
                </div>
            </div>
        </>
    )
}