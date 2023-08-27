export default function Boton({close,children,...props}) {
    
    const style = {
        open: "w-full bg-[#181818] font-semibold py-3 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg  flex items-center justify-center",
        close: " p-1 items-start font-bold rounded-full bg-slate-600 hover:bg-red-600"
    }

  return (
    <div className="   pl-6 pr-6">
      <button
            className={close ? style.close : style.open}
            {...props}
      >
            {children}
      </button>
    </div>
  );
}
