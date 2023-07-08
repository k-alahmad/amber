import { NavLink } from "react-router-dom";
const LinkElement = ({ name, link, styled, onClick }) => {
  return (
    <NavLink
      onClick={onClick}
      style={({ isActive }) => {
        return {
          color: isActive ? "#B28A5D" : "black",
          borderRadius: 2,
          borderBottomColor: isActive ? "#B28A5D" : "white",
          borderBottomWidth: 3,
          paddingBottom: 8,
        };
      }}
      to={link}
    >
      <p className={`px-1 cursor-pointer font-medium text-med ${styled}`}>
        {name}
      </p>
    </NavLink>
  );
};

export default LinkElement;
