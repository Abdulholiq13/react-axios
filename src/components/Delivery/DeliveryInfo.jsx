import React, { memo } from 'react';

const DeliveryInfo = () => {
	return (
		<div className='container'>
			<div className='grid grid-cols-2 place-items-center'>
				<div>
					<h2 className='font-jost font-bold text-4xl mb-[50px]'>Доставка</h2>
					<div className='text-lg flex flex-col gap-8 mb-8'>
						<p className=''>Мы увозим товары из магазинов IKEA и привозим их в Ваш дом.</p>
						<p>
							Наше преимущество - фиксированная стоимость доставки по Беларуси. Такой приятной цены
							вы не найдете у транспортных компаний.
						</p>
						<p>
							Наше главное преимущество – работа сразу с двумя магазинами IKEA. Это дает большую
							вероятность того, что нужный вам товар будет в наличии.
						</p>
						<p>Наша задача – доставить заказ своевременно и без повреждений.</p>
					</div>

					<div className='flex text-lg flex-col gap-8'>
						<h3 className='font-bold'>Как мы работаем?</h3>
						<p>
							Мы закупаем выбранные вами товары в магазинах IKEA. После того как они прибывают на
							наши склады, мы начинаем доставлять их вам.
						</p>
						<p>
							Доставляем заказ до подъезда. Подъем на этаж согласовывается заранее с оператором и
							оплачивается отдельно. Для подъема крупногабаритных товаров вы должны найти помощника
							курьеру.
						</p>
						<p>Даты поставки указаны в календаре на главной странице сайта. </p>
					</div>
				</div>
				<div>
					<img
						className='w-[681px] h-[884px]'
						src='./src/assets/delivery-image.png'
						alt='delivery image'
						width={681}
						height={884}
					/>
				</div>
			</div>
			<div className='grid grid-cols-2'>
				<div>
					<img
						className='w-[814px] h-[605px]'
						src='./src/assets/delivery-image-2.png'
						alt='delivery image'
						width={814}
						height={605}
					/>
				</div>

				<div className='text-lg'>
					<div className='flex flex-col gap-8 mb-8'>
						<h3 className='font-bold'>Доставка по Минску и Минскому р-ну</h3>
						<p>
							Доставка по Минску осуществляется в течение 1-3 дней после поставки товаров на наш
							склад. За это время с вами связывается оператор и согласовывает комфортное для вас
							время получения заказа. В согласованный день курьер заранее уведомит о скором прибытии
							товара.
						</p>
						<p>
							Заказ будет доставлен в течение 1-5 рабочих дней после поставки товаров на наш склад.
							Вам позвонит оператор и согласует удобное для вас время. В день доставки курьер за час
							свяжется с вами и уведомит о точном времени прибытия товара.
						</p>
					</div>

					<div className='flex flex-col gap-8'>
						<h3 className='font-bold'>Доставка по Беларуси</h3>
						<p>
							Сборка и погрузка товаров осуществляется сотрудниками магазина IKEA. Поэтому точную
							информацию о наличии выкупленных товаров мы узнаем после разгрузки машины на нашем
							складе в Минске.
						</p>
						<p>
							Из-за отсутствия некоторых позиций итоговая сумма заказа может уменьшиться. Если сумма
							отсутствующих товаров в заказе превышает 4 000 рос. руб, то комиссия за заказ будет
							пересчитана в соответствии с тарифами, которые указаны в разделе "Оплата".
						</p>
					</div>
				</div>
			</div>

			<div className='text-lg grid grid-cols-2 gap-8 mb-4'>
				<div className='flex flex-col gap-8'>
					<h3 className='font-bold'>Если некоторых позиций не оказалось в наличии</h3>
					<p>
						Вы имеете право отказаться от какой-либо позиции в заказе, но при этом нами удерживается
						комиссия за доставку этого товара.
					</p>
					<p>Вы можете это сделать в течение 12 часов после оформления заказа</p>
					<p>
						Согласовывая доставку с оператором, вы обязуетесь ее принять. На каждую точку курьеру
						дается 10 мин. Если разгрузка не начинается в течение 5 мин с момента прибытия курьера к
						месту назначения, курьер следует дальше по маршруту. Все непринятые заказы отправляются на
						возврат в магазин IKEA. Чтобы получить непринятый заказ, вам необходимо еще раз его
						оформить на один из последующих рейсов. За нами остаётся право отказать вам в дальнейшем
						сотрудничестве..
					</p>
					<p>
						В течение часа проверьте комплектацию согласно акту сдачи-приемки услуг, а также каждую
						позицию на видимые повреждения и брак.
					</p>
				</div>
			</div>
		</div>
	);
};

export default memo(DeliveryInfo);
