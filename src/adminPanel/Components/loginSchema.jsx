import * as yup from "yup";
const loginSchema = yup.object().shape({
    username: yup
        .string()
        .required('This field is required'),
    password: yup
        .string()
        .required('This field is required')
});

export default loginSchema;