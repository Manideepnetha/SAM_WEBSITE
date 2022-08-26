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
                                <li><a href="#projects">Upcoming Projects</a></li>
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
                                    Upcoming Projects
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
                                        <img src="https://drive.google.com/uc?export=view&id=1CjQgh9i3nZR_G3iETj52ar2sPTOB5bIl" alt="" />
                                        <div class="featured-button button">
                                            <a href="#projects">See More</a>
                                        </div>
                                    </div>
                                    <div class="text-content">
                                        <h4>MYNTRA</h4>
                                        <span></span>
                                        <p></p>
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
                                        <h4>MYNTRA</h4>
                                        <span></span>
                                        <p></p>
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
                                        <h4>MYNTRA</h4>
                                        <span></span>
                                        <p></p>
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
                                        <h4>MYNTRA</h4>
                                        <span></span>
                                        <p></p>
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
                                        <h4>MYNTRA</h4>
                                        <span></span>
                                        <p></p>
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
                                        <h4>MYNTRA</h4>
                                        <span></span>
                                        <p></p>
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
                                        <h4>MYNTRA</h4>
                                        <span></span>
                                        <p></p>
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
                                        <h4>MYNTRA</h4>
                                        <span></span>
                                        <p></p>
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
                                        <h4>MYNTRA</h4>
                                        <span></span>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="featured" class="content-section">
                        {/* <section id="projects" class="content-section"> */}
                        <div class="section-heading">
                            <h1>Upcoming<em>Projects</em></h1>
                            <p></p>
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
                                        <h4>SHAAKUNTALAM</h4>
                                        <span> Mythological drama film</span>
                                        <p>Based on a popular play Shakuntala by Kalidasa, the film features Samantha in the titular role of Shakuntala and Dev Mohan as Dushyanta, the king of Puru Dynasty along with Mohan Babu, Gautami, Aditi Balan and Ananya Nagalla in supporting roles.</p>
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
                                        <h4>KUSHI</h4>
                                        <span> Romantic comedy film </span>
                                        <p>Kushi is an upcoming Indian Telugu-language romantic comedy film written and directed by Shiva Nirvana. Produced by Mythri Movie Makers, it stars Vijay Deverakonda and Samantha. The film is scheduled to release in cinemas on 23 December 2022 during Christmas.</p>
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
                                        <h4>YASHODA</h4>
                                        <span> Science fiction thriller film</span>
                                        <p>Yashoda is an upcoming Indian science fiction thriller film written and directed by duo Hari–Harish. Produced by Sridevi Movies, it is simultaneously shot in Telugu and Tamil languages. The film stars Samantha as the titular character alongside Unni Mukundan and Varalaxmi Sarathkumar</p>
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
                            <h1><em>Filmography</em></h1>
                        </div>
                        <div class="section-content">
                            <div class="tabs-content">
                                <div class="wrapper">
                                    <ul class="tabs clearfix" data-tabgroup="first-tab-group">
                                        <li><a href="#tab1" class="active">2010</a></li>
                                        <li><a href="#tab2">2011</a></li>
                                        <li><a href="#tab3">2012</a></li>
                                        <li><a href="#tab4">2013</a></li>
                                        <li><a href="#tab5">2014</a></li>
                                        <li><a href="#tab6">2015</a></li>
                                        <li><a href="#tab7">2016</a></li>
                                        <li><a href="#tab8">2017</a></li>
                                        <li><a href="#tab9">2018</a></li>
                                        <li><a href="#tab10">2019</a></li>
                                        <li><a href="#tab11">2020</a></li>
                                        <li><a href="#tab12">2021</a></li>
                                        <li><a href="#tab13">2022</a></li>
                                    </ul>
                                    <section id="first-tab-group" class="tabgroup">
                                        <div id="tab1">
                                            <ul>
                                                <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://upload.wikimedia.org/wikipedia/en/3/3d/Yemaaya.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Ye Maaya Chesave</h4>
                                                            <span>26 February 2010</span>
                                                            <span>Gautham Vasudev Menon</span><br></br>
                                                            <span>Jessie Thekkekuttu</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Ye_Maaya_Chesave">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://upload.wikimedia.org/wikipedia/en/1/1f/Baana_Kaathaadi_poster.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                        <h4>Baana Kaathaadi</h4>
                                                            <span>6 August 2010</span>
                                                            <span> Badri Venkatesh</span><br></br>
                                                            <span>Priya</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Baana_Kaathadi">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                        
                                                <li>
                                                <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://upload.wikimedia.org/wikipedia/en/e/e4/Moscowin_Kavery.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Moscowin Kavery</h4>
                                                            <span>27 August 2010</span>
                                                            <span>Ravi Varman</span><br></br>
                                                            <span>Kaveri Thangavelu</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Moscowin_Kavery">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://upload.wikimedia.org/wikipedia/en/5/54/Brindavanam_poster.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Brindavanam</h4>
                                                            <span>14 October 2010</span>
                                                            <span>Vamshi Paidipally</span><br></br>
                                                            <span>Indu</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Brindavanam_(2010_film)">Continue Reading</a>
                                                            </div>
                                                        </div>
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
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/old_images/vertical/MOVIE/6892/1000056892/1000056892-v" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Dookudu</h4>
                                                            <span>23 September 2011</span>
                                                            <span>Srinu Vaitla</span><br></br>
                                                            <span>Prasanthi</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Dookudu">Continue Reading</a>
                                                            </div>
                                                        </div>
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
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://xl.movieposterdb.com/13_03/2012/2258337/xl_2258337_00b9c4fc.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Eega</h4>
                                                            <span>6 July 2012</span>
                                                            <span>S. S. Rajamouli</span><br></br>
                                                            <span>Bindu</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Eega">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://upload.wikimedia.org/wikipedia/en/e/ee/Yeto_Vellipoyindhi_Manasu.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Yeto Vellipoyindhi Manasu</h4>
                                                            <span>14 December 2012</span>
                                                            <span>Gautham Vasudev Menon</span><br></br>
                                                            <span> Nithya Yalavarthi</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Yeto_Vellipoyindhi_Manasu">Continue Reading</a>
                                                            </div>
                                                        </div>
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
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://m.media-amazon.com/images/I/81UNoRbrEuL._SL1267_.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Seethamma Vakitlo Sirimalle Chettu</h4>
                                                            <span>11 January 2013</span>
                                                            <span>Srikanth Addala</span><br></br>
                                                            <span>Geetha</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Seethamma_Vakitlo_Sirimalle_Chettu">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://upload.wikimedia.org/wikipedia/en/9/9a/Jabardasth_poster.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Jabardasth </h4>
                                                            <span>22 February 2013</span>
                                                            <span>	B.V. Nandini Reddy</span><br></br>
                                                            <span>Shreya</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Jabardasth_(film)">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://upload.wikimedia.org/wikipedia/en/f/fd/Attarintiki_Daredi.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Attarintiki Daredi</h4>
                                                            <span>27 September 2013</span>
                                                            <span>Trivikram Srinivas</span><br></br>
                                                            <span>Sashi</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Attarintiki_Daredi">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://i.pinimg.com/736x/27/2b/6f/272b6f6a382b2ab4f9a55a66a818d9bf.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Ramayya Vasthavayya</h4>
                                                            <span>11 October 2013</span>
                                                            <span>Harish Shankar</span><br></br>
                                                            <span>Akarsha</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Ramayya_Vasthavayya">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div id="tab5">
                                            <ul>
                                            <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="http://2.bp.blogspot.com/-ekPY7jsk0Zc/U3znCi887sI/AAAAAAAAwxY/KhFObULerr4/s1600/Manam_Movie_release_date_Posters(1).jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Manam</h4>
                                                            <span>23 May 2014</span>
                                                            <span>	Vikram Kumar</span><br></br>
                                                            <span>Krishna Veni and Priya</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Manam_(film)">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://upload.wikimedia.org/wikipedia/en/4/4b/Autonagar_Surya_poster.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Autonagar Surya</h4>
                                                            <span>27 June 2014</span>
                                                            <span>Deva Katta</span><br></br>
                                                            <span>Sirisha</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Autonagar_Surya">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://pbs.twimg.com/media/CNkPf3IUsAESSaK.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Alludu Seenu</h4>
                                                            <span>25 July 2014</span>
                                                            <span>V. V. Vinayak</span><br></br>
                                                            <span>Anjali</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Alludu_Seenu">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://moviegalleri.net/wp-content/gallery/rabhasa-movie-wallpaper/rabhasa_movie_wallpapers_jr_ntr_samantha_07031d8.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Rabhasa</h4>
                                                            <span>29 August 2014</span>
                                                            <span>Santosh Srinivas</span><br></br>
                                                            <span>Indu</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Rabhasa">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://moviegalleri.net/wp-content/gallery/kathi-movie-posters/kathi_movie_posters_vijay_samantha_kaththi_movie_posters_2a56e03.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Kaththi</h4>
                                                            <span>October 22, 2014</span>
                                                            <span>A. R. Murugadoss</span><br></br>
                                                            <span>Ankitha</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Kaththi">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>

                                        <div id="tab6">
                                            <ul>
                                            <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://www.chitramala.in/wp-content/gallery/so-satyamurthy-movie-posters/Arjun-Samantha-Son-of-Satyamurthy-Release-Wallpaper.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>S/O Satyamurthy</h4>
                                                            <span>9 April 2015</span>
                                                            <span>Trivikram Srinivas</span><br></br>
                                                            <span>Sameera / Subbalakshmi</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/S/O_Satyamurthy">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://cps-static.rovicorp.com/2/Open/APAC_2674/Program/27771725/_derived_jpg_q90_310x470_m0/5.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>10 Endrathukulla</h4>
                                                            <span>21 October 2015</span>
                                                            <span>Vijay Milton</span><br></br>
                                                            <span>Shakeela and Gadgi Moi</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/10_Endrathukulla">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://upload.wikimedia.org/wikipedia/en/7/75/Thanga_magan.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Thanga Magan</h4>
                                                            <span>18 December 2015</span>
                                                            <span>Velraj</span><br></br>
                                                            <span>Yamuna Thamizh (Jamuna)</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Thanga_Magan_(2015_film)">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                

                                            </ul>
                                        </div>

                                        <div id="tab7">
                                            <ul>
                                            <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://i.pinimg.com/564x/d7/90/50/d790506e55a62dde71413f92f586b45f.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Theri</h4>
                                                            <span>14 April 2016[</span>
                                                            <span>Atlee</span><br></br>
                                                            <span>Mithra</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Theri_(film)">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://ajzpage.files.wordpress.com/2016/07/24-the-movie-surya-samantha-484x700.jpg?w=680" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>24</h4>
                                                            <span>6 May 2016</span>
                                                            <span>Vikram Kumar</span><br></br>
                                                            <span>Sathyabhama aka Sathya</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/24_(2016_film)">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="http://www.impawards.com/intl/india/2016/posters/brahmotsavam_ver2.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Brahmotsavam</h4>
                                                            <span>20 May 2016</span>
                                                            <span>Srikanth Addala</span><br></br>
                                                            <span>NRI FROM LONDON</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Brahmotsavam_(film)">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://upload.wikimedia.org/wikipedia/en/f/f4/A_Aa_Telugu_movie_poster.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>A Aa</h4>
                                                            <span>2 June 2016</span>
                                                            <span>Trivikram Srinivas</span><br></br>
                                                            <span>Anasuya "Anu" Ramalingam</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/A_Aa">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://www.filmibeat.com/ph-big/2016/09/janatha-garage-movie-poster_147469558110.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Janatha Garage</h4>
                                                            <span>1 September 2016</span>
                                                            <span>Koratala Siva</span><br></br>
                                                            <span>Bujji</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Janatha_Garage">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                               
                                          
                                            </ul>
                                        </div>

                                        <div id="tab8">
                                            <ul>
                                           
                                            <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://upload.wikimedia.org/wikipedia/en/d/d9/Raju_Gari_Gadhi_2.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Raju Gari Gadhi 2</h4>
                                                            <span>13 October 2017</span>
                                                            <span>Ohmkar</span><br></br>
                                                            <span>Amrutha</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Raju_Gari_Gadhi_2">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://movieposters2.com/images/1517025-b.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Mersal</h4>
                                                            <span>18 October 2017</span>
                                                            <span>Atlee</span><br></br>
                                                            <span>Tara</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Mersal_(film)">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div id="tab9">
                                            <ul>
                                            <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://data1.ibtimes.co.in/cache-img-690-0-photo/en/full/85911/1530881195_fact-ram-charan-himself-had-released-fun-video-asking-director-announce-title-soon-because-he.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Rangasthalam</h4>
                                                            <span>30 March 2018</span>
                                                            <span>Sukumar</span><br></br>
                                                            <span>Ramalakshmi</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Rangasthalam">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://i.pinimg.com/736x/ec/ce/f7/eccef7297aa1157090bc281e581ccbed.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Mahanati</h4>
                                                            <span>9 May 2018</span>
                                                            <span>Nag Ashwin</span><br></br>
                                                            <span>Madhuravani</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Mahanati">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/211689/Irumbuthirai.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Irumbu Thirai</h4>
                                                            <span>11 May 2018</span>
                                                            <span>P. S. Mithran</span><br></br>
                                                            <span>Dr. Rathi Devi</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Irumbu_Thirai_(2018_film)">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://www.gethucinema.com/wp-content/uploads/2018/09/Seema-Raja-Official-Posters-Sivakarthikeyan-samantha-lovers.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Seemaraja</h4>
                                                            <span>13 September 2018</span>
                                                            <span>Ponram</span><br></br>
                                                            <span>Suthanthira Selvi</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Seemaraja">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://upload.wikimedia.org/wikipedia/en/4/44/U_Turn_%282018%29.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>U Turn</h4>
                                                            <span>13 September 2018</span>
                                                            <span>Pawan Kumar</span><br></br>
                                                            <span>Rachana</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/U_Turn_(2018_film)">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div id="tab10">
                                            <ul>
                                            <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://upload.wikimedia.org/wikipedia/en/a/a1/Super_Deluxe_film_poster.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Super Deluxe</h4>
                                                            <span>29 March 2019</span>
                                                            <span>Thiagarajan Kumararaja</span><br></br>
                                                            <span>Vaembu</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Super_Deluxe_(film)">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://upload.wikimedia.org/wikipedia/en/7/79/Majili_Film_Poster.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Majili</h4>
                                                            <span>5 April 2019</span>
                                                            <span>Shiva Nirvana</span><br></br>
                                                            <span>Sravani</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Majili">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://upload.wikimedia.org/wikipedia/en/3/34/Samantha_Oh_Baby.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Oh! Baby</h4>
                                                            <span>5 July 2019</span>
                                                            <span>B. V. Nandini Reddy</span><br></br>
                                                            <span>Savithri alias "Baby" / Swathi</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Oh!_Baby">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Nag-samantha.jpg?itok=5Di2ZFBR" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Manmadhudu 2</h4>
                                                            <span>9 August 2019 </span>
                                                            <span>Rahul Ravindran</span><br></br>
                                                            <span>(Cameo)</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Manmadhudu_2">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div id="tab11">
                                            <ul>
                                            <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://upload.wikimedia.org/wikipedia/en/1/11/Jaanu_2020_poster.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Jaanu</h4>
                                                            <span>7 February 2020</span>
                                                            <span>C. Prem Kumar</span><br></br>
                                                            <span>S. Janaki Devi aka Jaanu</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Jaanu_(2020_film)">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                              
                                              
                                            </ul>
                                        </div>
                                        <div id="tab12">
                                            <ul>
                                            <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://cdn.gulte.com/wp-content/uploads/2021/11/samantha-pushpa.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Pushpa: The Rise</h4>
                                                            <span>17 December 2021</span>
                                                            <span>Sukumar</span><br></br>
                                                            <span>cameo appearance in the Special song "Oo Antava Oo Oo Antava</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Pushpa:_The_Rise">Continue Reading</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                               
                                            </ul>
                                        </div>
                                        <div id="tab13">
                                            <ul>
                                            <li>
                                                    <div class="item">
                                                        <div class = "row">
                                                            <div class = "col-md-6">
                                                        <img width="180" height="200" src="https://upload.wikimedia.org/wikipedia/en/3/35/Kaathuvaakula_Rendu_Kaadhal_poster.jpg" alt="" />
                                                        </div>
                                                        <div class = "col-md-6">

                                                        <div class="text-content">
                                                            <h4>Kaathuvaakula Rendu Kaadhal</h4>
                                                            <span>28 April 2022</span>
                                                            <span>Vignesh Shivan</span><br></br>
                                                            <span>Khatija Begum</span>
                                                            <div class="accent-button button">
                                                                <a href="https://en.wikipedia.org/wiki/Kaathuvaakula_Rendu_Kaadhal">Continue Reading</a>
                                                            </div>
                                                        </div>
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
                        <p>Copyright &copy; 2022 TEAM TWTS

                            . Design: Manideep Netha J</p>
                    </section>
                </div>




            </div>
        );
    }
}

export default Home;
