import Link from 'next/link';
import { button } from '/pages/core/info';

export default function ButtonViewDetailsService4() {
    return (
        <>
            <div className="button-view-details-service-4-to-mobile">
                <Link legacyBehavior href={button.button9LinkToMobile}>
                    <div className="background-button-model-2">
                        <div className="button-model-2">
                            <span className="gradient-text">
                                {button.button9Content}
                            </span>

                        </div>
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-4-to-tablet">
                <Link legacyBehavior href={button.button9LinkToTablet}>
                    <div className="background-button-model-2">
                        <div className="button-model-2">
                            <span className="gradient-text">
                                {button.button9Content}
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-4-to-desktop">
                <Link legacyBehavior href={button.button9LinkToDesktop}>
                    <div className="background-button-model-2">
                        <div className="button-model-2">
                            <span className="gradient-text">
                                {button.button9Content}
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}