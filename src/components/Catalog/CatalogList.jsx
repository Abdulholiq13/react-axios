import React from 'react';
import CatalogItem from './CatalogItem';
import { NavLink } from 'react-router-dom';

const CatalogList = () => {
	const catalogInfo = [
		{
			id: 1,
			image: '/src/assets/mebel.jpg',
			title: 'Мебель',
			texts: ['Шкафы и шкафы-купе', 'Стеллажи и книжные шкафы', 'Столы', 'Стулья', 'Кровати'],
			more: 'Больше',
		},

		{
			id: 2,
			image: '/src/assets/aksesuar.jpg',
			title: 'Аксессуары для создания уюта',
			texts: ['Постельное белье', 'Одеяла', 'Комплекты постельного белья', 'Подушки', 'Пледы'],
			more: 'Больше',
		},

		{
			id: 3,
			image: '/src/assets/xraneniya-podarok.jpg',
			title: 'Хранение и порядок',
			texts: [
				'Аксессуары для хранения',
				'Крючки и полки на стену обувницы, полки с крючками для хранения',
				'Вешалки, обувницы, полки с крючками для хранения',
				'Системы для хранения',
				'Шкафы и шкафы-купе',
			],
			more: 'Больше',
		},

		{
			id: 4,
			image: '/src/assets/aksesuari.png',
			title: 'Аксессуары',
			texts: ['Шкафы и шкафы-купе', 'Стеллажи и книжные шкафы', 'Столы', 'Стулья', 'Кровати'],
			more: 'Больше',
		},

		{
			id: 5,
			image: '/src/assets/mebel-2.jpg',
			title: 'Мебель',
			texts: ['Шкафы и шкафы-купе', 'Стеллажи и книжные шкафы', 'Столы', 'Стулья', 'Кровати'],
			more: 'Больше',
		},

		{
			id: 6,
			image: '/src/assets/aksesuar-2.svg',
			title: 'Аксессуары для создания уюта',
			texts: ['Постельное белье', 'Одеяла', 'Комплекты постельного белья', 'Подушки', 'Пледы'],
			more: 'Больше',
		},

		{
			id: 7,
			image: '/src/assets/xraneniya-podarok-2.jpg',
			title: 'Хранение и порядок',
			texts: [
				'Аксессуары для хранения',
				'Крючки и полки на стену обувницы, полки с крючками для хранения',
				'Вешалки, обувницы, полки с крючками для хранения',
				'Системы для хранения',
				'Шкафы и шкафы-купе',
			],
			more: 'Больше',
		},

		{
			id: 4,
			image: '/src/assets/aksesuari-2.jpg',
			title: 'Аксессуары',
			texts: ['Шкафы и шкафы-купе', 'Стеллажи и книжные шкафы', 'Столы', 'Стулья', 'Кровати'],
			more: 'Больше',
		},
	];
	return (
		<div className='container py-[70px]'>
			<h2 className='text-4xl font-jost font-bold mb-10'>Каталог</h2>

			<div className='grid grid-cols-4 gap-[24px] gap-y-[53px]'>
				{catalogInfo?.map(({ id, image, title, texts, more }) => (
					<CatalogItem
						key={id}
						image={image}
						title={title}
						texts={texts?.map((text) => (
							<NavLink to={'#'} key={text}>
								{text}
							</NavLink>
						))}
						more={more}
					/>
				))}
			</div>
		</div>
	);
};

export default CatalogList;
