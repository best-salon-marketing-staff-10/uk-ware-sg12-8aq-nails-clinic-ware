import Link from 'next/link';
import { button } from '/pages/core/info';

export default function ButtonViewDetailsService6() {
    return (
        <>
            <div className="button-view-details-service-6-to-mobile">
                <Link legacyBehavior href={button.button11LinkToMobile}>
                    <div className="background-button-model-2">
                        <div className="button-model-2">
                            <span className="gradient-text">
                                {button.button11Content}
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-6-to-tablet">
                <Link legacyBehavior href={button.button11LinkToTablet}>
                    <div className="background-button-model-2">
                        <div className="button-model-2">
                            <span className="gradient-text">
                                {button.button11Content}
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-6-to-desktop">
                <Link legacyBehavior href={button.button11LinkToDesktop}>
                    <div className="background-button-model-2">
                        <div className="button-model-2">
                            <span className="gradient-text">
                                {button.button11Content}
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}