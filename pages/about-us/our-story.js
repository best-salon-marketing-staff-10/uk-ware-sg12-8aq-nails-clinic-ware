import Carousel from 'react-bootstrap/Carousel'
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';

export default function OurStory(){
    return(
        <>
        <div className="our-story">
            <div className="our-story-block">
                        <h1 className="our-story-heading">
                            {thongTinTiem2.ourStoryHeading}
                        </h1>
                        <div className="our-story-description">
                            <p className="our-story-description">
                            {thongTinTiem2.ourStoryDescription}
                            </p>
                        </div>
                    </div>
                </div>
        </>
    )
}
