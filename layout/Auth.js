import style from "../styles/Auth.module.css";

export default function Auth({ children }) {
  return (
    <div className="flex h-screen ">
      <div className="m-auto bg-slate-50 rounded-md w-3/7 h-3/4">
        {/* <div className={style.imgStyle}>
           <div className="flex items-center mx-auto">
            <h1>DerLg</h1>
          </div> 
        </div> */}
        <div className="right flex flex-col justify-evenly">
          <div className="text-center py-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
