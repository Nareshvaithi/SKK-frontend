import WhylearnImg from "../../../assets/Images/home/WhyLearn.jpg"
const WhyLearnBharadhanatyam = ()=>{
    return(
        <div>
            <div className="container py-10">
                <div className="text-center pb-10">
                    <h1 className="headingText">Why Learn Bharatanatyam</h1>
                </div>
                <div className="w-full flex flex-col lg:flex-row items-center gap-5">
                    <div className="w-full lg:w-1/2 rounded-xl">
                        <img src={WhylearnImg} className="w-full h-full rounded-xl" alt="" />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <p className="font-mainFont2 text-lg text-justify">Bharatanatyam is one of the oldest classical dance forms in India, helping to preserve the country's rich cultural heritage. It improves physical fitness by strengthening the body, enhancing balance, and increasing flexibility. The dance also allows for emotional expression through facial movements, helping dancers tell stories and convey feelings. It builds mental discipline and focus, as dancers must coordinate their movements with rhythm and music. Additionally, Bharatanatyam offers spiritual growth, as it is often seen as a form of devotion and meditation, bringing inner peace and a sense of connection. Learning Bharatanatyam boosts self-confidence and creativity, allowing dancers to express themselves freely. It also promotes patience and perseverance, as mastering the art requires dedication and consistent practice.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyLearnBharadhanatyam;