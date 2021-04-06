import * as React from 'react'
import classNames from "classnames";
export interface Props {
    className?: string
}

const Pearlogo: React.FC<Props> = (props) => {
    return (
        <div data-testid="Pearlogo" className={classNames("pearlogo", props.className)}>
            <svg width="307" height="111" viewBox="0 0 307 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                    <path fillRule="evenodd" clipRule="evenodd" d="M99.6363 53.8182C99.6363 83.5411 123.732 107.636 153.455 107.636C183.178 107.636 207.273 83.5411 207.273 53.8182C207.273 24.0952 183.178 0 153.455 0C123.732 0 99.6363 24.0952 99.6363 53.8182ZM158.375 94.1049C133.068 94.1049 112.553 73.5896 112.553 48.2826C112.553 37.1838 116.499 27.0065 123.064 19.0773C113.595 27.5255 107.632 39.8218 107.632 53.5106C107.632 78.9875 128.285 99.6405 153.762 99.6405C169.531 99.6405 183.452 91.7285 191.771 79.6578C183.413 88.5509 171.542 94.1049 158.375 94.1049Z" fill="url(#paint0_radial)"/>
                </g>
                <g filter="url(#filter0_d)">
                    <path d="M21.2908 46.864H14.3468V43.344H32.2668V46.864H25.3228V66H21.2908V46.864ZM34.9023 43.344H38.9343V52.496H49.5263V43.344H53.5583V66H49.5263V55.952H38.9343V66H34.9023V43.344ZM58.5585 43.344H73.5665V46.864H62.5905V52.624H72.9905V56.016H62.5905V62.416H74.1425V66H58.5585V43.344ZM86.0898 43.344H94.9218C95.7751 43.344 96.6178 43.4507 97.4498 43.664C98.2818 43.856 99.0178 44.1867 99.6578 44.656C100.319 45.104 100.852 45.6907 101.258 46.416C101.663 47.1413 101.866 48.016 101.866 49.04C101.866 50.32 101.503 51.376 100.778 52.208C100.052 53.04 99.1031 53.6373 97.9298 54V54.064C99.3591 54.256 100.532 54.8107 101.45 55.728C102.367 56.6453 102.826 57.872 102.826 59.408C102.826 60.6453 102.58 61.6907 102.09 62.544C101.599 63.376 100.948 64.048 100.138 64.56C99.3484 65.072 98.4311 65.4453 97.3858 65.68C96.3618 65.8933 95.3164 66 94.2498 66H86.0898V43.344ZM90.1218 52.56H93.7058C95.0498 52.56 96.0738 52.2933 96.7778 51.76C97.4818 51.2267 97.8338 50.4693 97.8338 49.488C97.8338 48.464 97.4711 47.7387 96.7458 47.312C96.0204 46.8853 94.8898 46.672 93.3538 46.672H90.1218V52.56ZM90.1218 62.608H93.7378C94.2498 62.608 94.8044 62.576 95.4018 62.512C95.9991 62.4267 96.5431 62.2667 97.0338 62.032C97.5458 61.7973 97.9618 61.456 98.2818 61.008C98.6231 60.56 98.7938 59.9627 98.7938 59.216C98.7938 58.0213 98.3884 57.1893 97.5778 56.72C96.7671 56.2507 95.5404 56.016 93.8978 56.016H90.1218V62.608ZM106.809 43.344H110.841V62.416H120.472V66H106.809V43.344ZM130.256 43.344H133.744L143.504 66H138.896L136.784 60.816H126.96L124.912 66H120.4L130.256 43.344ZM135.376 57.36L131.888 48.144L128.336 57.36H135.376ZM161.536 48.656C160.938 47.8453 160.16 47.2587 159.2 46.896C158.24 46.512 157.301 46.32 156.384 46.32C155.21 46.32 154.144 46.5333 153.184 46.96C152.224 47.3867 151.392 47.9733 150.688 48.72C150.005 49.4667 149.472 50.3413 149.088 51.344C148.725 52.3467 148.544 53.4347 148.544 54.608C148.544 55.8453 148.725 56.976 149.088 58C149.45 59.024 149.962 59.9093 150.624 60.656C151.306 61.3813 152.117 61.9467 153.056 62.352C153.994 62.7573 155.05 62.96 156.224 62.96C157.44 62.96 158.517 62.7253 159.456 62.256C160.394 61.7653 161.152 61.1253 161.728 60.336L164.96 62.608C163.957 63.8667 162.73 64.848 161.28 65.552C159.829 66.2347 158.133 66.576 156.192 66.576C154.421 66.576 152.789 66.288 151.296 65.712C149.824 65.1147 148.554 64.2933 147.488 63.248C146.421 62.1813 145.589 60.9227 144.992 59.472C144.394 58 144.096 56.3787 144.096 54.608C144.096 52.7947 144.405 51.1627 145.024 49.712C145.664 48.24 146.528 46.992 147.616 45.968C148.725 44.944 150.026 44.1547 151.52 43.6C153.013 43.0453 154.634 42.768 156.384 42.768C157.109 42.768 157.866 42.8427 158.656 42.992C159.445 43.12 160.202 43.3333 160.928 43.632C161.653 43.9093 162.336 44.2613 162.976 44.688C163.616 45.1147 164.16 45.6267 164.608 46.224L161.536 48.656ZM167.465 43.344H171.497V53.136H171.593L181.065 43.344H186.505L175.913 53.808L187.209 66H181.545L171.593 54.64H171.497V66H167.465V43.344ZM197.152 43.344H204.544C205.846 43.344 207.019 43.4613 208.064 43.696C209.11 43.9307 210.006 44.3147 210.752 44.848C211.499 45.3813 212.075 46.064 212.48 46.896C212.886 47.728 213.088 48.7307 213.088 49.904C213.088 51.1627 212.854 52.2187 212.384 53.072C211.915 53.9253 211.275 54.6187 210.464 55.152C209.675 55.664 208.747 56.0373 207.68 56.272C206.614 56.5067 205.483 56.624 204.288 56.624H201.184V66H197.152V43.344ZM204 53.232C204.662 53.232 205.291 53.1893 205.888 53.104C206.486 52.9973 207.019 52.8267 207.488 52.592C207.958 52.336 208.331 51.9947 208.608 51.568C208.886 51.1413 209.024 50.5867 209.024 49.904C209.024 49.2427 208.886 48.7093 208.608 48.304C208.331 47.8773 207.958 47.5467 207.488 47.312C207.04 47.0773 206.518 46.928 205.92 46.864C205.344 46.7787 204.747 46.736 204.128 46.736H201.184V53.232H204ZM216.684 43.344H231.692V46.864H220.716V52.624H231.116V56.016H220.716V62.416H232.267V66H216.684V43.344ZM243.319 43.344H246.807L256.567 66H251.959L249.847 60.816H240.023L237.975 66H233.463L243.319 43.344ZM248.439 57.36L244.951 48.144L241.399 57.36H248.439ZM258.809 43.344H266.681C267.747 43.344 268.782 43.4613 269.785 43.696C270.787 43.9093 271.673 44.272 272.441 44.784C273.23 45.296 273.859 45.968 274.329 46.8C274.798 47.632 275.033 48.6453 275.033 49.84C275.033 51.4827 274.563 52.8267 273.625 53.872C272.707 54.896 271.449 55.5893 269.849 55.952L275.897 66H271.033L265.785 56.4H262.841V66H258.809V43.344ZM266.137 53.104C266.713 53.104 267.289 53.0613 267.865 52.976C268.441 52.8907 268.953 52.7307 269.401 52.496C269.87 52.2613 270.254 51.9307 270.553 51.504C270.851 51.056 271.001 50.4907 271.001 49.808C271.001 49.1893 270.862 48.688 270.585 48.304C270.307 47.8987 269.955 47.5787 269.529 47.344C269.102 47.1093 268.611 46.9493 268.057 46.864C267.523 46.7787 267.001 46.736 266.489 46.736H262.841V53.104H266.137ZM278.934 43.344H282.966V62.416H292.597V66H278.934V43.344Z" fill="url(#paint1_radial)"/>
                </g>
                <defs>
                    <filter id="filter0_d" x="10.3467" y="42.7679" width="286.251" height="31.808" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(66 319.545) rotate(-73.5707) scale(410.298 561.629)">
                        <stop stopColor="#3B3442"/>
                        <stop offset="0.0418637" stopColor="#222B55"/>
                        <stop offset="0.389897" stopColor="#3C5A50"/>
                        <stop offset="0.466502" stopColor="#6E6180" stopOpacity="0.75"/>
                        <stop offset="0.547321" stopColor="#7F6B92"/>
                        <stop offset="0.621401" stopColor="#5D5069" stopOpacity="0.83"/>
                        <stop offset="0.696734" stopColor="#336B9F" stopOpacity="0.85"/>
                        <stop offset="0.753901" stopColor="#244564"/>
                        <stop offset="0.800688" stopColor="#181B1E"/>
                        <stop offset="0.83669" stopColor="#1A1D1B"/>
                        <stop offset="0.950776" stopColor="#252727"/>
                    </radialGradient>
                    <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(172 508.5) rotate(-93.242) scale(716.146 409.144)">
                        <stop stopColor="#3B3442"/>
                        <stop offset="0.0418637" stopColor="#222B55"/>
                        <stop offset="0.389897" stopColor="#3C5A50"/>
                        <stop offset="0.458842" stopColor="#6E6180"/>
                        <stop offset="0.515216" stopColor="#7F6B92"/>
                        <stop offset="0.593362" stopColor="#6D5B7E"/>
                        <stop offset="0.679249" stopColor="#76ACED"/>
                        <stop offset="0.720447" stopColor="#305B82"/>
                        <stop offset="0.765685" stopColor="#3A6489"/>
                        <stop offset="0.815946" stopColor="#4D7697"/>
                        <stop offset="0.886048" stopColor="#1A1D1B"/>
                        <stop offset="0.950776" stopColor="#252727"/>
                    </radialGradient>
                </defs>
            </svg>
        </div>
    )
}

export default Pearlogo
