import { useContext } from "react";
import  Blogsdata  from "../../../DataStore/Blogsdata";
import { ContextProvide } from "../../../Context_API/contextProvider";
import Button from "../../Button/Button";
import BlogsItems from "../blogsItems/BlogsItem";

const SubscribeForm = ()=>{
    const {blogSocialMedia} = useContext(ContextProvide);
    return(
        <div className="py-10">
            <div className="container">
                <div className="w-full bg-gray-200 p-5 lg:p-10 rounded-xl">
                    <div>
                        <h1 className="headingText">Join Our Newletter List</h1>
                        <p className="contentText pt-2">Sign up to get the most recent blogs articles in your email every week.</p>
                    </div>
                    <form className="flex flex-col lg:flex-row items-center gap-5 pt-5">
                        <div className="w-full py-3 px-5 bg-white rounded-full">
                            <input className="outline-none font-mainFont2 w-full text-2xl h-full placeholder:font-mainFont2 placeholder:text-2xl" type="text" placeholder="name@email.com"/>
                        </div>
                        <button>
                            <Button
                            text={"Subscribe"}
                            hoverbg={"bg-white"}
                            bg={"bg-themebrown"}
                            px={"px-5"}
                            py={"py-3"}
                            border={"border"}
                            borderColor={"border-themebrown"}
                            textcolor={"text-white"}
                            hovertextcolor={"group-hover:text-themebrown"}
                            />
                        </button>
                    </form>
                    <div className="pt-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
                        <div className="w-full lg:w-4/6">
                            <p className="font-mainFont2 text-sm font-semibold">SHARE THIS POST TO SOCIAL MEDIA</p>
                        </div>
                        <div className="w-full lg:w-2/6 flex items-center bg-white py-3 justify-center gap-5 rounded-full">
                            {
                                blogSocialMedia.map(({id,icon,name,link}) =>(
                                    <div key={id} title={name} className="cursor-pointer">{icon}</div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Blogsdata/>
            <div className="py-10">
            <BlogsItems/>
            </div>
        </div>
       )
}

export default SubscribeForm;