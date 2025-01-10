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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {
                        currentBlogs.map(({ id, title, date, thumbnail, content }) => (
                            <div key={id} className="w-full h-[300px] relative group overflow-hidden">
                                <div className="w-full h-full rounded-t-xl rounded-b-2xl overflow-hidden">
                                    <img className="w-full h-full object-cover" src={thumbnail} alt="" />
                                </div>
                                <div className="p-5 rounded-b-xl absolute z-10 w-full h-auto text-gray-700 bottom-0 bg-white transition-all duration-1000 ease-in-out group-hover:pb-8">
                                    <h1 className="text-sm font-mainFont1 font-semibold line-clamp-2">{title}</h1>
                                    <p className="text-sm font-mainFont2">{date}</p>
                                    <button className="font-mainFont2 text-sm border-[1px] border-themebrown/50 text-themebrown px-3 py-1 mt-2">
                                        Read More
                                    </button>
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
