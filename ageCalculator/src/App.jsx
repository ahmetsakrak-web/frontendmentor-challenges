import React, { useEffect, useState } from "react";
import { isValidDate, ageCalculator, regexes } from "./utilities/funcs";
import { Input } from "./components/Input";
import { StyledBorder } from "./components/StyledBorder";
import { DisplayDiff } from "./components/DisplayDiff";

const Years = () => {
  const [{ day, month, year }, setDate] = useState({
    day: "",
    month: "",
    year: "",
  });

  const [{ diffYear, diffMonth, diffDay }, setDiff] = useState({
    diffYear: "",
    diffMonth: "",
    diffDay: "",
  });

  const [error, setError] = useState("");

  const handleForm = ({ target: { name, value } }) => {
    (regexes[name].test(value) || value === "") &&
      setDate((prev) => ({ ...prev, [name]: value ? parseInt(value) : "" }));
  };

  useEffect(() => {
    if (!day || !month || year) {
      setDiff({});
      setError("");
    }
    if (day && month && /^\d{4}$/.test(year)) {
      if (isValidDate(day, month, year)) {
        setDiff(ageCalculator(day, month, year));
      } else {
        setError(`${month}. Ayda ${day} gün bulunmamaktadır.`);
      }
    }
  }, [day, month, year]);

  return (
    <div className="h-screen w-full bg-stone-200 flex justify-center items-center">
      <div className="w-[22rem] sm:w-[550px] p-6 sm:p-10 bg-white rounded-2xl rounded-br-[7rem]">
        <div className="flex gap-4">
          {[
            { content: "day", placeholder: "DD", value: day },
            { content: "month", placeholder: "MM", value: month },
            { content: "year", placeholder: "YYYY", value: year },
          ].map((item, i) => (
            <Input
              key={i}
              value={item.value}
              name={item.content}
              onChange={(e) => handleForm(e)}
              placeholder={item.placeholder}
              text={item.content}
            />
          ))}
        </div>
        {error ? <div className="mt-2 text-red-500 text-sm">{error}</div> : ""}
        <StyledBorder />

        <DisplayDiff
          diffYear={diffYear}
          diffMonth={diffMonth}
          diffDay={diffDay}
        />
      </div>
    </div>
  );
};

export default Years;
