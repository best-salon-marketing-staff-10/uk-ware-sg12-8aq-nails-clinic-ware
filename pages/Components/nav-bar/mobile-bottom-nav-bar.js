import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';

export default function MobileBottomNavBar(){
    return(
        <>
            <div className="mobile-bottom-nav-bar-section-bottom-nav-bar">
                <Navbar expand={false} bg="white" variant="d" fixed="bottom">
                    <div className="mobile-bottom-nav-bar-section">
                        <Link href={thongTinTiem1.BottomNavButton1LinkTo} className="mobile-bottom-nav-bar-link-a">
                                <div className="mobile-bottom-nav-bar-home">
                                    <div>
                                        <img className="mobile-bottom-nav-bar-img" alt={thongTinTiem1.BottomNavButton1IconAlt} src={thongTinTiem1.BottomNavButton1Icon} />
                                    </div>
                                    <div className="mobile-bottom-nav-bar-section-content">
                                        {thongTinTiem1.BottomNavButton1Content}
                                    </div>   
                                </div>
                        </Link>
                        <Link href={thongTinTiem1.BottomNavButton2LinkTo} className="mobile-bottom-nav-bar-link-a">
                                <div className="mobile-bottom-nav-bar-services">
                                    <div>
                                        <img className="mobile-bottom-nav-bar-img" alt={thongTinTiem1.BottomNavButton2IconAlt} src={thongTinTiem1.BottomNavButton2Icon} />
                                    </div>
                                    <div className="mobile-bottom-nav-bar-section-content">  
                                        {thongTinTiem1.BottomNavButton2Content}
                                    </div> 
                                </div>
                        </Link>
                        <Link href={thongTinTiem2.linkBookingTiem} className="mobile-bottom-nav-bar-link-a">
                                <div className="mobile-bottom-nav-bar-contact-us">
                                    <div>
                                        <img className="mobile-bottom-nav-bar-img" alt={thongTinTiem1.BottomNavButton3IconAlt} src={thongTinTiem1.BottomNavButton3Icon} />
                                    </div>
                                    <div className="mobile-bottom-nav-bar-section-content">
                                        Appointment&nbsp;now 
                                    </div> 
                                </div>
                        </Link>
                    </div>    
                </Navbar>
            </div>
        </>
    )
}