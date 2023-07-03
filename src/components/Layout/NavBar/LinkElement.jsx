import { NavLink } from "react-router-dom";
const LinkElement = ({ name, link, styled, onClick }) => {
  return (
    <NavLink
      onClick={onClick}
      style={({ isActive }) => {
        return {
          color: isActive ? "rgba(131, 88, 183, 1)" : "black",
          borderRadius: 2,
          borderBottomColor: isActive ? "rgba(131, 88, 183, 1)" : "white",
          borderBottomWidth: 3,
          paddingBottom: 8,
        };
      }}
      to={link}
    >
      <p className={`px-1 cursor-pointer font-MED text-smaller ${styled}`}>
        {name}
      </p>
    </NavLink>
  );
};

export default LinkElement;
