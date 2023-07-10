// import { NavLink } from "react-router-dom";
const LinkElement = ({ name, link, styled, onClick, selectedLink }) => {
  return (
    // <NavLink
    //   onClick={onClick}
    //   style={{
    //     //   color: isActive ? "#B28A5D" : "black",
    //     //   borderRadius: 2,
    //     //   borderBottomColor: isActive ? "#B28A5D" : "white",
    //     //   borderBottomWidth: 3,
    //     paddingBottom: 8,
    //   }}
    //   to={"#"}
    // >
    <div
      className={`pb-[8px]  ${
        link == selectedLink
          ? "border-b-4 border-[#B28A5D] text-[#B28A5D] font-bold"
          : "text-lightBlack font-medium"
      }`}
      onClick={onClick}
    >
      <p className={`px-1 cursor-pointer text-med ${styled}`}>{name}</p>
    </div>
    // </NavLink>
  );
};

export default LinkElement;
