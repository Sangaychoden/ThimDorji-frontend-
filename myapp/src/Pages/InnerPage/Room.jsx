
// // // import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
// // // import { Link } from "react-router-dom";
// // // import { BsArrowRight } from "react-icons/bs";
// // // import { FaBed } from "react-icons/fa"; // add this import at the top

// // // const Room = () => {
// // //   return (
// // //     <section className="font-inter">
// // //       <BreadCrumb title="ROOMS & SUITES" home={"/"} />

// // //       {/* All rooms */}
// // //       <div
// // //         className="bg-cover bg-center bg-no-repeat py-20 2xl:py-[120px]"
// // //         style={{ backgroundImage: "url('/images/home/background.png')" }}
// // //       >
// // //         <div className="Container">
// // //           {/* section heading */}
// // //           <div
// // //             className="text-center sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px] mx-auto px-5"
// // //             data-aos="fade-up"
// // //             data-aos-duration="1000"
// // //           >
// // //             {/* Section Logo */}
// // //             <div className="flex items-center justify-center space-x-2">
// // //               <hr className="w-[100px] h-[1px] bg-gray-800 text-gray-800" />
// // //               <hr className="w-[100px] h-[1px] bg-gray-800 text-gray-800" />
// // //             </div>
// // //             <h1 className="text-[22px] sm:text-2xl md:text-3xl 2xl:text-[38px] leading-7 sm:leading-8 md:leading-9 lg:leading-[42px] 2xl:leading-[52px] text-black mt-[30px] mb-[24px] font-inter font-semibold uppercase">
// // //               Rooms & Suites
// // //             </h1>
// // //           </div>

// // //           {/* Rooms Container */}
// // //           <div className="mt-7 2xl:mt-[60px] grid items-center grid-cols-1 md:grid-cols-2 gap-8 md:gap-[40px]">
// // //             {/* Room - 1 */}
// // //             <div
// // //               className="overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-white border border-gray-10"
// // //               data-aos="fade-up"
// // //               data-aos-duration="1000"
// // //             >
// // //               <div className="relative overflow-hidden">
// // //                 <div className="overflow-hidden">
// // //                   <img
// // //                     src="/images/home/room1.jpeg"
// // //                     className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-80"
// // //                     alt="Delux Family Rooms"
// // //                   />
// // //                 </div>
// // //                 <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm items-center justify-center text-white absolute top-[10px] right-[10px] z-10">
// // //                   <span className="font-semibold">$90 </span>
// // //                   <span className="mx-2">|</span>
// // //                   <span>Nu 7600</span>
// // //                 </div>

// // //                 <Link to={"/room_details"}>
// // //                   <button className="flex items-center justify-center text-[15px] leading-[38px] bg-black bg-opacity-90 hover:bg-opacity-100 absolute bottom-0 -left-40 px-6 py-1 text-white group-hover:left-0 transition-all duration-500 z-10">
// // //                     View Details{" "}
// // //                     <BsArrowRight className="w-4 h-4 ml-2 text-white transition-transform duration-300 group-hover:translate-x-1" />{" "}
// // //                   </button>
// // //                 </Link>

// // //                 {/* Overlay effect */}
// // //                 <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
// // //               </div>
// // //               <div className="font-inter">
// // //                 <div className="border-t border-gray-200">
// // //                   <div className="py-6 px-[30px]">
// // //                     <h4 className="text-sm leading-[26px] text-khaki uppercase font-semibold">
// // //                       LUXURY ROOM
// // //                     </h4>
// // //                     <Link
// // //                       to="/room_details"
// // //                       state={{ price: "450", title: "Delux Family Rooms" }}
// // //                     >
// // //                       <h2 className="text-2xl lg:text-[24px] xl:text-[28px] leading-[26px] font-semibold text-black py-4 hover:text-khaki transition-colors duration-300">
// // //                         Junior Suite{""}
// // //                       </h2>
// // //                     </Link>
// // //                     <p className="text-sm font-normal text-gray-800 font-inter">
// // //                       38 SQ.FT/Rooms
// // //                     </p>
// // //                   </div>
// // //                   <div className="border-t border-gray-200 py-5">
// // //                     <div className="px-[30px] flex items-center justify-between">
// // //                       <div className="">
// // //                         <span className="font-inter text-base flex items-center text-gray-800">
// // // <FaBed className="text-gray-800 text-xl" />
// // // <span className="ml-[10px] font-medium">2 King Bed</span>

// // //                         </span>
// // //                       </div>
// // //                       <span className="w-[1px] h-[25px] bg-gray-300"></span>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Room - 2 */}
// // //             <div
// // //               className="overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-white border border-gray-200"
// // //               data-aos="fade-up"
// // //               data-aos-duration="1000"
// // //             >
// // //               <div className="relative overflow-hidden">
// // //                 <div className="overflow-hidden">
// // //                   <img
// // //                     src="/images/home/room2.jpeg"
// // //                     className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-80"
// // //                     alt="Double Suite Rooms"
// // //                   />
// // //                 </div>
// // //                 <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm items-center justify-center text-white absolute top-[10px] right-[10px] z-10">
// // //                   <span className="font-semibold">$95</span>
// // //                   <span className="mx-2">|</span>
// // //                   <span>Nu 8200</span>
// // //                 </div>
// // //                 <Link to={"/room_details2"}>
// // //                   <button className="flex items-center justify-center text-[15px] leading-[38px] bg-black bg-opacity-90 hover:bg-opacity-100 absolute bottom-0 -left-40 px-6 py-1 text-white group-hover:left-0 transition-all duration-500 z-10">
// // //                     View Details{" "}
// // //                     <BsArrowRight className="w-4 h-4 ml-2 text-white transition-transform duration-300 group-hover:translate-x-1" />{" "}
// // //                   </button>
// // //                 </Link>

// // //                 {/* Overlay effect */}
// // //                 <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
// // //               </div>
// // //               <div className="font-inter">
// // //                 <div className="border-t border-gray-200">
// // //                   <div className="py-6 px-[30px]">
// // //                     <h4 className="text-sm leading-[26px] text-khaki uppercase font-semibold">
// // //                       LUXURY ROOM
// // //                     </h4>
// // //                     <Link
// // //                       to="/room_details"
// // //                       state={{ price: "550", title: "Double Suite Rooms" }}
// // //                     >
// // //                       <h2 className="text-2xl lg:text-[24px] xl:text-[28px] leading-[26px] font-semibold text-black py-4 hover:text-khaki transition-colors duration-300">
// // //                         Deluxe Double
// // //                       </h2>
// // //                     </Link>
// // //                     <p className="text-sm font-normal text-gray-800 font-inter">
// // //                       28 SQ.FT/Rooms
// // //                     </p>
// // //                   </div>
// // //                   <div className="border-t border-gray-200 py-5">
// // //                     <div className="px-[30px] flex items-center justify-between">
// // //                       <div className="">
// // //                         <span className="font-inter text-base flex items-center text-gray-800">
// // // <FaBed className="text-gray-800 text-xl" />

// // //                           <span className="ml-[10px] font-medium">
// // //                             2 King Bed
// // //                           </span>
// // //                         </span>
// // //                       </div>
// // //                       <span className="w-[1px] h-[25px] bg-gray-300"></span>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Room;
// // import { useEffect, useState } from "react";
// // import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
// // import { Link } from "react-router-dom";
// // import { BsArrowRight } from "react-icons/bs";
// // // import { FaBed } from "react-icons/fa";
// // import { HiHomeModern } from "react-icons/hi2";



// // const Room = () => {
// //   const [rooms, setRooms] = useState([]);

// //   const API_URL = import.meta.env.VITE_API_URL;

// //  useEffect(() => {
// //   const fetchRooms = async () => {
// //     try {
// //       const res = await fetch(`${API_URL}/rooms/rooms`);
// //       const data = await res.json();
// //       if (data.rooms) setRooms(data.rooms);
// //     } catch (error) {
// //       console.error("Failed to fetch rooms:", error);
// //     }
// //   };

// //   fetchRooms();
// // }, [API_URL]);


// //   return (
// //     <section className="font-inter">
// //       <BreadCrumb title="ROOMS & SUITES" home={"/"} />

// //       <div
// //         className="bg-cover bg-center bg-no-repeat py-20 2xl:py-[120px]"
// //         style={{ backgroundImage: "url('/images/home/background.png')" }}
// //       >
// //         <div className="Container">

// //           <div
// //             className="text-center sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px] mx-auto px-5"
// //             data-aos="fade-up"
// //             data-aos-duration="1000"
// //           >
// //             <div className="flex items-center justify-center space-x-2">
// //               <hr className="w-[100px] h-[1px] bg-gray-800 text-gray-800" />
// //               <hr className="w-[100px] h-[1px] bg-gray-800 text-gray-800" />
// //             </div>
// //             <h1 className="text-[22px] sm:text-2xl md:text-3xl 2xl:text-[38px] leading-7 sm:leading-8 md:leading-9 lg:leading-[42px] 2xl:leading-[52px] text-black mt-[30px] mb-[24px] font-inter font-semibold uppercase">
// //               Rooms & Suites
// //             </h1>
// //           </div>

// //           <div className="mt-7 2xl:mt-[60px] grid items-center grid-cols-1 md:grid-cols-2 gap-8 md:gap-[40px]">

// //             {rooms.map((room, index) => (
// //               <div
// //                 key={room._id}
// //                 className="overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-white border border-gray-200"
// //                 data-aos="fade-up"
// //                 data-aos-duration="1000"
// //               >
// //                 <div className="relative overflow-hidden">
// //                   <div className="overflow-hidden">
// //                     <img
// //                       src={room.images?.[0] || "/images/home/room1.jpeg"}
// //                       className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-80"
// //                       alt={room.roomType}
// //                     />
// //                   </div>

// //                   <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm items-center justify-center text-white absolute top-[10px] right-[10px] z-10">
// //                     <span className="font-semibold">
// //                       Nu {room.price}
// //                     </span>
// //                   </div>

// //                   <Link
// //                   to="/room_details2"
// //                   state={{ room: room._id }}   // ✅ pass room ID to details page
// //                 >
// //                   <button className="flex items-center justify-center text-[15px] leading-[38px] bg-black bg-opacity-90 hover:bg-opacity-100 absolute bottom-0 -left-40 px-6 py-1 text-white group-hover:left-0 transition-all duration-500 z-10">
// //                     View Details{" "}
// //                     <BsArrowRight className="w-4 h-4 ml-2 text-white transition-transform duration-300 group-hover:translate-x-1" />
// //                   </button>
// //                 </Link>


// //                   <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-all duration-500" />
// //                 </div>

// //                 <div className="font-inter">
// //                   <div className="border-t border-gray-200">
// //                     <div className="py-6 px-[30px]">
// //                       <h4 className="text-sm leading-[26px] text-khaki uppercase font-semibold">
// //                         LUXURY ROOM
// //                       </h4>

// //                       <Link to="/room_details"
// //                         state={{ price: room.price, title: room.roomType }}
// //                       >
// //                         <h2 className="text-2xl lg:text-[24px] xl:text-[28px] leading-[26px] font-semibold text-black py-4 hover:text-khaki transition-colors duration-300">
// //                           {room.roomType}
// //                         </h2>
// //                       </Link>

// //                       <p className="text-sm font-normal text-gray-800 font-inter">
// //                         {room.size} SQ.FT / Rooms
// //                       </p>
// //                     </div>

// //                     <div className="border-t border-gray-200 py-5">
// //                       <div className="px-[30px] flex items-center justify-between">
// //                         <span className="font-inter text-base flex items-center text-gray-800">
// //                          <HiHomeModern className="text-gray-800 text-xl" />
// //                           <span className="ml-[10px] font-medium">{room.numberOfRooms} Rooms</span>
// //                         </span>

// //                         <span className="w-[1px] h-[25px] bg-gray-300"></span>
// //                       </div>
// //                     </div>

// //                   </div>
// //                 </div>
// //               </div>
// //             ))}

// //           </div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// import { useEffect, useState } from "react";
// import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
// import { Link } from "react-router-dom";
// import { BsArrowRight } from "react-icons/bs";
// import { MdOutlineDoorFront } from "react-icons/md";

// const Room = () => {
//   const [rooms, setRooms] = useState([]);

//   const API_URL = import.meta.env.VITE_API_URL;

//   useEffect(() => {
//     const fetchRooms = async () => {
//       try {
//         const res = await fetch(`${API_URL}/rooms/rooms`);
//         const data = await res.json();
//         if (data.rooms) setRooms(data.rooms);
//       } catch (error) {
//         console.error("Failed to fetch rooms:", error);
//       }
//     };

//     fetchRooms();
//   }, [API_URL]);

//   return (
//     <section className="font-inter">
//       <BreadCrumb title="ROOMS" home={"/"} />

//       <div
//         className="bg-cover bg-center bg-no-repeat py-20 2xl:py-[120px]"
//         style={{ backgroundImage: "url('/images/home/background.png')" }}
//       >
//         <div className="Container">
//           <div
//             className="text-center sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px] mx-auto px-5"
//             data-aos="fade-up"
//             data-aos-duration="1000"
//           >
//             <div className="flex items-center justify-center space-x-2">
// <hr className="w-[150px] h-[1px] text-[#8C8C8C]" />            </div>
//             <h1 className="text-[22px] sm:text-2xl md:text-3xl 2xl:text-[38px] leading-7 sm:leading-8 md:leading-9 lg:leading-[42px] 2xl:leading-[52px] text-black mt-[30px] mb-[24px] font-inter font-semibold uppercase">
//               Rooms & Suites
//             </h1>
//           </div>

//           {/* Grid for rooms */}
//           <div className="mt-7 2xl:mt-[60px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[40px] auto-rows-fr">
//             {rooms.map((room) => (
//               <div
//                 key={room._id}
//                 className="flex flex-col overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-white border border-gray-200 h-full"
//                 data-aos="fade-up"
//                 data-aos-duration="1000"
//               >
//                 {/* Image & Price */}
//                 <div className="relative overflow-hidden flex-shrink-0">
//                   <img
//                     src={room.images?.[0] || "/images/home/room1.jpeg"}
//                     alt={room.roomType}
//                     className="w-full h-[250px] object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-80"
//                   />
//                   <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm items-center justify-center text-white absolute top-[10px] right-[10px] z-10">
//                     <span className="font-semibold">Nu {room.price}</span>
//                   </div>
//                   <Link to={`/room_details2/${room._id}`} state={room}>
//                     <button className="flex items-center justify-center text-[15px] leading-[38px] bg-black bg-opacity-90 hover:bg-opacity-100 absolute bottom-0 -left-40 px-6 py-1 text-white group-hover:left-0 transition-all duration-500 z-10">
//                       View Details
//                       <BsArrowRight className="w-4 h-4 ml-2 text-white transition-transform duration-300 group-hover:translate-x-1" />
//                     </button>
//                   </Link>
//                   <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-all duration-500" />
//                 </div>

//                 {/* Content */}
//                 <div className="flex-1 flex flex-col justify-between">
//                   <div className="border-t border-gray-200 flex-1 flex flex-col">
//                     <div className="py-6 px-[30px] flex-1">
//                       <h4 className="text-sm leading-[26px] text-khaki uppercase font-semibold">
//                         LUXURY ROOM
//                       </h4>
//                       <Link
//                         to="/room_details"
//                         state={{ price: room.price, title: room.roomType }}
//                       >
//                         <h2 className="text-2xl lg:text-[24px] xl:text-[28px] leading-[26px] font-semibold text-black py-4 hover:text-khaki transition-colors duration-300">
//                           {room.roomType}
//                         </h2>
//                       </Link>
//                       <p className="text-sm font-normal text-gray-800 font-inter">
//                         {room.size} SQ.FT / Rooms
//                       </p>
//                     </div>
//                     <div className="border-t border-gray-200 py-5">
//                       <div className="px-[30px] flex items-center justify-between">
// <span className="font-inter text-base flex items-center text-gray-800">
// <MdOutlineDoorFront className="text-gray-800 text-xl" />
// <span className="ml-[10px] font-medium">{room.numberOfRooms} Rooms</span>
// </span>
//                         <span className="w-[1px] h-[25px] bg-gray-300"></span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Room;

// // import { Link } from "react-router-dom";
// // import "../../Components/Testimonial/testimonials.css";
// // import { useEffect, useState, useRef  } from "react";
// // import { BiChevronDown } from "react-icons/bi";
// // import ReactDatePicker from "react-datepicker";
// // import "react-datepicker/dist/react-datepicker.css";
// // import "./RoomsDatepicker.css";
// // import { AiOutlineEye } from "react-icons/ai";
// // import Lightbox from "react-image-lightbox";
// // import "react-image-lightbox/style.css";
// // import { FiCalendar } from "react-icons/fi";

// // const Rooms = () => {
// //   const [open, setOpen] = useState(false);
// //   const [guestOpen, setGuestOpen] = useState(false);
// //   const [room, setRoom] = useState(1);
// //   const [adult, setAdult] = useState(1);
// //   const [children, setChildren] = useState(0);
// //   const [useDesktopPicker, setUseDesktopPicker] = useState(false);
// //   const [showInOverlay, setShowInOverlay] = useState(false);
// //   const [showOutOverlay, setShowOutOverlay] = useState(false);
// //   const [isClosing, setIsClosing] = useState(false);
// //   const [checkIn, setCheckIn] = useState(null);
// //   const [checkOut, setCheckOut] = useState(null);
// //   const [rooms, setRooms] = useState([]);

// //   // Lightbox
// //   const [lightboxOpen, setLightboxOpen] = useState(false);
// //   const [photoIndex, setPhotoIndex] = useState(0);
// //   const [activeImages, setActiveImages] = useState([]);

// //   const BTN_PER_USD = 85.49;

// //   const roomRef = useRef(null);
// // const guestRef = useRef(null);

// //   // Detect desktop
// //   useEffect(() => {
// //     const mq = window.matchMedia("(min-width: 768px)");
// //     const update = () => setUseDesktopPicker(mq.matches);
// //     update();
// //     mq.addEventListener?.("change", update);
// //     return () => mq.removeEventListener?.("change", update);
// //   }, []);

// //   // Fetch rooms
// //   useEffect(() => {
// //     const fetchRooms = async () => {
// //       try {
// //         const API_URL = import.meta.env.VITE_API_URL;
// //         const response = await fetch(`${API_URL}/rooms/rooms/firsttwo`);
// //         const data = await response.json();

// //         if (data.rooms) {
// //           setRooms(data.rooms);
// //         } else {
// //           console.error("No rooms found in response:", data);
// //         }
// //       } catch (error) {
// //         console.error("Error fetching rooms:", error);
// //       }
// //     };

// //     fetchRooms();
// //   }, []);

// //   useEffect(() => {
// //   const handleClickOutside = (event) => {
// //     if (roomRef.current && !roomRef.current.contains(event.target)) {
// //       setOpen(false);
// //     }
// //     if (guestRef.current && !guestRef.current.contains(event.target)) {
// //       setGuestOpen(false);
// //     }
// //   };

// //   document.addEventListener("mousedown", handleClickOutside);
// //   return () => document.removeEventListener("mousedown", handleClickOutside);
// // }, []);


// //   // ✅ FIXED — correct local date (no timezone shifting)
// //   const formatDate = (date) =>
// //     date ? date.toLocaleDateString("en-CA") : "";

// //   // Overlay control
// //   const openInOverlay = () => {
// //     setShowOutOverlay(false);
// //     setIsClosing(false);
// //     setShowInOverlay(true);
// //   };
// //   const openOutOverlay = () => {
// //     setShowInOverlay(false);
// //     setIsClosing(false);
// //     setShowOutOverlay(true);
// //   };
// //   const closeOverlay = () => {
// //     setIsClosing(true);
// //     setTimeout(() => {
// //       setShowInOverlay(false);
// //       setShowOutOverlay(false);
// //       setIsClosing(false);
// //     }, 200);
// //   };

// //   return (
// //     <div className="bg-whiteSmoke dark:bg-white font-Inter">
// //       <div className="relative">
// //         {/* ===== BOOKING SECTION ===== */}
// //         <div
// //           className="Container-Hero bg-lightBlack dark:bg-normalBlack grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 items-center justify-center font-Arial py-3 lg:py-4 xl:py-5 2xl:py-6 border-t-[3px] border-t-khaki 
// //                      mx-auto  shadow-xl relative z-20 -mt-20 px-4 sm:px-6 lg:px-10 z-[1]"
// //           data-aos="fade-down"
// //           data-aos-duration="1000"
// //         >
// //           {/* Check In */}
// //           <div className="p-3">
// //             <p className="text-sm text-[#A9A9A9] ml-3">Check In</p>
// //             {!useDesktopPicker ? (
// //               <input
// //                 type="date"
// //                 className="border-none bg-transparent text-white outline-none text-sm lg:text-base focus:ring-transparent"
// //                 required
// //                 onChange={(e) =>
// //                   setCheckIn(e.target.value ? new Date(e.target.value) : null)
// //                 }
// //               />
// //             ) : (
// //               <button
// //                 type="button"
// //                 onClick={openInOverlay}
// //                 className="w-full text-left text-white text-sm lg:text-base border border-white/20 px-3 py-2 mt-[2px]"
// //               >
// //                 {checkIn ? formatDate(checkIn) : "Select date"}
// //               </button>
// //             )}
// //           </div>

// //           {/* Check Out */}
// //           <div className="p-3">
// //             <p className="text-sm text-[#A9A9A9] ml-3">Check Out</p>
// //             {!useDesktopPicker ? (
// //               <input
// //                 type="date"
// //                 className="border-none bg-transparent text-white outline-none text-sm lg:text-base focus:ring-transparent"
// //                 required
// //                 onChange={(e) =>
// //                   setCheckOut(e.target.value ? new Date(e.target.value) : null)
// //                 }
// //               />
// //             ) : (
// //               <button
// //                 type="button"
// //                 onClick={openOutOverlay}
// //                 className="w-full text-left text-white text-sm lg:text-base border border-white/20 px-3 py-2 mt-[2px]"
// //               >
// //                 {checkOut ? formatDate(checkOut) : "Select date"}
// //               </button>
// //             )}
// //           </div>

// //           {/* Rooms Dropdown */}
// //           <div className="p-3 relative " ref={roomRef}>
// //             <div
// //               className="text-white px-3 py-2 cursor-pointer"
// //               onClick={() => setOpen(!open)}
// //             >
// //               <span className="flex items-center justify-between text-sm text-[#A9A9A9]">
// //                 Rooms <BiChevronDown />
// //               </span>
// //               <div className="pt-[10px] text-sm sm:text-base">{room} Room</div>
// //             </div>
// //             {open && (
// //               <div className="absolute bg-white text-black w-60 mt-2 shadow-lg z-20 py-2">
// //                 <div className="px-5 py-2 flex justify-between items-center">
// //                   <div>{room} Room</div>
// //                   <div className="flex gap-2">
// //                     <button
// //                       className="w-6 h-6 bg-khaki text-white"
// //                       onClick={() => setRoom(room + 1)}
// //                     >
// //                       +
// //                     </button>
// //                     <button
// //                       className="w-6 h-6 bg-khaki text-white"
// //                       onClick={() => setRoom((v) => Math.max(1, v - 1))}
// //                     >
// //                       -
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}
// //           </div>

// //           {/* Guests Dropdown */}
// //           <div className="p-3 relative " ref={guestRef}>
// //             <div
// //               className="text-white px-3 py-2 cursor-pointer"
// //               onClick={() => setGuestOpen(!guestOpen)}
// //             >
// //               <span className="flex items-center justify-between text-sm text-[#A9A9A9]">
// //                 Guests <BiChevronDown />
// //               </span>
// //               <div className="pt-[10px] text-sm sm:text-base">
// //                 {adult} Adult, {children} Child
// //               </div>
// //             </div>
// //             {guestOpen && (
// //               <div className="absolute bg-white text-black w-60 mt-2 shadow-lg z-20 py-2">
// //                 <div className="px-5 py-2 flex justify-between items-center">
// //                   <div>{adult} Adult</div>
// //                   <div className="flex gap-2">
// //                     <button
// //                       className="w-6 h-6 bg-khaki text-white"
// //                       onClick={() => setAdult(adult + 1)}
// //                     >
// //                       +
// //                     </button>
// //                     <button
// //                       className="w-6 h-6 bg-khaki text-white"
// //                       onClick={() => setAdult((v) => Math.max(1, v - 1))}
// //                     >
// //                       -
// //                     </button>
// //                   </div>
// //                 </div>
// //                 <div className="px-5 py-2 flex justify-between items-center">
// //                   <div>{children} Child</div>
// //                   <div className="flex gap-2">
// //                     <button
// //                       className="w-6 h-6 bg-khaki text-white"
// //                       onClick={() => setChildren(children + 1)}
// //                     >
// //                       +
// //                     </button>
// //                     <button
// //                       className="w-6 h-6 bg-khaki text-white"
// //                       onClick={() => setChildren((v) => Math.max(0, v - 1))}
// //                     >
// //                       -
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}
// //           </div>

// //           {/* Check Availability */}
// //           <Link
// //             to="/available_rooms"
// //             state={{
// //               checkIn: formatDate(checkIn),
// //               checkOut: formatDate(checkOut),
// //               room,
// //               adult,
// //               children,
// //             }}
// //             className="col-span-2 md:col-span-1"
// //           >
// //             <button className="w-full h-10 lg:h-[50px] text-[15px] bg-khaki border border-khaki text-white relative z-10 hover:bg-opacity-90 transition-all duration-300">
// //               Check Availability
// //             </button>
// //           </Link>
// //         </div>

// //         {/* Desktop Calendar */}
// //         {useDesktopPicker && (showInOverlay || showOutOverlay) && (
// //           <div
// //             className="fixed inset-0 z-[9999] bg-black/20 flex items-center justify-center px-4"
// //             onClick={closeOverlay}
// //           >
// //             <div
// //               className="bg-white text-black shadow-2xl max-w-[560px] w-full overflow-visible"
// //               onClick={(e) => e.stopPropagation()}
// //             >
// //               <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
// //                 <h3 className="text-lg font-semibold">
// //                   {showInOverlay ? "Select Check-in" : "Select Check-out"}
// //                 </h3>
// //                 <button
// //                   onClick={closeOverlay}
// //                   className="px-3 py-1.5 border border-[#D1D5DB] hover:bg-gray-50 text-sm"
// //                 >
// //                   Close
// //                 </button>
// //               </div>
// //               <div className="p-3 md:p-5">
// // <ReactDatePicker
// //   inline
// //   monthsShown={1}
// //   calendarClassName="rdp-pill"
// //   selected={showInOverlay ? checkIn : checkOut}
// //   minDate={showInOverlay ? new Date() : checkIn || new Date()} // same logic
// //   onChange={(date) => {
// //     if (showInOverlay) {
// //       setCheckIn(date);
// //       if (checkOut && date && checkOut < date) setCheckOut(null);
// //       closeOverlay();
// //     } else {
// //       setCheckOut(date);
// //       closeOverlay();
// //     }
// //   }}
// //   showDisabledMonthNavigation                  renderCustomHeader={({
// //                     date,
// //                     changeMonth,
// //                     changeYear,
// //                     decreaseMonth,
// //                     increaseMonth,
// //                     prevMonthButtonDisabled,
// //                     nextMonthButtonDisabled,
// //                   }) => (
// //                     <div className="flex items-center justify-between px-3 py-2">
// //                       <div className="flex items-center space-x-2">
// //                         <select
// //                           value={date.getMonth()}
// //                           onChange={({ target: { value } }) =>
// //                             changeMonth(Number(value))
// //                           }
// //                           className="border px-2 py-1 text-sm border-[#9CA3AF]"
// //                         >
// //                           {Array.from({ length: 12 }).map((_, i) => (
// //                             <option key={i} value={i}>
// //                               {new Date(0, i).toLocaleString("default", {
// //                                 month: "long",
// //                               })}
// //                             </option>
// //                           ))}
// //                         </select>

// //                         <select
// //                           value={date.getFullYear()}
// //                           onChange={({ target: { value } }) =>
// //                             changeYear(Number(value))
// //                           }
// //                           className="border px-2 py-1 text-sm border-[#9CA3AF]"
// //                         >
// //                           {Array.from({ length: 11 }, (_, i) => {
// //                             const year = new Date().getFullYear() + i;
// //                             return (
// //                               <option key={year} value={year}>
// //                                 {year}
// //                               </option>
// //                             );
// //                           })}
// //                         </select>
// //                       </div>

// //                       <div className="flex items-center space-x-2">
// //                         <button
// //                           onClick={decreaseMonth}
// //                           disabled={prevMonthButtonDisabled}
// //                           className="px-2 py-1 border border-[#9CA3AF] text-[#1F1F1F]"
// //                         >
// //                           ▲
// //                         </button>
// //                         <button
// //                           onClick={increaseMonth}
// //                           disabled={nextMonthButtonDisabled}
// //                           className="px-2 py-1 border border-[#9CA3AF] text-[#1F1F1F]"
// //                         >
// //                           ▼
// //                         </button>
// //                       </div>
// //                     </div>
// //                   )}
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {/* ===== ROOMS SECTION ===== */}
// //         <section
// //           className="relative w-full overflow-hidden mt-[-163px] md:mt-[-135px] lg:mt-[-143px] xl:mt-[-57px] h-[880px] lg:h-[700px]"
// //           aria-label="Rooms & Suites"
// //         >
// //           <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 h-full">
// //             {rooms.map((r) => {
// //               const priceUSD = r.price
// //                 ? (r.price / BTN_PER_USD).toFixed(2)
// //                 : "N/A";

// //               return (
// //                 <div
// //                   key={r._id}
// //                   className="relative group overflow-hidden"
// //                   data-aos="fade-up"
// //                   data-aos-duration="1000"
// //                 >
// //                   <div
// //                     className="absolute inset-0 bg-center bg-cover transition-all duration-300 group-hover:grayscale"
// //                     style={{
// //                       backgroundImage: `url(${r.images?.[0] || "/images/home/room1.jpeg"})`,
// //                     }}
// //                   />
// //                   <div className="absolute left-0 right-0 bottom-0 m-6">
// //                     <div className="text-center translate-y-[200px] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
// //                       <Link
// //                         to={`/room_details2/${r._id}`}
// //                         className="w-[50px] h-[50px] rounded-full bg-white dark:bg-lightBlack mb-6 grid place-items-center mx-auto hover:scale-105 transition-transform duration-200"
// //                       >
// //                         <AiOutlineEye size={20} className="text-[#006600]" />
// //                       </Link>

// //                       <div className="bg-white dark:bg-lightBlack text-center py-10">
// //                         <h4 className="text-lg md:text-xl lg:text-2xl font-medium text-lightBlack dark:text-white">
// //                           {r.roomType}
// //                         </h4>
// //                         <p className="mt-2 text-sm text-gray dark:text-lightGray font-normal">
// //                           Nu {r.price} (USD {priceUSD}++)
// //                         </p>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </section>

// //       </div>
// //     </div>
// //   );
// // };

// // export default Rooms;
// import { Link } from "react-router-dom";
// import "../../Components/Testimonial/testimonials.css";
// import { useEffect, useState, useRef } from "react";
// import { BiChevronDown } from "react-icons/bi";
// import ReactDatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "./RoomsDatepicker.css";
// import { AiOutlineEye } from "react-icons/ai";
// import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";
// import { FiCalendar } from "react-icons/fi";

// const Rooms = () => {
//   const [open, setOpen] = useState(false);
//   const [guestOpen, setGuestOpen] = useState(false);
//   const [room, setRoom] = useState(1);
//   const [adult, setAdult] = useState(1);
//   const [children, setChildren] = useState(0);
//   const [showInOverlay, setShowInOverlay] = useState(false);
//   const [showOutOverlay, setShowOutOverlay] = useState(false);
//   const [isClosing, setIsClosing] = useState(false);
//   const [checkIn, setCheckIn] = useState(null);
//   const [checkOut, setCheckOut] = useState(null);
//   const [rooms, setRooms] = useState([]);

//   const BTN_PER_USD = 85.49;

//   const roomRef = useRef(null);
//   const guestRef = useRef(null);

//   // Fetch rooms
//   useEffect(() => {
//     const fetchRooms = async () => {
//       try {
//         const API_URL = import.meta.env.VITE_API_URL;
//         const response = await fetch(`${API_URL}/rooms/rooms/firsttwo`);
//         const data = await response.json();

//         if (data.rooms) {
//           setRooms(data.rooms);
//         } else {
//           console.error("No rooms found in response:", data);
//         }
//       } catch (error) {
//         console.error("Error fetching rooms:", error);
//       }
//     };

//     fetchRooms();
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (roomRef.current && !roomRef.current.contains(event.target)) {
//         setOpen(false);
//       }
//       if (guestRef.current && !guestRef.current.contains(event.target)) {
//         setGuestOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Format date without timezone issues
//   const formatDate = (date) =>
//     date ? date.toLocaleDateString("en-CA") : "";

//   // Overlay control
//   const openInOverlay = () => {
//     setShowOutOverlay(false);
//     setIsClosing(false);
//     setShowInOverlay(true);
//   };
//   const openOutOverlay = () => {
//     setShowInOverlay(false);
//     setIsClosing(false);
//     setShowOutOverlay(true);
//   };
//   const closeOverlay = () => {
//     setIsClosing(true);
//     setTimeout(() => {
//       setShowInOverlay(false);
//       setShowOutOverlay(false);
//       setIsClosing(false);
//     }, 200);
//   };

//   return (
//     <div className="bg-whiteSmoke dark:bg-white font-Inter">
//       <div className="relative">

//         {/* ===== BOOKING SECTION ===== */}
//         <div
//           className="Container-Hero bg-lightBlack dark:bg-normalBlack grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 items-center justify-center font-Arial py-3 lg:py-4 xl:py-5 2xl:py-6 border-t-[3px] border-t-khaki 
//                      mx-auto shadow-xl relative z-20 -mt-20 px-4 sm:px-6 lg:px-10 z-[1]"
//         >
//           {/* Check In */}
//           <div className="p-3">
//             <p className="text-sm text-[#A9A9A9] ml-3">Check In</p>

//             {/* Custom button for BOTH mobile & desktop */}
//             <button
//               type="button"
//               onClick={openInOverlay}
//               className="w-full text-left text-white text-sm lg:text-base border border-white/20 px-3 py-2 mt-[2px]"
//             >
//               <span className="flex items-center justify-between w-full">
//               <span>{checkIn ? formatDate(checkIn) : "dd-mm-yyyy"}</span>
//               <FiCalendar className="text-white opacity-80 ml-2" size={18} />
//             </span>

//               {/* {checkIn ? formatDate(checkIn) : "dd-mm-yyyy"} */}
//             </button>
//           </div>

//           {/* Check Out */}
//           <div className="p-3">
//             <p className="text-sm text-[#A9A9A9] ml-3">Check Out</p>

//             <button
//               type="button"
//               onClick={openOutOverlay}
//               className="w-full text-left text-white text-sm lg:text-base border border-white/20 px-3 py-2 mt-[2px]"
//             >
//               <span className="flex items-center justify-between w-full">
//               <span>{checkOut ? formatDate(checkOut) : "dd-mm-yyyy"}</span>
//               <FiCalendar className="text-white opacity-80 ml-2" size={18} />
//             </span>

//               {/* {checkOut ? formatDate(checkOut) : "dd-mm-yyyy"} */}
//             </button>
//           </div>

//           {/* Rooms Dropdown */}
//           <div className="p-3 relative " ref={roomRef}>
//             <div
//               className="text-white px-3 py-2 cursor-pointer"
//               onClick={() => setOpen(!open)}
//             >
//               <span className="flex items-center justify-between text-sm text-[#A9A9A9]">
//                 Rooms <BiChevronDown />
//               </span>
//               <div className="pt-[10px] text-sm sm:text-base">{room} Room</div>
//             </div>
//             {open && (
//               <div className="absolute bg-white text-black w-60 mt-2 shadow-lg z-20 py-2">
//                 <div className="px-5 py-2 flex justify-between items-center">
//                   <div>{room} Room</div>
//                   <div className="flex gap-2">
//                     <button
//                       className="w-6 h-6 bg-khaki text-white"
//                       onClick={() => setRoom(room + 1)}
//                     >
//                       +
//                     </button>
//                     <button
//                       className="w-6 h-6 bg-khaki text-white"
//                       onClick={() => setRoom((v) => Math.max(1, v - 1))}
//                     >
//                       -
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Guests Dropdown */}
//           <div className="p-3 relative " ref={guestRef}>
//             <div
//               className="text-white px-3 py-2 cursor-pointer"
//               onClick={() => setGuestOpen(!guestOpen)}
//             >
//               <span className="flex items-center justify-between text-sm text-[#A9A9A9]">
//                 Guests <BiChevronDown />
//               </span>
//               <div className="pt-[10px] text-sm sm:text-base">
//                 {adult} Adult, {children} Child
//               </div>
//             </div>
//             {guestOpen && (
//               <div className="absolute bg-white text-black w-60 mt-2 shadow-lg z-20 py-2">
//                 <div className="px-5 py-2 flex justify-between items-center">
//                   <div>{adult} Adult</div>
//                   <div className="flex gap-2">
//                     <button
//                       className="w-6 h-6 bg-khaki text-white"
//                       onClick={() => setAdult(adult + 1)}
//                     >
//                       +
//                     </button>
//                     <button
//                       className="w-6 h-6 bg-khaki text-white"
//                       onClick={() => setAdult((v) => Math.max(1, v - 1))}
//                     >
//                       -
//                     </button>
//                   </div>
//                 </div>
//                 <div className="px-5 py-2 flex justify-between items-center">
//                   <div>{children} Child</div>
//                   <div className="flex gap-2">
//                     <button
//                       className="w-6 h-6 bg-khaki text-white"
//                       onClick={() => setChildren(children + 1)}
//                     >
//                       +
//                     </button>
//                     <button
//                       className="w-6 h-6 bg-khaki text-white"
//                       onClick={() => setChildren((v) => Math.max(0, v - 1))}
//                     >
//                       -
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Check Availability */}
//           <Link
//             to="/available_rooms"
//             state={{
//               checkIn: formatDate(checkIn),
//               checkOut: formatDate(checkOut),
//               room,
//               adult,
//               children,
//             }}
//             className="col-span-2 md:col-span-1"
//           >
//             <button className="w-full h-10 lg:h-[50px] text-[15px] bg-khaki border border-khaki text-white relative z-10 hover:bg-opacity-90 transition-all duration-300">
//               Check Availability
//             </button>
//           </Link>
//         </div>

//         {/* ===== CUSTOM DATE OVERLAY (BOTH MOBILE & DESKTOP) ===== */}
//         {(showInOverlay || showOutOverlay) && (
//           <div
//             className="fixed inset-0 z-[9999] bg-black/20 flex items-center justify-center px-4"
//             onClick={closeOverlay}
//           >
//             <div
//               className="bg-white text-black shadow-2xl max-w-[560px] w-full overflow-visible"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
//                 <h3 className="text-lg font-semibold">
//                   {showInOverlay ? "Select Check-in" : "Select Check-out"}
//                 </h3>
//                 <button
//                   onClick={closeOverlay}
//                   className="px-3 py-1.5 border border-[#D1D5DB] hover:bg-gray-50 text-sm"
//                 >
//                   Close
//                 </button>
//               </div>

//               <div className="p-3 md:p-5">
//                 <ReactDatePicker
//                   inline
//                   monthsShown={1}
//                   calendarClassName="rdp-pill"
//                   selected={showInOverlay ? checkIn : checkOut}
//                   minDate={
//                     showInOverlay ? new Date() : checkIn || new Date()
//                   }
//                   onChange={(date) => {
//                     if (showInOverlay) {
//                       setCheckIn(date);
//                       if (checkOut && date && checkOut < date) setCheckOut(null);
//                       closeOverlay();
//                     } else {
//                       setCheckOut(date);
//                       closeOverlay();
//                     }
//                   }}
//                   showDisabledMonthNavigation
//                 />
//               </div>
//             </div>
//           </div>
//         )}

//         {/* ===== ROOMS SECTION ===== */}
//         <section
//           className="relative w-full overflow-hidden mt-[-163px] md:mt-[-135px] lg:mt-[-143px] xl:mt-[-57px] h-[880px] lg:h-[700px]"
//         >
//           <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 h-full">
//             {rooms.map((r) => {
//               const priceUSD = r.price
//                 ? (r.price / BTN_PER_USD).toFixed(2)
//                 : "N/A";

//               return (
//                 <div
//                   key={r._id}
//                   className="relative group overflow-hidden"
//                 >
//                   <div
//                     className="absolute inset-0 bg-center bg-cover transition-all duration-300 group-hover:grayscale"
//                     style={{
//                       backgroundImage: `url(${r.images?.[0] || "/images/home/room1.jpeg"})`,
//                     }}
//                   />
//                   <div className="absolute left-0 right-0 bottom-0 m-6">
//                     <div className="text-center translate-y-[200px] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
//                       <Link
//                         to={`/room_details2/${r._id}`}
//                         className="w-[50px] h-[50px] rounded-full bg-white dark:bg-lightBlack mb-6 grid place-items-center mx-auto hover:scale-105 transition-transform duration-200"
//                       >
//                         <AiOutlineEye size={20} className="text-[#006600]" />
//                       </Link>

//                       <div className="bg-white dark:bg-lightBlack text-center py-10">
//                         <h4 className="text-lg md:text-xl lg:text-2xl font-medium text-lightBlack dark:text-white">
//                           {r.roomType}
//                         </h4>
//                         <p className="mt-2 text-sm text-gray dark:text-lightGray font-normal">
//                           Nu {r.price} (USD {priceUSD}++)
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Rooms;
import { Link } from "react-router-dom";
import "../../Components/Testimonial/testimonials.css";
import { useEffect, useState, useRef } from "react";
import { BiChevronDown } from "react-icons/bi";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./RoomsDatepicker.css";
import { AiOutlineEye } from "react-icons/ai";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { FiCalendar } from "react-icons/fi";

const Rooms = () => {
  const [open, setOpen] = useState(false);
  const [guestOpen, setGuestOpen] = useState(false);
  const [room, setRoom] = useState(1);
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);
  const [showInOverlay, setShowInOverlay] = useState(false);
  const [showOutOverlay, setShowOutOverlay] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [rooms, setRooms] = useState([]);

  const BTN_PER_USD = 85.49;

  const roomRef = useRef(null);
  const guestRef = useRef(null);

  // Fetch rooms
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL;
        const response = await fetch(`${API_URL}/rooms/rooms/firsttwo`);
        const data = await response.json();

        if (data.rooms) {
          setRooms(data.rooms);
        } else {
          console.error("No rooms found in response:", data);
        }
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (roomRef.current && !roomRef.current.contains(event.target)) {
        setOpen(false);
      }
      if (guestRef.current && !guestRef.current.contains(event.target)) {
        setGuestOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Format date without timezone issues
  const formatDate = (date) =>
    date ? date.toLocaleDateString("en-CA") : "";

  // Overlay control
  const openInOverlay = () => {
    setShowOutOverlay(false);
    setIsClosing(false);
    setShowInOverlay(true);
  };
  const openOutOverlay = () => {
    setShowInOverlay(false);
    setIsClosing(false);
    setShowOutOverlay(true);
  };
  const closeOverlay = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowInOverlay(false);
      setShowOutOverlay(false);
      setIsClosing(false);
    }, 200);
  };

  return (
    <div className="bg-whiteSmoke dark:bg-white font-Inter">
      <div className="relative">

        {/* ===== BOOKING SECTION ===== */}
        <div
          className="Container-Hero bg-lightBlack dark:bg-normalBlack grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 items-center justify-center font-Arial py-3 lg:py-4 xl:py-5 2xl:py-6 border-t-[3px] border-t-khaki 
                     mx-auto shadow-xl relative z-20 -mt-20 px-4 sm:px-6 lg:px-10 z-[1]"
        >
          {/* Check In */}
          <div className="p-3">
            <p className="text-sm text-[#A9A9A9] ml-3">Check In</p>

            <button
              type="button"
              onClick={openInOverlay}
              className="w-full text-left text-white text-sm lg:text-base border border-white/20 px-3 py-2 mt-[2px]"
            >
              <span className="flex items-center justify-between w-full">
                <span>{checkIn ? formatDate(checkIn) : "dd-mm-yyyy"}</span>
                <FiCalendar className="text-white opacity-80 ml-2" size={18} />
              </span>
            </button>
          </div>

          {/* Check Out */}
          <div className="p-3">
            <p className="text-sm text-[#A9A9A9] ml-3">Check Out</p>

            <button
              type="button"
              onClick={openOutOverlay}
              className="w-full text-left text-white text-sm lg:text-base border border-white/20 px-3 py-2 mt-[2px]"
            >
              <span className="flex items-center justify-between w-full">
                <span>{checkOut ? formatDate(checkOut) : "dd-mm-yyyy"}</span>
                <FiCalendar className="text-white opacity-80 ml-2" size={18} />
              </span>
            </button>
          </div>

{/* Rooms Dropdown */}
<div className="p-3 relative" ref={roomRef}>
  <div
    className="text-white px-3 py-2 cursor-pointer"
    onClick={() => setOpen(!open)}
  >
    <span className="flex items-center justify-between text-sm text-[#A9A9A9]">
      Rooms <BiChevronDown />
    </span>
    <div className="pt-[10px] text-sm sm:text-base">{room} Room</div>
  </div>
  {open && (
    <div className="absolute bg-white text-black mt-2 shadow-lg py-2 z-20 w-40 sm:w-60">
      {/* ...buttons inside remain same */}
      <div className="px-5 py-2 flex justify-between items-center">
        <div>{room} Room</div>
        <div className="flex gap-2">
          <button
            className="w-6 h-6 bg-khaki text-white"
            onClick={() => setRoom(room + 1)}
          >
            +
          </button>
          <button
            className="w-6 h-6 bg-khaki text-white"
            onClick={() => setRoom((v) => Math.max(1, v - 1))}
          >
            -
          </button>
        </div>
      </div>
    </div>
  )}
</div>

{/* Guests Dropdown */}
<div className="p-3 relative" ref={guestRef}>
  <div
    className="text-white px-3 py-2 cursor-pointer"
    onClick={() => setGuestOpen(!guestOpen)}
  >
    <span className="flex items-center justify-between text-sm text-[#A9A9A9]">
      Guests <BiChevronDown />
    </span>
    <div className="pt-[10px] text-sm sm:text-base">
      {adult} Adult, {children} Child
    </div>
  </div>
  {guestOpen && (
    <div className="absolute bg-white text-black mt-2 shadow-lg py-2 z-20 w-40 sm:w-60">
      {/* Adults */}
      <div className="px-5 py-2 flex justify-between items-center">
        <div>{adult} Adult</div>
        <div className="flex gap-2">
          <button
            className="w-6 h-6 bg-khaki text-white"
            onClick={() => setAdult(adult + 1)}
          >
            +
          </button>
          <button
            className="w-6 h-6 bg-khaki text-white"
            onClick={() => setAdult((v) => Math.max(1, v - 1))}
          >
            -
          </button>
        </div>
      </div>
      {/* Children */}
      <div className="px-5 py-2 flex justify-between items-center">
        <div>{children} Child</div>
        <div className="flex gap-2">
          <button
            className="w-6 h-6 bg-khaki text-white"
            onClick={() => setChildren(children + 1)}
          >
            +
          </button>
          <button
            className="w-6 h-6 bg-khaki text-white"
            onClick={() => setChildren((v) => Math.max(0, v - 1))}
          >
            -
          </button>
        </div>
      </div>
    </div>
  )}
</div>


          {/* Check Availability */}
          <Link
            to="/available_rooms"
            state={{
              checkIn: formatDate(checkIn),
              checkOut: formatDate(checkOut),
              room,
              adult,
              children,
            }}
            className="col-span-2 md:col-span-1"
          >
            <button className="w-full h-10 lg:h-[50px] text-[15px] bg-khaki border border-khaki text-white relative z-10 hover:bg-opacity-90 transition-all duration-300">
              Check Availability
            </button>
          </Link>
        </div>

        {/* ===== CUSTOM DATE OVERLAY (WITH MONTH HEADER) ===== */}
        {(showInOverlay || showOutOverlay) && (
          <div
            className="fixed inset-0 z-[9999] bg-black/20 flex items-center justify-center px-4"
            onClick={closeOverlay}
          >
            <div
              className="bg-white text-black shadow-2xl max-w-[560px] w-full overflow-visible"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <h3 className="text-lg font-semibold">
                  {showInOverlay ? "Select Check-in" : "Select Check-out"}
                </h3>
                <button
                  onClick={closeOverlay}
                  className="px-3 py-1.5 border border-[#D1D5DB] hover:bg-gray-50 text-sm"
                >
                  Close
                </button>
              </div>

              <div className="p-3 md:p-5">
                <ReactDatePicker
                  inline
                  monthsShown={1}
                  calendarClassName="rdp-pill"
                  selected={showInOverlay ? checkIn : checkOut}
                  minDate={
                    showInOverlay ? new Date() : checkIn || new Date()
                  }
                  onChange={(date) => {
                    if (showInOverlay) {
                      setCheckIn(date);
                      if (checkOut && date && checkOut < date)
                        setCheckOut(null);
                      closeOverlay();
                    } else {
                      setCheckOut(date);
                      closeOverlay();
                    }
                  }}
                  showDisabledMonthNavigation

                  /* 🟢 CUSTOM MONTH/YEAR HEADER */
                  renderCustomHeader={({
                    date,
                    changeYear,
                    changeMonth,
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled,
                  }) => (
                    <div className="flex items-center justify-between px-3 py-2">
                      <div className="flex items-center space-x-2">
                        <select
                          value={date.getMonth()}
                          onChange={({ target: { value } }) =>
                            changeMonth(Number(value))
                          }
                          className="border px-2 py-1 text-sm border-[#9CA3AF]"
                        >
                          {Array.from({ length: 12 }).map((_, i) => (
                            <option key={i} value={i}>
                              {new Date(0, i).toLocaleString("default", {
                                month: "long",
                              })}
                            </option>
                          ))}
                        </select>

                        <select
                          value={date.getFullYear()}
                          onChange={({ target: { value } }) =>
                            changeYear(Number(value))
                          }
                          className="border px-2 py-1 text-sm border-[#9CA3AF]"
                        >
                          {Array.from({ length: 11 }, (_, i) => {
                            const year = new Date().getFullYear() + i;
                            return (
                              <option key={year} value={year}>
                                {year}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={decreaseMonth}
                          disabled={prevMonthButtonDisabled}
                          className="px-2 py-1 border border-[#9CA3AF] text-[#1F1F1F]"
                        >
                          ▲
                        </button>

                        <button
                          onClick={increaseMonth}
                          disabled={nextMonthButtonDisabled}
                          className="px-2 py-1 border border-[#9CA3AF] text-[#1F1F1F]"
                        >
                          ▼
                        </button>
                      </div>
                    </div>
                  )}
                />
              </div>

            </div>
          </div>
        )}

        {/* ===== ROOMS SECTION ===== */}
        <section
          className="relative w-full overflow-hidden mt-[-163px] md:mt-[-135px] lg:mt-[-143px] xl:mt-[-57px] h-[880px] lg:h-[700px]"
        >
          <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 h-full">
            {rooms.map((r) => {
              const priceUSD = r.price
                ? (r.price / BTN_PER_USD).toFixed(2)
                : "N/A";

              return (
                <div
                  key={r._id}
                  className="relative group overflow-hidden"
                >
                  <div
                    className="absolute inset-0 bg-center bg-cover transition-all duration-300 group-hover:grayscale"
                    style={{
                      backgroundImage: `url(${r.images?.[0] || "/images/home/room1.jpeg"})`,
                    }}
                  />

                  <div className="absolute left-0 right-0 bottom-0 m-6">
                    <div className="text-center translate-y-[200px] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <Link
                        to={`/room_details2/${r._id}`}
                        className="w-[50px] h-[50px] rounded-full bg-white dark:bg-lightBlack mb-6 grid place-items-center mx-auto hover:scale-105 transition-transform duration-200"
                      >
                        <AiOutlineEye size={20} className="text-[#006600]" />
                      </Link>

                      <div className="bg-white dark:bg-lightBlack text-center py-10">
                        <h4 className="text-lg md:text-xl lg:text-2xl font-medium text-lightBlack dark:text-white">
                          {r.roomType}
                        </h4>
                        <p className="mt-2 text-sm text-gray dark:text-lightGray font-normal">
                          Nu {r.price} (USD {priceUSD}++)
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Rooms;
