import Link from 'next/link';
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';

export default function ButtonFullListOfOurServices(){
    const content = "Full list of our services";

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