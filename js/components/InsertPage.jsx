// js/components/InsertPage.jsx
import { useState } from "react";

export default function InsertPage() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("");
  const [pages, setPages] = useState(0);
  const [year, setYear] = useState(0);
  const [imageLink, setImageLink] = useState("");
  const [link, setLink] = useState("");

  const insertRecord = async (e) => {
    e.preventDefault();

    const data = {
      title,
      author,
      country,
      language,
      pages,
      year,
      imageLink,
      link,
    };

    try {
      const response = await fetch("/api/records", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Record added successfully");
        // Reset form fields
        setTitle("");
        setAuthor("");
        setCountry("");
        setLanguage("");
        setPages(0);
        setYear(0);
        setImageLink("");
        setLink("");
      } else {
        console.log("Error adding record");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
	<section className="bg-white">
	  <div className="container px-6 py-10 mx-auto">
		<h1 className="w-[500px] mx-auto text-center text-6xl font-bold text-blue-600">Insert your book</h1>
		<p className="w-[1000px] mx-auto text-center mt-4 text-3xl text-blue-600">This is where you can insert your book</p>
  
		<form>
		  <div className="mb-6">
			<label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
			<input
			  type="text"
			  id="title"
			  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			  placeholder="Title"
			  value={title}
			  onChange={(e) => setTitle(e.target.value)}
			  required
			/>
		  </div>
		  <div className="mb-6">
			<label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author</label>
			<input
			  type="text"
			  id="author"
			  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			  placeholder="Author"
			  value={author}
			  onChange={(e) => setAuthor(e.target.value)}
			  required
			/>
		  </div>
		  <div className="mb-6">
			<label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
			<input
			  type="text"
			  id="country"
			  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			  placeholder="Country"
			  value={country}
			  onChange={(e) => setCountry(e.target.value)}
			  required
			/>
		  </div>
		  <div className="mb-6">
			<label htmlFor="language" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Language</label>
			<input
			  type="text"
			  id="language"
			  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			  placeholder="Language"
			  value={language}
			  onChange={(e) => setLanguage(e.target.value)}
			  required
			/>
		  </div>
		  <div className="mb-6">
		  <label htmlFor="pages" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pages</label>
          <input
            type="number"
            id="pages"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Pages"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="year" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year</label>
          <input
            type="number"
            id="year"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="imageLink" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image Link</label>
          <input
            type="text"
            id="imageLink"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Image Link"
            value={imageLink}
            onChange={(e) => setImageLink(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          onClick={insertRecord}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  </section>
);

  
}