import { useContext } from "react";
import  Blogsdata  from "../../../DataStore/Blogsdata";
import { ContextProvide } from "../../../Context_API/contextProvider";

const SubscribeForm = ()=>{
    const {blogSocialMedia} = useContext(ContextProvide);
    return(
        <div className="py-10">
            <div className="container">
                <div className="w-full bg-gray-200 py-10 px-10 rounded-xl">
                    <div>
                        <h1 className="headingText">Join Our Newletter List</h1>
                        <p className="contentText pt-2">Sign up to get the most recent blogs articles in your email every week.</p>
                    </div>
                    <form className="flex items-center gap-5 pt-5">
                        <div className="w-5/6 py-3 px-5 bg-white rounded-full">
                            <input className="outline-none font-mainFont2 w-full text-2xl h-full placeholder:font-mainFont2 placeholder:text-2xl" type="text" placeholder="name@email.com"/>
                        </div>
                        <div className="w-1/6 py-3 px-5 rounded-full text-2xl font-mainFont2 text-white bg-themebrown text-center">
                            <button>Subscribe</button>
                        </div>
                    </form>
                    <div className="pt-10 flex items-center justify-between">
                        <div className="w-4/6">
                            <p className="font-mainFont2 text-sm font-semibold">SHARE THIS POST TO SOCIAL MEDIA</p>
                        </div>
                        <div className="flex items-center bg-white w-2/6 py-3 justify-center gap-5 rounded-full">
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
        </div>
       )
}

export default SubscribeForm;