import Link from 'next/link';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ButtonFullListOfOurServices from '/pages/Components/buttons/button-full-list-of-our-services.js';
import { NavDropdown } from 'react-bootstrap';
import LogoNav from '/pages/Components/logo-nav/logo-nav';
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';


export default function MobileNavBar(){
    return(
        <>
            <Head>
                
            </Head>
            <div className="nav-bar">
                <LogoNav />
                <div className="nav-bar-menu">
                    <Navbar bg="#FFFFFF" expand={false}>
                        <Container fluid>
                            <Navbar.Brand href="#"></Navbar.Brand>
                            <Navbar.Toggle aria-controls="offcanvasNavbar" />
                            <Navbar.Offcanvas
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="end"
                            >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel">
                                    <Link href="/" legacyBehavior>
                                        <LogoNav />
                                    </Link>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <div className="nav-bar-main-category">
                                        <Link href={thongTinTiem1.linkTomainMenu1} className="nav-bar-link-a">
                                                {thongTinTiem1.mainMenu1}
                                        </Link>
                                    </div>
                                    <div className="nav-bar-main-category">
                                        <Link href={thongTinTiem1.linkTomainMenu4} className="nav-bar-link-a">
                                                {thongTinTiem1.mainMenu4}
                                        </Link>
                                        <div className="nav-bar-services-sub-category">
                                            <div className="nav-bar-services-sub-category-details">
                                                <div className="services-list-1">
                                                    <Link href={thongTinTiem1.desktopLinkTomainService1} className="nav-bar-link-a">
                                                            {thongTinTiem1.mainService1}
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="nav-bar-services-sub-category-details">
                                                <div className="services-list-2">
                                                    <Link href={thongTinTiem1.desktopLinkTomainService2} className="nav-bar-link-a">
                                                            {thongTinTiem1.mainService2}
                                                    </Link>
                                                </div>
                                            </div>    
                                            <div className="nav-bar-services-sub-category-details">
                                                <div className="services-list-3">
                                                    <Link href={thongTinTiem1.desktopLinkTomainService3} className="nav-bar-link-a">
                                                            {thongTinTiem1.mainService3}
                                                    </Link>
                                                </div>
                                            </div> 
                                            <div className="nav-bar-services-sub-category-details">
                                                <div className="services-list-4">
                                                    <Link href={thongTinTiem1.desktopLinkTomainService4} className="nav-bar-link-a">
                                                            {thongTinTiem1.mainService4}
                                                    </Link>
                                                </div>
                                            </div> 
                                            <div className="nav-bar-services-sub-category-details">
                                                <div className="services-list-5">
                                                    <Link href={thongTinTiem1.desktopLinkTomainService5} className="nav-bar-link-a">
                                                            {thongTinTiem1.mainService5}
                                                    </Link>
                                                </div>
                                            </div> 
                                            <div className="nav-bar-services-sub-category-details">
                                                <div className="services-list-6">
                                                    <Link href={thongTinTiem1.desktopLinkTomainService6} className="nav-bar-link-a">
                                                            {thongTinTiem1.mainService6}
                                                    </Link>
                                                </div>
                                            </div> 
                                            <div className="nav-bar-services-sub-category-details">
                                                <div className="services-list-7">
                                                    <Link href={thongTinTiem1.desktopLinkTomainService7} className="nav-bar-link-a">
                                                            {thongTinTiem1.mainService7}
                                                    </Link>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="nav-bar-main-category">
                                        <Link href={thongTinTiem1.linkTomainMenu3} className="nav-bar-link-a">
                                                {thongTinTiem1.mainMenu3}
                                        </Link>
                                    </div>
                                    <div className="nav-bar-main-category">
                                        <Link href={thongTinTiem1.linkTomainMenu2} className="nav-bar-link-a">
                                                {thongTinTiem1.mainMenu2}
                                        </Link>
                                    </div>
                                    <div className="nav-bar-main-category">
                                        <Link href={thongTinTiem1.linkTomainMenu5} className="nav-bar-link-a">
                                                {thongTinTiem1.mainMenu5}
                                        </Link>
                                    </div>
                                    <div className="button">
                                        <ButtonFullListOfOurServices />
                                    </div>
                                </Nav>
                            </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>        
                </div>
            </div>
        </>
    )
}