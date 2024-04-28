import { Link } from "react-router-dom";
import logo from "../assets/images/logo copy.png";

const Linkss = [
	{
		path: "/",
		display: "Home",
	},
	{
		path: "/",
		display: "About us",
	},
	{
		path: "/services",
		display: "Services",
	},
	{
		path: "/",
		display: "Chatbot",
	},
];

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className=" pt-10">
			<div className="container">
				<div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
					<div>
						<img src={logo} className="h-1/2 w-1/1" />
						<p className="text-[16px] leading-7 font-[400] text-head mt-4">
							Copyright {year}
						</p>
					</div>
					<div>
						<h2 className="text-[20px] leading-[30px] font-[700] text-head">
							Quick links
						</h2>
            <ul>
              {Linkss.map((item,index)=>
              <li key={index}>
                <Link to={item.path} className="text-[16px] leading-7 font-[400] text-head mt-4">{item.display}</Link>
                </li>
              )}
            </ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
