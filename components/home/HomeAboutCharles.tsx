"use client";

import Image from "next/image";

export function HomeAboutCarlos({ anchorId }: { anchorId?: string }) {
  return (
    <section
      className="
        bg-white
        px-3
        md:px-4
        pt-40
        lg:pt-55
        pb-10
      "
    >
      <div
        className="
          max-w-[1170px]
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
          lg:gap-5
        "
      >
        {/* IMAGE HEIGHT ROW */}
        <div className="lg:col-span-2">
          <div
            id={anchorId}
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-8
              lg:gap-5
              items-center
              lg:min-h-[650px]
            "
          >
            {/* TITLE */}
            <div
              className="
                flex
                justify-start
                lg:justify-end
                px-18
                lg:px-0
              "
            >
              <h2
                className="
                  font-title
                  uppercase
                  text-[#15585E]
                  font-semibold
                  md:font-normal
                  text-[56px]
                  leading-[1.05]

                  md:text-[56px]
                  lg:text-[94px]

                  max-w-[420px]
                  text-left
                "
              >
                SOBRE
                <br />
                CARLOS
                <br />
                CURTO.
              </h2>
            </div>

            {/* IMAGE */}
            <div
              className="
                flex
                justify-center
                px-5
                lg:px-0
                lg:pr-12
              "
            >
              <Image
                src="/images/home/A_Propos.jpg"
                alt="Carlos Curto"
                width={541}
                height={721}
                className="
                  w-full
                  max-w-[460px]
                  lg:w-[500px]
                  object-cover
                "
              />
            </div>
          </div>
        </div>

        {/* TEXT */}
        <div
          className="
            lg:col-span-2

            px-5
            lg:px-0

            max-w-[460px]
            mx-auto
            lg:mx-0

            lg:pl-5
            lg:ml-[calc(50%+12px)]
          "
        >
          <p
            className="
              font-body
              text-[22px]
              md:text-[24px]
              lg:text-[26px]
              leading-[1.8]
              font-light
              tracking-[0.04em]
              text-left
            "
          >
            Carlos Curto tem dedicado mais de quarenta anos a guiar aqueles que procuram 
            clareza e serenidade interior. A sua jornada teve início em Paris, em 1982, e, 
            desde então, expandiu-se para várias cidades em França e pelo mundo, incluindo 
            Nice, Madrid, Toronto, Montreal e Lisboa.
            <br /><br />
            A abordagem de Carlos combina uma leitura profunda das dinâmicas espirituais 
            e energéticas com uma orientação prática, sempre alinhada à realidade e às necessidades 
            de cada pessoa. Ao longo dos anos, muitas pessoas encontraram nele um guia confiável, 
            construindo relações de confiança e acompanhamento duradouro.
          </p>
        </div>
      </div>
    </section>
  );
}
