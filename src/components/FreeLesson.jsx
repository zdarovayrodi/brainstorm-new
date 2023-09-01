import React from "react";
import { Button } from "./Button";

const FreeLesson = () => {
  return (
    <section
      className="w-full md:py-16 px-4 overflow-hidden py-8"
      id="freelesson"
    >
      <div className="container max-w-[1240px] mx-auto">
        <span className="mb-1 text-lg font-semibold text-primary bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent from-blue-500 to-red-500 dark:to-purple-500">
          Полностью
        </span>
        <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl">
          Бесплатное вводное занятие
        </h2>
        <p className="mb-8 text-base">
          Да, даже если решите не заниматься с нами. Без звездочек и скрытых
          условий.
        </p>
        <div className="my-10 grid md:grid-cols-2 md:my-16">
          <ul className="space-y-6 md:space-y-12 text-left">
            <li className="flex flex-row space-x-3 items-start max-w-lg">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <h6 className="mt-[-5px]">Познакомимся с преподавателем</h6>
            </li>
            <li className="flex flex-row space-x-3 items-start max-w-lg">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <h6 className="mt-[-5px]">Оценим уровень знаний</h6>
            </li>
          </ul>

          <ul className="space-y-6 md:space-y-12 text-left md:mt-0 mt-6 ">
            <li className="flex flex-row space-x-3 items-start max-w-lg">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <h6 className="mt-[-5px]">
                Составим пресональную программу обучения
              </h6>
            </li>

            <li className="flex flex-row space-x-3 items-start max-w-lg">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <h6 className="mt-[-5px]">Выучим 10 новых слов</h6>
            </li>
          </ul>
        </div>
        <Button
          to="cta"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="cursor-pointer rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 border border-gray-700"
        >
          Записаться <span aria-hidden="true">→</span>
        </Button>
      </div>
    </section>
  );
};

export default FreeLesson;
