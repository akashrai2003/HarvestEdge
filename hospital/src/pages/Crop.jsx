import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Fertilizer = () => {
	const { t } = useTranslation();

	const [load, setLoad] = useState(false);
	const [soilType, setSoilType] = useState("");
	const [cropType, setCropType] = useState("");
	const [lat, setLat] = useState([]);
	const [long, setLong] = useState([]);
	const [nitrogen, setNitrogen] = useState("");
	const [phosphorus, setPhosphorus] = useState("");
	const [potassium, setPotassium] = useState("");
	const [prediction, setPrediction] = useState("");
	const [information, setInformation] = useState("");
	const [application, setApplication] = useState("");
	const [specification, setSpecification] = useState("");

	const Api_Key = "7bf19de835b211567ac76e80886180fd";
	const API_end = "https://api.openweathermap.org/data/2.5/onecall?";
	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			setLat(position.coords.latitude);
			setLong(position.coords.longitude);
		});
		// let final= `${API_end}lat=${lat}&lon=${long}&appid=${Api_Key}`
		axios
			.get(
				`${API_end}lat=${lat}&lon=${long}&appid=${Api_Key}`
			)
			.then((response) => {
				console.log(response.data);
			});
	}, []);

	function onSearchSubmit(term) {
		setLoad(true);
		console.log("Clicked");
		let url = "http://127.0.0.1:5000/fertilizer-predict";
		let body = JSON.stringify({
			"soil-type": soilType,
			"crop-type": cropType,

			nitrogen: parseFloat(nitrogen),
			phosphorous: parseFloat(phosphorus),
			pottasium: parseFloat(potassium),
			lat: parseFloat(lat),
			long: parseFloat(long),
		});
		console.log("body", body);
		try {
			fetch(url, {
				// mode: "no-cors",
				method: "post",
				headers: {
					"Content-Type": "application/json;charset=utf-8",
					"Access-Control-Allow-Origin": "*",
				},
				body: body,
			})
				.then((response) => response.json())
				.then((data) => {
					let main_data = data["data"];
					setPrediction(main_data["prediction"]);
					setInformation(main_data["info"]["info"]);
					setApplication(
						main_data["info"]["application"]["1"] +
							" " +
							main_data["info"]["application"]["2"]
					);
					setSpecification(main_data["info"]["specifications"]);
					console.log("res", data); // gives SyntaxError: Unexpected end of input
				})
				.catch((error) => {
					console.log(error);
				});
		} catch (e) {
			console.log(e);
		}

		setLoad(false);
	}

	return (
		<>
			<section className="">
				<div className="grid place-items-center my-14  ">
					<div className="container bg-gray-100 p-10 grid place-items-center mt-14  ">
						<p className="text-2xl font-medium text-green-600 my-12">
							{t("predict")}
							<br />
						</p>

						<div className="flex flex-row my-2 w-3/5">
							<div>{t("typesoil")}</div>
							<div className="ml-16 ">
								<select
									onChange={(e) => setSoilType(e.target.value)}
									className="border-2 border-green-600 p-2 rounded-sm w-64"
								>
									<option value="Clay">{t("soil1")}</option>
									<option value="Sandy">{t("soil2")}</option>
									<option value="Loamy">{t("soil3")}</option>
									<option value="Black">{t("soil4")}</option>
									<option value="Red">{t("soil5")}</option>
								</select>
							</div>
						</div>
						{/* dropdown for crop type */}

						{/* <div className="flex flex-row my-2 w-3/5">
							<div>Select a Crop Type</div>
							<div className="ml-16 ">
								<select
									onChange={(e) => setCropType(e.target.value)}
									className="border-2 border-green-600 p-2 rounded-sm w-64"
								>
									<option value="Wheat">Apple</option>
									<option value="Maize">Maize</option>
									<option value="Sugarcane">Sugarcane</option>
									<option value="Cotton">Cotton</option>
									<option value="Ground Nuts">Groundnut</option>
									<option value="Oil seeds">Oilseed</option>
									<option value="Tobacco">Tobacco</option>
									<option value="Millets">Millets</option>
									<option value="Pulses">Pulses</option>
									<option value="Barley">Barley</option>
									<option value="Paddy">Paddy</option>
								</select>
							</div>
						</div> */}

						<input
							onChange={(e) => setNitrogen(e.target.value)}
							className="w-3/5 my-2"
							type="text"
							placeholder="Enter nitrogen value"
						/>
						<input
							onChange={(e) => setPhosphorus(e.target.value)}
							className="w-3/5 my-2"
							type="text"
							placeholder="Enter phosphorous value"
						/>
						<input
							onChange={(e) => setPotassium(e.target.value)}
							className="w-3/5 my-2"
							type="text"
							placeholder="Enter potassium value"
						/>

						<div className="grid place-items-center mt-14 ">
							<div className="mt-2">
								<button
									onClick={() => onSearchSubmit("aaa")}
									type="button"
									className="inline-block  px-6 py-2.5 bg-green-600 text-white font-medium text-xs 
                  leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg
                  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800
                  active:shadow-lg transition duration-150 ease-in-out"
								>
									{t("predicta")}
								</button>
							</div>
						</div>
					</div>
				</div>
				<div>
					{load ? (
						<div className="grid place-items-center my-14  ">loading </div>
					) : (
						<div></div>
					)}
					{prediction !== "" ? (
						<div className="grid place-items-center my-14 text-center ">
							<p className="font-bold my-3">Crops Predicted: </p>
							{prediction}
							<p className="font-bold my-3">Information</p>
							{information}
						</div>
					) : (
						<div></div>
					)}
				</div>
				
			</section>
		</>
	);
};

export default Fertilizer;
