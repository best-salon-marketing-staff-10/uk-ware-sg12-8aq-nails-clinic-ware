import Link from 'next/link';
import Head from 'next/head';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoNav from '/pages/Components/logo-nav/logo-nav';
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';


export default function DesktopFooter(){
    return(
        <>
            <Head>
            </Head>
            <div className="footer">
                <Link href="/">
                    <div className="footer-ten-tiem">
                        <LogoNav />
                    </div>
                </Link>
                <div className="divider">
                    <NavDropdown.Divider />
                </div>
                <div className="footer-navigation">
                    <div className="footer-navigation-item-group-1">
                        <div className="footer-navigation-item">
                            <Link href={thongTinTiem1.linkTomainMenu1}>
                                <a className="footer-navigation-item">
                                    {thongTinTiem1.mainMenu1}
                                </a>
                            </Link>
                        </div>
                    
                        <div className="footer-navigation-item">
                            <div className="footer-navigation-item-services">
                                <Link href={thongTinTiem1.linkTomainMenu4}>
                                    <a className="footer-navigation-item">
                                        {thongTinTiem1.mainMenu4}
                                    </a>
                                </Link>
                            </div>
                            <div className="footer-navigation-item-detail-services">
                                <div className="footer-navigation-item-detail-services">
                                    <Link href={thongTinTiem1.linkTomainService1}>
                                        <a className="services-list-1">
                                            {thongTinTiem1.mainService1}
                                        </a>
                                    </Link>
                                </div>
                                <div className="footer-navigation-item-detail-services">
                                    <Link href={thongTinTiem1.linkTomainService2}>
                                        <a className="services-list-2">
                                            {thongTinTiem1.mainService2}
                                        </a>
                                    </Link>
                                </div>
                                <div className="footer-navigation-item-detail-services">
                                    <Link href={thongTinTiem1.linkTomainService3}>
                                        <a className="services-list-3">
                                            {thongTinTiem1.mainService3}
                                        </a>
                                    </Link>
                                </div>
                                <div className="footer-navigation-item-detail-services">
                                    <Link href={thongTinTiem1.linkTomainService4}>
                                        <a className="services-list-4">
                                            {thongTinTiem1.mainService4}
                                        </a>
                                    </Link>
                                </div>
                                <div className="footer-navigation-item-detail-services">
                                    <Link href={thongTinTiem1.linkTomainService4}>
                                        <a className="services-list-5">
                                            {thongTinTiem1.mainService5}
                                        </a>
                                    </Link>
                                </div>
                                <div className="footer-navigation-item-detail-services">
                                    <Link href={thongTinTiem1.linkTomainService6}>
                                        <a className="services-list-6">
                                            {thongTinTiem1.mainService6}
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-navigation-item-group-2">
                        <div className="footer-navigation-item">
                            <Link href={thongTinTiem1.linkTomainMenu3}>
                                <a className="footer-navigation-item">
                                    {thongTinTiem1.mainMenu3}
                                </a>
                            </Link>
                        </div>
                        <div className="footer-navigation-item">
                            <Link href={thongTinTiem1.linkTomainMenu2}>
                                <a className="footer-navigation-item">
                                    {thongTinTiem1.mainMenu2}
                                </a>
                            </Link>
                        </div>
                        <div className="footer-navigation-item">
                            <Link href={thongTinTiem1.linkTomainMenu5}>
                                <a className="footer-navigation-item">
                                    {thongTinTiem1.mainMenu5}
                                </a>
                            </Link>
                        </div>
                        <div className="footer-navigation-item">
                            <div className="footer-navigation-item">
                                <Link href="/">
                                    <a className="footer-navigation-item">
                                        Contact us
                                    </a>
                                </Link>
                            </div>
                            <div className="footer-navigation-item-details">
                                <Link href={thongTinTiem2.callTiem}>
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
                                <Link href={thongTinTiem1.linkToMapTiem}>  
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
                    <iframe src={thongTinTiem1.iframeMapLink} width="1920" height="500" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="footer-copyright">
                    © Copyright and Powered by 
                    <Link href="https://speedcustomer.com">
                        <a className="footer-copyright" rel="dofollow">
                            &nbsp;SC
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
}