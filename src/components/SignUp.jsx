import ThemeController from "./ThemeController.jsx";

const SignUp = () => {
  return (
    <div className="h-screen flex justify-center items-center w-screen px-4">
      <div className="absolute top-4 right-0 md:right-4">
        <ThemeController size={"6"} />
      </div>
      <div className="max-w-md shadow-md px-2 md:px-4 py-4 md:py-6 border border-slate-400 rounded-md">
        <div className="text-center">
          <div className="text-2xl font-bold">Create your account</div>
          <div className="font-semibold ">
            Already have ans account ?
            <a href="#" className="text-sky-600 pl-2">
              Login
            </a>
          </div>
        </div>
        <div className="mb-2 mx-auto mt-4">
          <label htmlFor="email" className="block pb-1 font-bold">
            Name:
          </label>
          <input
            type="name"
            placeholder="Enter Name"
            className="input input-bordered input-sm w-full rounded-sm"
          />
        </div>
        <div className="mb-2 mx-auto mt-4">
          <label htmlFor="email" className="block pb-1 font-bold">
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            className="input input-bordered input-sm w-full rounded-sm"
          />
        </div>
        <div className="mb-2 mx-auto mt-4">
          <label htmlFor="email" className="block pb-1 font-bold">
            Password:
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="input input-bordered input-sm w-full rounded-sm"
          />
        </div>
        <button className="btn w-full font-bold btn-sm	mt-2 btn-info">
          Login
        </button>
      </div>
    </div>
  );
};

export default SignUp;
