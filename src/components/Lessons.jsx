import React from "react";
import ReactCardCarousel from "react-card-carousel";
import { Button as ButtonHref } from "./Button"

// images
import GamingBg from "../resources/gaming.jpg";
import StudyingBg from "../resources/studying.jpg";
import MovieBg from "../resources/movie.jpg";

const Lessons = () => {
  return (
    <section className="w-full md:py-16 overflow-hidden py-8" id="lessons">
      <div className="container max-w-[1240px] mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <div className="max-w-[1240px] lg:w-1/2 xl:w-5/12 px-4">
            <div className="mt-10 lg:mt-0">
              <span className="mb-1 text-lg font-semibold text-primary bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent from-blue-500 to-red-500 dark:to-purple-500">
                Виды занятий
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl">
                Никаких скучных уроков
              </h2>
              <p className="mb-8 text-base">
                В нашей школе мы применяем самые современные методики обучения.
                Занимайтесь английским с носителем языка путем погружения в
                культуру.
              </p>
            </div>
          </div>
          <div className="relative h-[500px] w-full xl:w-1/2 overflow-x-hidden px-0 sm:px-auto lg:w-6/12">
            <ReactCardCarousel autoplay={false}>
              <SingleCard
                image={StudyingBg}
                CardTitle="Консультация"
                CardDescription="Учите правила, грамматические конструкции, новые слова"
                CardInfo="Нарабатывайте активный запас слов и лексики"
                ButtonText="799₽"
              />
              <SingleCard
                image={GamingBg}
                CardTitle="Игровое"
                CardDescription="Играйте с носителем языка в ваши любимые игры!"
                CardInfo="Идеально для любителей компьютерных игр!"
                ButtonText="649₽"
              />
              <SingleCard
                image={MovieBg}
                CardTitle="Развлекательное"
                CardDescription="Обсудите и разберите фильмы, сериалы, книги с носителем"
                CardInfo="Изучайте язык через погружение в культуру"
                ButtonText="649₽"
              />
            </ReactCardCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lessons;

const SingleCard = ({
  image,
  CardDescription,
  CardTitle,
  CardInfo,
  ButtonText,
}) => {
  return (
    <>
      <div className="overflow-hidden bg-blue-100 dark:bg-gray-700 rounded-lg min-w-[280px] w-[280px] pb-4">
        <img src={image} alt="" className="w-full mb-4" />
        <div className="text-left px-4">
          <h3 className="mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
            {CardTitle}
          </h3>
          <p className="text-base leading-relaxed mb-2">{CardDescription}</p>
          <p className="text-base text-gray-500 dark:text-gray-300 leading-relaxed mb-4">
            {CardInfo}
          </p>
          <ButtonHref to="cta"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
            {ButtonText}
          </ButtonHref>
        </div>
      </div>
    </>
  );
};
