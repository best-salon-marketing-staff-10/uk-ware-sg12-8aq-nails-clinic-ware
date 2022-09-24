import Head from 'next/head';
import Link from 'next/link';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button2 from '../buttons/button-3.js';
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';

export default function DongVien2(){
    return(
        <>
            <div className="dong-vien">
                <div className="dong-vien-text">
                    <div className="dong-vien-title">
                            <h1 className="title-1">
                                {thongTinTiem2.dongVien2Heading}
                            </h1>
                            <div className="divider">
                                <NavDropdown.Divider /> 
                            </div>
                    </div>
                    <div className="dong-vien-description">
                        <p className="dong-vien-description">
                            {thongTinTiem2.dongVien2Description}
                        </p>
                    </div>
                    <div className="button">
                        <Button2 />
                    </div>
                </div>
                <div className="dong-vien-content-anh">
                        <img className="dong-vien-content-anh" alt={thongTinTiem2.dongVien2Image1Alt} 
                        src={thongTinTiem1.dongVien2Image1} />
                </div> 
            </div>
        </>
    )
}
