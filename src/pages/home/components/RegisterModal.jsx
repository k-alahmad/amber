import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { MdMail, MdPhone, MdPerson, MdClose } from "react-icons/md";
export default function Modal({ showModal, setShowModal }) {
  const { t, i18n } = useTranslation();
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowModal(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

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
  return (
    <>
      <div
        className={`${
          showModal ? "scale-100" : "scale-0"
        } transition-all duration-500 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}
      >
        <div className="relative w-auto my-6 mx-auto max-h-full max-w-[90%] xl:max-w-[70%]">
          {/*content*/}
          <div
            ref={ref}
            className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-4"
          >
            {/*header*/}
            <div className="flex items-start justify-between px-5 py-1 border-b border-solid border-slate-200 rounded-t">
              <p className="text-med font-bold text-lightBlack">Register</p>
              <div
                onClick={() => {
                  setShowModal(false);
                }}
                className="cursor-pointer self-center text-black hover:text-black/50"
              >
                <MdClose size={28} />
              </div>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto text-small text-lightBlack max-h-[450px] md:max-h-[500px] xl:max-h-[350px] 2xl:max-h-[520px] overflow-y-scroll space-y-6">
              <CustomInput
                icon={<MdPerson className="text-black text-big" />}
                placeholder={t("formFullName")}
              />
              <CustomInput
                icon={<MdPhone className="text-black text-big" />}
                placeholder={t("formPhoneNumber")}
              />
              <CustomInput
                icon={<MdMail className="text-black text-big" />}
                placeholder={t("formEmail")}
              />

              <button
                className="bg-[#222222] text-white text-small w-full py-4"
                onClick={() => {
                  localStorage.setItem("Registered", true);
                  setShowModal(false);
                }}
              >
                {t("register")}
              </button>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end px-5 py-1 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-black hover:text-black/70 background-transparent uppercase outline-none focus:outline-none mx-1 mb-1 ease-linear transition-all duration-150 text-smaller font-bold "
                type="button"
                onClick={() => setShowModal(false)}
              >
                {i18n.language == "en" ? "Close" : "اغلاق"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          showModal ? "scale-100" : "scale-0"
        } opacity-20 fixed h-screen inset-0 z-40 bg-black`}
      ></div>
    </>
  );
}
