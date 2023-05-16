import { useEffect, useState } from "react";

export default function MainPage() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    try {
      fetch("/api/records", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((json) => setRecords(json.data));
    } catch (e) {
      console.log(e);
    }
  }, []);

  const deleteRecord = async (e) => {
    e.preventDefault();

    console.log(e.target.id);
    const id = e.target.id;

    try {
      fetch(`/api/records?id=${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((json) => {
          setRecords(records.filter((record) => record._id !== id));
        });
    } catch (e) {
      console.log(e);
    }
  };

  console.log(records);

  return (
    <section className={"bg-white"}>
      <div className={"container px-6 py-10 mx-auto"}>
        <h1 className={"w-[500px] mx-auto text-center text-6xl font-bold text-blue-600"}>
          Best Books Ever Made
        </h1>
        <p className={"w-[1000px] mx-auto text-center mt-4 text-3xl text-blue-600"}>
          An app that contain the best books of all times
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
          {records.map((record) => (
            <div
              key={record._id}
              className="card"
            >
              <h3 className="card-title">{record.title}</h3>
              <p className="card-author">{record.author}</p>
              <p className="font-normal">Country: {record.country}</p>
              <p className="font-normal">Language: {record.language}</p>
              <p className="font-normal">Pages: {record.pages}</p>
              <p className="font-normal">Year: {record.year}</p>
              
			  {record.imageLink && (
  <img
    src={record.imageLink}
    alt="Book Cover"
    className="card-image"
  />
)}


			  <div className="card-buttons">
			  <button
  				type="button"
 			 	onClick={() => window.open(record.link, "_blank")}
  				className="learn-more-button"
				>
				  Learn More
				</button>
                <button
                  type="button"
                  onClick={deleteRecord}
                  id={record._id}
                  className="delete-button"
                >
                  Delete!
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
