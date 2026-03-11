"use client";

export function InternationalHeader() {
  return (
    <section
      className="
        relative
        w-full
        min-h-[60vh]
        md:min-h-[80vh]
        lg:min-h-[88vh]
        overflow-hidden
        mt-10
        md:mt-20
        flex
        items-center
        justify-center
      "
    >
      {/* Background GIF */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/gifs/International_BG.gif')",
        }}
      />

      {/* Overlay – soft cinematic */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/30
          via-black/35
          to-black/55
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          max-w-[900px]
          mx-auto
          px-6
          text-center
          flex
          flex-col
          items-center
        "
      >
        {/* Title */}
        <h1
          className="
            font-title
            text-white
            text-[52px]
            md:text-[56px]
            lg:text-[76px]
            leading-[0.8]
            md:leading-[1.05]
          "
        >
          Presença Internacional
        </h1>

        {/* Small paragraph */}
        <p
          className="
            mt-6
            font-title
            text-white/80
            text-[16px]
            md:text-[21px]
            leading-[1.2]
            max-w-[620px]
          "
        >
          Ao longo dos anos, Carlos Curto tem guiado almas com sabedoria e sensibilidade, transcendendo as fronteiras de Portugal. As suas consultas, realizadas entre a Europa e a América do Norte, são testemunho de um profundo entendimento espiritual, sempre adaptando-se aos momentos e lugares que melhor ressoam com cada indivíduo.
        </p>
      </div>
    </section>
  );
}
