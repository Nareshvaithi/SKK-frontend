import { useContext, useEffect } from "react"
import { ContextProvide } from "../Context_API/contextProvider"
import { AiOutlineYoutube, AiOutlineInstagram, AiOutlineFacebook, AiOutlineX } from "react-icons/ai";
import thumbnail01 from "../assets/Images/blogs/blog01.jpg";
import thumbnail02 from "../assets/Images/blogs/blog02.jpg";
import thumbnail03 from "../assets/Images/blogs/blog03.jpg";
import thumbnail04 from "../assets/Images/blogs/blog04.jpg";
import thumbnail05 from "../assets/Images/blogs/blog05.jpg";
import thumbnail06 from "../assets/Images/blogs/blog06.jpg";
import thumbnail07 from "../assets/Images/blogs/blog07.jpg";
import thumbnail08 from "../assets/Images/blogs/blog08.jpg";
import thumbnail09 from "../assets/Images/blogs/blog09.jpg";
import thumbnail10 from "../assets/Images/blogs/blog10.jpg";
const Blogsdata = ()=>{
    const {setBlogSocialMedia,setBlogs} = useContext(ContextProvide);
    useEffect(()=>{
        const socialMedia = [
            {id:1,name:"Instagram",icon:<AiOutlineInstagram size={25}/>,link:""},
            {id:2,name:"Youtube",icon:<AiOutlineYoutube size={25}/>,link:""},
            {id:3,name:"Facebook",icon:<AiOutlineFacebook size={23}/>,link:""},
            {id:4,name:"X",icon:<AiOutlineX size={20}/>,link:""},
        ]
        const blogs = [
            {
                id: 1,
                date: "2025-01-09",
                thumbnail: thumbnail01,
                title: "History and Evolution of Bharatanatyam",
                content: "Bharatanatyam is one of the oldest classical dance forms of India. It originated in Tamil Nadu and has a rich history that dates back over 2,000 years. Originally performed in temples as a form of devotional expression, it has evolved into a popular stage art form."

            },
            {
                id: 2,
                date: "2025-01-10",
                thumbnail: thumbnail02,
                title: "The Significance of Mudras in Bharatanatyam",
                content: "Mudras, or hand gestures, play a crucial role in Bharatanatyam. Each mudra has a specific meaning and helps convey the story or emotions of the performance. They are a fundamental aspect of the dance, enhancing its expressive power."
            },
            {
                id: 3,
                date: "2025-01-11",
                thumbnail: thumbnail03,
                title: "Costumes and Jewelry in Bharatanatyam",
                content: "The traditional costume of a Bharatanatyam dancer is elaborate and colorful, often made of silk with zari work. Jewelry, including necklaces, earrings, and bangles, plays a significant role in enhancing the dancer's appearance and the visual appeal of the performance."
            },
            {
                id: 4,
                date: "2025-01-12",
                thumbnail: thumbnail04,
                title: "Learning Bharatanatyam: Tips for Beginners",
                content: "Starting your journey in Bharatanatyam requires dedication and patience. Beginners should focus on mastering the basic steps, understanding the rhythm, and practicing regularly. Finding a good guru and being consistent with practice are key to progress."
            },
            {
                id: 5,
                date: "2025-01-13",
                thumbnail: thumbnail05,
                title: "The Role of Music in Bharatanatyam",
                content: "Music is an integral part of Bharatanatyam. The dance is usually performed to Carnatic music, with instruments like the mridangam, veena, and flute providing rhythm and melody. The lyrics, often devotional, help convey the theme of the performance."
            },
            {
                id: 6,
                date: "2025-01-14",
                thumbnail: thumbnail06,
                title: "Bharatanatyam and Spirituality",
                content: "Bharatanatyam is deeply rooted in spirituality. Originally performed in temples as an offering to deities, it is considered a form of meditation and devotion. The dance seeks to connect the performer and the audience with the divine."
            },
            {
                id: 7,
                date: "2025-01-15",
                thumbnail: thumbnail07,
                title: "The Global Influence of Bharatanatyam",
                content: "Bharatanatyam has gained international acclaim, with performances and practitioners around the world. Its universal themes of storytelling and expression resonate with diverse audiences, making it a global ambassador of Indian culture."
            },
            {
                id: 8,
                date: "2025-01-16",
                thumbnail: thumbnail08,
                title: "Famous Bharatanatyam Performers",
                content: "Many renowned artists have contributed to the popularity of Bharatanatyam. Dancers like Rukmini Devi Arundale and Yamini Krishnamurthy have left an indelible mark on the art form, inspiring generations of performers."
            },
            {
                id: 9,
                date: "2025-01-17",
                thumbnail: thumbnail09,
                title: "Bharatanatyam as a Fitness Regimen",
                content: "Practicing Bharatanatyam can be an excellent workout, improving flexibility, strength, and stamina. The dance form requires rigorous physical movements and control, making it a great way to stay fit and healthy."
            },
            {
                id: 10,
                date: "2025-01-18",
                thumbnail: thumbnail10,
                title: "Cultural Festivals Celebrating Bharatanatyam",
                content: "Several cultural festivals across India and abroad celebrate Bharatanatyam, showcasing its beauty and richness. Events like the Natyanjali Festival provide a platform for dancers to perform and promote the art form to wider audiences."
            },
            {
                id: 11,
                date: "2025-01-09",
                thumbnail: thumbnail01,
                title: "History and Evolution of Bharatanatyam",
                content: "Bharatanatyam is one of the oldest classical dance forms of India. It originated in Tamil Nadu and has a rich history that dates back over 2,000 years. Originally performed in temples as a form of devotional expression, it has evolved into a popular stage art form."

            },
            {
                id: 12,
                date: "2025-01-10",
                thumbnail: thumbnail02,
                title: "The Significance of Mudras in Bharatanatyam",
                content: "Mudras, or hand gestures, play a crucial role in Bharatanatyam. Each mudra has a specific meaning and helps convey the story or emotions of the performance. They are a fundamental aspect of the dance, enhancing its expressive power."
            },
            {
                id: 13,
                date: "2025-01-11",
                thumbnail: thumbnail03,
                title: "Costumes and Jewelry in Bharatanatyam",
                content: "The traditional costume of a Bharatanatyam dancer is elaborate and colorful, often made of silk with zari work. Jewelry, including necklaces, earrings, and bangles, plays a significant role in enhancing the dancer's appearance and the visual appeal of the performance."
            },
            {
                id: 14,
                date: "2025-01-12",
                thumbnail: thumbnail04,
                title: "Learning Bharatanatyam: Tips for Beginners",
                content: "Starting your journey in Bharatanatyam requires dedication and patience. Beginners should focus on mastering the basic steps, understanding the rhythm, and practicing regularly. Finding a good guru and being consistent with practice are key to progress."
            },
            {
                id: 15,
                date: "2025-01-13",
                thumbnail: thumbnail05,
                title: "The Role of Music in Bharatanatyam",
                content: "Music is an integral part of Bharatanatyam. The dance is usually performed to Carnatic music, with instruments like the mridangam, veena, and flute providing rhythm and melody. The lyrics, often devotional, help convey the theme of the performance."
            },
            {
                id: 16,
                date: "2025-01-14",
                thumbnail: thumbnail06,
                title: "Bharatanatyam and Spirituality",
                content: "Bharatanatyam is deeply rooted in spirituality. Originally performed in temples as an offering to deities, it is considered a form of meditation and devotion. The dance seeks to connect the performer and the audience with the divine."
            },
            {
                id: 17,
                date: "2025-01-15",
                thumbnail: thumbnail07,
                title: "The Global Influence of Bharatanatyam",
                content: "Bharatanatyam has gained international acclaim, with performances and practitioners around the world. Its universal themes of storytelling and expression resonate with diverse audiences, making it a global ambassador of Indian culture."
            },
            {
                id: 18,
                date: "2025-01-16",
                thumbnail: thumbnail08,
                title: "Famous Bharatanatyam Performers",
                content: "Many renowned artists have contributed to the popularity of Bharatanatyam. Dancers like Rukmini Devi Arundale and Yamini Krishnamurthy have left an indelible mark on the art form, inspiring generations of performers."
            },
            {
                id: 19,
                date: "2025-01-17",
                thumbnail: thumbnail09,
                title: "Bharatanatyam as a Fitness Regimen",
                content: "Practicing Bharatanatyam can be an excellent workout, improving flexibility, strength, and stamina. The dance form requires rigorous physical movements and control, making it a great way to stay fit and healthy."
            },
            {
                id: 20,
                date: "2025-01-18",
                thumbnail: thumbnail10,
                title: "Cultural Festivals Celebrating Bharatanatyam",
                content: "Several cultural festivals across India and abroad celebrate Bharatanatyam, showcasing its beauty and richness. Events like the Natyanjali Festival provide a platform for dancers to perform and promote the art form to wider audiences."
            }
        ];
        setBlogSocialMedia(socialMedia);
        setBlogs(blogs);
    },[])

    return null;
}

export default Blogsdata;