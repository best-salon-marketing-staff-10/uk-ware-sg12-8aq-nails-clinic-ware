import Link from "next/link";
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';

export default function LogoNav(){

    return(
        <>
            <Link href="/">
                <div className="logo-container">
                    
                    <div className="logo">
                        <img className="logo"src={thongTinTiem1.logoTiem} />
                    </div>
                    <div className="logo-text">
                        <div className="logo-text-1">
                            {thongTinTiem1.tenTiem}
                        </div>
                        <div className="logo-text-2">
                            {thongTinTiem1.cityTiem}
                        </div>
                    </div>
                    
                </div>
            </Link>
            <style>{`
                
            `}</style>
        </>
    );
}