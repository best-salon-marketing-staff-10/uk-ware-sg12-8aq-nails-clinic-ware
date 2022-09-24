import Button2 from '/pages/Components/buttons/button-2';
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';

export default function NhanManh4(){

    return(
        <>
            <div className="nhan-manh-4-background">
                <div className="nhan-manh-4-content-1">
                    <div className="nhan-manh-4-content-1-wrapper">
                        <div className="nhan-manh-4-content-header">
                            {thongTinTiem2.NhanhManh4Heading}
                        </div>
                        <div className="nhan-manh-4-content-description">
                            {thongTinTiem2.NhanhManh4Content}
                        </div>
                        <div>
                            <Button2 />
                        </div>
                    </div>
                    <div className="nhan-manh-4-content-1-image">
                        <img alt={thongTinTiem2.NhanhManh4Image1Alt} src={thongTinTiem1.NhanhManh4Image1} />
                    </div>
                </div>
                
                <div className="nhan-manh-4-content-2">
                    <div className="nhan-manh-4-content-2-image">
                        <img alt={thongTinTiem2.NhanhManh4Image2Alt} src={thongTinTiem1.NhanhManh4Image2} />
                    </div>
                    <div className="nhan-manh-4-content-2-wrapper">
                        <div className="nhan-manh-4-content-wrapper">
                            <div className="nhan-manh-4-content-header-4">
                                {thongTinTiem2.NhanhManh5Heading}
                            </div>
                            <div className="nhan-manh-4-content-description">
                                {thongTinTiem2.NhanhManh5Content}
                            </div>
                            <div>
                                <Button2 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}