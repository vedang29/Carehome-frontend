// import { FaRupeeSign } from "react-icons/fa";
// import { RxCardStackMinus } from "react-icons/rx";
// import { LuCctv } from "react-icons/lu";
// import { PiForkKnifeBold } from "react-icons/pi";
// import { FaStethoscope } from "react-icons/fa";
// import { FaBookmark } from "react-icons/fa6";
// import { FaStar } from "react-icons/fa6";
// import {Room1} from "../../../assets/"

// const listingcard = () => {
//   return (
//     <>  
//         <div>
//             <div className="Image">
//                 <image src="Room"></image>
//             </div>
//             <div className="Descp">
//                 <div className="Name">Serenity Elder Care</div>
//                 <div className="Mark"><FaBookmark /></div>
//                 <div className="Location">Pune, Maharastra</div>
//                 <div className="Review">
//                 <FaStar />
//                 <div>
//                     <p>4.0</p>
//                     <p>(320 reviews)</p>
//                 </div>
//                 </div>
//                 <ul className="Icons">
//                     <li><RxCardStackMinus /></li>
//                     <li><LuCctv /></li>
//                     <li><FaStethoscope /></li>
//                     <li><PiForkKnifeBold /></li>
//                 </ul>
//                 <div>
//                     <div className="Price"><FaRupeeSign />3500<p>/ night</p></div>
//                     <button>View Details</button>
//                     <button>Book Now</button>
//                 </div>
//             </div>
//         </div>
//     </>
//   )
// }

// export default listingcard

import { FaLocationDot } from "react-icons/fa6";

const SideBar = () => {
  return (
    <>
        <div>Filters</div>
        <form>
        <div>Type Of Care</div>
        <ul>
            <li>
                <input type='checkbox'></input>
                <label>Residential Care Homes</label>
            </li>
            <li>
                <input type='checkbox'></input>
                <label>Residential Care Homes</label>
            </li>
            <li>
                <input type='checkbox'></input>
                <label>Residential Care Homes</label>
            </li>
            <li>
                <input type='checkbox'></input>
                <label>Residential Care Homes</label>
            </li>
            <li>
                <input type='checkbox'></input>
                <label>Residential Care Homes</label>
            </li>
        </ul>

        <div>
            By Area <span><FaLocationDot /> Pune</span>

            <button>Bibvewadi</button>
            <button>Bibvewadi</button>
            <button>Bibvewadi</button>
            <button>Bibvewadi</button>
        </div>

        <div>By Radius</div>
            <div className="slider"></div>
            <div className="black slider"></div>
       

        <div>By Radius</div>
            <div className="slider"></div>
            <div className="black slider"></div>
        
        <div>
        <input type='checkbox'></input>
        <label>HealthCAre</label>

        <input type='checkbox'></input>
        <label>Residential Care Homes</label>

        <input type='checkbox'></input>
        <label>Residential Care Homes</label>

        <input type='checkbox'></input>
        <label>Residential Care Homes</label>

        <input type='checkbox'></input>
        <label>Residential Care Homes</label>
        
        <input type='checkbox'></input>
        <label>Residential Care Homes</label>

        <input type='checkbox'></input>
        <label>Residential Care Homes</label>
        </div>

        </form>
    </>
  )
}

export default SideBar
