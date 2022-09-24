import Button3 from '/pages/Components/buttons/button-3.js';
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';

export default function TimeSchedule(){
    return(
        <>
            <div className="time-schedule">
                <div className="time-schedule-text">
                    <div className="time-schedule-title">
                        {thongTinTiem2.timeScheduleHeading}
                    </div>
                    <div className="time-schedule-description">
                            <div className="time-schedule-description">
                                {thongTinTiem1.workingTimeMon}
                                <br />
                                {thongTinTiem1.workingTimeTue}
                                <br />
                                {thongTinTiem1.workingTimeWed}
                                <br />
                                {thongTinTiem1.workingTimeThu}
                                <br />
                                {thongTinTiem1.workingTimeFri}
                                <br />
                                {thongTinTiem1.workingTimeSat}
                                <br />
                                {thongTinTiem1.workingTimeSun}
                            </div>   
                    </div>
                </div>
                <div className="button">
                    <Button3 />
                </div>
            </div>
        </>
    )
}