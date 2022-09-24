import Link from 'next/link';
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';

export default function ButtonViewDetailsService5(){
    return(
        <>
            <div className="button-view-details-service-5-to-mobile">
                <Link href={thongTinTiem1.button10LinkToMobile}>
                    <div className="button-model-2">
                        {thongTinTiem1.button10Content}
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-5-to-tablet">
                <Link href={thongTinTiem1.button10LinkToTablet}>
                    <div className="button-model-2">
                        {thongTinTiem1.button10Content}
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-5-to-desktop">
                <Link href={thongTinTiem1.button10LinkToDesktop}>
                    <div className="button-model-2">
                        {thongTinTiem1.button10Content}
                    </div>
                </Link>
            </div>
        </>
    )
}