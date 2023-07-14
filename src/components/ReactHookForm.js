import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../ReactHookForm.module.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';

const ReactHookForm = (props) => {
    
    const { setUserdata } = props;
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const password = useRef({});
    password.current = watch("password", "");
        
    const onSubmit = (data) => {
        setUserdata(data);
        navigate("/");
    };

    return (
        <>
            <Navbar />
            <div className={styles["react-hook-form-container"]}>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <h1>Sign Up (react-hook-form Library)</h1>
                    <input
                    type="text"
                    placeholder="First Name"
                    {...register("firstName", {
                        required: "First Name is required",
                    })}
                    />
                    {errors.firstName && <p>{errors.firstName.message}</p>}

                    <input
                    type="text"
                    placeholder="Last Name"
                    {...register("lastName", {
                        required: "Last Name is required",
                    })}
                    />
                    {errors.lastName && <p>{errors.lastName.message}</p>}

                    <input
                    type="text"
                    placeholder="Email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email format",
                        },
                    })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}

                    <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long",
                        },
                    })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}

                    <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    {...register("confirmPassword", {
                        required: "Confirm Password is required",
                        minLength: {
                        value: 8,
                        message: "Confirm Password must match the Password",
                        },
                        validate: (value) =>
                        value === password.current || "Passwords do not match",
                    })}
                    />
                    {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
}

export default ReactHookForm;
