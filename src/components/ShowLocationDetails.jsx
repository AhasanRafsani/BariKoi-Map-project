import React from "react";

const ShowLocationDetails = ({address,city,area,postCode,uCode,pType})=>{

    return(
        <>
           <div className=" absolute z-[10] min-h-fit w-[80%] inset-x-0 mx-auto rounded-md sm:top-[30%] bottom-5 p-3 sm:bg-gray-300 text-white sm:text-black bg-black bg-opacity-75 shadow-detailsBox">
            
                <h1 className="text-xl sm:text-2xl font-semibold">{address}</h1>
                <div className=" text-md font-semibold sm:text-xl my-1">
                    <p className=" inline" >{area},</p>
                    <p className=" inline ">{city}</p>
                </div>
                <h6 className=" text-sm font-semibold sm:text-xl" >Place Type : <span className=" font-normal">{pType}</span></h6>
                <h6 className=" text-sm font-semibold sm:text-xl" >PostCode : <span className=" font-normal">{postCode}</span></h6>
                <h6 className=" text-sm font-semibold sm:text-xl ">PlaceCode : <span className=" font-normal">{uCode}</span></h6>
               
            
                <h2 className=" text-lg  font-semibold my-1">Search NearBy :</h2>
                <ul className="flex flex-wrap gap-2">
                   <li className=" min-w-fit min-h-fit border rounded-md border-emerald-600 px-2 py-1 cursor-pointer duration-300 hover:bg-teal-900 hover:text-white">Bank</li>
                   <li className=" min-w-fit min-h-fit border rounded-md border-emerald-600 px-2 py-1 cursor-pointer duration-300 hover:bg-teal-900 hover:text-white">School</li>
                   <li className=" min-w-fit min-h-fit border rounded-md border-emerald-600 px-2 py-1 cursor-pointer duration-300  hover:bg-teal-900 hover:text-white">Library</li>
                   <li className=" min-w-fit min-h-fit border rounded-md border-emerald-600 px-2 py-1 cursor-pointer duration-300 hover:bg-teal-900 hover:text-white">Post Office</li>
                </ul>
            </div>
        </>
    );
}

export default ShowLocationDetails ;