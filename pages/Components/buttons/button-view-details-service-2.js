import Link from 'next/link';
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';

export default function ButtonViewDetailsService2(){
    return(
        <>
            <div className="button-view-details-service-2-to-mobile">
                <Link href={thongTinTiem1.button7LinkToMobile} legacyBehavior>
                    <div className="button-model-2">
                        {thongTinTiem1.button7Content}
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-2-to-tablet">
                <Link href={thongTinTiem1.button7LinkToTablet} legacyBehavior>
                    <div className="button-model-2">
                        {thongTinTiem1.button7Content}
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-2-to-desktop">
                <Link href={thongTinTiem1.button7LinkToDesktop} legacyBehavior>
                    <div className="button-model-2">
                        {thongTinTiem1.button7Content}
                    </div>
                </Link>
            </div>
        </>
    )
}