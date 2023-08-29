import React from 'react'

// icons
import { BiBook, BiConversation, BiRocket, BiSearchAlt } from 'react-icons/bi';
import { PiPopcornBold } from 'react-icons/pi';
import { BsPuzzle } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { MdGroup, MdMuseum } from 'react-icons/md';
import PlansCardElement from './PlansCardElement';
import { Button } from './Button';


const WhyLearn = () => {
  return (
    <section className="w-full md:py-16 overflow-hidden py-8" id='whylearn'>
        <div className="container max-w-[1240px] mx-auto">
            <span className="text-primary md:hidden px-4 mb-1 text-lg font-semibold text-primary bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent from-blue-500 to-red-500 dark:to-purple-500">
                Зачем учить английский
            </span>
            <PlansCardElement className="px-[-4]"/>
            <div className='hidden md:grid md:grid-cols-2 gap-4 mb-10  px-4'>
                <div>
                    <span className="mb-1 text-lg font-semibold text-primary bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent from-blue-500 to-red-500 dark:to-purple-500">
                        Зачем учить английский
                    </span>
                    <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl">
                        Это интересно!
                    </h2>
                    <ul className="space-y-6 md:space-y-12 text-left mt-10">
                        <li className="flex flex-row space-x-3 items-start max-w-lg">
                            <span className="flex-shrink-0 w-3.5 h-3.5 text-blue-500 dark:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <BiConversation />
                            </span>
                            <div className='flex flex-col'>
                                <h6 className='mt-[-5px]'>Играйте в любую игру с носителем</h6>
                                <p className='mt-2 text-gray-500 dark:text-gray-300'>Наслаждайтесь игрой, общайтесь с носителем английского языка, погружаясь в языковую среду и улучшая свои навыки</p>
                            </div>
                        </li>
                        <li className="flex flex-row space-x-3 items-start max-w-lg">
                            <span className="flex-shrink-0 w-3.5 h-3.5 text-blue-500 dark:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <PiPopcornBold />
                            </span>
                            <div className='flex flex-col'>
                                <h6 className='mt-[-5px]'>Смотрите фильмы, сериалы с носителем</h6>
                                <p className='mt-2 text-gray-500 dark:text-gray-300'>На английском языке вместе с преподавателем, разбирая важные лексические и грамматические моменты</p>
                            </div>
                        </li>
                        <li className="flex flex-row space-x-3 items-start max-w-lg">
                            <span className="flex-shrink-0 w-3.5 h-3.5 text-blue-500 dark:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <BsPuzzle />
                            </span>
                            <div className='flex flex-col'>
                                <h6 className='mt-[-5px]'>Решайте головомки, проходите квесты</h6>
                                <p className='mt-2 text-gray-500 dark:text-gray-300'>На английском языке, развивая логическое и творческое мышление</p>
                            </div>
                        </li>
                        <li className="flex flex-row space-x-3 items-start max-w-lg">
                            <span className="flex-shrink-0 w-3.5 h-3.5 text-blue-500 dark:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <FaTelegramPlane />
                            </span>
                            <div className='flex flex-col'>
                                <h6 className='mt-[-5px]'>Общение в чате онлайн</h6>
                                <p className='mt-2 text-gray-500 dark:text-gray-300'>Общайтесь с преподавателем 24/7, практикуя навыки современного онлайн-общения</p>
                            </div>
                        </li>
                        <li className="flex flex-row space-x-3 items-start max-w-lg">
                            <span className="flex-shrink-0 w-3.5 h-3.5 text-blue-500 dark:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <MdGroup />
                            </span>
                            <div className='flex flex-col'>
                                <h6 className='mt-[-5px]'>Групповые игровые занятия</h6>
                                <p className='mt-2 text-gray-500 dark:text-gray-300'>Присоединяйтесь к групповым игровым занятиям, знакомьтесь с единомышленниками и вдохновляйте друг друга!</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <span className="md:hidden mt-9 block mb-1 text-lg font-semibold text-primary">
                        Зачем учить английский
                    </span>
                    <h2 className="mb-4 md:mt-9 text-3xl font-bold text-dark sm:text-4xl">
                        Это полезно!
                    </h2>
                    <ul className="space-y-6 md:space-y-12 text-left mt-10">
                        <li className="flex flex-row space-x-3 items-start max-w-lg">
                            <span className="flex-shrink-0 w-3.5 h-3.5 text-blue-500 dark:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <MdMuseum />
                            </span>
                            <div className='flex flex-col'>
                                <h6 className='mt-[-5px]'>Расширяет границы</h6>
                                <p className='mt-2 text-gray-500 dark:text-gray-300'>Учите самый важный язык в образовательной сфере, владение им значительно повышает шансы на поступление в ВУЗы всего мира!</p>
                            </div>
                        </li>
                        <li className="flex flex-row space-x-3 items-start max-w-lg">
                            <span className="flex-shrink-0 w-3.5 h-3.5 text-blue-500 dark:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <BiSearchAlt />
                            </span>
                            <div className='flex flex-col'>
                                <h6 className='mt-[-5px]'>Мировой стандарт</h6>
                                <p className='mt-2 text-gray-500 dark:text-gray-300'>Международный язык коммуникации помогает легко и быстро находить нужную информацию в сети, позволяет обращаться к первоисточниам</p>
                            </div>
                        </li>
                        <li className="flex flex-row space-x-3 items-start max-w-lg">
                            <span className="flex-shrink-0 w-3.5 h-3.5 text-blue-500 dark:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <BiBook />
                            </span>
                            <div className='flex flex-col'>
                                <h6 className='mt-[-5px]'>Богатая культура</h6>
                                <p className='mt-2 text-gray-500 dark:text-gray-300'>Получите доступ к богатой англоязычной культуре, литературе, кино и музыке</p>
                            </div>
                        </li>
                        <li className="flex flex-row space-x-3 items-start max-w-lg">
                            <span className="flex-shrink-0 w-3.5 h-3.5 text-blue-500 dark:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <BiRocket />
                            </span>
                            <div className='flex flex-col'>
                                <h6 className='mt-[-5px]'>Карьерный рост</h6>
                                <p className='mt-2 text-gray-500 dark:text-gray-300'>Знание английского языка открывает множество возможностей для развития карьеры</p>
                            </div>
                        </li>
                        <li className="flex flex-row space-x-3 items-start max-w-lg">
                            <span className="flex-shrink-0 w-3.5 h-3.5 text-blue-500 dark:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <MdGroup />
                            </span>
                            <div className='flex flex-col'>
                                <h6 className='mt-[-5px]'>Возможность путешествовать</h6>
                                <p className='mt-2 text-gray-500 dark:text-gray-300'>Путешествуйте по всему миру и общайтесь с людьми из разных стран, обогощая свой опыт и делая путешествие незабываемым!</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='px-4'>
                <Button to="freelesson"
                        spy={true} smooth={true} offset={-80} duration={500} 
                        className="cursor-pointer rounded-md mt-5 inline-block px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 border border-gray-700">
                    Начать учить <span aria-hidden="true">→</span>
                </Button>
            </div>
        </div>
    </section>
  )
}

export default WhyLearn