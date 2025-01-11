import { useLocation } from "react-router-dom";
import SubscribeForm from "../components/blogs/NewsletterForm/SubscribeForm";

const BlogsDetails = ()=>{
    const location = useLocation();
    const {id,title,date,thumbnail,content,author} = location.state;
    return(
        <div className="pt-28">
            <div className="container">
                <div className="w-full h-[500px] rounded-xl">
                    <img className="w-full h-full rounded-xl" src={thumbnail} alt="" />
                </div>
                <div className="py-5">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                        <h1 className="headingText">{title}</h1>
                        <p className="font-mainFont1 text-lg font-semibold">Author: {author}</p>
                    </div>
                    <p className="contentText">{date}</p>
                </div>
                <div>
                    <p className="contentText pb-5">{content}</p>
                    <p className="contentText pb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam officiis quam quo possimus doloribus? Quam hic, suscipit, praesentium error dolore accusantium rem obcaecati ad facere, odio voluptate ab! Modi ullam a iure. Provident tempore ipsa exercitationem doloribus magnam repudiandae sunt temporibus maiores blanditiis obcaecati ipsum fugit, laudantium libero commodi in recusandae consequatur adipisci reprehenderit praesentium laborum unde. Nisi pariatur minima ut optio quis recusandae nihil mollitia esse aperiam? Pariatur debitis aperiam impedit mollitia tempore quo assumenda saepe earum deleniti? Amet quidem, quo enim numquam dolor aut eligendi libero quis corporis voluptatum sunt accusamus ipsum veritatis quam? Corrupti debitis delectus totam.</p>
                    <p className="contentText pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsam atque repudiandae amet eum in eaque at voluptas? Aliquid odio in assumenda similique cum nihil nam placeat eveniet, exercitationem alias, autem, qui sit quos sint id eos! Fugit beatae quae repellat earum deserunt sit soluta aspernatur, deleniti modi ratione quasi esse cupiditate. Doloribus, temporibus! Odio, consequuntur quae? Aliquam est et iusto quisquam aperiam cumque, repellendus architecto! Voluptatibus laboriosam, non unde at ducimus, quo nihil ut id, quas corporis velit qui voluptates totam explicabo rerum excepturi itaque numquam deserunt accusamus. Facilis quasi laboriosam ipsum distinctio accusamus mollitia quae quo. Quam, rem.</p>
                </div>
            </div>
            <SubscribeForm/>
        </div>
    )
}

export default BlogsDetails;