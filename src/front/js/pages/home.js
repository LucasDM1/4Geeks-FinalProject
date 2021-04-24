import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-12">
					<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
						<div className="carousel-inner">
							<div className="carousel-item active">
								<div className="container">
									<div className="row">
										<div className="col-sm-12 col-lg-4">
											<div className="card bg-dark text-white" style={{ width: "300px" }}>
												<img
													src="https://picsum.photos/200/300"
													className="card-img"
													alt="..."
												/>
												<div className="card-img-overlay">
													<h5 className="card-title">Card title</h5>
													<p className="card-text">
														This is a wider card with supporting text below as a natural
														lead to additional content. This content is a little bit longer.
													</p>
													<p className="card-text">Last updated 3 mins ago</p>
												</div>
											</div>
										</div>
										<div className="col-sm-12 col-lg-4">
											<div className="card bg-dark text-white" style={{ width: "300px" }}>
												<img
													src="https://picsum.photos/200/300"
													className="card-img"
													alt="..."
												/>
												<div className="card-img-overlay">
													<h5 className="card-title">Card title</h5>
													<p className="card-text">
														This is a wider card with supporting text below as a natural
														lead to additional content. This content is a little bit longer.
													</p>
													<p className="card-text">Last updated 3 mins ago</p>
												</div>
											</div>
										</div>
										<div className="col-sm-12 col-lg-4">
											<div className="card bg-dark text-white" style={{ width: "300px" }}>
												<img src="https://picsum.photos/200/300" className="card-img" />
												<div className="card-img-overlay">
													<h5 className="card-title">Card title</h5>
													<p className="card-text">
														This is a wider card with supporting text below as a natural
														lead to additional content. This content is a little bit longer.
													</p>
													<p className="card-text">Last updated 3 mins ago</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<button
							className="carousel-control-prev p-0"
							type="button"
							data-bs-target="#carouselExampleControls"
							data-bs-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="visually-hidden">Previous</span>
						</button>
						<button
							className="carousel-control-next p-0"
							type="button"
							data-bs-target="#carouselExampleControls"
							data-bs-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</div>
			</div>
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
