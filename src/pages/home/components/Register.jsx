import React from "react";
import photo1 from "../../../assets/images/photo1.png";
import {
  MdLocationOn,
  MdMail,
  MdPhone,
  MdPerson,
  MdMessage,
} from "react-icons/md";

const SocialElement = ({ icon, name }) => {
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 bg-[#222222] text-big flex justify-center items-center">
        {icon}
      </div>
      <p className="font-bold text-med px-4">{name}</p>
    </div>
  );
};

const CustomInput = ({ icon, placeholder, name, onChange }) => {
  return (
    <div className="border-b-[1px] border-black px-4 py-3 flex">
      {icon}
      <input
        type="text"
        className="bg-transparent  px-2 w-full outline-none"
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

const Register = () => {
  return (
    <div className="bg-[#F3F3F3] md:grid md:grid-cols-12">
      <div className="col-span-8 p-8 px-12 lg:px-16 lg:grid lg:grid-cols-12 pt-20 gap-6">
        <div className="col-span-6 space-y-6">
          <p className="font-bold text-huge">Find Your Happy Place</p>
          <p className="font-light text-small">
            Find solace in the undisturbed calmness of the surrounding green
            parks and tree-lined walkways.
          </p>
          <div className="space-y-6 pt-8">
            <SocialElement
              icon={<MdLocationOn className="text-white" />}
              name={"Address - Street - District Building No"}
            />
            <SocialElement
              icon={<MdMail className="text-white" />}
              name={"name@mail.com"}
            />
            <SocialElement
              icon={<MdPhone className="text-white" />}
              name={"065486264841 - 545631654653"}
            />
          </div>
        </div>
        <div className="col-span-6 space-y-6 max-lg:pt-8">
          <CustomInput
            icon={<MdPerson className="text-black text-big" />}
            placeholder={"Full Name"}
          />
          <CustomInput
            icon={<MdPhone className="text-black text-big" />}
            placeholder={"Phone number"}
          />
          <CustomInput
            icon={<MdMail className="text-black text-big" />}
            placeholder={"Email"}
          />
          <div className="border-b-[1px] border-black px-4 py-3 flex">
            <MdMessage className="text-black text-big" />
            <textarea
              type="text"
              className="border-gray-400 rounded-lg bg-transparent mx-3 px-3 w-full outline-none"
              rows={8}
              placeholder="Message"
            />
          </div>
          <button className="bg-[#222222] text-white text-small w-full py-4">
            Send
          </button>
        </div>
      </div>
      <div className="col-span-4 ">
        <img
          src={photo1}
          alt=""
          className="w-full max-md:h-[300px]  md:h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Register;
