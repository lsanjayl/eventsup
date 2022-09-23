import "./Eventslist.css"
import image from"../A.jpeg"
import image2 from"../R.jpg"
const Eventslist = () => {
    return (
        <div className="maindiv">
            <h1 className="text-4xl my-8 text-center herotext text-white">Exceeding Event<br />Expectation</h1>
            <div className="card w-80 bg-primary-focus shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white logo">
                        Code hustle!!
                        <div className="badge badge-secondary text-white font-sans">NEW</div>
                    </h2>
                    <p className=" text-gray-300">Joint the biggest coding event ever</p>
                    <div className="card-actions flex-row justify-between items-center">
                        <div>
                            <div className="badge badge-outline text-white mx-1">Coding</div>
                            <div className="badge badge-outline text-white">Hackathon</div>
                        </div>
                        <button className="btn btn-secondary text-xs">Register</button>
                    </div>
                </div>
            </div>
            <br />

            <div className="card w-80 bg-primary-focus shadow-xl">
                <figure><img src={image2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white logo">
                        Overnite coding!! 
                        {/* <div className="badge badge-secondary text-white font-sans">NEW</div> */}
                    </h2>
                    <p className=" text-gray-300">Joint the biggest coding event ever</p>
                    <div className="card-actions flex-row justify-between items-center">
                        <div>
                            <div className="badge badge-outline text-white mx-1">Fashion</div>
                            <div className="badge badge-outline text-white">Products</div>
                        </div>
                        <button className="btn btn-secondary text-xs">Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Eventslist;