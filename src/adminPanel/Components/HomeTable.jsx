import { useContext, useState } from "react";
import { AdminContextProvide } from "../Context_API/ContextProvider";

const HomeTable = () => {
    const { adminNavData, CMS} = useContext(AdminContextProvide);
    const [inputs,setInputs] = useState([]);
    return (
        <div className="py-10 relative h-full">
            {adminNavData
                .filter(({ id }) => id === CMS)
                .map(({ id, title, sublinks }, index) => (
                    <div key={index} className="w-full">
                        <h1 className="text-3xl font-adminFont pb-10 text-center text-gray-800">Content Management System {title}</h1>
                        <table className="w-full border-separate">
                            <thead>
                                <tr className="text-center font-adminFont font-semibold text-white bg-admintheme">
                                    <td className="p-2 text-xl text-left">Section</td>
                                    <td className="p-2">Add</td>
                                    <td className="p-2">Delete</td>
                                    <td className="p-2">Explore</td>
                                </tr>
                            </thead>
                            <tbody>
                                {sublinks.map(({ label, inputs }, subIndex) => (
                                    <tr key={subIndex} className="text-center text-gray-800 odd:bg-admintheme/20 font-adminFont">
                                        <td className="p-2 text-left text-xl">{label}</td>
                                        <td className="p-2">
                                            <i onClick={()=>inputs && setInputs(inputs)} className="material-icons-outlined bg-blue-500 rounded-md text-white px-2 py-1">add_circle</i>
                                        </td>
                                        <td className="p-2">
                                            <i className="material-icons-outlined bg-red-500 rounded-md text-white px-2 py-1">delete</i>
                                        </td>
                                        <td className="p-2">
                                            <i className="material-icons-outlined bg-yellow-500 rounded-md text-white px-2 py-1">visibility</i>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
                 {inputs.length > 0 ? <div className="absolute inset-0 w-full h-screen bg-black/30 flex justify-center items-center">
                    <div className="w-1/2 bg-white p-5 rounded-2xl relative">
                        <form action="" method="POST">
                            {
                                inputs.map(({id,label,type})=>{
                                    return(
                                        <div className="font-adminFont pb-5">
                                            <label htmlFor={id} className="block text-gray-700 pb-2">{label}:</label>
                                            <input id={id} type={type} className="w-full bg-admintheme/20 text-admintheme outline-none rounded-xl px-3 py-2"/>
                                        </div>
                                    )
                                })
                            }
                            <div className="flex items-center gap-5">
                                <button className="bg-green-500 px-5 py-2 text-white font-semibold rounded-xl">Update</button>
                                <button className="bg-yellow-500 px-5 py-2 text-white font-semibold rounded-xl">Reset</button>
                            </div>
                        </form>
                            <i onClick={()=>setInputs([])} className="cursor-pointer absolute top-5 right-5 material-icons-outlined">close</i>
                    </div>
                </div>:""}
        </div>
    );
};

export default HomeTable;
