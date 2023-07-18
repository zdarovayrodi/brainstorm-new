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
import { PlanCard, PlanCardContent, PlanCardName, PlanCardWrapper, RedLabel, SecondaryBotton, SecondaryBox } from './components/Plans';
import NavBar from './components/Navbar/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Alert, Badge, Image, Card, Carousel } from 'react-bootstrap';

import ReactCardCarousel from "react-card-carousel";
import { BiConversation, BiSearchAlt } from 'react-icons/bi';
import { PiPopcornBold } from 'react-icons/pi';
import { BsFillRocketTakeoffFill, BsPuzzle } from 'react-icons/bs';
import { FaCity, FaTelegramPlane, FaUniversity } from 'react-icons/fa';
import { MdGroup } from 'react-icons/md';
import { GiBookshelf } from 'react-icons/gi';


const App = () => {
	function CONTAINER_STYLE() {
		return {
		  position: "relative",
		  height: "500px",
		  width: "38rem",
		//   minWidth: "18rem",
		//   maxWidth: "min(38rem, 100%)",
		  display: "flex",
		  flex: 1,
		  justifyContent: "center",
		  alignItems: "middle"
		};
	  }

	return (
		<>
		<NavBar />
		<Container>
			{/* Hero section */}
			<Row id='main'>
				<Col className='d-flex flex-column align-items-center mt-5'>
					<h1>Устали от <Accent>обычных занятий</Accent> английского языка?</h1>
					<h6 className='text-muted'>От новичка до уверенного говорящего на английском за 3 месяца: наш проверенный метод</h6>
					<Row className="mt-4 d-flex flex-column flex-sm-row">
						<Col className="col-auto">
							<a className="btn btn-primary" variant="primary" href="#">Получить бесплатно</a>
						</Col>
						<Col className="col-auto mt-1 mt-sm-0">
							<a className="btn btn-outline-secondary" href="#">Почему мы</a>
						</Col>
					</Row>
				</Col>
			</Row>

			{/* Alert cards */}
			<Row className='mt-5 d-flex flex-column flex-md-row'>
				<Col>
					<Alert variant='info'>
						<Alert.Heading>
							<GlobeEurope /> Носители языка
						</Alert.Heading>
						<p>Преподаватели со всего мира</p>
					</Alert>
				</Col>
				<Col>
					<Alert variant='info'>
						<Alert.Heading>
							<Star /> За 3 месяца
						</Alert.Heading>
						<p>Избавим ученика от языкового барьера</p>
					</Alert>
				</Col>
				<Col>
					<Alert variant='info'>
						<Alert.Heading>
							<Child /> Подходит
						</Alert.Heading>
						<p>Для детей школьного возраста</p>
					</Alert>
				</Col>
			</Row>

			{/* Why we section */}
			<Row className="d-flex flex-column flex-md-row align-items-center mt-5" id='whywe'>
				{/* img */}
				<Col sm={6}>
					<Image src={GamerIllustration} fluid />
				</Col>
				{/* text */}
				<Col className='align-items-center'>
					<h2><Accent>Играй</Accent>, развлекайся, учись!</h2>
					<p>Носители языка помогут Вашему ребенку выучить новые слова и усовершенствовать свою грамматику в <Accent>интерактивной форме</Accent>.</p>
				</Col>
			</Row>
				
			{/* Lessons */}
			<Row className="mt-5 d-flex flex-column align-items-center" id='lessons'>
				<Col>
					<h2>Виды занятий</h2>
					{/* <div style={CONTAINER_STYLE()}> */}
						{/* <ReactCardCarousel autoplay={false}>
							<Card>
								<Card.Img variant="top" src={GamingBg} />
								<Card.Body>
									<Card.Title>Игровое</Card.Title>
									<Card.Text>
									Играйте с носителем языка в ваши любимые игры!
									</Card.Text>
									<p className='text-muted'>Идеально для любителей компьютерных игр!</p>
									<a className="btn btn-dark" href="#">649₽</a>
								</Card.Body>
							</Card>
							<Card>
								<Card.Img variant="top" src={StudyingBg} />
								<Card.Body>
									<Card.Title>Консультация</Card.Title>
									<Card.Text>
									Учите правила, грамматические конструкции, новые слова
									</Card.Text>
									<p className='text-muted'>Нарабатывайте активный запас слов и лексики</p>
									<a className="btn btn-dark" href="#">799₽</a>
								</Card.Body>
							</Card>
							<Card>
								<Card.Img variant="top" src={MovieBg} />
								<Card.Body>
									<Card.Title>Развлекательное</Card.Title>
									<Card.Text>
									Обсудите и разберите фильмы, сериалы, книги с носителем
									</Card.Text>
									<p className='text-muted'>Изучайте язык через погружение в культуру</p>
									<a className="btn btn-dark" href="#">649₽</a>
								</Card.Body>
							</Card>
						</ReactCardCarousel> */}
					{/* </div> */}
				</Col>
			</Row>

			{/* Free lesson */}
			<Row className="align-items-center mt-5" id='freelesson'>
				<Col>
					<h2><Accent>Бесплатное вводное</Accent> занятие</h2>
					<Alert variant='primary'>
						Познакомимся с преподавателем
					</Alert>
					<Alert variant='primary'>
						Оценим уровень знаний
					</Alert>
					<Alert variant='primary'>
						Составим пресональную программу обучения
					</Alert>
					<Alert variant='primary'>
						Выучим 10 новых слов
					</Alert>
					<Alert variant='warning'>
						Полностью бесплатно. Да, даже если решите не заниматься с нами. Без звездочек и скрытых условий.
					</Alert>
					<a className="btn btn-primary" variant="primary" href="#">Записаться <ArrowRight /></a>
				</Col>
			</Row>

			{/* learn */}
			<Row className="d-flex flex-column flex-md-row align-items-center mt-5" id='learn'>
				<h2><Accent>Зачем</Accent> учить английский язык?</h2>
				<Col>
					<h3>Это <Accent>интересно</Accent>!</h3>
					<Alert variant='primary'>
						<Alert.Heading><BiConversation /> Играйте в любую игру с носителем</Alert.Heading>
						Наслаждайтесь игрой, общайтесь с носителем английского языка, погружаясь в языковую среду и улучшая свои навыки
					</Alert>
					<Alert variant='primary'>
						<Alert.Heading><PiPopcornBold /> Смотрите фильмы, сериалы с носителем</Alert.Heading>
						На английском языке вместе с преподавателем, разбирая важные лексические и грамматические моменты
					</Alert>
					<Alert variant='primary'>
						<Alert.Heading><BsPuzzle /> Решайте головомки, проходите квесты</Alert.Heading>
						На английском языке, развивая логическое и творческое мышление
					</Alert>
					<Alert variant='primary'>
						<Alert.Heading><FaTelegramPlane /> Общение в чате онлайн</Alert.Heading>
						Общайтесь с преподавателем 24/7, практикуя навыки современного онлайн-общения
					</Alert>
					<Alert variant='primary'>
						<Alert.Heading><MdGroup /> Групповые игровые занятия</Alert.Heading>
						Присоединяйтесь к групповым игровым занятиям, знакомьтесь с единомышленниками и вдохновляйте друг друга!
					</Alert>
				</Col>
				<Col>
					<h3>Это <Accent>полезно</Accent>!</h3>
					<Alert variant='primary'>
						<Alert.Heading><FaUniversity /> Расширяет границы</Alert.Heading>
						Учите самый важный язык в образовательной сфере, владение им значительно повышает шансы на поступление в ВУЗы всего мира!
					</Alert>
					<Alert variant='primary'>
						<Alert.Heading><BiSearchAlt /> Мировой стандарт</Alert.Heading>
						Международный язык коммуникации помогает легко и быстро находить нужную информацию в сети, позволяет обращаться к первоисточниам
					</Alert>
					<Alert variant='primary'>
						<Alert.Heading><GiBookshelf /> Богатая культура</Alert.Heading>
						Получите доступ к богатой англоязычной культуре, литературе. кино и музыке
					</Alert>
					<Alert variant='primary'>
						<Alert.Heading><BsFillRocketTakeoffFill /> Карьерный рост</Alert.Heading>
						Знание английского языка открывает множество возможностей для развития карьеры
					</Alert>
					<Alert variant='primary'>
						<Alert.Heading><FaCity /> Возможность путешествовать</Alert.Heading>
						Путешествуйте по всему миру и общайтесь с людьми из разных стран, обогощая свой опыт и делая путешествие незабываемым!
					</Alert>
				</Col>
				<Row>
					<a className="btn btn-primary" variant="primary" href="#">Начать учить <ArrowRight /></a>
				</Row>
			</Row>

			
		</Container>

			<Root>

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

			{/* <HeroWrapper id='footer'>
				<Wrapper>
					<FooterH1>Свяжитесь с нами</FooterH1>
					<Item href="mailto:brainstorm@yandex.ru">brainstorm@yandex.ru</Item>
					<Item href="tel:+79133600838">+7 (913) 360-08-38</Item>
				</Wrapper>
			</HeroWrapper> */}

			
		</>
  );
}

export default App;
