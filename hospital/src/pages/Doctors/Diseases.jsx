import { useState } from "react";
import { set } from "rsuite/esm/utils/dateUtils";

const Disease = () => {
  const [input, setInput] = useState("");
  const [photo, setPhoto] = useState(null);
  const [load, setLoad] = useState(false);
  const [prediction, setPrediction] = useState("");
  const [lang, setLang] = useState("en");

  const url = "https://5c2d-61-12-38-118.ngrok-free.app/generate-content/";

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const formData = new FormData();
  //     formData.append("file", photo);
  //     formData.append("query", input);

  //     const response = await fetch(url, {
  //       method: "POST",
  //       mode: "cors",
  //       credentials: "include",
  //       headers: {
  //         // Add any additional headers here if needed
  //         // "Authorization": "Bearer YOUR_ACCESS_TOKEN",
  //       },
  //       body: formData,
  //     });

  //     const data = await response.json();
  //     let main_data = data["data"];
  //     setPrediction(main_data["prediction"]);
  //     console.log("Response:", data);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();
    formData.append("file", photo);
    formData.append("query", input);

    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        // Add any additional headers here if needed
        // "Authorization": "Bearer YOUR_ACCESS_TOKEN",
      },
      body: formData,
    });

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      let main_data = data["data"];
      setPrediction(main_data["prediction"]);
      console.log("Response:", data);
    } else {
      // Handle non-JSON response (e.g., plain text, HTML)
      const textData = await response.text();
      console.log("Non-JSON Response:", textData);
      setPrediction(textData);
      // Handle the response based on your application's requirements
    }
  } catch (error) {
    console.error("Error:", error);
  }
};


  return (
    <>
    <section className="bg-[#fff9ea]">
      <div className='container text-center'>
        <h2 className='heading'>
       Welcome to Disease Prediction 
        </h2>
      </div>
    </section>
      <section className="">
        <div className="grid place-items-center my-14">
          <div className="container bg-gray-100 p-10 grid place-items-center my-14">
            <p className="text-2xl font-medium text-green-600 my-12">
              Upload your image and enter your query to get the disease prediction
              <br />
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="file"
                onChange={(e) => setPhoto(e.target.files[0])}
                accept="image/*"
              />
              <textarea
                className="bg-[#40414f] p-[12px] w-[90%] rounded-md border-none m-[12px] outline-none shadow-[0_0_8px_0_rgba(0,0,0,0.25)] e font-[1.25em] text-white"
                rows={1}
                placeholder="Enter Your Query Here"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              ></textarea>
              <button
                type="submit"
                className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Get Upload
              </button>
            </form>
        <div>
          {load ? (
            <div className="grid place-items-center my-14">Loading...</div>
          ) : null}
          {prediction !== "" ? (
            <div className="grid place-items-center my-14 text-center">
              <p className="font-bold my-3">Disease From Image Predicted:</p>
              <p className="font-bold text-[26px]">
              {prediction}
              </p>
            </div>
          ) : null}
        </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Disease;
