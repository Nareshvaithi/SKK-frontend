import HomeFaq from "../components/home/homefaq/HomeFaq";

const Faq = ()=>{
    return(
        <div className="pt-28 pb-10">
            <div className="container">
                <div className="text-center">
                    <h1 className="headingText">Frequently Asked Questions</h1>
                    <p className="contentText pt-3">
                    Welcome to the Saraswathy Kala Kendra FAQ page! We are here to help you with any questions or support you might need. While we strive to provide all essential information on our website, we understand that sometimes you may need direct assistance. Below, you’ll find our contact options, ensuring you can easily reach us for personalized support.
                    </p>
                </div>
                <div>
                    <HomeFaq/>
                </div>
            </div>
        </div>
    )
}

export default Faq;