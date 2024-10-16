import Link from 'next/link';
import { button } from '/pages/core/info';

export default function ButtonViewDetailsService7() {
    return (
        <>
            <div className="button-view-details-service-7-to-mobile">
                <Link legacyBehavior href={button.button12LinkToMobile}>
                    <div className="background-button-model-2">
                        <div className="button-model-2">
                            <span className="gradient-text">
                                {button.button12Content}
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-7-to-tablet">
                <Link legacyBehavior href={button.button12LinkToTablet}>
                    <div className="background-button-model-2">
                        <div className="button-model-2">
                            <span className="gradient-text">
                                {button.button12Content}
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-7-to-desktop">
                <Link legacyBehavior href={button.button12LinkToDesktop}>
                    <div className="background-button-model-2">
                        <div className="button-model-2">
                            <span className="gradient-text">
                                {button.button12Content}
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}