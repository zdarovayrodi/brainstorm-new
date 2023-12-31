import React from "react";
import ReactCardCarousel from "react-card-carousel";
import { Button as ButtonHref } from "./Button";


const Plans = () => {
  return (
    <section className="w-full md:py-16 overflow-hidden py-8" id="plans">
      <div className="container max-w-[1240px] mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <div className="max-w-[1240px] lg:w-1/2 xl:w-5/12 px-4">
            <div className="mt-10 lg:mt-0">
              <span className="mb-1 text-lg font-semibold text-primary bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent from-blue-500 to-red-500 dark:to-purple-500">
                Хотите эконимить?
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl">
                Выберите тариф
              </h2>
              <p className="mb-8 text-base">
                Приобретайте наборы занятий! Рекомендуем для полноценного
                обучения и наибольшей выгоды
              </p>
            </div>
          </div>
          <div className="relative h-[500px] w-full xl:w-1/2 overflow-x-hidden px-0 sm:px-auto lg:w-6/12">
            <ReactCardCarousel autoplay={false}>
              <SingleCard
                CardTitle="Практикант"
                CardDescription="4 занятия в неделю: консультация, игровое, развлекательное"
                Extra="+ развлекательное или игровое на выбор"
                ButtonText="Купить за 2290₽/нед"
                CardFooter="Подходит для учеников, которые желают больше практиковаться!"
                BestValue
              />
              <SingleCard
                CardTitle="Начинающий"
                CardDescription="По одному занятияю из каждой категории: консультация, игровое, развлекательное"
                ButtonText="Купить за 1790₽/нед"
                CardFooter="Подходит для всех учеников. Погрузись в языковую среду!"
              />
              <SingleCard
                CardTitle="Олимпиадник"
                CardDescription="Три консультации с глубоким погружением в грамматику и лексику"
                Extra="+ одно занятие на выбор"
                ButtonText="Купить за 2590₽/нед"
                CardFooter="Подготовься к олимпиаде на отлично и получи БВИ в вузе!"
              />
            </ReactCardCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;

const SingleCard = ({
  CardDescription,
  CardTitle,
  CardFooter,
  Extra,
  BestValue,
  ButtonText,
}) => {
  return (
    <>
      <div className="overflow-hidden bg-blue-100 dark:bg-gray-700 rounded-lg min-w-[280px] w-[280px] py-4">
        <div className="text-left px-4">
          <div
            className={
              BestValue
                ? "inline rounded bg-red-600 dark:bg-red-500 px-2 py-1 mb-4"
                : "hidden"
            }
          >
            <span className="text-white font-semibold">самый выгодный</span>
          </div>
          <h3
            className={
              BestValue
                ? "my-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                : "mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            }
          >
            {CardTitle}
          </h3>
          <p className="text-base leading-relaxed mb-1">{CardDescription}</p>
          <p className={Extra ? "text-base leading-relaxed mb-6" : "hidden"}>{Extra}</p>
          <ButtonHref to="ctaplan"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className={Extra ? "rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                       : "mt-4 inline-block rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"}>
            {ButtonText}
          </ButtonHref>
          <p className="text-base text-gray-500 dark:text-gray-300 leading-relaxed mt-6">
            {CardFooter}
          </p>
        </div>
      </div>
    </>
  );
};
