import React from 'react';
import { NavLink } from 'react-router-dom';

const ContactContent = () => {
	return (
		<div className='container py-5'>
			<h2 className='text-4xl font-jost font-bold mb-[49px]'>Контакты</h2>

			<div className='flex items-start justify-between'>
				<ul>
					<li>
						<NavLink>+ 375 434 847 28 84</NavLink>
					</li>
					<li>
						<NavLink>+ 375 448 473 09 48</NavLink>
					</li>
					<li>
						<NavLink className='underline underline-offset-4'>ikeaekspress@gmail.com</NavLink>
					</li>
				</ul>

				<p className='w-[162px]'>г.Минск Ул. Первомайская Д. 1, Кв. 43</p>

				<ul>
					<li>ОГРН: 3748 49384 4847 30948</li>
					<li>ООО “Икеа”</li>
					<li>Политика конфиденциальности</li>
				</ul>

				<div>
					<img src='./src/assets/contact-img.jpg' alt='' width={371} height={325} />
				</div>
			</div>
		</div>
	);
};

export default ContactContent;
