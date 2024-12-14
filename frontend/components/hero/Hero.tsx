type Props = {
  className?: string,
};

export default function Hero(props: Props) {
  return (
    <section className={`flex flex-col justify-center items-center ${props.className}`}>
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="256.000000pt" height="256.000000pt" viewBox="0 0 256.000000 256.000000"
        preserveAspectRatio="xMidYMid meet" className="h-20 w-20 fill-[#232323] dark:fill-white stroke-none rounded-xl"
        >
        <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)">
          <path d="M130 2547 c-47 -15 -103 -74 -118 -123 -17 -60 -17 -2228 0 -2288 16
          -52 72 -108 124 -124 32 -9 305 -12 1156 -12 l1115 0 44 23 c24 13 58 43 74
          66 l30 43 3 1121 c2 857 0 1132 -9 1166 -16 56 -71 112 -125 129 -56 16 -2241
          16 -2294 -1z m1360 -621 c191 -62 280 -170 280 -341 0 -97 -26 -167 -82 -222
          -24 -22 -56 -47 -71 -55 l-29 -15 45 -17 c61 -23 129 -97 152 -166 25 -76 17
          -207 -18 -283 -30 -67 -91 -128 -161 -162 -98 -48 -163 -55 -518 -55 l-328 0
          0 671 0 671 338 -4 c288 -4 345 -7 392 -22z"/>
          <path d="M1080 1545 l0 -157 128 4 c191 6 236 36 237 155 0 47 -5 68 -21 90
          -36 49 -67 58 -211 61 l-133 4 0 -157z"/>
          <path d="M1080 1020 l0 -160 141 0 c158 0 193 10 232 64 28 39 30 134 3 184
          -30 57 -78 72 -238 72 l-138 0 0 -160z"/>
        </g>
      </svg>
      <h1 className="text-[#232323] dark:text-white text-7xl font-semibold tracking-wide mt-2 line-through decoration-white dark:decoration-[#232323] decoration-4">
        Briefly
      </h1>
      <p className="text-[#232323] dark:text-white font-semibold text-lg mt-4">
        An AI-powered Wikipedia Assistant
      </p>
    </section>
  );
};