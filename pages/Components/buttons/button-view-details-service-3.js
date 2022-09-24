import Link from 'next/link';
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';

export default function ButtonViewDetailsService3(){
    return(
        <>
            <div className="button-view-details-service-3-to-mobile">
                <Link href={thongTinTiem1.button8LinkToMobile}>
                    <div className="button-model-2">
                        {thongTinTiem1.button8Content}
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-3-to-tablet">
                <Link href={thongTinTiem1.button8LinkToTablet}>
                    <div className="button-model-2">
                        {thongTinTiem1.button8Content}
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-3-to-desktop">
                <Link href={thongTinTiem1.button8LinkToDesktop}>
                    <div className="button-model-2">
                        {thongTinTiem1.button8Content}
                    </div>
                </Link>
            </div>
        </>
    )
}