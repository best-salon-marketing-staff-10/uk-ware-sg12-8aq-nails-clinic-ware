import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';

export default function Button4(){
    const content = "Find us";
    return(
        <>
            <div className="button-4">
                <Link href={thongTinTiem1.linkToMapTiem}>
                    <div className="button-model-1">
                        Find us
                    </div>
                </Link>
            </div>
        </>
    )
}