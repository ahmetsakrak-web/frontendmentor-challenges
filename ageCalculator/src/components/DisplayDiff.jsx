export const DisplayDiff = ({ diffYear, diffMonth, diffDay }) => (
  <div className="flex flex-col gap-4 font-extrabold  text-6xl sm:text-7xl italic">
    <div className="flex">
      <span className="text-violet-600 tracking-wider">
        {" "}
        {diffYear !== undefined ? diffYear : "--"}{" "}
      </span>
      <h1>years</h1>
    </div>

    <div className="flex">
      <span className="text-violet-600 tracking-wider">
        {diffMonth !== undefined ? diffMonth : "--"}
      </span>
      <h1>months</h1>
    </div>

    <div className="flex">
      <span className="text-violet-600 tracking-wider">
        {diffDay !== undefined ? diffDay : "--"}
      </span>
      <h1>days</h1>
    </div>
  </div>
);
