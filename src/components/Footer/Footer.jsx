import React from 'react';
import logo from '../Logo/Logo';
import Logo from '../Logo/Logo';

const Footer = () => {
	return (
		<footer className='bg-[#f8f8f8]'>
			<div className='container grid grid-cols-3 gap-[200px] py-6'>
				<div>
					<a href='/'>
						<Logo />
					</a>
					<h3>Информация</h3> <p>Все права защищены © 2015 интернет-магазин AIKEA.BY Беларусь.</p>
					<p>УНП 191828159 ИП Парейко В.С., регистрационный номер в торговом реестре 158299</p>
					<p>Политика конфиденциальности</p>
				</div>
				<div>
					<h3>Меню</h3>
					<ul className='flex flex-wrap gap-4'>
						<li>Главная</li>
						<span className='text-[#ddd]'>|</span>
						<li>Каталог</li>
						<span className='text-[#ddd]'>|</span>
						<li>Товары в наличии Скидки</li>
						<span className='text-[#ddd]'>|</span>
						<li>Популярное</li>
						<span className='text-[#ddd]'>|</span>
						<li>Вдохновение Доставка</li>
						<span className='text-[#ddd]'>|</span>
						<li>Услуги</li>
						<span className='text-[#ddd]'>|</span>
						<li>Условия Контакты</li>
						<span className='text-[#ddd]'>|</span>
						<li>Вставить</li>
						<span className='text-[#ddd]'>|</span>
						<li>Cписок покупок Корзина</li>
						<span className='text-[#ddd]'>|</span>
						<li>Личный кабинет</li>
						<span className='text-[#ddd]'>|</span>
						<li>Избранное</li>
						<span className='text-[#ddd]'>|</span>
					</ul>
				</div>
				<div>
					<h3>Меню</h3>
					<ul className='flex flex-col gap-4 mb-4'>
						<li>г.Минск</li>
						<li>Ул. Первомайская, Д. 1, Кв. 43</li>
						<li>+ 375 434 847 28 84</li>
						<li>+ 375 448 473 09 48</li>
						<li>ikeaekspress@gmail.com</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
