import { useContext, useState } from "react";
import { ContextProvide } from "../../../Context_API/contextProvider";
import Blogsdata from "../../../DataStore/Blogsdata";

const BlogsItems = () => {
    const { blogs } = useContext(ContextProvide);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    // Calculate the indices for slicing the blogs array
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate total pages
    const totalPages = Math.ceil(blogs.length / itemsPerPage);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <div className="container">
                <div className="text-center">
                    <h1 className="headingText">Blogs</h1>
                    <p className="contentText py-2">Our Latest Creations</p>
                </div>
                <div className="columns-1 md:columns-2 lg:columns-3 space-y-5">
                    {
                        currentBlogs.map(({ id, title, date, thumbnail, content }) => (
                            <div key={id} className="w-full h-auto relative group overflow-hidden">
                                <div className="w-full h-full rounded-xl overflow-hidden">
                                    <img className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" src={thumbnail} alt="" />
                                </div>
                                <div className="flex rounded-xl text-white flex-col justify-end p-5 rounded-b-xl absolute z-10 w-full h-full inset-0 bg-gradient-to-bl from-transparent via-transparent via-black/30 to-black">
                                    <div className="group-hover:-translate-y-1 transition-all duration-700 ease-in-out">
                                    <h1 className="font-mainFont1 text-xl">{title}</h1>
                                    <p className="font-mainFont2 text-sm">{date}</p>
                                    <div className="flex items-center gap-5 pt-2">
                                        <p className="font-mainFont2 text-sm line-clamp-2">{content}</p>
                                        <button className="font-mainFont2 text-sm text-nowrap underline hover:text-blue-500">Learn More</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* Pagination controls */}
                <div className="flex justify-center mt-5">
                    <button
                        disabled={currentPage === 1}
                        onClick={(e) =>{e.preventDefault();handlePageChange(currentPage - 1);window.scrollTo(0,0)}}
                        className="px-3 py-1 mx-1 rounded-xl text-white bg-themebrown disabled:opacity-50"
                    >
                        Previous
                    </button>
                    {
                        Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={(e) => {e.preventDefault();handlePageChange(i + 1);window.scrollTo(0,0)}}
                                className={`px-3 py-1 mx-1 ${currentPage === i + 1 ? 'bg-themebrown rounded-xl text-white' : 'bg-gray-200'}`}
                            >
                                {i + 1}
                            </button>
                        ))
                    }
                    <button
                        disabled={currentPage === totalPages}
                        onClick={(e) =>{e.preventDefault();handlePageChange(currentPage + 1);window.scrollTo(0,0)}}
                        className="px-3 py-1 mx-1 rounded-xl text-white bg-themebrown disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
            <Blogsdata />
        </div>
    );
}

export default BlogsItems;
