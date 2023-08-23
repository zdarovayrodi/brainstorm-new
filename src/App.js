import './App.css';
import './index.css';

// images
import GamerIllustration from './resources/Gamer.png';
import GamingBg from './resources/gaming.jpg';
import StudyingBg from './resources/studying.jpg';
import MovieBg from './resources/movie.jpg';
// icons
import { GlobeEurope, Star, Child, ArrowRight } from './components/Icons';
import NavBar from './components/Navbar/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Badge from 'react-bootstrap/Badge'
import Image from 'react-bootstrap/Image'
import { CarouselCard as Card, CarouselCardWrapper } from './components/Carousel/Card';

import ReactCardCarousel from "react-card-carousel";
import { BiConversation, BiSearchAlt } from 'react-icons/bi';
import { PiPopcornBold } from 'react-icons/pi';
import { BsFillRocketTakeoffFill, BsPuzzle } from 'react-icons/bs';
import { FaCity, FaTelegramPlane, FaUniversity } from 'react-icons/fa';
import { MdGroup } from 'react-icons/md';
import { GiBookshelf } from 'react-icons/gi';

import { Button } from './components/Button'
import Footer from './components/Footer';


const App = () => {
	return (
		<>
		<NavBar />
		<Container>
			{/* Hero section */}
			<Row id='main'>
				<Col className='d-flex flex-column align-items-center mt-5'>
					<h1 className='mt-5'>Устали от <span className='text-primary'>обычных занятий</span> английского языка?</h1>
					<h6 className='text-muted'>От новичка до уверенного говорящего на английском за 3 месяца: наш проверенный метод</h6>
					<Row className="mt-4 d-flex flex-column flex-sm-row">
						<Col className="col-auto">
							<Button className="btn btn-primary" variant="primary" 
							to="contact" smooth={true} duration={1000} spy={true} exact='true' offset={-150}>
								Получить бесплатно
							</Button>
						</Col>
						<Col className="col-auto mt-1 mt-sm-0">
							<Button className="btn btn-outline-secondary" to="whywe" smooth={true} duration={1000} spy={true} exact='true' offset={-100}>
								Почему мы
							</Button>
						</Col>
					</Row>
				</Col>
			</Row>

			{/* Alert cards */}
			<Row className='mt-5 d-flex flex-column flex-md-row'>
				<Col>
					<Alert variant='primary'>
						<Alert.Heading as="h5">
							<GlobeEurope /> Носители языка
						</Alert.Heading>
						<p className='p-0 m-0'>Преподаватели со всего мира</p>
					</Alert>
				</Col>
				<Col>
					<Alert variant='primary'>
						<Alert.Heading as="h5">
							<Star /> За 3 месяца
						</Alert.Heading>
						<p className='p-0 m-0'>Избавим ученика от языкового барьера</p>
					</Alert>
				</Col>
				<Col>
					<Alert variant='primary'>
						<Alert.Heading as="h5">
							<Child /> Подходит
						</Alert.Heading>
						<p className='p-0 m-0'>Для детей школьного возраста</p>
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
					<h2><span className='text-primary'>Играй</span>, развлекайся, учись!</h2>
					<p>Носители языка помогут Вашему ребенку выучить новые слова и усовершенствовать свою грамматику в <span className='text-primary'>интерактивной форме</span>.</p>
					<Button className="btn btn-outline-primary" variant="primary" 
							to="contact" smooth={true} duration={1000} spy={true} exact='true' offset={-150}>
								Получить бесплатно
							</Button>
				</Col>
			</Row>
				
			{/* Lessons */}
			<Row className="mt-5 d-flex flex-column align-items-center" id='lessons'>
				<Row>
					<h2>Виды занятий</h2>
					<CarouselCardWrapper>
						<ReactCardCarousel autoplay={false}>
							<Card>
								<Card.Img variant="top" src={StudyingBg} />
								<Card.Body>
									<Card.Title>Консультация</Card.Title>
									<Card.Text>
									Учите правила, грамматические конструкции, новые слова
									</Card.Text>
									<p className='text-muted'>Нарабатывайте активный запас слов и лексики</p>
									<Button className="btn btn-dark" to="contact" smooth={true} duration={1000} spy={true} exact='true' offset={-150}>799₽</Button>
								</Card.Body>
							</Card>
							<Card>
								<Card.Img variant="top" src={GamingBg} />
								<Card.Body>
									<Card.Title>Игровое</Card.Title>
									<Card.Text>
									Играйте с носителем языка в ваши любимые игры!
									</Card.Text>
									<p className='text-muted'>Идеально для любителей компьютерных игр!</p>
									<Button className="btn btn-dark" to="contact" smooth={true} duration={1000} spy={true} exact='true' offset={-150}>649₽</Button>
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
									<Button className="btn btn-dark" to="contact" smooth={true} duration={1000} spy={true} exact='true' offset={-150}>649₽</Button>
								</Card.Body>
							</Card>
						</ReactCardCarousel>
					</CarouselCardWrapper>
				</Row>
			</Row>

			{/* Free lesson */}
			<Row className="align-items-center mt-5" id='freelesson'>
				<Col>
					<h2><span className='text-primary'>Бесплатное вводное</span> занятие</h2>
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
					<Button className="btn btn-primary" to="contact" smooth={true} duration={1000} spy={true} exact='true' offset={-150}>Записаться <ArrowRight /></Button>
				</Col>
			</Row>

			{/* learn */}
			<Row className="mt-5" id='learn'>
				<h2><span className='text-primary'>Зачем</span> учить английский язык?</h2>
				<Col>
					<h3>Это <span className='text-primary'>интересно</span>!</h3>
					<Alert variant='primary'>
						<Alert.Heading as="h5"><BiConversation /> Играйте в любую игру с носителем</Alert.Heading>
						Наслаждайтесь игрой, общайтесь с носителем английского языка, погружаясь в языковую среду и улучшая свои навыки
					</Alert>
					<Alert variant='primary'>
						<Alert.Heading as="h5"><PiPopcornBold /> Смотрите фильмы, сериалы с носителем</Alert.Heading>
						На английском языке вместе с преподавателем, разбирая важные лексические и грамматические моменты
					</Alert>
					<Alert variant='primary'>
						<Alert.Heading as="h5"><BsPuzzle /> Решайте головомки, проходите квесты</Alert.Heading>
						На английском языке, развивая логическое и творческое мышление
					</Alert>
					<Alert variant='primary'>
						<Alert.Heading as="h5"><FaTelegramPlane /> Общение в чате онлайн</Alert.Heading>
						Общайтесь с преподавателем 24/7, практикуя навыки современного онлайн-общения
					</Alert>
					<Alert variant='primary'>
						<Alert.Heading as="h5"><MdGroup /> Групповые игровые занятия</Alert.Heading>
						Присоединяйтесь к групповым игровым занятиям, знакомьтесь с единомышленниками и вдохновляйте друг друга!
					</Alert>
				</Col>
				<Col>
					<h3>Это <span className='text-primary'>полезно</span>!</h3>
					<Alert variant='primary'>
						<Alert.Heading as="h5"><FaUniversity /> Расширяет границы</Alert.Heading>
						Учите самый важный язык в образовательной сфере, владение им значительно повышает шансы на поступление в ВУЗы всего мира!
					</Alert>
					<Alert variant='primary'>
						<Alert.Heading as="h5"><BiSearchAlt /> Мировой стандарт</Alert.Heading>
						Международный язык коммуникации помогает легко и быстро находить нужную информацию в сети, позволяет обращаться к первоисточниам
					</Alert>
					<Alert variant='primary'>
						<Alert.Heading as="h5"><GiBookshelf /> Богатая культура</Alert.Heading>
						Получите доступ к богатой англоязычной культуре, литературе. кино и музыке
					</Alert>
					<Alert variant='primary'>
						<Alert.Heading as="h5"><BsFillRocketTakeoffFill /> Карьерный рост</Alert.Heading>
						Знание английского языка открывает множество возможностей для развития карьеры
					</Alert>
					<Alert variant='primary'>
						<Alert.Heading as="h5"><FaCity /> Возможность путешествовать</Alert.Heading>
						Путешествуйте по всему миру и общайтесь с людьми из разных стран, обогощая свой опыт и делая путешествие незабываемым!
					</Alert>
				</Col>
			</Row>

			{/* Form 1 (without plan) */}
			<Row className='mt-5'>
				<h2><span className='text-primary'>Оставьте заявку</span>, мы с Вами свяжемся </h2>
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
			</Row>

			<Row className='mt-5'>
				<p className='text-muted mb-0'>Хотите начать?</p>
				<h2><span className='text-primary'>Выберите</span> тариф</h2>
				<p className='mb-0'>Приобретайте наборы занятий! Рекомендуем для полноценного обучения</p>
				{/* Paste Slider here -> */}
				<CarouselCardWrapper>
						<ReactCardCarousel autoplay={false}>
							<Card className='p-0'>
								<Card.Header as="h5"><Badge bg='danger'>самый выгодный</Badge></Card.Header>
								<Card.Body>
									<Card.Title>Практикант</Card.Title>
									<Card.Text className='mb-0'>
										По одному занятияю из каждой категории: консультация, игровое, развлекательное
									</Card.Text>
									<Card.Text>
									+ одно занятие на выбор
									</Card.Text>
									<Button className="btn btn-dark" to="chosenContact" smooth={true} duration={1000} spy={true} exact='true' offset={-150}>Купить за 2290₽/нед</Button>
								</Card.Body>
								<Card.Footer className='text-muted'>Подходит для учеников, которые желают больше практиковаться!</Card.Footer>
							</Card>
							<Card className='p-0'>
								<Card.Body>
									<Card.Title>Начинающий</Card.Title>
									<Card.Text className='mb-0'>
										По одному занятияю из каждой категории: консультация, игровое, развлекательное
									</Card.Text>
									<Card.Text>
									+ одно занятие на выбор
									</Card.Text>
									<Button className="btn btn-dark" to="chosenContact" smooth={true} duration={1000} spy={true} exact='true' offset={-150}>Купить за 1790₽/нед</Button>
								</Card.Body>
								<Card.Footer className='text-muted'>Подходит для всех учеников. Погрузись в языковую среду!</Card.Footer>
							</Card>
							<Card className='p-0'>
								<Card.Body>
									<Card.Title>Олимпиадник</Card.Title>
									<Card.Text className='mb-0'>
										Три консультации с глубоким погружением в грамматику и лексику
									</Card.Text>
									<Card.Text>
									+ одно занятие на выбор
									</Card.Text>
									<Button className="btn btn-dark" to="chosenContact" smooth={true} duration={1000} spy={true} exact='true' offset={-150}>Купить за 2590₽/нед</Button>
								</Card.Body>
								<Card.Footer className='text-muted'>Подготовься к олимпиаде на отлично и получи БВИ в вузе!</Card.Footer>
							</Card>
						</ReactCardCarousel>
					</CarouselCardWrapper>
			</Row>

			{/* Form 2 (with plan) */}
			<Row className='mt-5'>
				<h2>Уже решили? <span className='text-primary'>Заполните</span> заявку!</h2>
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
			</Row>
			
			<Footer />
		</Container>

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
