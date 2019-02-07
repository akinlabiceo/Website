import React, { Component } from 'react';
import '../style/Blog.css';

class Blog extends Component {
  render(){
    return(
      <div className="container-fluid section-padding gray-bg blogsection" id="blog" >
        <div className="container-fluid our-blog ">
          <h2 className="heading"><center>Blog</center></h2>
          <div className="heading-underline"></div>
           <p>Get to know more about our core concepts and unique methodologies.</p>
            <div className="row">
              <div className="col-md-10 col-center m-auto">
                <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">

                <div className="carousel-inner">
                  <div className="item carousel-item active">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="thumb-wrapper text-center">
                          <div className="img-box">
                            <img src="https://via.placeholder.com/321x270.png" alt="image" />
                          </div>
                          <div className="thumb-content">
                            <h4>Cyber security and Mobility</h4>
                            <p>What is cyber security? Cyber security is the practice of protecting systems,</p>
                            <a href="#" className="btn btn-light disabled">Read More <i className="fa fa-angle-right"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="thumb-wrapper text-center">
                          <div className="img-box">
                            <img src="https://via.placeholder.com/321x270.png" alt="image" />
                          </div>
                          <div className="thumb-content">
                            <h4>Cyber security and Mobility</h4>
                            <p>What is cyber security? Cyber security is the practice of protecting systems,</p>
                            <a href="#" className="btn btn-light disabled">Read More <i className="fa fa-angle-right"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="thumb-wrapper text-center">
                          <div className="img-box">
                            <img src="https://via.placeholder.com/321x270.png" alt="image" />
                          </div>
                          <div className="thumb-content">
                            <h4>Cyber security and Mobility</h4>
                            <p>What is cyber security? Cyber security is the practice of protecting systems,</p>
                            <a href="#" className="btn btn-light disabled">Read More <i className="fa fa-angle-right"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item carousel-item">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="thumb-wrapper text-center">
                          <div className="img-box">
                            <img src="https://via.placeholder.com/321x270.png" alt="image" />
                          </div>
                          <div className="thumb-content">
                            <h4>Cyber security and Mobility</h4>
                            <p>What is cyber security? Cyber security is the practice of protecting systems,</p>
                            <a href="#" className="btn btn-light disabled">Read More <i className="fa fa-angle-right"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="thumb-wrapper text-center">
                          <div className="img-box">
                            <img src="https://via.placeholder.com/321x270.png" alt="image" />
                          </div>
                          <div className="thumb-content">
                            <h4>Cyber security and Mobility</h4>
                            <p>What is cyber security? Cyber security is the practice of protecting systems,</p>
                            <a href="#" className="btn btn-light disabled">Read More <i className="fa fa-angle-right"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="thumb-wrapper text-center">
                          <div className="img-box">
                            <img src="https://via.placeholder.com/321x270.png" alt="image" />
                          </div>
                          <div className="thumb-content">
                            <h4>Cyber security and Mobility</h4>
                            <p>What is cyber security? Cyber security is the practice of protecting systems,</p>
                            <a href="#" className="btn btn-light disabled">Read More <i className="fa fa-angle-right"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item carousel-item">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="thumb-wrapper text-center">
                          <div className="img-box">
                            <img src="https://via.placeholder.com/321x270.png" alt="image" />
                          </div>
                          <div className="thumb-content">
                            <h4>Cyber security and Mobility</h4>
                            <p>What is cyber security? Cyber security is the practice of protecting systems,</p>
                            <a href="#" className="btn btn-light disabled">Read More <i className="fa fa-angle-right"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="thumb-wrapper text-center">
                          <div className="img-box">
                            <img src="https://via.placeholder.com/321x270.png" alt="image" />
                          </div>
                          <div className="thumb-content">
                            <h4>Cyber security and Mobility</h4>
                            <p>What is cyber security? Cyber security is the practice of protecting systems,</p>
                            <a href="#" className="btn btn-light disabled">Read More <i className="fa fa-angle-right"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="thumb-wrapper text-center">
                          <div className="img-box">
                            <img src="https://via.placeholder.com/321x270.png" alt="image" />
                          </div>
                          <div className="thumb-content">
                            <h4>Cyber security and Mobility</h4>
                            <p>What is cyber security? Cyber security is the practice of protecting systems,</p>
                            <a href="#" className="btn btn-light disabled">Read More <i className="fa fa-angle-right"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a className="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
                  <i className="fa fa-angle-left"></i>
                </a>
                <a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
                  <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
);
}
}

export default Blog;
