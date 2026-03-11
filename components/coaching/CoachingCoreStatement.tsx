"use client";

export function CoachingCoreStatement() {
  return (
    <section
      className="
        w-full
        mt-5
        py-10
        md:py-32
      "
    >
      <div className="max-w-[900px] mx-auto px-6">
        <p
          className="
            font-title
            font-medium
            text-[#1F2E5A]
            text-[32px]
            md:text-[56px]
            leading-[1.2]
            tracking-[0]
            text-left
          "
        >
          <span
            className="
              bg-textHighlightGolden
              bg-clip-text
              text-transparent
            "
          >
            Este é o cerne do trabalho de Carlos Curto</span>
           , realizado com dedicação constante e profunda ao longo de mais de 40 anos de acompanhamento.
        </p>
      </div>

      {/* =========================================================
         Decorative band (VIDEO)
      ========================================================== */}
      <div
        className="
          relative
          w-full
          h-[120px]
          md:h-[220px]
          lg:h-[241px]
          mt-8
          md:mt-15
          overflow-hidden
          bg-black
        "
        aria-hidden="true"
      >
        <video
          className="
            absolute
            -inset-0
            w-auto
            h-auto
            min-w-full
            min-h-full
            object-cover
          "
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/placeholder/band.png"
        >
          <source src="/videos/band.webm" type="video/webm" />
          <source src="/videos/band.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
