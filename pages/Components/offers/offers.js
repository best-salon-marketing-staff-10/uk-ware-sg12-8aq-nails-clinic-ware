import Head from 'next/head';
import Link from 'next/link';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button3 from '/pages/Components/buttons/button-3.js';
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';

export default function Offers(){
    return(
        <>
            <div className="offers">
                <div className="offers-content-text">
                        <div className="offers-title">
                            <h1 className="title-1">
                                {thongTinTiem2.offerTitle}
                            </h1>
                            <div className="offers-divider">
                                <NavDropdown.Divider /> 
                            </div>
                        </div>
                    <div className="offers-description">
                        <div>
                            {thongTinTiem2.offerDescription}
                        </div>
                        <div className="offers">
                            <div className="offers-heading">
                                {thongTinTiem2.offerHeading}
                            </div>
                            <div className="offers-content">
                                <div>
                                    {thongTinTiem2.offerContent1}
                                </div>
                                <div>
                                    {thongTinTiem2.offerContent2}
                                </div>
                                <div>
                                    {thongTinTiem2.offerContent3}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="button">
                        <Button3 />
                    </div>
                </div>
            </div>
        </>
    );
}