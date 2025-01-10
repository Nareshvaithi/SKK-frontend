import React, { useContext, useEffect, useState } from "react";
import { ContextProvide } from "../../Context_API/contextProvider";

function FilterEvents() {
  const { eventBanner, setEventBanner, eventList, setEventList } =
    useContext(ContextProvide);
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <>
      <div className=" bg-gray-100">
        <div className="container">
          <div className="flex justify-around items-center">
            <div className="flex justify-center items-center">
              <p>Category :</p>
              <div>
                <select
                  className="cursor-pointer border rounded px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={selectedValue}
                  onChange={handleChange}
                >
                  {eventList.map((items) => {
                    return (
                      <>
                        <option>{items.categeroy}</option>
                      </>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="flex">
              <p>Events</p>
              <div>
                <select className="cursor-pointer border rounded px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {eventList.map((items) => {
                    if (selectedValue === items.categeroy) {
                      items.events.map((value) => {
                      
                        return <>
                            <option>{value.event_name}</option>
                          </>
                        ;
                      });
                    }
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterEvents;
