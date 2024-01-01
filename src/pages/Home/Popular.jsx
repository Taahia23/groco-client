import pran from '../../assets/images/popular/pran.png';
import nestle from '../../assets/images/popular/nestle.png';
import unilever from '../../assets/images/popular/unilever.png';
import reckitt from '../../assets/images/popular/reckitt.png';
import marico from '../../assets/images/popular/marico.png';
const Popular = () => {
    return (
        <div className='my-32'>
            <h1 className='text-5xl text-center font-semibold mb-10'>Popular on Groco</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 px-3'>
                <div className='px-16 py-16 shadow-lg'>
                    <img className='w-32' src={pran} alt="" />
                </div>
                <div className='px-16 py-16 shadow-lg'>
                    <img className='w-32' src={unilever} alt="" />
                </div>
                <div className='px-16 py-16 shadow-lg'>
                    <img className='w-32' src={nestle} alt="" />
                </div>
                <div className='px-16 py-16 shadow-lg'>
                    <img className='w-32' src={marico} alt="" />
                </div>
                <div className='px-16 py-16 shadow-lg'>
                    <img className='w-32' src={reckitt} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Popular;