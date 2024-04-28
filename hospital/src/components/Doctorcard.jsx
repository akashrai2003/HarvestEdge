/*eslint-disable react/prop-types */
import img6 from "../assets/images/img6.png";

const Doctorcard = ({ doctor }) => {
	const { Name, Specialty, Location, Profile_URL,Code } = doctor;
	return (
    <>
      <a href={Profile_URL} target="_blank">
  
		<div className="p-3 lg:p-5">
			<div>
				<img src={img6} alt="" />
			</div>
			<div>
				<h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-head font-[700] mt-3 lg:mt-5">
					{Name}
				</h2>
				<div className="mt-2 lg:mt-4 flex items-center justify-between">
					<span className="bg-[#CCF0F3] text-iris py-1 px-2 lg:py-2 lg:px-6 text-[13px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
						{Specialty}
					</span>
				</div>
			
					<button>Book Appointment</button>
				
        <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
          <div>
          <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-head">Location</h3>
          <p className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400]"> {Location}</p>
          </div>
        </div>
			</div>
		</div>
    </a>
    </>
	);
};

export default Doctorcard;
