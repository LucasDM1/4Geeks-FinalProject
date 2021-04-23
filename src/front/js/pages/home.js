import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div className="row justify-content-center">
				<div className="col-10">
					<div
						id="carouselExampleIndicators"
						className="carousel slide"
						data-bs-ride="carousel"
						style={{ backgroundColor: "gray" }}>
						<ol className="carousel-indicators">
							<li
								data-target="#carouselExampleIndicators"
								data-slide-to="0"
								className="active"
								style={{
									borderRadius: "50%",
									width: "20px",
									height: "20px",
									backgroundColor: "black",
									opacity: "0.25"
								}}
							/>
							<li
								data-target="#carouselExampleIndicators"
								data-slide-to="1"
								style={{
									borderRadius: "50%",
									width: "20px",
									height: "20px",
									backgroundColor: "black",
									opacity: "0.25"
								}}
							/>
							<li
								data-target="#carouselExampleIndicators"
								data-slide-to="2"
								style={{
									borderRadius: "50%",
									width: "20px",
									height: "20px",
									backgroundColor: "black",
									opacity: "0.25"
								}}
							/>
						</ol>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<div className="container" alt="First slide">
									<div className="row p-1">
										<div className="col-sm-12 col-lg-3 ">
											<img
												src="https://picsum.photos/250"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title text-center">Card title</h5>
											</div>
										</div>
										<div className="col-sm-12 col-lg-3 ">
											<img
												src="https://picsum.photos/250"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title text-center">Card title</h5>
											</div>
										</div>
										<div className="col-sm-12 col-lg-3 ">
											<img
												src="https://picsum.photos/250"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title text-center">Card title</h5>
											</div>
										</div>
										<div className="col-sm-12 col-lg-3 ">
											<img
												src="https://picsum.photos/250"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title text-center">Card title</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="container" alt="Second slide">
									<div className="row p-1">
										<div className="col-sm-12 col-lg-3 ">
											<img
												src="https://neilpatel.com/wp-content/uploads/2017/08/colors.jpg"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title">Card title</h5>
											</div>
										</div>
										<div className="col-sm-12 col-lg-3 ">
											<img
												src="https://neilpatel.com/wp-content/uploads/2017/08/colors.jpg"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title">Card title</h5>
											</div>
										</div>
										<div className="col-sm-12 col-lg-3 ">
											<img
												src="https://neilpatel.com/wp-content/uploads/2017/08/colors.jpg"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title">Card title</h5>
											</div>
										</div>
										<div className="col-sm-12 col-lg-3 ">
											<img
												src="https://neilpatel.com/wp-content/uploads/2017/08/colors.jpg"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title">Card title</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="container">
									<div className="row p-1">
										<div className="col-sm-12 col-lg-3">
											<img
												src="https://www.hola.com/imagenes/cocina/recetas/20201009176964/pan-de-leche-thermomix-casero/0-876-239/receta-pan-thermomix-bollo-leche-m.jpg"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title text-dark text-center">Card title</h5>
											</div>
										</div>
										<div className="col-sm-12 col-lg-3">
											<img
												src="https://www.hola.com/imagenes/cocina/recetas/20201009176964/pan-de-leche-thermomix-casero/0-876-239/receta-pan-thermomix-bollo-leche-m.jpg"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title text-dark text-center">Card title</h5>
											</div>
										</div>
										<div className="col-sm-12 col-lg-3">
											<img
												src="https://www.hola.com/imagenes/cocina/recetas/20201009176964/pan-de-leche-thermomix-casero/0-876-239/receta-pan-thermomix-bollo-leche-m.jpg"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title text-dark text-center">Card title</h5>
											</div>
										</div>
										<div className="col-sm-12 col-lg-3">
											<img
												src="https://www.hola.com/imagenes/cocina/recetas/20201009176964/pan-de-leche-thermomix-casero/0-876-239/receta-pan-thermomix-bollo-leche-m.jpg"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title text-dark text-center">Card title</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<a
							className="carousel-control-prev"
							role="button"
							href="#carouselExampleIndicators"
							data-slide="prev"
							style={{ width: "40px" }}>
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="visually-hidden" />
						</a>
						<a
							className="carousel-control-next"
							role="button"
							href="#carouselExampleIndicators"
							data-slide="next"
							style={{ width: "40px" }}>
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="visually-hidden" />
						</a>
					</div>
				</div>
			</div>

			{/* // aca empieza el sector de anuncios */}

			{/* <div className="container">
				<div className="row text-center">
					<div className="col-sm-4 col-md-4 col-lg-4 col-xs-6">
						<div className="thumbnail">
							{" "}
							<img
								src="https://picsum.photos/200/300"
								alt="Thumbnail Image 1"
								className="img-responsive"
							/>
							<div className="caption">
								<h3>Product</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
								<p>
									<a href="#" className="btn btn-primary" role="button">
										<span className="glyphicon glyphicon-shopping-cart" aria-hidden="true" /> Add to
										Cart
									</a>
								</p>
							</div>
						</div>
					</div>
					<div className="col-sm-4 col-md-4 col-lg-4 col-xs-6">
						<div className="thumbnail">
							{" "}
							<img src="images/400X200.gif" alt="Thumbnail Image 1" className="img-responsive" />
							<div className="caption">
								<h3>Product</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
								<p>
									<a href="#" className="btn btn-primary" role="button">
										<span className="glyphicon glyphicon-shopping-cart" aria-hidden="true" /> Add to
										Cart
									</a>{" "}
								</p>
							</div>
						</div>
					</div>
					<div className="col-sm-4 col-md-4 col-lg-4 col-xs-6">
						<div className="thumbnail">
							{" "}
							<img src="images/400X200.gif" alt="Thumbnail Image 1" className="img-responsive" />
							<div className="caption">
								<h3>Product</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
								<p>
									<a href="#" className="btn btn-primary" role="button">
										<span className="glyphicon glyphicon-shopping-cart" aria-hidden="true" /> Add to
										Cart
									</a>{" "}
								</p>
							</div>
						</div>
					</div>
					<div className="col-sm-4 col-md-4 col-lg-4 col-xs-6 hidden-lg hidden-md hidden-sm">
						<div className="thumbnail">
							{" "}
							<img src="images/400X200.gif" alt="Thumbnail Image 1" className="img-responsive" />
							<div className="caption">
								<h3>Product</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
								<p>
									<a href="#" className="btn btn-primary" role="button">
										<span className="glyphicon glyphicon-shopping-cart" aria-hidden="true" /> Add to
										Cart
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row text-center hidden-xs">
					<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<div className="thumbnail">
							{" "}
							<img src="images/400X200.gif" alt="Thumbnail Image 1" className="img-responsive" />
							<div className="caption">
								<h3>Product</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
								<p>
									<a href="#" className="btn btn-primary" role="button">
										<span className="glyphicon glyphicon-shopping-cart" aria-hidden="true" /> Add to
										Cart
									</a>{" "}
								</p>
							</div>
						</div>
					</div>
					<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<div className="thumbnail">
							{" "}
							<img src="images/400X200.gif" alt="Thumbnail Image 1" className="img-responsive" />
							<div className="caption">
								<h3>Product</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
								<p>
									<a href="#" className="btn btn-primary" role="button">
										<span className="glyphicon glyphicon-shopping-cart" aria-hidden="true" /> Add to
										Cart
									</a>{" "}
								</p>
							</div>
						</div>
					</div>
					<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<div className="thumbnail">
							{" "}
							<img src="images/400X200.gif" alt="Thumbnail Image 1" className="img-responsive" />
							<div className="caption">
								<h3>Product</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
								<p>
									<a href="#" className="btn btn-primary" role="button">
										<span className="glyphicon glyphicon-shopping-cart" aria-hidden="true" /> Add to
										Cart
									</a>{" "}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	);
};
