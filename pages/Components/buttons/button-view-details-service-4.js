import Link from 'next/link';
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';

export default function ButtonViewDetailsService4(){
    return(
        <>
            <div className="button-view-details-service-4-to-mobile">
                <Link href={thongTinTiem1.button9LinkToMobile}>
                    <div className="button-model-2">
                        {thongTinTiem1.button9Content}
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-4-to-tablet">
                <Link href={thongTinTiem1.button9LinkToTablet}>
                    <div className="button-model-2">
                        {thongTinTiem1.button9Content}
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-4-to-desktop">
                <Link href={thongTinTiem1.button9LinkToDesktop}>
                    <div className="button-model-2">
                        {thongTinTiem1.button9Content}
                    </div>
                </Link>
            </div>
        </>
    )
}