import Link from 'next/link';
import { button } from '/pages/core/info';

export default function ButtonViewDetailsService5() {
    return (
        <>
            <div className="button-view-details-service-5-to-mobile">
                <Link legacyBehavior href={button.button10LinkToMobile}>
                    <div className="background-button-model-2">
                        <div className="button-model-2">
                            <span className="gradient-text">
                                {button.button10Content}
                            </span>

                        </div>
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-5-to-tablet">
                <Link legacyBehavior href={button.button10LinkToTablet}>
                    <div className="background-button-model-2">
                        <div className="button-model-2">
                            <span className="gradient-text">
                                {button.button10Content}
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-5-to-desktop">
                <Link legacyBehavior href={button.button10LinkToDesktop}>
                    <div className="background-button-model-2">
                        <div className="button-model-2">
                            <span className="gradient-text">
                                {button.button10Content}
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}