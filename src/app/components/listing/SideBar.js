import { FaMapMarkerAlt } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-100 space-y-6">

      <h2 className="text-2xl font-bold">Filters</h2>

      <div>
        <h3 className="font-bold mb-4">Type Of Care</h3>

        {/* <label class="flex items-center space-x-2">
          <input type="checkbox" className="hidden peer"></input>
            <div class="w-5 h-5 border-2 border-gray-500 peer-checked:bg-black"></div>
            <span>Black Checkbox</span>
        </label> */}

        <ul className="space-y-2 mb-10">
          <li className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-black" />
            <label>Residential Care Homes</label>
          </li>
          <li className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-black" />
            <label>Dementia Care Homes</label>
          </li>
          <li className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-4 w-4" />
            <label>Nursing Care Homes</label>
          </li>
          <li className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-4 w-4" />
            <label>Retirement Homes</label>
          </li>
          <li className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-4 w-4" />
            <label>Home Care</label>
          </li>
        </ul>
      </div>

      <div>
        <div className="flex items-center space-x-5 mb-4">

          <h3 className="font-bold text-lg">By Area</h3>

          <div className="flex items-center bg-black text-white px-2 py-1 rounded-lg text-xs font-bold">
            <FaMapMarkerAlt className="mr-1" />
            <span>Pune</span>
          </div>

        </div>
        <div className="flex flex-wrap gap-1 mt-2 mb-10">
          <button className="border text-[0.8rem] font-bold border-black bg-black text-white px-3 py-1 rounded-2xl">Bibvewadi</button>
          <button className="border text-[0.8rem] font-bold border-black px-3 py-1 rounded-2xl hover:bg-gray-100">Koregaon Park</button>
          <button className="border text-[0.8rem] font-bold border-black px-3 py-1 rounded-2xl hover:bg-gray-100">Aundh</button>
          <button className="border text-[0.8rem] font-bold border-black px-3 py-1 rounded-2xl hover:bg-gray-100">Baner</button>
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-4">By Radius</h3>
        <input type="range" className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" />
      </div>

      <div>
        <h3 className="font-bold mb-4">Price Range Per Night</h3>
        <input type="range" className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" />
      </div>

      <div>
        <h3 className="font-bold mb-2">Facilities</h3>
        <div className="grid grid-cols-2 gap-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-black" />
            <span>Healthcare</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-4 w-4" />
            <span>Nursing</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-4 w-4" />
            <span>Fitness</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-4 w-4" />
            <span>Yoga</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-4 w-4" />
            <span>Medication</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-4 w-4" />
            <span>Security</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
