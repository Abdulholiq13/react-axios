import introImg from '../../assets/intro-img.jpg';
import roundDisc from '../../assets/round-disc.svg';
import ButtonGray from '../Buttons/ButtonGray';
import ButtonOrange from '../Buttons/ButtonOrange';

const Intro = () => {
	return (
		<section className='pt-[131px] pb-[61px]'>
			<div className='container flex gap-6 justify-between'>
				<div className='flex flex-col px-[60px] pt-[46px] pb-[60px] shadow-inset rounded-[60px]'>
					<h2 className='w-[351px] text-[48px] font-jost font-bold leading-[44px] mb-[31px]'>
						Мебель на любой вкус!
					</h2>
					<ul className='text-[18px] leading-8 mb-[32px]'>
						<li className='flex items-center gap-[6px]'>
							<span>
								<img src={roundDisc} alt='' />
							</span>
							Худи, чашки для горячего чая и термосы
						</li>
						<li className='flex items-center gap-[6px]'>
							<span>
								<img src={roundDisc} alt='' />
							</span>
							Eлочные игрушки, брелочки
						</li>
						<li className='flex items-center gap-[6px]'>
							<span>
								<img src={roundDisc} alt='' />
							</span>
							Начало списка вещей, которые можно
						</li>
					</ul>
					<ButtonOrange title='Перейти в каталог' />
					<ButtonGray title='Внести список артикулов' />
				</div>
				<img src={introImg} alt='Intro img' width={786} height={487} />
			</div>
		</section>
	);
};

export default Intro;
