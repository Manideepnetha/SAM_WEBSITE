import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import img1 from './S.jpg'
import img1 from './img/samlatest.png'
import img2 from './img/samlatest2.png'
import img3 from './img/samlatest3.png'

class Home extends React.Component {
    render() {
        return (

            <div>


                <header class="nav-down responsive-nav hidden-lg hidden-md">
                    <button type="button" id="nav-toggle" class="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <div id="main-nav" class="collapse navbar-collapse">
                        <nav>
                            <ul class="nav navbar-nav">
                                <li><a href="#top">Home</a></li>
                                <li><a href="#featured">Featured</a></li>
                                <li><a href="#projects">Recent Projects</a></li>
                                <li><a href="#video">Presentation</a></li>
                                <li><a href="#blog">Blog Entries</a></li>
                                <li><a href="#contact">Contact Us</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>

                <div class="sidebar-navigation hidde-sm hidden-xs">
                    <div class="logo">
                        <a href="#top">Sam<em>antha</em></a>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <a href="#top">
                                    <span class="rect"></span>
                                    <span class="circle"></span>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#featured">
                                    <span class="rect"></span>
                                    <span class="circle"></span>
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a href="#projects">
                                    <span class="rect"></span>
                                    <span class="circle"></span>
                                    Recent Projects
                                </a>
                            </li>
                            <li>
                                <a href="#video">
                                    <span class="rect"></span>
                                    <span class="circle"></span>
                                    Videos
                                </a>
                            </li>
                            <li>
                                <a href="#blog">
                                    <span class="rect"></span>
                                    <span class="circle"></span>
                                    Filmography
                                </a>
                            </li>
                            <li>
                                <a href="#contact">
                                    <span class="rect"></span>
                                    <span class="circle"></span>
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <ul class="social-icons">
                        <li><a href="#top"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="https://twitter.com/TeamTWTS?s=20"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#top"><i class="fa fa-linkedin"></i></a></li>
                        <li><a href="#top"><i class="fa fa-rss"></i></a></li>
                        <li><a href="#top"><i class="fa fa-behance"></i></a></li>
                    </ul>
                </div>

                <Carousel infiniteLoop emulateTouch swipeable autoPlay={true} interval={3000} showArrows={true} className="carousel" showThumbs={false}>
                    <div class="slider">
                        <div class="Modern-Slider content-section" id="top">

                            <div class="item item-1">
                                <div class="img-fill">
                                    <div class="image"></div>
                                    <div class="info">
                                        <div>
                                            <h1>Welcome Samholics!</h1>

                                            <div class="white-button button">
                                                <a href="#featured">Discover More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="item item-2">
                                <div class="img-fill">
                                    <div class="image"></div>
                                </div>
                            </div>


                            <div class="item item-3">
                                <div class="img-fill">
                                    <div class="image"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </Carousel>





                <div class="page-content">
                    <section id="featured" class="content-section">
                        <div class="section-heading">
                            <h1>Samantha's<em> Gallery</em></h1>

                        </div>
                        <div class="section-content">
                            <div class="owl-carousel owl-theme">
                                <div class="item">
                                    <div class="image">
                                        <img src="https://drive.google.com/uc?export=view&id=15A-7uJK4M_O9iMr-_Y_0Je6beO-tBM6b" alt="" />
                                        <div class="featured-button button">
                                            <a href="#projects">See More</a>
                                        </div>
                                    </div>
                                    <div class="text-content">
                                        <h4>Lorem ipsum dolor</h4>
                                        <span>Proin et sapien</span>
                                        <p>#1 You are allowed to use Sentra Template for your business or client websites. You can use it for commercial or non-commercial or educational purposes.</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="image">
                                        <img src="https://drive.google.com/uc?export=view&id=1kiVz_g5NaMROZcC8fyGbBPTi23ArN613" alt="" />
                                        <div class="featured-button button">
                                            <a href="#projects">See More</a>
                                        </div>
                                    </div>
                                    <div class="text-content">
                                        <h4>Phasellus a lacus ac odio</h4>
                                        <span>Maximus</span>
                                        <p>#2 You are NOT allowed to re-distribute this on any template website. You <strong>can post</strong> a screenshot and a link back to original template page on your blog or site. Thank you.</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="image">
                                        <img src="https://drive.google.com/uc?export=view&id=1yBiY1XDmujSnSji1jXtC7hYePQRKXzDL" alt="" />
                                        <div class="featured-button button">
                                            <a href="#projects">See More</a>
                                        </div>
                                    </div>
                                    <div class="text-content">
                                        <h4>Proin sit amet fringilla</h4>
                                        <span>Vulputate</span>
                                        <p>#3 Aliquam mollis lacus eget metus efficitur lobortis. Suspendisse libero lacus, accumsan vitae commodo tristique, luctus gravida metus.</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="image">
                                        <img src="https://drive.google.com/uc?export=view&id=1eDoX9OngEyF8sJCA75_NxK9XPF6UEzfR " alt="" />
                                        <div class="featured-button button">
                                            <a href="#projects">See More</a>
                                        </div>
                                    </div>
                                    <div class="text-content">
                                        <h4>In volutpat augue lectus</h4>
                                        <span>Elementum</span>
                                        <p>#4 Aliquam mollis lacus eget metus efficitur lobortis. Suspendisse libero lacus, accumsan vitae commodo tristique, luctus gravida metus.</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="image">
                                        <img src="https://drive.google.com/uc?export=view&id=1OkdjL5FZG-h8FEdZI-BiT-oLUGrTb1Te " alt="" />
                                        <div class="featured-button button">
                                            <a href="#projects">See More</a>
                                        </div>
                                    </div>
                                    <div class="text-content">
                                        <h4>Cras commodo odio</h4>
                                        <span>Aliquam</span>
                                        <p>#5 Mauris lacinia pretium libero, ut tincidunt lacus molestie ornare. Phasellus a facilisis erat. Praesent eleifend nibh mauris, quis sodales lorem convallis pulvinar.</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="image">
                                        <img src="https://drive.google.com/uc?export=view&id= " alt="" />
                                        <div class="featured-button button">
                                            <a href="#projects">See More</a>
                                        </div>
                                    </div>
                                    <div class="text-content">
                                        <h4>Sed at massa turpis</h4>
                                        <span>Curabitur</span>
                                        <p>#6 Vestibulum tincidunt ornare ligula vel molestie. Curabitur hendrerit mauris mollis ipsum vulputate rutrum. Phasellus luctus odio eget dui imperdiet.</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="image">
                                        <img src="https://drive.google.com/uc?export=view&id= " alt="" />
                                        <div class="featured-button button">
                                            <a href="#projects">See More</a>
                                        </div>
                                    </div>
                                    <div class="text-content">
                                        <h4>Aliquam mollis lacus</h4>
                                        <span>Suspendisse</span>
                                        <p>#7 Suspendisse suscipit nulla sed nisl fermentum, auctor suscipit nunc rhoncus. Proin faucibus metus diam, nec hendrerit purus pharetra in.</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="image">
                                        <img src="https://drive.google.com/uc?export=view&id= " alt="" />
                                        <div class="featured-button button">
                                            <a href="#projects">See More</a>
                                        </div>
                                    </div>
                                    <div class="text-content">
                                        <h4>Mauris lacinia pretium</h4>
                                        <span>Vestibulum</span>
                                        <p>#8 Suspendisse suscipit nulla sed nisl fermentum, auctor suscipit nunc rhoncus. Proin faucibus metus diam, nec hendrerit purus pharetra in.</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="image">
                                        <img src="https://drive.google.com/uc?export=view&id= " alt="" />
                                        <div class="featured-button button">
                                            <a href="#projects">See More</a>
                                        </div>
                                    </div>
                                    <div class="text-content">
                                        <h4>Proin sit amet fringilla erat</h4>
                                        <span>Convallis</span>
                                        <p>#9 Suspendisse suscipit nulla sed nisl fermentum, auctor suscipit nunc rhoncus. Proin faucibus metus diam, nec hendrerit purus pharetra in.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="featured" class="content-section">
                        {/* <section id="projects" class="content-section"> */}
                        <div class="section-heading">
                            <h1>Recent<em>Projects</em></h1>
                            <p>Praesent pellentesque efficitur magna,
                                sed pellentesque neque malesuada vitae.</p>
                        </div>
                        <div class="section-content">
                            <div class="owl-carousel owl-theme">
                                <div class="item">
                                    <div class="image">
                                        <img src={img1} alt="" />
                                        <div class="featured-button button">
                                            <a href="#projects">See More</a>
                                        </div>
                                    </div>
                                    <div class="text-content">
                                        <h4>Lorem ipsum dolor</h4>
                                        <span>Proin et sapien</span>
                                        <p>#1 You are allowed to use Sentra Template for your business or client websites. You can use it for commercial or non-commercial or educational purposes.</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="image">
                                        <img src={img2} alt="" />
                                        <div class="featured-button button">
                                            <a href="#projects">See More</a>
                                        </div>
                                    </div>
                                    <div class="text-content">
                                        <h4>Phasellus a lacus ac odio</h4>
                                        <span>Maximus</span>
                                        <p>#2 You are NOT allowed to re-distribute this on any template website. You <strong>can post</strong> a screenshot and a link back to original template page on your blog or site. Thank you.</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="image">
                                        <img src={img3} alt="" />
                                        <div class="featured-button button">
                                            <a href="#projects">See More</a>
                                        </div>
                                    </div>
                                    <div class="text-content">
                                        <h4>Proin sit amet fringilla</h4>
                                        <span>Vulputate</span>
                                        <p>#3 Aliquam mollis lacus eget metus efficitur lobortis. Suspendisse libero lacus, accumsan vitae commodo tristique, luctus gravida metus.</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="image">
                                        <img src="https://drive.google.com/uc?export=view&id= " alt="" />
                                        <div class="featured-button button">
                                            <a href="#projects">See More</a>
                                        </div>
                                    </div>
                                    <div class="text-content">
                                        <h4>Proin sit amet fringilla erat</h4>
                                        <span>Convallis</span>
                                        <p>#9 Suspendisse suscipit nulla sed nisl fermentum, auctor suscipit nunc rhoncus. Proin faucibus metus diam, nec hendrerit purus pharetra in.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="featured" class="content-section">
                        {/* <section id="projects" class="content-section"> */}
                        <div class="section-heading">
                            <h1><em>Videos</em></h1>
                        </div>
                        <div class="section-content">
                            <div class="owl-carousel owl-theme">
                                <div class="item">
                                    
                                        <iframe width="310" height="400" src="https://www.youtube.com/embed/u_wB6byrl5k" title="Oo Antava Mawa..Oo Oo Antava Full Video Song | Pushpa Songs | Allu Arjun| DSP |Sukumar |Samantha" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    
                                    
                                </div>
                                <div class="item">
                                
                                <iframe width="310" height="400" src="https://www.youtube.com/embed/-xfQGk3aMLU" title="Kanmani Rambo Khatija Two Two Two Video | Vijay Sethupathi, Nayanthara, Samantha | Anirudh" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    
                                </div>
                                <div class="item">
                                
                                        <iframe width="325" height="400" src="https://www.youtube.com/embed/u_wB6byrl5k" title="Oo Antava Mawa..Oo Oo Antava Full Video Song " frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    
                                </div>
                                <div class="item">
                                    <div class="image">
                                        <img src="https://drive.google.com/uc?export=view&id= " alt="" />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <section id="video" class="content-section">
                <div class="row">
                    <div class="col-md-12">
                        <div class="section-heading">
                            <h1>This is a <em>company</em> presentation.</h1>
                            <p>Praesent pellentesque efficitur magna, sed pellentesque neque malesuada vitae.</p>
                        </div>
                        <div class="text-content">
                            <p>In eget ipsum sed lorem vehicula luctus. Curabitur non dolor rhoncus, hendrerit justo sit amet, vestibulum turpis. Pellentesque id auctor tellus, vel ultricies augue. Duis condimentum aliquet blandit. Fusce rhoncus et eros ut pharetra. Phasellus convallis ultricies ligula ac gravida.</p>
                        </div>
                        <div class="accent-button button">
                            <a href="#blog">See More</a>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="box-video">
                            <div class="bg-video" >
                                <div class="bt-play">Play</div>
                            </div>
                            <div class="video-container">
                                <iframe width="100%" height="520" src="https://www.youtube.com/embed/j-_7Ub-Zkow?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
                    <section id="blog" class="content-section">
                        <div class="section-heading">
                            <h1>Blog<em>Entries</em></h1>
                            <p>Curabitur hendrerit mauris mollis ipsum vulputate rutrum.
                                Phasellus luctus odio eget dui imperdiet.</p>
                        </div>
                        <div class="section-content">
                            <div class="tabs-content">
                                <div class="wrapper">
                                    <ul class="tabs clearfix" data-tabgroup="first-tab-group">
                                        <li><a href="#tab1" class="active">July 2018</a></li>
                                        <li><a href="#tab2">June 2018</a></li>
                                        <li><a href="#tab3">May 2018</a></li>
                                        <li><a href="#tab4">April 2018</a></li>
                                    </ul>
                                    <section id="first-tab-group" class="tabgroup">
                                        <div id="tab1">
                                            <ul>
                                                <li>
                                                    <div class="item">
                                                        <img src="img/blog_1.jpg" alt="" />
                                                        <div class="text-content">
                                                            <h4>Integer ultrices augue</h4>
                                                            <span>25 July 2018</span>
                                                            <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>

                                                            <div class="accent-button button">
                                                                <a href="#contact">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="item">
                                                        <img src="img/blog_2.jpg" alt="" />
                                                        <div class="text-content">
                                                            <h4>Cras commodo odio ut</h4>
                                                            <span>16 July 2018</span>
                                                            <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>

                                                            <div class="accent-button button">
                                                                <a href="#contact">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="item">
                                                        <img src="img/blog_3.jpg" alt="" />
                                                        <div class="text-content">
                                                            <h4>Sed at massa turpis</h4>
                                                            <span>10 July 2018</span>
                                                            <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>

                                                            <div class="accent-button button">
                                                                <a href="#contact">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div id="tab2">
                                            <ul>
                                                <li>
                                                    <div class="item">
                                                        <img src="img/blog_3.jpg" alt="" />
                                                        <div class="text-content">
                                                            <h4>Sed at massa turpis</h4>
                                                            <span>30 June 2018</span>
                                                            <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>

                                                            <div class="accent-button button">
                                                                <a href="#contact">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="item">
                                                        <img src="img/blog_1.jpg" alt="" />
                                                        <div class="text-content">
                                                            <h4>Lorem ipsum dolor sit</h4>
                                                            <span>24 June 2018</span>
                                                            <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>

                                                            <div class="accent-button button">
                                                                <a href="#contact">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="item">
                                                        <img src="img/blog_2.jpg" alt="" />
                                                        <div class="text-content">
                                                            <h4>Cras commodo odio ut</h4>
                                                            <span>12 June 2018</span>
                                                            <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>

                                                            <div class="accent-button button">
                                                                <a href="#contact">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div id="tab3">
                                            <ul>
                                                <li>
                                                    <div class="item">
                                                        <img src="img/blog_2.jpg" alt="" />
                                                        <div class="text-content">
                                                            <h4>Cras commodo odio ut</h4>
                                                            <span>26 May 2018</span>
                                                            <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>

                                                            <div class="accent-button button">
                                                                <a href="#contact">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="item">
                                                        <img src="img/blog_1.jpg" alt="" />
                                                        <div class="text-content">
                                                            <h4>Lorem ipsum dolor sit</h4>
                                                            <span>22 May 2018</span>
                                                            <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>

                                                            <div class="accent-button button">
                                                                <a href="#contact">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="item">
                                                        <img src="img/blog_3.jpg" alt="" />
                                                        <div class="text-content">
                                                            <h4>Integer ultrices augue</h4>
                                                            <span>8 May 2018</span>
                                                            <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>

                                                            <div class="accent-button button">
                                                                <a href="#contact">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div id="tab4">
                                            <ul>
                                                <li>
                                                    <div class="item">
                                                        <img src="img/blog_1.jpg" alt="" />
                                                        <div class="text-content">
                                                            <h4>Lorem ipsum dolor sit</h4>
                                                            <span>26 April 2018</span>
                                                            <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>

                                                            <div class="accent-button button">
                                                                <a href="#contact">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="item">
                                                        <img src="img/blog_3.jpg" alt="" />
                                                        <div class="text-content">
                                                            <h4>Integer ultrices augue eu</h4>
                                                            <span>24 April 2018</span>
                                                            <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>

                                                            <div class="accent-button button">
                                                                <a href="#contact">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="item">
                                                        <img src="img/blog_2.jpg" alt="" />
                                                        <div class="text-content">
                                                            <h4>Cras commodo odio ut</h4>
                                                            <span>20 April 2018</span>
                                                            <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>

                                                            <div class="accent-button button">
                                                                <a href="#contact">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="contact" class="content-section">
                        <div id="map">


                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1197183.8373802372!2d-1.9415093691103689!3d6.781986417238027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96f349e85efd%3A0xb8d1e0b88af1f0f5!2sKumasi+Central+Market!5e0!3m2!1sen!2sth!4v1532967884907" title = 'sample' width="100%" height="400px" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div id="contact-content">
                            <div class="section-heading">
                                <h1>Contact<em>Sentra</em></h1>
                                <p>Curabitur hendrerit mauris mollis ipsum vulputate rutrum.
                                    Phasellus luctus odio eget dui imperdiet.</p>

                            </div>
                            <div class="section-content">
                                <form id="contact" action="#" method="post">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <fieldset>
                                                <input name="name" type="text" class="form-control" id="name" placeholder="Your name..." required="" />
                                            </fieldset>
                                        </div>
                                        <div class="col-md-4">
                                            <fieldset>
                                                <input name="email" type="email" class="form-control" id="email" placeholder="Your email..." required="" />
                                            </fieldset>
                                        </div>
                                        <div class="col-md-4">
                                            <fieldset>
                                                <input name="subject" type="text" class="form-control" id="subject" placeholder="Subject..." required="" />
                                            </fieldset>
                                        </div>
                                        <div class="col-md-12">
                                            <fieldset>
                                                <textarea name="message" rows="6" class="form-control" id="message" placeholder="Your message..." required=""></textarea>
                                            </fieldset>
                                        </div>
                                        <div class="col-md-12">
                                            <fieldset>
                                                <button type="submit" id="form-submit" class="btn">Send Message Now</button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                    <section class="footer">
                        <p>Copyright &copy; 2019 Company Name

                            . Design: TemplateMo</p>
                    </section>
                </div>




            </div>
        );
    }
}

export default Home;