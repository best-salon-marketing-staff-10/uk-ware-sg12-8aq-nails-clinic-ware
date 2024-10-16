import Link from 'next/link';
import { button } from '/pages/core/info';


export default function ButtonViewDetailsService1() {

    return (
        <>
            <div className="button-view-details-service-1-to-mobile">
                <Link legacyBehavior href={button.button6LinkToMobile}>
                    <div className="background-button-model-2">
                        <div className="button-model-2">
                            <span className="gradient-text">
                                {button.button6Content}
                            </span>

                        </div>
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-1-to-tablet">
                <Link legacyBehavior href={button.button6LinkToTablet}>
                    <div className="background-button-model-2">
                        <div className="button-model-2">
                            <span className="gradient-text">
                                {button.button6Content}
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-1-to-desktop">
                <Link legacyBehavior href={button.button6LinkToDesktop}>
                    <div className="background-button-model-2">
                        <div className="button-model-2">
                            <span className="gradient-text">
                                {button.button6Content}
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}