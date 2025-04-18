import { Link } from "react-router-dom";
import InputBox from "../components/input.component";
import googleIcon from "../imgs/google.png";

const UserAuthForm = ({ type }) => {
    return (
        <section className="h-cover flex items-center justify-center">
            <form className="w-[80%] max-w-[400px]">
                <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
                    {type == "sign-in" ? "Welcome Back" : "Join Us Today"}
                </h1>
                {
                    type != "sign-in" ?
                    <InputBox
                        name="username"
                        type="text"
                        placeholder="Username"
                        icon="fi-rr-user"
                    />
                    : ""
                }
                <InputBox
                    name="email"
                    type="eamil"
                    placeholder="Email"
                    icon="fi-rr-envelope"
                />
                <InputBox
                    name="password"
                    type="password"
                    placeholder="Password"
                    icon="fi-rr-key"
                />
                <button
                    className="btn-dark center mt-14"
                    type="submit"
                >
                    { type.replace("-", " ") }
                </button>
                <div className="relative w-full flex items-center gap-2
                my-10 opacity-10 uppercase text-black font-bold">
                    <hr className="w-1/2 border-black" />
                    <p>or</p>
                    <hr className="w-1/2 border-black" />   
                </div>
                <button className="btn-dark flex items-center justify-center gap-4 w-[90%] center">
                    <img src={googleIcon} className="w-5"></img>
                    Continue with Google
                </button>

                {
                    type == "sign-in" ?
                    <p className="mt-6 text-dark-grey text-xl text-center">
                        Don't have an account?
                        <Link to="/signup" className="underline text-black text-xl ml-1"> Join Us Today.</Link> 
                    </p>
                    :
                    <p className="mt-6 text-dark-grey text-xl text-center">
                        Already have an account?
                        <Link to="/signin" className="underline text-black text-xl ml-1"> Sign In Here.</Link> 
                    </p>
                }

            </form>
        </section>
    )
}

export default UserAuthForm;