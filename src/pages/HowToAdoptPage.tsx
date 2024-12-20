
export default function HowToAdoptPage() {
	return (
		<section className="how-to-adopt wrap">
			<h1 className="title-h1">
				Как <span className="pink">взять питомца</span> из приюта?
			</h1>
			<ul className="how-to-adopt__list">
				<li className="how-to-adopt__step">
					<div className="how-to-adopt__step-card-wrapper">
						<div className="how-to-adopt__step-card how-to-adopt__step-card--1">
							<div className="how-to-adopt__step-number"></div>
							<p>Заполнить анкету кандидата усыновителя</p>
						</div>
						<a className="how-to-adopt__questionnaire btn--blue btn" href="https://docs.google.com/forms/d/e/1FAIpQLSctFT7xX2hfXbKv4a3h1Scu9vhBHt42pRGr-lbp8G3_9nDkew/viewform?usp=dialog">
							Анкета
						</a>
					</div>

					<div className="how-to-adopt__content">
						<p>
							Первое, что необходимо – это выяснить, все ли ваши домочадцы
							готовы принять в семью нового члена. Помните, что животное – не
							игрушка, или сувенир в подарок. Это новый член семьи, который
							проживет с вами долгую счастливую жизнь.
						</p>
						<p>
							Приехать в приют, или выбрать питомца в каталоге на сайте приюта
							это еще не все. Обязательно свяжитесь с администратором приюта,
							задайте вопросы, выскажите свои пожелания по подбору питомца.
						</p>
						<p>
							У приютов строгие требования к будущим владельцам. Пройдите
							собеседование и выясните, что требуется от вас, готовы ли вы
							подойти к усыновлению с полной ответственностью.
						</p>
						<p>
							Заполните анкету кандидата усыновителя. На ее рассмотрение
							потребуется несколько дней, а для вас это время – еще раз
							хорошенько все взвесить и подумать.
						</p>
					</div>
				</li>
				<li className="how-to-adopt__step">
					<div className="how-to-adopt__step-card how-to-adopt__step-card--2">
						<div className="how-to-adopt__step-number"></div>
						<p>Встретиться с сотрудниками приюта</p>
					</div>
					<div className="how-to-adopt__content">
						<p>
							После заполнения анкеты потребуется время для решения
							администрации приюта.
						</p>
						<p>
							Будьте готовы к тому, что к вам придут сотрудники приюта, чтобы
							убедиться, что животное будет передано в семью, где его ждут, и
							будут любить со всей ответственностью.
						</p>
						<p>
							Сотрудник приюта выезжает по месту жительства для проверки и
							подтверждения предоставленной информации в заполненной вами
							анкете.
						</p>
						<p>
							По любым вопросам насчёт выдвигаемых требований можете обращаться
							к нам по контактам, указанным на сайте.
						</p>
					</div>
				</li>
				<li className="how-to-adopt__step">
					<div className="how-to-adopt__step-card how-to-adopt__step-card--3">
						<div className="how-to-adopt__step-number"></div>
						<p>Забрать питомца</p>
					</div>
					<div className="how-to-adopt__content">
						<p>
							Ваша анкета одобрена, и вы можете забрать своего избранника.
							Убедитесь, что вы полностью готовы к тому, что прямо сегодня ваша
							семья станет больше на одного члена.
						</p>
						<p>Как происходит передача животного:</p>
						<ol>
							<li>
								В назначенный день мы встречаемся и заполняем двусторонний
								договор о передаче.
							</li>
							<li>
								При себе необходимо иметь паспорт и переноску (лучше
								пластиковую с надежными защелками)
							</li>
							<li>
								Пожалуйста, учитывайте, что без переноски мы животных не
								отдаем!
							</li>
						</ol>
					</div>
				</li>
			</ul>
		</section>
	);
}