import { RxHamburgerMenu } from "react-icons/rx";
import { ImYoutube } from "react-icons/im";
import { FaCircleUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";


const Header = () => {

    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    return (
        <div className="grid grid-flow-col p-5 shadow-lg ">
            <div className="icons flex col-span-1">
                <span>
                    {<RxHamburgerMenu 
                    onClick={() => toggleMenuHandler()}
                    className="size-6 cursor cursor-pointer"/>}
                </span>
                </div>

                <div className="icons flex col-span-1">
                <span style={{ display: "flex", gap: "4px" }}>
                    <ImYoutube className="size-6 ml-2 text-red-500 cursor-pointer" /> 
                    <span className="font-bold cursor-pointer">YouTube</span>
                    
                    </span>
  

            </div>
            <div className="search col-span-10 px-10">
  <div className="flex items-center">
    <input 
      className="w-1/2 border border-gray-400 py-1 rounded-l-full pr-10 focus:outline-none" 
      type="text"
      placeholder=" Search"
    />
    <button 
      className="flex items-center border border-gray-400 px-4 py-2 rounded-r-full bg-gray-200 cursor-pointer"
    >
      <CiSearch className="size-4"/>
    </button>
  </div>
</div>



            {/* <div className="search col-span-10 px-10">
                <input className="w-1/2 border border-gray-400 py-1 rounded-l-full"type="text"
                placeholder=" Search"
                />
                <button className="border border-gray-400 px-4 py-2 rounded-r-full bg-gray-200 cursor cursor-pointer">
                    <CiSearch className="size-4"/>
                </button>
            </div> */}
            <div className="usericon col-span-1 mx-6">
                <span>
            {<FaCircleUser className="size-6 cursor cursor-pointer"/>}</span>
            </div>
        </div>
    );
};

export default Header;
