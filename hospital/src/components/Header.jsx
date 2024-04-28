import { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import Dropdown from "./Drop";
import { useTranslation } from "react-i18next";
import logo from '../assets/images/logo copy.png';
const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const handleStickyHeader=()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky_header');
    }else{
      headerRef.current.classList.remove('sticky_header');
    }
  }
    )
  }

  useEffect(()=>{
    handleStickyHeader()
    return ()=>window.removeEventListener('scroll',handleStickyHeader);
  })
  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");
  

	const navLinks = [
		{
			path: "/home",
			display: "Home",
		},
		{
			path: "/disease",
			display: "Disease ",
		},
		{
			path: "/chatbot",
			display: "Chatbot",
		},
		{
			path: "/crop",
			display: "Crop",
		},
		// {
		// 	path: "/sos",
		// 	display: "Dashboard",

		// },
	];
	const {t}= useTranslation();
	return (
		
		<header className="header flex items-center" ref={headerRef}>
			<div className="container">
				<div className="flex items-center justify-between">
					{/* {logo} */}
					<div>
						<img src={logo} alt='' className="h-1/3 w-1/3"/>
						
					</div>
					<div className="navigation " ref={menuRef} onClick={toggleMenu}>
						<ul className="menu flex flex-row justify-evenly gap-[1rem]">
							{navLinks.map((link, index) => (
								<li key={index}>
									<NavLink
										to={link.path}
										className={(navClass) =>
											navClass.isActive
												? "text-[bg-green-600] "
												: "text-textC text-[16px] leading-7 font-500 hover:text-priC"
										}
									>
										{link.display}
									</NavLink>
								</li>
							))}
						</ul>
					</div>

          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to='/'>
                <figure className="w-[35px] h-[35px] rounded-full">
                  <img src="" className="w-full rounded-full cursor-pointer" alt=""/>
                </figure>
              </Link>
            </div>
			<div className="p-2">
				<Dropdown />
			</div>
            <Link to='/login'>
              <button className="bg-green-600 py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">Login</button>
            </Link>
            <span className="md:hidden"  onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer"/>
            </span>
          </div>
				</div>
			</div>
		</header>
	);
};

export default Header;
