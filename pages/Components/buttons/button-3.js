import Link from 'next/link';
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';

export default function Button3(){
    return(
        <>
            <Link href={thongTinTiem2.linkBookingTiem}>
                <div className="button-model-1">
                    Book&nbsp;Appointment
                </div>
            </Link>
        </>
    )
}