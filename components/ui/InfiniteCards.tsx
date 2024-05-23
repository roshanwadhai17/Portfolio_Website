"use client";

import {
  companies,
  databases,
  developerTools,
  languages,
  webDevelopment,
} from "@/data";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "30s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "60s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "90s"); // Slower animation duration
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        <li
          className="w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
          style={{
            background:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          <h2 className="text-2xl font-bold leading-[1.6] text-white text-center mb-10 align-self: center;">
            Languages
          </h2>

          <blockquote>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
              {languages.map((i) => (
                <React.Fragment key={i.id}>
                  <div className="flex items-center justify-center md:max-w-60 max-w-32 gap-2">
                    <img
                      src={i.img}
                      alt={i.name}
                      className="md:w-[4rem] w-[2rem]"
                    />
                    <span className="text-xl font-bold leading-[1.6] text-white">
                      {i.name}
                    </span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </blockquote>
        </li>

        <li
          className="w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
          style={{
            background:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          <h2 className="text-2xl font-bold leading-[1.6] text-white text-center mb-10 align-self: center;">
            Web Technology
          </h2>
          <blockquote>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
              {webDevelopment.map((item) => (
                <React.Fragment key={item.id}>
                  <div className="flex items-center justify-center md:max-w-60 max-w-32 gap-2">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="md:w-[4rem] w-[2rem]"
                    />
                    <span className="text-xl font-bold leading-[1.6] text-white">
                      {item.name}
                    </span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </blockquote>
        </li>

        <li
          className="w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
          style={{
            background:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          <h2 className="text-2xl font-bold leading-[1.6] text-white text-center mb-10 align-self: center;">
            Databases
          </h2>
          <blockquote>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
              {databases.map((item) => (
                <React.Fragment key={item.id}>
                  <div className="flex items-center justify-center md:max-w-60 max-w-32 gap-2">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="md:w-[4rem] w-[2rem]"
                    />
                    <span className="text-xl font-bold leading-[1.6] text-white">
                      {item.name}
                    </span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </blockquote>
        </li>

        <li
          className="w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
          style={{
            background:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          <h2 className="text-2xl font-bold leading-[1.6] text-white text-center mb-10 align-self: center;">
            Developer Tools
          </h2>
          <blockquote></blockquote>
          <blockquote>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
              {developerTools.map((item) => (
                <React.Fragment key={item.id}>
                  <div className="flex items-center justify-center md:max-w-60 max-w-32 gap-2">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="md:w-[4rem] w-[2rem]"
                    />
                    <span className="text-xl font-bold leading-[1.6] text-white">
                      {item.name}
                    </span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </blockquote>
        </li>
      </ul>
    </div>
  );
};
