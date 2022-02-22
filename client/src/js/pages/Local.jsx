import Header from "../layout/Header";
import Footer from "../layout/Footer";
import MenuButton from "../components/MenuButton";

export default function Local() {
	return (
		<div className="local page">
			<Header />
			<main className="page__main">
				<section className="page__container">
					<div className="page__item">
						<label className="form__label" htmlFor="">
							Player <span className="text--pink">One</span>
						</label>
						<input
							className="form__input"
							type="text"
							placeholder="Name"
						/>
					</div>
					<div className="page__item">
						<label className="form__label" htmlFor="">
							Player <span className="text--blue">Two</span>
						</label>
						<input
							className="form__input"
							type="text"
							placeholder="Name"
						/>
					</div>
					<MenuButton type="primary" title="Play" color="green" onClick={() => {
						console.log("click");
					}}/>
				</section>
			</main>
			<Footer />
		</div>
	);
}
