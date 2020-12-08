import sliderOne from './assets/images/slider1.jpg';
import sliderTwo from './assets/images/slider2.jpg';
import {React,Component} from 'react'; 
import Slider from "react-slick";

class HomeCarousel extends Component{
    render(){
        const settings = {
            dots: true,
            arrows:true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return(
            <div  className="main-banner">
                <Slider {...settings}>
                    <div>
                        <img src={sliderOne}/>
                    </div>
                    <div>
                        <img src={sliderTwo}/>
                    </div>
                </Slider>
            </div>
            
        )
    }
}

export default HomeCarousel; 