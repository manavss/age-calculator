/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export const Output = ({ ad, am, ay, isSubmitted }) => {
  return (
    <div className="text-5xl md:text-6xl">
      <h1 className=" font-bold">
        <span className="text-purple">{isSubmitted ? ay : "--"}</span> years
      </h1>
      <h1 className=" font-bold">
        <span className="text-purple">{isSubmitted ? am : "--"}</span> months
      </h1>
      <h1 className=" font-bold">
        <span className="text-purple">{isSubmitted ? ad : "--"}</span> days
      </h1>
    </div>
  );
};
