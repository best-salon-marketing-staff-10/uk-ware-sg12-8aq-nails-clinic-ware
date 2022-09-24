import Link from "next/link";
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';

export default function ContentOurPolicy(){
    return(
        <>
            <div className="content-our-policy">
                <div className="content-heading-h1">
                    {thongTinTiem2.contentOurPolicyHeadingMain}
                </div>
                <div className="content-block">
                    <div className="content-heading-h2">
                        {thongTinTiem2.contentOurPolicyHeadingSmall1}
                    </div>
                    <div className="content-description">
                        {thongTinTiem2.contentOurPolicyDescription1}
                    </div>
                </div>
                <div className="content-block">
                    <div className="content-heading-h2">
                        {thongTinTiem2.contentOurPolicyHeadingSmall2}
                    </div>
                    <div className="content-description">
                    {thongTinTiem2.contentOurPolicyDescription2}
                    </div>
                </div>
                <div className="content-block">
                    <div className="content-heading-h2">
                        {thongTinTiem2.contentOurPolicyHeadingSmall3}
                    </div>
                    <div className="content-description">
                        {thongTinTiem2.contentOurPolicyDescription3}
                    </div>
                </div>
                <div className="content-block">
                    <div className="content-heading-h2">
                        {thongTinTiem2.contentOurPolicyHeadingSmall4}
                    </div>
                    <div className="content-description">
                        {thongTinTiem2.contentOurPolicyDescription41}
                        <a className="content-description-link-a" href={thongTinTiem2.callTiem}>
                            {thongTinTiem1.phoneTiem}
                        </a>
                        {thongTinTiem2.contentOurPolicyDescription42}
                    </div>
                </div>
                <div className="content-block">
                    <div className="content-heading-h2">
                        {thongTinTiem2.contentOurPolicyHeadingSmall5}
                    </div>
                    <div className="content-description">
                        {thongTinTiem2.contentOurPolicyDescription5}
                    </div>
                </div>
            </div>
        </>
    );
}