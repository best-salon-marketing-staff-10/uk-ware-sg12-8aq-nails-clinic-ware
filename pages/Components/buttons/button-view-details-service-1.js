import Link from 'next/link';
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';


export default function ButtonViewDetailsService1(){
    
    return(
        <>
            <div className="button-view-details-service-1-to-mobile">
                <Link href={thongTinTiem1.button6LinkToMobile}>
                    <div className="button-model-2">
                        {thongTinTiem1.button6Content}
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-1-to-tablet">
                <Link href={thongTinTiem1.button6LinkToTablet}>
                    <div className="button-model-2">
                        {thongTinTiem1.button6Content}
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-1-to-desktop">
                <Link href={thongTinTiem1.button6LinkToDesktop}>
                    <div className="button-model-2">
                        {thongTinTiem1.button6Content}
                    </div>
                </Link>
            </div>
        </>
    )
}