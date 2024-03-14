import React from "react";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: "",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];

const Agent = () => {
  return (
    <div className="mx-auto max-w-7xl mt-10  items-center ">
      <div className="flex">
  {/* left */}
  <div>
    <div className="border-t-2 border-red-500 h-2px mr-[7.2rem] hidden sm:flex"></div>
    <p className="text-gray-900 mx-5 text-2xl font-bold cursor-pointer flex">
      FEATURED <span className="text-red-500">AGENTS</span>
    </p>
    <p className="text-black/80 mx-5 text-sm mt-1.5 max-w-sm">
      Meet the opportunity to work with some of the top Real Estate agents in town.
    </p>
  </div>
  {/* right-end */}
  <div className="justify-end flex items-center">
    <div className="text-white bg-red-500 rounded-full p-3 my-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </div>

    <div className="mx-2 mt-5">
      <p className="text-md text-gray-950">view all</p>
      <p className="text-red-500 text-md font-semibold">Agents</p>
    </div>
  </div>
</div>


      {/* Team Section */}

      <div>
        <div className="mx-auto max-w-7xl mb-[30rem] items-center">
          <div className="mt-6 px-5 mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden place-content-center place-items-center ">
            {/* p1 */}
            <div className="flex flex-col md:flex-row">
  <div className="md:w-1/3">
    <img
      src="https://imgs.search.brave.com/Dj7mxbL3ZB0dPRtSjLiiN9BDwl4iPY-sME1W_01W3_M/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTg1/MTM4NjYwL3Bob3Rv/L3BvcnRyYWl0LW9m/LXNlbmlvci1idXNp/bmVzc21hbi1zbWls/aW5nLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz0zSVh5X21N/emFkcGpjb0wwczhL/cVk3MzZqUU1YQjVK/OVdzaHJFYkJORWZ3/PQ"
      className="h-52 md:h-full w-full rounded-lg shadow-lg shadow-red-500"
      alt="Team member"
    />
  </div>
  <div className="md:w-2/3  sm:mt-0">
    {/* text */}
    <div>
                <div>
                  <h1 className="text-white mt-5 mx-5 max-w-[10rem] bg-red-500 p-1.5 pr-10 rounded-tr-md ">
                    Amirul feisal
                  </h1>
                </div>
                <div className=" mx-5  w-[16rem]">
                  <div className="flex py-10  border-r-2 border-t-2 border-red-500">
                    <div className="flex text-sm items-center mx-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                        />
                      </svg>{" "}
                      <h1> 25 Listings</h1>
                    </div>
                    <div className="flex text-sm mx-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <h1>REN 1255</h1>
                    </div>
                  </div>
                </div>
              </div>
  </div>
</div>

            {/* p2 */}
            <div className="flex flex-col md:flex-row">
  <div className="md:w-1/3">
    <img
      src="https://imgs.search.brave.com/Dj7mxbL3ZB0dPRtSjLiiN9BDwl4iPY-sME1W_01W3_M/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTg1/MTM4NjYwL3Bob3Rv/L3BvcnRyYWl0LW9m/LXNlbmlvci1idXNp/bmVzc21hbi1zbWls/aW5nLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz0zSVh5X21N/emFkcGpjb0wwczhL/cVk3MzZqUU1YQjVK/OVdzaHJFYkJORWZ3/PQ"
      className="h-52 md:h-full w-full rounded-lg shadow-lg shadow-red-500"
      alt="Team member"
    />
  </div>
  <div className="md:w-2/3  sm:mt-0">
    {/* text */}
    <div>
                <div>
                  <h1 className="text-white mt-5 mx-5 max-w-[10rem] bg-red-500 p-1.5 pr-10 rounded-tr-md ">
                    Amirul feisal
                  </h1>
                </div>
                <div className=" mx-5  w-[16rem]">
                  <div className="flex py-10  border-r-2 border-t-2 border-red-500">
                    <div className="flex text-sm items-center mx-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                        />
                      </svg>{" "}
                      <h1> 25 Listings</h1>
                    </div>
                    <div className="flex text-sm mx-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <h1>REN 1255</h1>
                    </div>
                  </div>
                </div>
              </div>
  </div>
</div>
            {/* p3 */}

            <div className="flex flex-col md:flex-row">
  <div className="md:w-1/3">
    <img
      src="https://imgs.search.brave.com/Dj7mxbL3ZB0dPRtSjLiiN9BDwl4iPY-sME1W_01W3_M/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTg1/MTM4NjYwL3Bob3Rv/L3BvcnRyYWl0LW9m/LXNlbmlvci1idXNp/bmVzc21hbi1zbWls/aW5nLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz0zSVh5X21N/emFkcGpjb0wwczhL/cVk3MzZqUU1YQjVK/OVdzaHJFYkJORWZ3/PQ"
      className="h-52 md:h-full w-full rounded-lg shadow-lg shadow-red-500"
      alt="Team member"
    />
  </div>
  <div className="md:w-2/3  sm:mt-0">
    {/* text */}
    <div>
                <div>
                  <h1 className="text-white mt-5 mx-5 max-w-[10rem] bg-red-500 p-1.5 pr-10 rounded-tr-md ">
                    Amirul feisal
                  </h1>
                </div>
                <div className=" mx-5  w-[16rem]">
                  <div className="flex py-10  border-r-2 border-t-2 border-red-500">
                    <div className="flex text-sm items-center mx-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                        />
                      </svg>{" "}
                      <h1> 25 Listings</h1>
                    </div>
                    <div className="flex text-sm mx-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <h1>REN 1255</h1>
                    </div>
                  </div>
                </div>
              </div>
  </div>
</div>

            {/* p4 */}
            <div className="flex flex-col md:flex-row">
  <div className="md:w-1/3">
    <img
      src="https://imgs.search.brave.com/Dj7mxbL3ZB0dPRtSjLiiN9BDwl4iPY-sME1W_01W3_M/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTg1/MTM4NjYwL3Bob3Rv/L3BvcnRyYWl0LW9m/LXNlbmlvci1idXNp/bmVzc21hbi1zbWls/aW5nLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz0zSVh5X21N/emFkcGpjb0wwczhL/cVk3MzZqUU1YQjVK/OVdzaHJFYkJORWZ3/PQ"
      className="h-52 md:h-full w-full rounded-lg shadow-lg shadow-red-500"
      alt="Team member"
    />
  </div>
  <div className="md:w-2/3  sm:mt-0">
    {/* text */}
    <div>
                <div>
                  <h1 className="text-white mt-5 mx-5 max-w-[10rem] bg-red-500 p-1.5 pr-10 rounded-tr-md ">
                    Amirul feisal
                  </h1>
                </div>
                <div className=" mx-5  w-[16rem]">
                  <div className="flex py-10  border-r-2 border-t-2 border-red-500">
                    <div className="flex text-sm items-center mx-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                        />
                      </svg>{" "}
                      <h1> 25 Listings</h1>
                    </div>
                    <div className="flex text-sm mx-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <h1>REN 1255</h1>
                    </div>
                  </div>
                </div>
              </div>
  </div>
</div>
            {/* p5 */}
            <div className="flex flex-col md:flex-row">
  <div className="md:w-1/3">
    <img
      src="https://imgs.search.brave.com/Dj7mxbL3ZB0dPRtSjLiiN9BDwl4iPY-sME1W_01W3_M/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTg1/MTM4NjYwL3Bob3Rv/L3BvcnRyYWl0LW9m/LXNlbmlvci1idXNp/bmVzc21hbi1zbWls/aW5nLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz0zSVh5X21N/emFkcGpjb0wwczhL/cVk3MzZqUU1YQjVK/OVdzaHJFYkJORWZ3/PQ"
      className="h-52 md:h-full w-full rounded-lg shadow-lg shadow-red-500"
      alt="Team member"
    />
  </div>
  <div className="md:w-2/3  sm:mt-0">
    {/* text */}
    <div>
                <div>
                  <h1 className="text-white mt-5 mx-5 max-w-[10rem] bg-red-500 p-1.5 pr-10 rounded-tr-md ">
                    Amirul feisal
                  </h1>
                </div>
                <div className=" mx-5  w-[16rem]">
                  <div className="flex py-10  border-r-2 border-t-2 border-red-500">
                    <div className="flex text-sm items-center mx-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                        />
                      </svg>{" "}
                      <h1> 25 Listings</h1>
                    </div>
                    <div className="flex text-sm mx-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <h1>REN 1255</h1>
                    </div>
                  </div>
                </div>
              </div>
  </div>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agent;
