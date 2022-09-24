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
                                    <Link href="/">
                                        <LogoNav />
                                    </Link>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <div className="nav-bar-main-category">
                                        <Link href={thongTinTiem1.linkTomainMenu1}>
                                            <a className="nav-bar-link-a">
                                                {thongTinTiem1.mainMenu1}
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="nav-bar-main-category">
                                        <Link href={thongTinTiem1.linkTomainMenu4}>
                                            <a className="nav-bar-link-a">
                                                {thongTinTiem1.mainMenu4}
                                            </a>
                                        </Link>
                                        <div className="nav-bar-services-sub-category">
                                            <div className="nav-bar-services-sub-category-details">
                                                <div className="services-list-1">
                                                    <Link href={thongTinTiem1.tabletLinkTomainService1}>
                                                        <a className="nav-bar-link-a"> 
                                                            {thongTinTiem1.mainService1}
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="nav-bar-services-sub-category-details">
                                                <div className="services-list-2">
                                                    <Link href={thongTinTiem1.tabletLinkTomainService2}>
                                                        <a className="nav-bar-link-a">
                                                            {thongTinTiem1.mainService2}
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>    
                                            <div className="nav-bar-services-sub-category-details">
                                                <div className="services-list-3">
                                                    <Link href={thongTinTiem1.tabletLinkTomainService3}>
                                                        <a className="nav-bar-link-a">
                                                            {thongTinTiem1.mainService3}
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div> 
                                            <div className="nav-bar-services-sub-category-details">
                                                <div className="services-list-4">
                                                    <Link href={thongTinTiem1.tabletLinkTomainService4}>
                                                        <a className="nav-bar-link-a">
                                                            {thongTinTiem1.mainService4}
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div> 
                                            <div className="nav-bar-services-sub-category-details">
                                                <div className="services-list-5">
                                                    <Link href={thongTinTiem1.tabletLinkTomainService5}>
                                                        <a className="nav-bar-link-a">
                                                            {thongTinTiem1.mainService5}
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div> 
                                            <div className="nav-bar-services-sub-category-details">
                                                <div className="services-list-6">
                                                    <Link href={thongTinTiem1.tabletLinkTomainService6}>
                                                        <a className="nav-bar-link-a">
                                                            {thongTinTiem1.mainService6}
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div> 
                                            <div className="nav-bar-services-sub-category-details">
                                                <div className="services-list-7">
                                                    <Link href={thongTinTiem1.tabletLinkTomainService7}>
                                                        <a className="nav-bar-link-a">
                                                            {thongTinTiem1.mainService7}
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="nav-bar-main-category">
                                        <Link href={thongTinTiem1.linkTomainMenu3}>
                                            <a className="nav-bar-link-a">
                                                {thongTinTiem1.mainMenu3}
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="nav-bar-main-category">
                                        <Link href={thongTinTiem1.linkTomainMenu2}>
                                            <a className="nav-bar-link-a">
                                                {thongTinTiem1.mainMenu2}
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="nav-bar-main-category">
                                        <Link href={thongTinTiem1.linkTomainMenu5}>
                                            <a className="nav-bar-link-a">
                                                {thongTinTiem1.mainMenu5}
                                            </a>
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
            
            <style jsx>{`
                
            `}</style>
        </>
    )
}