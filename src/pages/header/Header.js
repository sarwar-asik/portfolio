import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    let menuArray = [true, false, false];
    const [menu, setMenu] = useState(menuArray);
    const [show, setShow] = useState(true);

    const setMenuValue = (props) => {
        let newArr = [...menu];
        newArr[props] = !newArr[props];
        setMenu(newArr);
    }

const MenuItem = <React.Fragment >
      

                <Link className='' to='/'> Home </Link>
                <Link to='/signup' > Sign Up </Link>
                <Link to='/login' > Log in </Link>
                <Link> Home </Link>
                <Link> Home </Link>



</React.Fragment>

    return (
        <div>  
            <div className="rounded-r  flex justify-between w-full p-6 items-center " style={{'backgroundColor':' #2874A6'}}>
                <div className="flex  justify-between  items-center space-x-3">
                   
                    <p className="text-2xl leading-6 text-white">SARWAR HOSSAIN</p>

                    
                    
                </div>

                <div className="hidden text-white md:hidden lg:flex gap-7">
                    {MenuItem}
                </div>

        
              
                
                <div aria-label="toggler" className="flex justify-center items-center ">
                    <button aria-label="open" id="open" onClick={()=>setShow(true)} className={`${show ? 'hidden' : ''} xl:hidden focus:outline-none focus:ring-2`}>
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 12H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 18H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button aria-label="close" id="close" onClick={()=>setShow(false)} className={`${show ? '' : 'hidden'} 
                   xl:hidden focus:outline-none focus:ring-2`}>
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>


            </div>
            {/* div-1 */}


            <div id="Main" className={`${show ? 'translate-x-0' : '-translate-x-full'} xl:rounded-r transform  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-full px-1 w-full sm:w-64 xl:hidden text-white flex-col gap-5`} style={{'backgroundColor':' #2874A6'}}>
                {
                    MenuItem
                }
            
              
            </div>
            
        </div>
    );
};

export default Header;