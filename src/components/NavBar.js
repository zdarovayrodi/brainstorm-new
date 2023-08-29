import React, {useState} from 'react'
import { Link } from 'react-scroll'

const NavBar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    
    return (
        <nav class="sticky top-0 bg-white dark:bg-gray-900 z-50">   
            <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <h1 className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white cursor-pointer'>
                    <Link to='hero' spy={true} smooth={true} offset={-80} duration={500}>
                        Brainstorm
                    </Link>
                </h1>
                <ul className='hidden lg:flex font-medium cursor-pointer items-center'>
                    <Link as='li' className='p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white' to='features' spy={true} smooth={true} offset={-80} duration={500}>Преимущества</Link>
                    <Link as='li' className='p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white mr-1' to='whylearn' spy={true} smooth={true} offset={-80} duration={500}>Зачем учить</Link>
                    <Link as='li' className='p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white' to='lessons' spy={true} smooth={true} offset={-80} duration={500}>Виды занятий</Link>
                    <Link as='li' className='p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white' to='freelesson' spy={true} smooth={true} offset={-80} duration={500}>Бесплатное занятие</Link>
                    <Link as='li' className='p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white mr-1' to='plans' spy={true} smooth={true} offset={-80} duration={500}>Наборы</Link>
                    {/* <Link as='li' className='p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white mr-1' to='footer' spy={true} smooth={true} offset={-80} duration={500}>Контакты</Link> */}
                </ul>
                <div onClick={handleNav} className='lg:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path className='stroke-black dark:stroke-white' stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </div>
                <div className={!nav ? 'hidden' : 'fixed top-[70px] right-4 ease-in-out duration-500'}>
                    <ul className='font-medium flex flex-col
                                p-4 lg:p-0 mt-4 rounded-lg
                                bg-gray-50 lg:hidden
                                border-gray-300 border-solid border-2
                                dark:bg-gray-900 dark:border-gray-700 z-50'>
                            <Link as='li' className='block py-2 pl-3 pr-4 rounded hover:bg-gray-100 dark:hover:bg-gray-500' onClick={handleNav} to='features' spy={true} smooth={true} offset={-80} duration={500}>Преимущества</Link>
                            <Link as='li' className='block py-2 pl-3 pr-4 rounded hover:bg-gray-100 dark:hover:bg-gray-500' onClick={handleNav} to='whylearn' spy={true} smooth={true} offset={-80} duration={500}>Зачем учить</Link>
                            <Link as='li' className='block py-2 pl-3 pr-4 rounded hover:bg-gray-100 dark:hover:bg-gray-500' onClick={handleNav} to='lessons' spy={true} smooth={true} offset={-80} duration={500}>Виды занятий</Link>
                            <Link as='li' className='block py-2 pl-3 pr-4 rounded hover:bg-gray-100 dark:hover:bg-gray-500' onClick={handleNav} to='freelesson' spy={true} smooth={true} offset={-80} duration={500}>Бесплатное занятие</Link>
                            <Link as='li' className='block py-2 pl-3 pr-4 rounded hover:bg-gray-100 dark:hover:bg-gray-500' onClick={handleNav} to='plans' spy={true} smooth={true} offset={-80} duration={500}>Наборы</Link>
                            {/* <Link as='li' className='block py-2 pl-3 pr-4 rounded hover:bg-gray-100 dark:hover:bg-gray-500' onClick={handleNav} to='content' spy={true} smooth={true} offset={-80} duration={500}>Контакты</Link> */}
                            <Link as='li' className='block py-2 mt-2
                                            text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={handleNav} to='cta' spy={true} smooth={true} offset={-80} duration={500} type="button">
                                    Получить бесплатно
                            </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar