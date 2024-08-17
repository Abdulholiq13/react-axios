import React, { memo } from 'react';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

const Footer = () => {
	const footerLinks = ['Главная', 'Каталог', 'Товары в наличии'];

	const footerLinksSecond = ['Скидки', 'Популярное', 'Вдохновение'];
	const footerLinksThird = ['Доставка', 'Услуги', 'Условия'];
	const footerLinksFourth = ['Контакты', 'Вставить', 'Cписок покупок'];
	const footerLinksFifth = ['Корзина', 'Личный кабинет', 'Избранное'];

	const linksFirst = footerLinks?.map((link, id) => (
		<li key={id} className='border-l-2 border-gray pl-1 text-sm first:border-l-0'>
			<Link>{link}</Link>
		</li>
	));

	const linksSecond = footerLinksSecond?.map((link, id) => (
		<li key={id} className='border-l-2 border-gray pl-1 text-sm first:border-l-0'>
			<Link>{link}</Link>
		</li>
	));

	const linksThird = footerLinksThird?.map((link, id) => (
		<li key={id} className='border-l-2 border-gray pl-1 text-sm first:border-l-0'>
			<Link>{link}</Link>
		</li>
	));

	const linksFourth = footerLinksFourth?.map((link, id) => (
		<li key={id} className='border-l-2 border-gray pl-1 text-sm'>
			<Link>{link}</Link>
		</li>
	));

	const linksFifth = footerLinksFifth?.map((link, id) => (
		<li key={id} className='border-l-2 border-gray pl-1 text-sm first:border-none'>
			<Link>{link}</Link>
		</li>
	));

	return (
		<footer className='bg-[#f8f8f8]'>
			<div className='container py-[50px]'>
				<Link to='/'>
					<Logo />
				</Link>
				<div className='grid grid-cols-3 justify-items-end'>
					<div>
						<h3 className='text-lg font-bold mb-4'>Информация</h3>
						<p className='mb-4'>Все права защищены © 2015 интернет-магазин AIKEA.BY Беларусь.</p>
						<p className='mb-4'>
							УНП 191828159 ИП Парейко В.С., регистрационный номер в торговом реестре 158299
						</p>
						<Link to={'#'} className='underline underline-offset-2'>
							Политика конфиденциальности
						</Link>
					</div>
					<div>
						<h3 className='text-lg font-bold mb-4'>Меню</h3>
						<ul className='flex flex-wrap gap-2 w-[320px]'>
							{linksFirst} {linksSecond} {linksThird} {linksFourth} {linksFifth}
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
			</div>
		</footer>
	);
};

export default memo(Footer);
