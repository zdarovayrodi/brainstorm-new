import './App.css';
import './index.css';

import NavBar from './components/Navbar/NavBar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Lessons from './components/Lessons';
import FreeLesson from './components/FreeLesson';
import WhyLearn from './components/WhyLearn';
import CTA from './components/CTA';
import CTAPlan from './components/CTAPlan';
import Plans from './components/Plans';
import Footer from './components/Footer';

const App = () => {
	return (
		<div className='className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white'>
			<NavBar />
			<Hero />
			<Stats />
			<Features />
			<Lessons />
			<FreeLesson />
			<WhyLearn />
			<CTA />
			<Plans />
			<CTAPlan />
			<Footer />
		</div>
  );
}

export default App;
