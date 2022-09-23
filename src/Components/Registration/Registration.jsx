import image2 from "../R.jpg"
import backbutton from"../backbutton.png"
const Registration = () => {
    return (
        
        <div>
            <div className="backbutton">
                <img src={backbutton} width="20px"/>
            </div>
            <img src={image2} height="300px" width="100%" />
            
            <div className="mx-2 my-5">
                <div className="flex-col  items-center my-6">
                    <div className="flex  items-center">
                    <div className="avatar mx-3">
                        <div className="w-20  rounded-full">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                    <h1 className="text-2xl text-white p-0">Overnite coding!! <br></br><span className="text-sm">Presented by Code club</span> </h1>
                    </div>
                    
                </div>
                <div className="mx-2">
                    <h2 className="text-xl text-white my-2">Description</h2>
                    <p className=" mx-2"> Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles.</p>
                </div>
                <div className="mx-2 my-6">
                    <h1 className="text-xl  text-white">
                        Key speakers
                    </h1>
                    <div className="flex flex-wrap my-6">
                        <div className="avatar mx-2 flex-col items-center">
                            <div className="w-16 rounded-full ">
                                <img src="https://th.bing.com/th/id/OIP.CwIp9gu-O5ak9nq9DXkOXwHaHy?w=182&h=192&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
                            </div>
                            <h2>Silambarasan</h2>
                        </div>
                        <div className="avatar mx-2 flex-col items-center">
                            <div className="w-16 rounded-full ">
                                <img src="https://th.bing.com/th/id/OIP.s_8gFn40pZM7LNhdJUI5igHaLI?w=182&h=274&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
                            </div>
                            <h2>Robert</h2>
                        </div>
                        <div className="avatar mx-2 flex-col items-center">
                            <div className="w-16 rounded-full ">
                                <img src="https://th.bing.com/th/id/OIP.ADCvISI3Nj8kx1FK-_U7iQHaJM?w=182&h=226&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
                            </div>
                            <h2>Kanye west</h2>
                        </div>
                        <div className="avatar mx-2 flex-col items-center">
                            <div className="w-16 rounded-full ">
                                <img src="https://th.bing.com/th/id/OIP.ADCvISI3Nj8kx1FK-_U7iQHaJM?w=182&h=226&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
                            </div>
                            <h2>Kanye west</h2>

                        </div>
                        <div className="avatar mx-2 flex-col items-center">
                            <div className="w-16 rounded-full ">
                                <img src="https://th.bing.com/th/id/OIP.ADCvISI3Nj8kx1FK-_U7iQHaJM?w=182&h=226&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
                            </div>
                            <h2>Kanye west</h2>

                        </div>
                    </div>
                    <div className="my-4 ">
                        <h1 className="text-xl my-3 text-white">Register now</h1>
                        <div >
                            <input type="text" placeholder="sec20it068.." className="input input-bordered input-secondary w-full max-w-xs my-1" />
                            <input type="text" placeholder="email-id.." className="input input-bordered input-secondary w-full max-w-xs my-1" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex justify-around registerButton bg-base-100 ">
                <button className="btn btn-active btn-secondary btn-block">Register</button>
            </div>
        </div>
    )
}
export default Registration;