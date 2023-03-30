import Offcanvas from 'react-bootstrap/Offcanvas';
import {useState} from 'react'
const Navbar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="navbar flex-col p-0">
            <div className="bg-primary-focus  w-full">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-2xl text-white logo">events<span className="logoup logo font-bold">UP</span></a>
                </div>
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
            </div>
        </div>

    );
}
export default Navbar;