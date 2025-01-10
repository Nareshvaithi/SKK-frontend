import BlogsItems from "../components/blogs/blogsItems/BlogsItem";
import SubscribeForm from "../components/blogs/NewsletterForm/SubscribeForm";

const Blogs = ()=>{
    return(
        <div className="pt-32 bg-gray-100">
            <BlogsItems/>
            <SubscribeForm/>
        </div>
    )
}

export default Blogs;