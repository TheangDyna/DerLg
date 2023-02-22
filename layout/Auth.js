import style from "../styles/Auth.module.css";
export default function Auth({ children }) {
  return (
    <div className={`flex h-screen ${style.bgImage}`}>
      <div className="m-auto bg-slate-50 rounded-md md:w-2/5 sm:w-3/6 lg:w-1/4 h-3/7">
        <div className="right flex flex-col justify-evenly">
          <div className="text-center py-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
