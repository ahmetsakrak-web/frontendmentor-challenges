export const Input = ({ text, placeholder, ...rest }) => (
    <label className="flex flex-col items-start uppercase">
      <span className="tracking-[0.2rem] text-sm font-semibold text-slate-600 ">
        {text}
      </span>
      <input
        {...rest}
        type="number"
        className="border w-20 sm:w-32 h-14 rounded-md p-4 font-bold"
        placeholder={placeholder}
      />
    </label>
  );
