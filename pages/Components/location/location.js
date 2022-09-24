import Link from 'next/link';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button3 from '/pages/Components/buttons/button-3.js';
import Button4 from '/pages/Components/buttons/button-4.js';
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';

export default function Location(){

    return(
        <>
            <div className="location">
                <div className="location-image">
                    <img alt={thongTinTiem2.LocationImage1Alt} src={thongTinTiem1.LocationImage1} />
                </div>
                <div className="location-text">
                    
                    <div className="location-title">
                        LOCATION
                    </div>
                    <div className="location-header">
                        {thongTinTiem1.areaTiem}
                    </div>
                    <div className="location-description">
                        <div className="location-description">
                            {thongTinTiem1.addressTiemLine1}
                            <br />
                            {thongTinTiem1.areaTiem} 
                            <br />
                            {thongTinTiem1.postcodeTiem}
                        </div>
                        <Link href={thongTinTiem2.callTiem}>
                            <div className="phone-tiem">
                                {thongTinTiem1.phoneTiem}
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="button">
                    <Button4 />
                </div>
            </div>
        </>
    )
}