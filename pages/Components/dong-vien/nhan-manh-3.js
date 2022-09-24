import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';

export default function NhanManh3(){
    return(
        <>
            <div className="nhan-manh-3-background">
                <div className="nhan-manh-content">
                    <div className="nhan-manh-content-wrapper">
                        <div className="nhan-manh-content-header">
                            {thongTinTiem2.NhanhManh3Heading}
                        </div>
                        <div className="nhan-manh-content-description">
                            {thongTinTiem2.NhanhManh3Content}
                        </div>
                        <div>
                            <img alt={thongTinTiem2.NhanhManh3Image1Alt} src={thongTinTiem1.NhanhManh3Image1}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}