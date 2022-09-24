import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';


export default function Button1(){
    return(
        <>
            <div className="learn-more-button-to-mobile">
                <Link href="#m-section-1">
                    <div className="button-model-1">
                        {thongTinTiem1.button1Content}
                    </div>
                </Link>
            </div>
            <div className="learn-more-button-to-tablet">
                <Link href="#t-section-1">
                    <div className="button-model-1">
                        {thongTinTiem1.button1Content}
                    </div>
                </Link>
            </div>
            <div className="learn-more-button-to-desktop">
                <Link href="#d-section-1">
                    <div className="button-model-1">
                        {thongTinTiem1.button1Content}
                    </div>
                </Link>
            </div>
        </>
    )
}