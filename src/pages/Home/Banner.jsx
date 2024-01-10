import bannerImg from '../../assets/images/banner/g.png'
import Typewriter from 'typewriter-effect';
const Banner = () => {
    return (
        <div className='relative'>
            <img src={bannerImg} alt="" />
            <div className='absolute top-1/3 left-32'>
                <h1 className='text-6xl text-white font-bold'>
                    <span>
                        <Typewriter
                            options={{
                                strings: ['Welcome to - - '],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                </h1>
                <h1 className='text-8xl text-yellow-400 font-bold'>
                    GRO<span className='text-white'>CO</span>
                </h1>
                <p className='text-white text-lg hidden lg:block px-2 py-5'>Grocery Delivered at your Doorstep</p>
            </div>

        </div>
    );
};

export default Banner;