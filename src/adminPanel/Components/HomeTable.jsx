import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../Context_API/ContextProvider";
import { useFormik } from "formik";
import axios from "axios";
import { title } from "framer-motion/client";
import { use } from "react";
const HomeTable = () => {
  const { adminNavData, CMS } = useContext(AdminContext);
  const API_URL = import.meta.env.VITE_API_URI;
  const [postValues, setPostValues] = useState(false);
  const [inputs, setInputs] = useState([]);
  const [endPointCheck, setEndPointCheck] = useState("");
  const [intialValue, setIntialValue] = useState({});
  const [galleryType,setGalleryType]=useState(false)
  useEffect(() => {
    const handleInitialValues = () => {
      const newValues = inputs.reduce((acc, {label, value,endPoint }) => {
        console.log(endPoint)
        setEndPointCheck(endPoint);
        if(label==="Category"){
          acc[value] = value;
        }else{
          acc[value] = "";
        }
        return acc;
      }, {});
      setIntialValue(newValues);
      
    };
    handleInitialValues();
  }, [inputs]);
  const formik = useFormik({
    initialValues: intialValue,

    validate: (values) => {
      let error = {};
      inputs.forEach(({label, value }) => {
        if (label !== "Category" && !values[value]) {
          error[value] = "*Required*";
        }
      });
      return error;
    },
    onSubmit: async (values, { resetForm }) => {
      let formData = new FormData();
      let hasFile = false;
      inputs.map(( {type,value,endPoint}) => {      
        if (type == "file" && values["image"]) {
          formData.append(value, values["image"]);
          hasFile = true;
        } else {
          formData.append(value, values[value]);
        }
     
      });
        try {
         
          const payload = hasFile ? formData : values;
          console.log("formData  = >",formData,  "values  => ", values)
          await axios.post(`${API_URL}/${endPointCheck}`, payload, {
            headers: hasFile ? { "Content-Type": "multipart/form-data" } : {},
          });

          alert("Success");
          resetForm();
        } catch (error) {
          alert("Smothing went wrong");
        }
   
    },
  });
  console.log("endPointCheck",endPointCheck)
  return (
    <div className="py-10 relative h-full">
      {adminNavData
        .filter(({ id }) => id === CMS)
        .map(({ id, title, sublinks }, index) => (
          <div key={index} className="w-full">
            <h1 className="text-3xl font-adminFont pb-10 text-center text-gray-800">
              Content Management System {title}
            </h1>
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
                {sublinks.map(({ label, endPoint, inputs }, subIndex) => {
                  return (
                    <tr
                      key={subIndex}
                      className="text-center text-gray-800 odd:bg-admintheme/20 font-adminFont"
                    >
                      <td className="p-2 text-left text-xl">{label}</td>
                      <td className="p-2">
                        <i
                          onClick={() => {
                            inputs && setInputs(inputs);
                           
                          }}
                          className="material-icons-outlined bg-blue-500 rounded-md text-white px-2 py-1"
                        >
                          add_circle
                        </i>
                      </td>
                      <td className="p-2">
                        <i className="material-icons-outlined bg-red-500 rounded-md text-white px-2 py-1">
                          delete
                        </i>
                      </td>
                      <td className="p-2">
                        <i className="material-icons-outlined bg-yellow-500 rounded-md text-white px-2 py-1">
                          visibility
                        </i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ))}
      {inputs.length > 0 ? (
        <div className="absolute inset-0 w-full h-screen bg-black/30 flex justify-center items-center overflow-scroll z-40">
          <div
            className={`w-1/2 bg-white p-5 rounded-2xl relative ${
              inputs.length > 5 ? "mt-40" : ""
            }`}
          >
            <form onSubmit={formik.handleSubmit} method="POST">
              {inputs.map(({ id, label, type, value, endPoint }, index) => {
                return (
                  <div className="font-adminFont pb-5">
                    <label htmlFor={id} className="block text-gray-700 pb-2">
                      {label}:
                    </label>
                    <input
                      id={id}
                      type={type}
                      name={`${type == "file" ? "image" : value}`}
                      className="w-full bg-admintheme/20 text-admintheme outline-none rounded-xl px-3 py-2"
                      onChange={formik.handleChange}
                      value={label=="Category" ? value : formik.values[value] || ""}
                      readOnly={label === "Category"}
                    />
                    <span style={{ color: "red" }}>{formik.errors[value]}</span>
                  </div>
                );
              })}
              <div className="flex items-center gap-5">
                <button
                  type="submit"
                  className="bg-green-500 px-5 py-2 text-white font-semibold rounded-xl"
                >
                  Update
                </button>
                <button
                  type="button"
                  className="bg-yellow-500 px-5 py-2 text-white font-semibold rounded-xl"
                  onClick={() => formik.resetForm()}
                >
                  Reset
                </button>
              </div>
            </form>
            <i
              onClick={() => setInputs([])}
              className="cursor-pointer absolute top-5 right-5 material-icons-outlined"
            >
              close
            </i>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomeTable;