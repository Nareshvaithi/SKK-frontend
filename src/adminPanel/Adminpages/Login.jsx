import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import loginSchema from "../Components/LoginSchema";
import { useContext } from "react";
import { AdminContext } from "../Context_API/ContextProvider";

const Login = () => {
    const navigate = useNavigate();
    const { login,isAuthenticated } = useContext(AdminContext);

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            alert("working")
            login();
            navigate('/admin');
            console.log(isAuthenticated);
        }
    });

    return (
        <div className="flex items-center justify-center w-full h-screen bg-gray-900">
            <div className="w-[300px] p-5 bg-white/20 backdrop-blur-3xl border border-white/20 relative rounded-xl">
                <div className="text-center text-white font-semibold text-xl py-5">
                    <h1>Login Here</h1>
                </div>
                <form autoComplete="off" onSubmit={formik.handleSubmit}>
                    {/* Username Field */}
                    <label className="block text-white text-sm pb-2" htmlFor="username">Username</label>
                    <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        id="username"
                        name="username"
                        className="p-2 w-full bg-white/10 focus:outline-none text-white placeholder-white/30"
                        type="text"
                        value={formik.values.username}
                        placeholder="Enter your username"
                    />
                    {formik.errors.username && formik.touched.username && (
                        <p className="text-red-500 text-xs">{formik.errors.username}</p>
                    )}

                    {/* Password Field */}
                    <label className="block text-white text-sm py-2" htmlFor="password">Password</label>
                    <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        id="password"
                        name="password"
                        className="p-2 w-full bg-white/10 focus:outline-none text-white placeholder-white/30"
                        type="password"
                        value={formik.values.password}
                        placeholder="Enter your password"
                    />
                    {formik.errors.password && formik.touched.password && (
                        <p className="text-red-500 text-xs">{formik.errors.password}</p>
                    )}

                    <button type="submit" className="p-2 w-full my-10 text-black font-semibold bg-gray-100">
                        Log In
                    </button>
                </form>

                {/* Background Decorations */}
                <div className="-z-20 absolute bg-gradient-to-tl from-blue-700 to-blue-400 w-28 h-28 rounded-full -top-10 -left-10 opacity-70"></div>
                <div className="-z-20 absolute bg-gradient-to-tl from-orange-700 to-orange-400 w-28 h-28 rounded-full -bottom-16 -right-10 opacity-70"></div>
                <div className="-z-20 absolute bg-gradient-to-tl from-green-700 to-green-400 w-20 h-20 rounded-full -top-10 -right-10 opacity-70"></div>
            </div>

            {/* Close Button */}
            <div onClick={() => navigate('/', { replace: true })}
                className="cursor-pointer text-white text-4xl fixed right-10 top-10">
                &times;
            </div>
        </div>
    );
};

export default Login;
