import Marquee from "react-fast-marquee";
const FastMarque = () => {
    return (
        <div>
             <Marquee className="bg-yellow-400 py-3">
                <h1 className="text-black"> * All prices are approximate. Products will be delivered at current store/ body price & availability. For any changes you will get a call from <span className="font-bold">12345</span> before delivery.</h1>
             </Marquee>
        </div>
    );
};

export default FastMarque;