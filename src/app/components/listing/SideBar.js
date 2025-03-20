import { FaMapMarkerAlt } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-100 space-y-6">

      <h2 className="text-xl font-bold">Filters</h2>

      <div>
        <h3 className="font-semibold">Type Of Care</h3>

        {/* <label class="flex items-center space-x-2">
          <input type="checkbox" className="hidden peer"></input>
            <div class="w-5 h-5 border-2 border-gray-500 peer-checked:bg-black"></div>
            <span>Black Checkbox</span>
        </label> */}

        <ul className="space-y-2">
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
        <h3 className="font-semibold">By Area</h3>
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-black" />
          <span className="font-semibold">Pune</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          <button className="bg-black text-white px-3 py-1 rounded-lg">Bibvewadi</button>
          <button className="border border-gray-300 px-3 py-1 rounded-lg hover:bg-gray-100">Koregaon Park</button>
          <button className="border border-gray-300 px-3 py-1 rounded-lg hover:bg-gray-100">Aundh</button>
          <button className="border border-gray-300 px-3 py-1 rounded-lg hover:bg-gray-100">Baner</button>
        </div>
      </div>

      <div>
        <h3 className="font-semibold">By Radius</h3>
        <input type="range" className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" />
      </div>

      <div>
        <h3 className="font-semibold">Price Range Per Night</h3>
        <input type="range" className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" />
      </div>

      <div>
        <h3 className="font-semibold">Facilities</h3>
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
