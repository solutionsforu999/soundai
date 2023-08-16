import { useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location=useLocation();
    return (
        <nav data-bs-theme="dark" className="navbar  navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to={'/'}>
                <img width='140px' alt='logo' src='https://uploads-ssl.webflow.com/6215d56ae85caa0a3026a433/62a098a734040ddb4c66b3be_murf-ai-logo-light.svg'/>
                </NavLink>
                {/* <NavLink className="navbar-brand" >Navbar</NavLink> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Products</NavLink>
                            <ul className="dropdown-menu  dropdown-menu-dark">
                                {['tts', 'voice cloning', 'voice changer'].map((product, index) =>
                                    <li className='m-1' key={`product${index}`}><NavLink to={product} className={location.pathname.split('/')[location.pathname.split('/').length-1]===product?'dropdown-item active':'dropdown-item'}>{product}</NavLink></li>
                                )}
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Create</NavLink>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                {['e-learning', 'explainer video', 'presentation'].map((creation, index) =>
                                    <li className='m-1' key={`creation${index}`}><NavLink to={creation} className={location.pathname.split('/')[location.pathname.split('/').length-1]===creation?'dropdown-item active':'dropdown-item'}>{creation}</NavLink></li>
                                )}
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'entreprise'} className={location.pathname.split('/')[1]==='entreprise'?"nav-link":"nav-link active"}>Entreprise</NavLink>

                        </li>
                        <li className="nav-item">
                            <NavLink to={'pricing'} className={location.pathname.split('/')[1]==='pricing'?"nav-link":"nav-link active"}>Pricing</NavLink>

                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Ressources
                            </NavLink>
                            <ul className="dropdown-menu  dropdown-menu-dark">
                                {['help center', 'zeekly demo', 'blog'].map((ressource, index) =>
                                    <li className='m-1' key={`ressource${index}`}><NavLink to={ressource} className={location.pathname.split('/')[location.pathname.split('/').length-1]===ressource?'dropdown-item active':'dropdown-item'}>{ressource}</NavLink></li>
                                )}
                            </ul>
                        </li>
                        <li className="nav-item">
                            <div className='d-grid'>
                                <button className='btn btn-outline-secondary my-auto'>Login</button>

                            </div>
                        </li>
                        <li className="nav-item">
                            <div className='d-grid'>
                                <button className='btn btn-light my-auto border'>Sign up</button>

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    );
}
export default Navbar;