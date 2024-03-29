export const Icons = {
    BITCOIN: (...props: any) => {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect width="24" height="24" fill="url(#pattern0)" />
                <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_1_1104" transform="scale(0.015625)" />
                    </pattern>
                    <image id="image0_1_1104" width="64" height="64" xlinkHref="data:image/png;base64,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" />
                </defs>
            </svg>

        )
    },
    UP_ARROW_GREEN: (...props: any) => {
        return (
            <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 0L11 8H0L5.5 0Z" fill="#14B079" />
            </svg>

        )
    },
    UP_ARROW_BLACK: (...props: any) => {
        return (
            <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5.65" y="0.136963" width="8.00001" height="8.00001" transform="rotate(45 5.65 0.136963)" fill="black" />
            </svg>

        )
    },
    DOWN_ARROW_RED: (...props: any) => {
        return (
            <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 7.99951L1.96695e-06 -0.000486851L11 -0.000486851L5.5 7.99951Z" fill="#F7324C" />
            </svg>

        )
    },
    CHEV_RIGHT: (...props: any) => {
        return (
            <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9583 5.9952L1.45834 5.9952" stroke="#0F1629" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.91684 0.974793L13.9585 5.99479L8.91684 11.0156" stroke="#0F1629" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        )
    },
    INFO_TOOLTIP: (...props: any) => {
        return (
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} >
                <path d="M10.04 2.46362C5.44 2.46362 1.70667 6.19696 1.70667 10.797C1.70667 15.397 5.44 19.1303 10.04 19.1303C14.64 19.1303 18.3733 15.397 18.3733 10.797C18.3733 6.19696 14.64 2.46362 10.04 2.46362ZM10.8733 14.9636H9.20667V9.96362H10.8733V14.9636ZM10.8733 8.29696H9.20667V6.63029H10.8733V8.29696Z" fill="#ABB9BF" />
            </svg>

        )
    },
    FEED_ICON: (...props: any) => {
        return (
            <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.046875" width="44" height="44" rx="22" fill="#0082FF" />
                <path d="M15 25.2569V22.4569H17.8V25.2569H15ZM29 14.7485C28.9978 14.193 28.7755 13.661 28.382 13.269C27.9884 12.877 27.4555 12.6569 26.9 12.6569H12.7922C12.2352 12.6569 11.7011 12.8781 11.3073 13.2719C10.9134 13.6658 10.6922 14.1999 10.6922 14.7569V27.3569C10.6922 28.2851 11.0609 29.1754 11.7173 29.8317C12.3737 30.4881 13.2639 30.8569 14.1922 30.8569H29.8078C30.7361 30.8569 31.6263 30.4881 32.2827 29.8317C32.939 29.1754 33.3078 28.2851 33.3078 27.3569V18.9569C33.3078 18.3999 33.0865 17.8658 32.6927 17.4719C32.2989 17.0781 31.7648 16.8569 31.2078 16.8569H30.4V26.9789C30.4 27.1645 30.3263 27.3426 30.195 27.4738C30.0637 27.6051 29.8857 27.6789 29.7 27.6789C29.5143 27.6789 29.3363 27.6051 29.205 27.4738C29.0737 27.3426 29 27.1645 29 26.9789V14.7485ZM13.6 17.5569C13.6 17.3712 13.6737 17.1932 13.805 17.0619C13.9363 16.9306 14.1143 16.8569 14.3 16.8569H25.5C25.6857 16.8569 25.8637 16.9306 25.995 17.0619C26.1262 17.1932 26.2 17.3712 26.2 17.5569C26.2 17.7425 26.1262 17.9206 25.995 18.0518C25.8637 18.1831 25.6857 18.2569 25.5 18.2569H14.3C14.1143 18.2569 13.9363 18.1831 13.805 18.0518C13.6737 17.9206 13.6 17.7425 13.6 17.5569ZM21.3 21.0569H25.5C25.6857 21.0569 25.8637 21.1306 25.995 21.2619C26.1262 21.3932 26.2 21.5712 26.2 21.7569C26.2 21.9425 26.1262 22.1206 25.995 22.2518C25.8637 22.3831 25.6857 22.4569 25.5 22.4569H21.3C21.1143 22.4569 20.9363 22.3831 20.805 22.2518C20.6737 22.1206 20.6 21.9425 20.6 21.7569C20.6 21.5712 20.6737 21.3932 20.805 21.2619C20.9363 21.1306 21.1143 21.0569 21.3 21.0569ZM20.6 25.9569C20.6 25.7712 20.6737 25.5932 20.805 25.4619C20.9363 25.3306 21.1143 25.2569 21.3 25.2569H25.5C25.6857 25.2569 25.8637 25.3306 25.995 25.4619C26.1262 25.5932 26.2 25.7712 26.2 25.9569C26.2 26.1425 26.1262 26.3206 25.995 26.4518C25.8637 26.5831 25.6857 26.6569 25.5 26.6569H21.3C21.1143 26.6569 20.9363 26.5831 20.805 26.4518C20.6737 26.3206 20.6 26.1425 20.6 25.9569ZM14.3 21.0569H18.5C18.6857 21.0569 18.8637 21.1306 18.995 21.2619C19.1263 21.3932 19.2 21.5712 19.2 21.7569V25.9569C19.2 26.1425 19.1263 26.3206 18.995 26.4518C18.8637 26.5831 18.6857 26.6569 18.5 26.6569H14.3C14.1143 26.6569 13.9363 26.5831 13.805 26.4518C13.6737 26.3206 13.6 26.1425 13.6 25.9569V21.7569C13.6 21.5712 13.6737 21.3932 13.805 21.2619C13.9363 21.1306 14.1143 21.0569 14.3 21.0569Z" fill="white" />
            </svg>

        )
    },
    CHART_UP_ICON: (...props: any) => {
        return (
            <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.046875" width="44" height="44" rx="22" fill="#0FBA83" />
                <path d="M26.2308 16.1238H33V22.893" stroke="white" strokeWidth="1.69231" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M33 16.1238L23.4385 25.6853C23.2803 25.8404 23.0676 25.9272 22.8462 25.9272C22.6247 25.9272 22.412 25.8404 22.2538 25.6853L18.3615 21.793C18.2034 21.638 17.9907 21.5511 17.7692 21.5511C17.5477 21.5511 17.3351 21.638 17.1769 21.793L11 27.9699" stroke="white" strokeWidth="1.69231" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        )
    }
}