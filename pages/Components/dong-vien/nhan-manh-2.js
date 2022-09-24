import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';

export default function NhanManh2(){
    return(
        <>
            <div className="nhan-manh-2-background">
                        <div className="nhan-manh-content">
                            <div className="nhan-manh-content-wrapper">
                                <div className="nhan-manh-content-header">
                                    {thongTinTiem2.NhanhManh2Heading}
                                </div>
                                <div className="nhan-manh-content-description">
                                    {thongTinTiem2.NhanhManh2Content}
                                </div>
                            </div>
                            <div>
                                <img alt={thongTinTiem2.NhanhManh2Image1Alt} src={thongTinTiem1.NhanhManh2Image1} />
                            </div>
                        </div>
                    </div>
        </>
        
    )
}