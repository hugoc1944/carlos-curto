"use client";

import { motion as m, AnimatePresence } from "framer-motion";
import { useNavigation } from "@/navigation/NavigationContext";
import { motion } from "@/styles/motion";
import { useState } from "react";
import { usePathname } from "next/navigation";

type NavMode = "root" | "ecrits";

export function NavigationMenu() {
  const { navigateTo, close } = useNavigation();
  const [navMode, setNavMode] = useState<NavMode>("root");
  const pathname = usePathname();

  const items = [
    {
      title: "CONSULTAS",
      description: "Aprofunde questões essenciais de forma esclarecedora.",
      href: "/consultas",
    },
    {
      title: "COACHING EXCLUSIVO",
      description: "Um acompanhamento contínuo e transformador.",
      href: "/coaching",
    },
    {
      eyebrow: "ALÉM-FRONTEIRAS",
      title: "INTERNACIONAL",
      description: "Consultas à distância · Portugal e além-fronteiras.",
      href: "/internacional",
    },
    {
      title: "REFLEXÕES & CONTACTO",
      description: "Escritos, recursos e partilhas.",
      action: () => setNavMode("ecrits"),
    },
  ];

  const subItems = [
    {
      title: "REFLEXÕES",
      description: "Reflexões e recursos para a jornada interior.",
      href: "/reflexoes",
    },
    {
      title: "CONTACTO",
      description: "Entre em contacto e partilhe as suas intenções.",
      href: "/contacto",
    },
  ];

  /** Renderiza APENAS o conteúdo interior (sem <li>) */
  const ItemContent = (item: any) => (
    <button
      onClick={() => {
        if (item.action) {
          item.action();
          return;
        }

        // Mesma rota → apenas fecha a navegação
        if (item.href === pathname) {
          close();
          return;
        }

        // Rota diferente → navegação normal com véu
        navigateTo(item.href);
      }}
      className="relative w-full text-left cursor-pointer"
    >
      {/* Fundo hover */}
      <m.div
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 0.8 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="
          absolute
          inset-y-[-15px]
          md:inset-y-[-32px]
          left-1/2
          -translate-x-1/2
          w-[105%]
          md:w-[calc(100%+224px)]
          rounded-l
          bg-[#FCFAF5]
          z-0
        "
      />

      {/* Conteúdo */}
      <div className="relative z-10">
        {item.eyebrow && (
          <m.div
            variants={{
              rest: { color: "#ffffff" },
              hover: { color: "#1E3EC9" },
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="
              font-title
              font-semibold
              text-[16px] md:text-[18px]
              tracking-[0.4em]
            "
          >
            {item.eyebrow}
          </m.div>
        )}

        <div className="flex flex-col md:flex-row md:items-center md:gap-8">          <m.h2
            variants={{
              rest: { color: "#ffffff" },
              hover: { color: "#1E3EC9" },
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="
              font-title
              text-[36px] md:text-[64px]
              leading-[0.9] md:leading-[0.82]
              tracking-wide
              md:flex-[0_0_auto]
            "
          >
            {item.title}
          </m.h2>

          <m.p
            variants={{
              rest: { color: "#ffffff" },
              hover: { color: "#1E3EC9" },
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="
              mt-2
              md:mt-0
              md:ml-0
              font-title
              text-[17px] md:text-[20px]
              leading-[1.1] md:leading-[1]
              whitespace-normal md:whitespace-pre-line
              max-w-[420px]
            "
          >
            {item.description}
          </m.p>
        </div>
      </div>
    </button>
  );

  return (
    <nav className="w-full">
      <AnimatePresence mode="wait">
        {navMode === "root" && (
          <m.ul
            key="root"
            className="mx-auto max-w-5xl space-y-8 md:space-y-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: motion.duration.base,
              ease: motion.ease.calm,
            }}
          >
            {items.map((item) => (
              <m.li
                key={item.title}
                initial="rest"
                animate="rest"
                whileHover="hover"
                whileTap="hover"
                transition={{
                  duration: motion.duration.slow,
                  ease: motion.ease.calm,
                }}
                className="relative"
              >
                {ItemContent(item)}
              </m.li>
            ))}
          </m.ul>
        )}

        {navMode === "ecrits" && (
          <m.ul
            key="ecrits"
            className="mx-auto max-w-5xl space-y-8 md:space-y-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: motion.duration.base,
              ease: motion.ease.calm,
            }}
          >
            {/* Voltar */}
            <m.li
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{
                duration: motion.duration.base,
                ease: motion.ease.calm,
              }}
            >
              <button
                onClick={() => setNavMode("root")}
                className="font-title text-[#ffffff] text-[20px] cursor-pointer"
              >
                ← VOLTAR
              </button>
            </m.li>

            {subItems.map((item, index) => (
              <m.li
                key={item.title}
                initial="rest"
                animate="rest"
                whileHover="hover"
                whileTap="hover"
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: motion.duration.slow,
                  ease: motion.ease.calm,
                }}
                className="relative"
              >
                {ItemContent(item)}
              </m.li>
            ))}
          </m.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
