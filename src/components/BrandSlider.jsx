import Slider from 'react-infinite-logo-slider'
import './BrandSlider.component.css'
const BrandSlider = ({allLogos}) => {
    return (
      <div className='brand-slider' style={{width:"1000px"}}>
        <Slider
            width="250px"
            duration={60}
            pauseOnHover={true}
            blurBorders={false}
            blurBorderColor={'#fff'}
        >
          {allLogos.map((logo, index)=>{
            return (
              <>
              <div key={index} className='flex justify-center items-center mr-10'>
                <Slider.Slide >
                <img src={logo.image}  alt="any" className='w-36 brand-image' />
            </Slider.Slide>
            </div>
              </>
            )
          })}
        </Slider>
        </div>
    )
}              
                     
export default BrandSlider;