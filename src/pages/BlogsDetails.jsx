import { useLocation } from "react-router-dom";
import SubscribeForm from "../components/blogs/NewsletterForm/SubscribeForm";
import BlogsItems from "../components/blogs/blogsItems/BlogsItem";

const BlogsDetails = ()=>{
    const formateDate = (date)=>{
        const Stringdate = new Date(date);
        return Stringdate.toLocaleString();
    }

    const location = useLocation();
    const {_id,title,date,bannerImage,content,author} = location.state;
    return(
        <div key={_id} className="pt-28">
            <div className="container">
                <div className="w-full h-[500px] rounded-xl">
                    <img className="w-full h-full rounded-xl" src={bannerImage} alt="" />
                </div>
                <div className="py-5">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                        <h1 className="headingText">{title}</h1>
                        <p className="font-mainFont1 text-lg font-semibold">Author: {author}</p>
                    </div>
                    <p className="contentText">{formateDate(date)}</p>
                </div>
                <div>
                    <p className="contentText pb-5">{content}</p>
                </div>
            </div>
            <SubscribeForm/>
            <BlogsItems/>
        </div>
    )
}

export default BlogsDetails;