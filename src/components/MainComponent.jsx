/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export const Main = ({ children }) => {
  return (
    <div className="flex flex-col bg-white py-10 px-5 gap-y-10 items-start shadow-md rounded-l-2xl rounded-tr-2xl rounded-br-[25%]">
      {children}
    </div>
  );
};
