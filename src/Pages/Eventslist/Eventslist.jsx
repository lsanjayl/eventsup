import "./Eventslist.css"
import image from"../A.jpeg"
import image2 from"../R.jpg"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar"
import EventDataService from "../../Services/eventServices"
const Eventslist = () => {
    const [events, setEvents] = useState([]);
    //=============list events================/
     const [values, setValues] = useState({
    title: "",
    theme: "webinar",
    venue: "",
    mode: "Offline",
    date: "",
    duration: "",
    nooffaculty: "",
    noofstud: "",
    url: "",
    remarks: "",
    image: "",
    report: "",
    repRef: "",
    imgRef: "",
    event: "Intercollege",
    participants:[],
  })
  useEffect(() => {
    getEvents();
  }, []);
  const getEvents = async () => {
    const data = await EventDataService.getAllEvent("mapps");
    setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log("Firebase events fetch");
  };

    const navigate = useNavigate();

    return (
        <div><Navbar/>
        <div className="maindiv">
            <h1 className="text-4xl my-8 text-center herotext text-white">Exceeding Event<br />Expectation</h1>

            {events.map((doc,index) =>{
                console.log(doc)
            return(
                <div key={doc.id}>
            <div className="card w-80 bg-primary-focus shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white logo">
                        {doc.title}
                        <div className="badge badge-secondary text-white font-sans">NEW</div>
                    </h2>
                    <p className=" text-gray-300">Joint the biggest coding event ever</p>
                    <div className="card-actions flex-row justify-between items-center">
                        <div>
                            <div className="badge badge-outline text-white mx-1">Coding</div>
                            <div className="badge badge-outline text-white">Hackathon</div>
                        </div>
                        <button className="btn btn-secondary text-xs"onClick={()=>navigate("/register",{ state: { id:doc.id, choice:'mapps',values:doc} })}    >Register</button>
                    </div>
                </div>
            </div>
            <br />
            </div>
            )
            })}
        </div>
        </div>
    );
}
export default Eventslist;