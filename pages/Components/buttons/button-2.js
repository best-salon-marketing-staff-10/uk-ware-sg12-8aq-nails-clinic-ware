import Link from 'next/link';
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';

export default function Button2(){
    const content = "View Our Services";

    return(
        <>  
            <Link href="/services">
                <div className="button-model-1">
                    {content}
                </div>
            </Link>
        </>
    )
}