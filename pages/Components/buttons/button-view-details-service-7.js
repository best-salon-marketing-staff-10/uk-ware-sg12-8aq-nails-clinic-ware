import Link from 'next/link';
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';

export default function ButtonViewDetailsService7(){
    return(
        <>
            <div className="button-view-details-service-7-to-mobile">
                <Link href={thongTinTiem1.button12LinkToMobile}>
                    <div className="button-model-2">
                        {thongTinTiem1.button12Content}
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-7-to-tablet">
                <Link href={thongTinTiem1.button12LinkToTablet}>
                    <div className="button-model-2">
                        {thongTinTiem1.button12Content}
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-7-to-desktop">
                <Link href={thongTinTiem1.button12LinkToDesktop}>
                    <div className="button-model-2">
                        {thongTinTiem1.button12Content}
                    </div>
                </Link>
            </div>
        </>
    )
}