import Link from 'next/link';
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';

export default function ButtonViewDetailsService6(){
    return(
        <>
            <div className="button-view-details-service-6-to-mobile">
                <Link href={thongTinTiem1.button11LinkToMobile}>
                    <div className="button-model-2">
                        {thongTinTiem1.button11Content}
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-6-to-tablet">
                <Link href={thongTinTiem1.button11LinkToTablet}>
                    <div className="button-model-2">
                        {thongTinTiem1.button11Content}
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-6-to-desktop">
                <Link href={thongTinTiem1.button11LinkToDesktop}>
                    <div className="button-model-2">
                        {thongTinTiem1.button11Content}
                    </div>
                </Link>
            </div>
        </>
    )
}