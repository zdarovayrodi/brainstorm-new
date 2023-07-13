import './App.css';
import './index.css';
import { Button } from './components/Button.js';
import { ButtonWrapper, HorizontalDiv, Root, VerticalDiv, VerticalWrapper, WhyLearnDiv } from './components/Root';
import { Accent, H1, H2, H3, P } from './components/Text.js';
import { HighlightBoxWrapper, HighlightBoxContent, HighlightBoxName, HighlightBox, WhyLearnWrapper, WhyLearnBoxWrapper, BaldName } from './components/HighlightBox';
import { LessonCardWrapper, LessonCard, LessonCardImage } from './components/LessonCards';
// images
import GamerIllustration from './resources/Gamer.png';
import OnlineLessonIllustration from './resources/OnlineLesson.png';
import GamingBg from './resources/gaming.jpg';
import StudyingBg from './resources/studying.jpg';
import MovieBg from './resources/movie.jpg';
// icons
import { GlobeEurope, Star, Child, Gamepad, University, Tv, ArrowRight, Conversation, Popcorn, Puzzle, TelegramPlane, Group, UniversitySmall, Search, Bookshelf, Rocket, City } from './components/Icons';
import { Illustration } from './components/Images.js';
import { FooterH1, HeroWrapper, Item, Wrapper } from './components/Footer';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import { PlanCard, PlanCardContent, PlanCardName, PlanCardWrapper, RedLabel, SecondaryBotton, SecondaryBox } from './components/Plans';



const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />

			<Root>
				<VerticalDiv className='centered' id='main'>
					<H1>Устали от <Accent>обычных занятий</Accent> английского языка?</H1>
					<P className='centered'>От новичка до уверенного говорящего на английском за 3 месяца: наш проверенный метод</P>
					<ButtonWrapper>
						<Button className='primary' to="contact" smooth={true} duration={1000} spy={true} exact='true' offset={-300}>Получить бесплатно<ArrowRight /></Button>
						<Button to="whywe" smooth={true} duration={1000} spy={true} exact='true' offset={-100}>Почему мы?</Button>
					</ButtonWrapper>
				</VerticalDiv>

				<HighlightBoxWrapper className='mainBlock'>
						<HighlightBox>
							<HighlightBoxName><GlobeEurope />Носители языка</HighlightBoxName>
							<HighlightBoxContent>Преподаватели со всего мира</HighlightBoxContent>
						</HighlightBox>
						<HighlightBox>
							<HighlightBoxName><Star />За 3 месяца</HighlightBoxName>
							<HighlightBoxContent>Избавим ученика от языкового барьера</HighlightBoxContent>
						</HighlightBox>
						<HighlightBox>
							<HighlightBoxName><Child />Подходит</HighlightBoxName>
							<HighlightBoxContent>Для детей школьного возраста</HighlightBoxContent>
						</HighlightBox>
				</HighlightBoxWrapper>

				<VerticalDiv className='centered' id='whywe'>
					<HorizontalDiv>
						<Illustration backgroundImg={GamerIllustration} />
						<VerticalDiv>
							<H2><Accent>Играй</Accent>, развлекайся, учись!</H2>
							<P>Носители языка помогут Вашему ребенку выучить новые слова и усовершенствовать свою грамматику в <Accent>интерактивной форме</Accent>.</P>
						</VerticalDiv>
					</HorizontalDiv>
				</VerticalDiv> 
				{/* 
				<VerticalDiv className='centered' id='lessons'>
					<H2>Виды занятий</H2>
					<P className='centered'>У нас есть три вида занятий: они определяют концепцию проведения урока с преподавателем. Подходят для любого уровня владения языком!</P>
					<LessonCardWrapper>
						<LessonCard>
							<LessonCardImage background={GamingBg} />
							<HighlightBoxName className='centered'><Gamepad />Игровое</HighlightBoxName>
							<HighlightBoxContent >Играйте с носителем языка в ваши любимые игры! Идеально для любителей компьютерных игр!</HighlightBoxContent>
						</LessonCard>
						<LessonCard>
							<LessonCardImage background={StudyingBg} />
							<HighlightBoxName className='centered'><University />Консультация</HighlightBoxName>
							<HighlightBoxContent >Учите правила, грамматические конструкции, новые слова</HighlightBoxContent>
						</LessonCard>
						<LessonCard>
							<LessonCardImage background={MovieBg} />
							<HighlightBoxName className='centered'><Tv />Развлекательное</HighlightBoxName>
							<HighlightBoxContent >Обсудите и разберите фильмы, сериалы, книги с англоязычным носителем</HighlightBoxContent>
						</LessonCard>
					</LessonCardWrapper>
				</VerticalDiv> */}

				<VerticalDiv className='centered' id='lessons'>
					<H2>Виды занятий</H2>
					<P className='centered'>У нас есть три вида занятий: они определяют концепцию проведения урока с преподавателем. Подходят для любого уровня владения языком!</P>
					<PlanCardWrapper>
						<PlanCard>
							<LessonCardImage background={GamingBg} />
							<PlanCardName>Игровое</PlanCardName>
							<PlanCardContent>Играйте с носителем языка в ваши любимые игры!</PlanCardContent>
							<SecondaryBox>
								<span>Идеально для любителей компьютерных игр!</span>
								<SecondaryBotton to="contact" smooth={true} duration={1000} spy={true} exact='true' offset={-300}>649 руб.</SecondaryBotton>
							</SecondaryBox>
						</PlanCard>
						<PlanCard>
							<LessonCardImage background={StudyingBg} />
							{/* <RedLabel>самый выгодный</RedLabel> */}
							<PlanCardName>Консультация</PlanCardName>
							<PlanCardContent>Учите правила, грамматические конструкции, новые слова</PlanCardContent>
							<SecondaryBox>
								<span>Нарабатывайте активный запас слов и лексики</span>
								<SecondaryBotton to="contact" smooth={true} duration={1000} spy={true} exact='true' offset={-300}>749 руб.</SecondaryBotton>
							</SecondaryBox>
						</PlanCard>
						<PlanCard>
							<LessonCardImage background={MovieBg} />
							<PlanCardName>Развлекательное</PlanCardName>
							<PlanCardContent>Обсудите и разберите фильмы, сериалы, книги с носителем</PlanCardContent>
							<SecondaryBox>
								<span>Изучайте язык через погружение в культуру</span>
								<SecondaryBotton to="contact" smooth={true} duration={1000} spy={true} exact='true' offset={-300}>649 руб.</SecondaryBotton>
							</SecondaryBox>
						</PlanCard>
					</PlanCardWrapper>
				</VerticalDiv>

				<VerticalDiv className='centered' id='freelesson'>
					<HorizontalDiv>
						<Illustration backgroundImg={OnlineLessonIllustration} />
						<VerticalDiv>
							<H2><Accent>Бесплатное вводное</Accent> занятие</H2>
							<HighlightBoxWrapper>
								<HighlightBox>
									<HighlightBoxContent>Познакомимся с преподавателем</HighlightBoxContent>
								</HighlightBox>
								<HighlightBox>
									<HighlightBoxContent>Оценим уровень знаний</HighlightBoxContent>
								</HighlightBox>
								<HighlightBox>
									<HighlightBoxContent>Составим пресональную программу обучения</HighlightBoxContent>
								</HighlightBox>
								<HighlightBox>
									<HighlightBoxContent>Выучим 10 новых слов</HighlightBoxContent>
								</HighlightBox>
								<HighlightBox className="transparent">
									<HighlightBoxContent className='transparent'>Полностью бесплатно. Да, даже если решите не заниматься с нами. Без звездочек и скрытых условий.</HighlightBoxContent>
								</HighlightBox>
							</HighlightBoxWrapper>
						</VerticalDiv>
					</HorizontalDiv>
					<Button className="primary" to="contact" smooth={true} duration={1000} spy={true} exact='true' offset={-300}>Записаться<ArrowRight /></Button>
				</VerticalDiv>
				
				<VerticalDiv className='centered' id='learn'>
					<HorizontalDiv>
						{/* <Illustration backgroundImg={require(OnlineLessonIllustration)} /> */}
						<VerticalDiv>
							<H2><Accent>Зачем</Accent> учить английский язык?</H2>
								<WhyLearnWrapper>
									<WhyLearnDiv>
										<H3>Это <Accent>интересно</Accent>!</H3>
										<WhyLearnBoxWrapper>
											<HighlightBox className="withIcon">
												<VerticalWrapper>
													<BaldName><Conversation />Играйте в любую игру с носителем</BaldName>
													<HighlightBoxContent>Наслаждайтесь игрой, общайтесь с носителем английского языка, погружаясь в языковую среду и улучшая свои навыки</HighlightBoxContent>
												</VerticalWrapper>
											</HighlightBox>
											<HighlightBox className="withIcon">
												<VerticalWrapper>
													<BaldName><Popcorn />Смотрите фильмы, сериалы с носителем</BaldName>
													<HighlightBoxContent>На английском языке вместе с преподавателем, разбирая важные лексические и грамматические моменты</HighlightBoxContent>
												</VerticalWrapper>
											</HighlightBox>
											<HighlightBox className="withIcon">
												<VerticalWrapper>
													<BaldName><Puzzle /> Решайте головомки, проходите квесты</BaldName>
													<HighlightBoxContent>На английском языке, развивая логическое и творческое мышление</HighlightBoxContent>
												</VerticalWrapper>
											</HighlightBox>
											<HighlightBox className="withIcon">
												<VerticalWrapper>
													<BaldName><TelegramPlane />Общение в чате онлайн</BaldName>
													<HighlightBoxContent>Общайтесь с преподавателем 24/7, практикуя навыки современного онлайн-общения</HighlightBoxContent>
												</VerticalWrapper>
											</HighlightBox>
											<HighlightBox className="withIcon">
												<VerticalWrapper>
													<BaldName><Group />Групповые игровые занятия</BaldName>
													<HighlightBoxContent>Присоединяйтесь к групповым игровым занятиям, знакомьтесь с единомышленниками и вдохновляйте друг друга!</HighlightBoxContent>
												</VerticalWrapper>
											</HighlightBox>
										</WhyLearnBoxWrapper>
									</WhyLearnDiv>
									<WhyLearnDiv>
										<H3>Это <Accent>полезно</Accent>!</H3>
										<WhyLearnBoxWrapper>
											<HighlightBox className="withIcon">
												<VerticalWrapper>
													<BaldName><UniversitySmall />Расширяет границы</BaldName>
													<HighlightBoxContent>Учите самый важный язык в образовательной сфере, владение им значительно повышает шансы на поступление в ВУЗы всего мира!</HighlightBoxContent>
												</VerticalWrapper>
											</HighlightBox>
											<HighlightBox className="withIcon">
												<VerticalWrapper>
													<BaldName><Search />Мировой стандарт</BaldName>
													<HighlightBoxContent>Международный язык коммуникации помогает легко и быстро находить нужную информацию в сети, позволяет обращаться к первоисточниам</HighlightBoxContent>
												</VerticalWrapper>
											</HighlightBox>
											<HighlightBox className="withIcon">
												<VerticalWrapper>
													<BaldName><Bookshelf />Богатая культура</BaldName>
													<HighlightBoxContent>Получите доступ к богатой англоязычной культуре, литературе. кино и музыке</HighlightBoxContent>
												</VerticalWrapper>
											</HighlightBox>
											<HighlightBox className="withIcon">
												<VerticalWrapper>
													<BaldName><Rocket />Карьерный рост</BaldName>
													<HighlightBoxContent>Знание английского языка открывает множество возможностей для развития карьеры</HighlightBoxContent>
												</VerticalWrapper>
											</HighlightBox>
											<HighlightBox>
												<VerticalWrapper>
													<BaldName><City /> Возможность путешествовать</BaldName>
													<HighlightBoxContent>Путешествуйте по всему миру и общайтесь с людьми из разных стран, обогощая свой опыт и делая путешествие незабываемым!</HighlightBoxContent>
												</VerticalWrapper>
											</HighlightBox>
										</WhyLearnBoxWrapper>
									</WhyLearnDiv>
								</WhyLearnWrapper>
						</VerticalDiv>
					</HorizontalDiv>
					<Button className="primary" to="contact" smooth={true} duration={1000} spy={true} exact='true' offset={-300}>Начать учить<ArrowRight /></Button>
				</VerticalDiv>

				<VerticalDiv className="centered">
					<H2><Accent>Оставьте заявку</Accent>, мы с Вами свяжемся </H2>				
					<iframe
						src="https://tally.so/embed/mRd6qQ?hideTitle=1&transparentBackground=1"
						loading="lazy"
						width="100%"
						id='contact'
						height="200px"
						frameborder="0"
						marginheight="0"
						marginwidth="0"
						scrollBar="hidden"
						title="Оставьте заявку, мы с Вами свяжемся"
					/>
				</VerticalDiv>

				<VerticalDiv className='centered' id='plans'>
					<P className="centered">Хотите начать?</P>
					<H2><Accent>Выберите</Accent> тариф</H2>
					<P className='centered'>Приобретайте наборы занятий! Рекомендуем для полноценного обучения</P>
					<PlanCardWrapper>
						<PlanCard>
							<PlanCardName>Начинающий</PlanCardName>
							<PlanCardContent>По одному занятияю из каждой категории: консультация, игровое, развлекательное</PlanCardContent>
							<SecondaryBox>
								<span>Подходит для  всех учеников. Погрузись в языковую среду!</span>
								<SecondaryBotton to="chosenContact" smooth={true} duration={1000} spy={true} exact='true' offset={-300}>Купить за 1790 руб/нед</SecondaryBotton>
							</SecondaryBox>
						</PlanCard>
						<PlanCard>
							<RedLabel>самый выгодный</RedLabel>
							<PlanCardName>Практикант</PlanCardName>
							<PlanCardContent>По одному занятияю из каждой категории: консультация, игровое, развлекательное</PlanCardContent>
							<PlanCardContent>+ одно занятие на выбор</PlanCardContent>
							<SecondaryBox>
								<span>Подходит для учеников, которые желают больше практиковаться!</span>
								<SecondaryBotton to="chosenContact" smooth={true} duration={1000} spy={true} exact='true' offset={-300}>Купить за 2290 руб/нед</SecondaryBotton>
							</SecondaryBox>
						</PlanCard>
						<PlanCard>
							<PlanCardName>Олимпиадник</PlanCardName>
							<PlanCardContent>Три консультации с глубоким погружением в грамматику и лексику</PlanCardContent>
							<PlanCardContent>+ одно занятие на выбор</PlanCardContent>
							<SecondaryBox>
								<span>Подготовься к олимпиаде на отлично и получи БВИ в вузе!</span>
								<SecondaryBotton to="chosenContact" smooth={true} duration={1000} spy={true} exact='true' offset={-300}>Купить за 2590 руб/нед</SecondaryBotton>
							</SecondaryBox>
						</PlanCard>
					</PlanCardWrapper>
				</VerticalDiv>

				<VerticalDiv className="centered">
					<H2>Уже решили? <Accent>Заполните</Accent> заявку!</H2>
					<iframe
						src="https://tally.so/embed/woD85V?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
						loading="lazy"
						width="100%"
						height="299px"
						id="chosenContact"
						frameborder="0"
						marginheight="0"
						marginwidth="0"
						title="Выберите тариф"
					/>
				</VerticalDiv>

			</Root>

			<HeroWrapper id='footer'>
				<Wrapper>
					<FooterH1>Свяжитесь с нами</FooterH1>
					<Item href="mailto:brainstorm@yandex.ru">brainstorm@yandex.ru</Item>
					<Item href="tel:+79133600838">+7 (913) 360-08-38</Item>
				</Wrapper>
			</HeroWrapper>

			
		</>
  );
}

export default App;
