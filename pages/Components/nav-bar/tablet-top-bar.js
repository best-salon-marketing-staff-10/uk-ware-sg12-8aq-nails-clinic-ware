import Link from 'next/link';
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';

export default function TabletTopBar(){
    return(
        <>
            <div className="top-bar">
                <Link href={thongTinTiem2.callTiem}>
                    <div className="top-bar-item-left">
                        CALL NOW
                    </div>
                </Link>
                <div className="top-bar-item-spacer">
                </div>
                <Link href={thongTinTiem2.callTiem}>
                    <div className="top-bar-item-right">
                        BOOK NOW
                    </div>
                </Link>
            </div>
        </>
    )
}