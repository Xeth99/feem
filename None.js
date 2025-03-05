// import { AiOutlineHome } from "react-icons/ai";
// import { BiSupport } from "react-icons/bi";
// import { IoBriefcaseOutline } from "react-icons/io5";
// import { LuUser2 } from "react-icons/lu";
// import SLogo from "../assets/img/affluence-logo-small.png";
// import Logo from "../assets/img/affluence-logo.png";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { MdOutlineAccountBalanceWallet } from "react-icons/md";
// import { useEffect, useState } from "react";
// import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
// import { FaPowerOff } from "react-icons/fa6";
// import { useSelector } from "react-redux";
// import { RootState } from "../store/store";
// import DarkLogo from "../assets/img/logo1.png";
// import { HttpClient } from "../api/HttpClient";
// import ToastComponent from "./ToastComponent";
// import { isAxiosError } from "axios";
// import { ScaleLoader } from "react-spinners";
// const Sidebar = () => {
//   const [largeSideBar, setLargeSideBar] = useState(false);
//   const [isLogingOut, setIsLogingOut] = useState(false);
//   const navigate = useNavigate();
//   const handleSetLargeSideBar = () => {
//     setLargeSideBar((prevstate) => !prevstate);
//   };
//   const handleLogout = async () => {
//     setIsLogingOut(true);
//     try {
//       await HttpClient.post("/users/logout");
//       localStorage.removeItem("token");
//       navigate("/login");
//     } catch (error) {
//       if (isAxiosError(error)) {
//         ToastComponent.error(error.response?.data.message);
//       }
//     } finally {
//       setIsLogingOut(false);
//     }
//   };
//   const router = useLocation();
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
//   const [showTooltip, setShowTooltip] = useState<string | null>(null);
//   return (
//     <>
//       {isLogingOut ? (
//         <div className="w-full h-screen bg-white dark:bg-darkPrimary flex items-center justify-center relative">
//           <div className="flex flex-col justify-center items-center">
//             <ScaleLoader color={isDarkMode ? "#FFFFFF" : "#6B006B"} />
//             <h1 className="dark:text-white text-textcolor mt-7">
//               Log Out Processing...
//             </h1>
//           </div>
//         </div>
//       ) : (
//         <div
//           className={`border-r-[1.5px] bg-white dark:bg-darkPrimary border-opacity-30 ${
//             largeSideBar ? "w-[80px]" : "minixlg:w-[20%] w-[25%]"
//           } relative border-placeholdercolor md:block hidden`}
//         >
//           <div
//             onClick={handleSetLargeSideBar}
//             className="text-primary absolute cursor-pointer right-[-4px] top-10"
//           >
//             {largeSideBar ? (
//               <FaArrowAltCircleRight size={30} />
//             ) : (
//               <FaArrowAltCircleLeft size={30} />
//             )}
//           </div>
//           <div className="flex justify-center pt-[4rem]">
//             {largeSideBar ? (
//               <div>
//                 <div>
//                   <div className="flex justify-center">
//                     <img
//                       src={SLogo}
//                       className="w-[30px]"
//                       alt="affluence-logo"
//                     />
//                   </div>
//                   <div className="pt-[3rem]">
//                     <div className="relative">
//                       <Link
//                         to="/"
//                         onMouseEnter={() => setShowTooltip("home")}
//                         onMouseLeave={() => setShowTooltip(null)}
//                         className={`flex items-center gap-3 mb-7 text-[1.15em] font-PoppinsRegular py-3 px-4 rounded-[8px] ${
//                           router.pathname === "/"
//                             ? "bg-primary text-white"
//                             : "text-textcolor dark:text-white"
//                         }`}
//                       >
//                         <AiOutlineHome size={24} />
//                       </Link>
//                       {showTooltip && (
//                         <div
//                           className={`absolute bottom-0 left-10 mb-2 px-2 py-1 text-sm text-darkPrimary bg-white rounded-lg transition-opacity duration-300 ease-in-out ${
//                             showTooltip === "home"
//                               ? "opacity-100"
//                               : "opacity-0 "
//                           }
//      `}
//                           style={{ left: "50%", transform: "translateX(-50%)" }}
//                         >
//                           Home
//                         </div>
//                       )}
//                     </div>
//                     <Link
//                       to="/savings"
//                       className={`flex items-center gap-3 mb-7 text-[1.15em] font-PoppinsRegular py-3 px-4 rounded-[8px]  ${
//                         router.pathname.startsWith("/savings")
//                           ? "bg-primary text-white"
//                           : "text-textcolor dark:text-white"
//                       }`}
//                     >
//                       <MdOutlineAccountBalanceWallet size={24} />
//                     </Link>
//                     <Link
//                       to="/investment/my_investments"
//                       className={`flex items-center gap-3 mb-7 text-[1.15em] font-PoppinsRegular py-3 px-4 rounded-[8px]  ${
//                         router.pathname.startsWith("/investment")
//                           ? "bg-primary text-white"
//                           : "text-textcolor dark:text-white"
//                       }`}
//                     >
//                       <IoBriefcaseOutline size={24} />
//                     </Link>
//                     <Link
//                       to="/my_account"
//                       className={`flex items-center gap-3 mb-7 text-[1.15em] font-PoppinsRegular py-3 px-4 rounded-[8px]  ${
//                         router.pathname === "/my_account"
//                           ? "bg-primary text-white"
//                           : "text-textcolor dark:text-white"
//                       }`}
//                     >
//                       <LuUser2 size={24} />
//                     </Link>
//                     <Link
//                       to="support"
//                       className={`flex items-center gap-3 mb-7 text-[1.15em] font-PoppinsRegular py-3 px-4 rounded-[8px]  ${
//                         router.pathname === "/support"
//                           ? "bg-primary text-white"
//                           : "text-textcolor dark:text-white"
//                       }`}
//                     >
//                       <BiSupport size={24} />
//                     </Link>
//                   </div>
//                 </div>
//                 <button className="flex mt-[7rem] items-center text-error gap-3 mb-7 text-[1.15em] font-PoppinsRegular py-3 px-4 rounded-[8px]">
//                   <FaPowerOff size={24} />
//                 </button>
//               </div>
//             ) : (
//               <div>
//                 <img
//                   src={isDarkMode ? DarkLogo : Logo}
//                   className="w-[170px]"
//                   alt="affluence-logo"
//                 />
//                 <div className="pt-[3rem]">
//                   <Link
//                     to="/"
//                     className={`flex items-center gap-3 mb-7 text-[1.15em] font-PoppinsRegular py-3 px-4 rounded-[8px]  ${
//                       router.pathname === "/"
//                         ? "bg-primary text-white"
//                         : "text-textcolor dark:text-white"
//                     }`}
//                   >
//                     <AiOutlineHome size={24} />
//                     Home
//                   </Link>
//                   <Link
//                     to="/savings"
//                     className={`flex items-center gap-3 mb-7 text-[1.15em] font-PoppinsRegular py-3 px-4 rounded-[8px]  ${
//                       router.pathname.startsWith("/savings")
//                         ? "bg-primary text-white"
//                         : "text-textcolor dark:text-white"
//                     }`}
//                   >
//                     <MdOutlineAccountBalanceWallet size={24} />
//                     Savings
//                   </Link>
//                   <Link
//                     to="/investment/my_investments"
//                     className={`flex items-center gap-3 mb-7 text-[1.15em] font-PoppinsRegular py-3 px-4 rounded-[8px]  ${
//                       router.pathname.startsWith("/investment")
//                         ? "bg-primary text-white"
//                         : "text-textcolor dark:text-white"
//                     }`}
//                   >
//                     <IoBriefcaseOutline size={24} />
//                     Investment
//                   </Link>
//                   <Link
//                     to="/my_account"
//                     className={`flex items-center gap-3 mb-7 text-[1.15em] font-PoppinsRegular py-3 px-4 rounded-[8px]  ${
//                       router.pathname === "/my_account"
//                         ? "bg-primary text-white"
//                         : "text-textcolor dark:text-white"
//                     }`}
//                   >
//                     <LuUser2 size={24} />
//                     Account
//                   </Link>
//                   <Link
//                     to="support"
//                     className={`flex items-center gap-3 mb-7 text-[1.15em] font-PoppinsRegular py-3 px-4 rounded-[8px]  ${
//                       router.pathname === "/support"
//                         ? "bg-primary text-white"
//                         : "text-textcolor dark:text-white"
//                     }`}
//                   >
//                     <BiSupport size={24} />
//                     Support
//                   </Link>
//                   <button
//                     onClick={handleLogout}
//                     className="flex mt-[7rem] items-center text-error gap-3 mb-7 text-[1.15em] font-PoppinsRegular py-3 px-4 rounded-[8px]"
//                   >
//                     <FaPowerOff size={24} />
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Sidebar;