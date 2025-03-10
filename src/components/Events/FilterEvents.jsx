import React, { useContext, useEffect, useState } from "react";
import { ContextProvide } from "../../Context_API/contextProvider";
import { CiExport } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import { list } from "postcss";

function FilterEvents() {
  const [activate, setActivate] = useState("all");
  const [play, setPlay] = useState("");
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState([]);
  const [color, setColor] = useState(false);
  const { eventBanner, setEventBanner, eventList, setEventList } = useContext(ContextProvide);
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const [isLoading, setIsLoading] = useState(true);

  const handlePlay = (id, event_name) => {
    eventList.map((value) => {
      value.events.map((items, index) => {
        if (index == id && event_name == items.event_name) {
          return setPlay(items.event_name);
        }
      });
    });
  };

  const handleShow = (value) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    eventList.map((items) => {
      items.events.map((values) => {
        if (value == values.event_name) {
          setShow(true);
          return setData(values.images);
        }
      });
    });
  };

  const handleDisplay = (id) => {
    data.map((items, index) => {
      if (id == index) {
        setDisplay(index);
        setColor(true);
      }
    });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setColor(false);
      }
      if (event.key === "ArrowRight") {
        if (display < data.length - 1) {
          handleDisplay(display + 1);
        }
      } else if (event.key === "ArrowLeft") {
        if (display >= 0) {
          handleDisplay(display - 1);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [display, data.length]);
  return (
    <>
      <div className=" bg-gray-100 pb-10">
        <div className="container">
          <div className=" w-full flex justify-center lg:gap-14 gap-2 items-center sticky top-0 z-50 bg-gray-100 h-20">
            <p
              className={`${
                activate == "all" ? "text-themebrown" : "text-black"
              } uppercase text-[9px] cursor-pointer lg:text-[14px] font-mainFont2 text-nowrap`}
              onClick={() => {
                setActivate("all");
                setShow(false);
              }}
            >
              See ALL
            </p>
            {eventList.map((value) => {
              return (
                <>
                  <p
                    className={`${
                      activate == value.categeroy
                        ? "text-themebrown"
                        : "text-black"
                    } uppercase font-mainFont2 text-[9px] lg:text-[14px] text-nowrap cursor-pointer`}
                    onClick={() => {
                      setActivate(value.categeroy);
                      setShow(false);
                    }}
                  >
                    {value.categeroy}
                  </p>
                </>
              );
            })}
          </div>
          <div className={`${show ? "hidden" : "block"} py-10 w-full`}>
            {eventList.map((value) => {
              return (
                <>
                  <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-5 ">
                    {activate == value.categeroy
                      ? value.events.map((items, index) => {
                          return (
                            <>
                              <div
                                className="shadow-lg relative overflow-hidden cursor-pointer"
                                onMouseEnter={() =>
                                  handlePlay(index, items.event_name)
                                }
                              >
                                <div className="w-full">
                                  <div className="h-52">
                                    <img
                                      src={items.images[0]}
                                      alt=""
                                      className="w-full h-full transition-transform duration-300 hover:scale-105"
                                    />
                                  </div>
                                </div>
                                <div className="border p-4 font-mainFont1">
                                  <p className="font-mainFont1 text-xl">
                                    {items.event_name}
                                  </p>
                                  <p className="font-mainFont2 text-lg text-gray-700 leading-5 mt-2">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing Lorem ipsum dolor sit amet
                                    consectetur, adipisicing .{" "}
                                  </p>
                                  <p className="text-sm font-mainFont2 mt-2">
                                    Event_Date :{" "}
                                    <span className="font-semibold">
                                      {items.date}
                                    </span>
                                  </p>
                                  <div className="flex justify-center items-center w-full mx-auto absolute  top-1/4">
                                    <button
                                      className={`${
                                        play == items.event_name
                                          ? "translate-y-0"
                                          : "-translate-y-[500px]"
                                      } transition-all duration-1000 text-3xl text-themebrown  rounded-full p-2 bg-white/50`}
                                      onClick={() => handleShow(play)}
                                    >
                                      <MdArrowOutward />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })
                      : activate == "all"
                      ? value.events.map((item, index) => {
                          return (
                            <>
                              <div
                                className=" mb-4 shadow-lg  relative overflow-hidden cursor-pointer"
                                onMouseEnter={() =>
                                  handlePlay(index, item.event_name)
                                }
                              >
                                <div className="w-full">
                                  <div className="h-40 w-full">
                                    <img
                                      src={item.images[0]}
                                      alt=""
                                      className="w-full h-full transition-transform duration-300 hover:scale-105 object-cover"
                                    />
                                  </div>
                                </div>
                                <div className="p-4 font-mainFont1">
                                  <p className="font-mainFont1 text-xl">
                                    {item.event_name}
                                  </p>
                                  <p className="text-lg font-mainFont2 text-gray-700 leading-5 mt-2">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing Lorem ipsum dolor sit amet
                                    consectetur, adipisicing .{" "}
                                  </p>
                                  <p className="text-sm font-mainFont2 mt-2">
                                    Event_Date :{" "}
                                    <span className="font-semibold">
                                      {item.date}
                                    </span>
                                  </p>
                                  <div className="flex justify-center items-center w-full mx-auto absolute  top-1/4">
                                    <button
                                      className={`${
                                        play == item.event_name
                                          ? "translate-y-0"
                                          : "-translate-y-[500px]"
                                      } transition-all duration-1000 text-3xl text-themebrown  rounded-full p-2 bg-white/50`}
                                      onClick={() => handleShow(play)}
                                    >
                                      <MdArrowOutward />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })
                      : null}
                  </div>
                </>
              );
            })}
          </div>
          <div className={`${show ? "block" : "hidden"}`}>
            {isLoading ? (
              <div className="text-xl flex space-x-2 justify-center mx-auto">
                {"Loading...".split("").map((char, index) => (
                  <span
                    key={index}
                    className="text-xl "
                    style={{
                      display: "inline-block",
                      animation: `bounce 1.5s ease-in-out ${
                        index * 0.2
                      }s infinite`,
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>
            ) : (
              <div className="lg:columns-4 columns-2 space-y-4 ">
                {data.map((value, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        className="overflow-hidden rounded-lg shadow-lg"
                      >
                        <img
                          src={value}
                          alt={`Bharatanatyam Event ${index + 1}`}
                          className="w-full h-auto transition-transform duration-300 hover:scale-105"
                          onClick={() => handleDisplay(index)}
                        />
                      </div>
                    </>
                  );
                })}
              </div>
            )}
          </div>
          {color ? (
            <div className="">
              <div className="fixed inset-0 bg-black/90 z-50 flex justify-center items-center w-full mx-auto">
                {data.map((value, index) => {
                  if (index == display) {
                    return (
                      <>
                        <img
                          src={value}
                          alt=""
                          className="object-contain h-[90vh] cursor-pointer"
                        />
                      </>
                    );
                  }
                })}
                <button
                  className="absolute left-0 text-white active:text-white/80 text-4xl px-4"
                  onClick={() => {
                    if (display >= 0) {
                      handleDisplay(display - 1);
                    }
                  }}
                >
                  &#8592;
                </button>
                <button
                  className="absolute right-0 text-white active:text-white/80 text-4xl px-4"
                  onClick={() => {
                    if (display < data.length) {
                      handleDisplay(display + 1);
                    }
                  }}
                >
                  &#8594;
                </button>
                <button
                  className="absolute top-4 right-4 text-white text-3xl font-bold"
                  onClick={() => setColor(false)}
                >
                  &times;
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default FilterEvents;