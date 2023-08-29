import React from "react";
import { ReactComponent as Gamer } from "../resources/Gamer.svg";
import { Button } from "./Button";

const Features = () => {
  return (
    <>
      <section
        className="w-full md:py-16 px-4 overflow-hidden py-8"
        id="features"
      >
        <div className="container max-w-[1240px] mx-auto">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full px-auto lg:w-6/12">
              <div className="flex items-center justify-center">
                <div className="w-full px-auto xl:w-1/2">
                  <Gamer />
                </div>
              </div>
            </div>
            <div className="max-w-[1240px] lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="mb-1 text-lg font-semibold text-primary bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent from-blue-500 to-red-500 dark:to-purple-500">
                  Почему с нами
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl">
                  Играй, развлекайся, учись!
                </h2>
                <p className="mb-8 text-base">
                  Носители языка помогут Вашему ребенку выучить новые слова и
                  усовершенствовать свою грамматику в интерактивной форме.
                </p>
                <Button
                  to="freelesson"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  href="#"
                  className="rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 border border-gray-700"
                >
                  Начать заниматься <span aria-hidden="true">→</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
