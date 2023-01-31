import React from "react";
import { ISsologin } from "@/constants/Ssologin";

const SsoCard = ({
  name = "",
  collegeName = "",
  email = "",
  yearOfStudy = "",
}: ISsologin) => {
  return (
    <div style={{ minWidth: "20rem" }} className="rounded-md">
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-md">
        <div className="sm:flex sm:items-start ">
          <div className="mx-auto flex w-12 flex-shrink-0 items-center justify-center  bg-green-300 sm:mx-0 sm:h-10 sm:w-10"></div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3
              className="text-lg font-medium leading-6 text-gray-900"
              id="modal-title"
            >
              Name : <span className="font-semibold capitalize">{name}</span>
            </h3>
            <h3
              className="text-lg font-medium leading-6 text-gray-900"
              id="modal-title"
            >
              Email : <span className="font-semibold capitalize">{email}</span>
            </h3>
            <h3
              className="text-lg font-medium leading-6 text-gray-900"
              id="modal-title"
            >
              College Name :{" "}
              <span className="font-semibold capitalize">{collegeName}</span>
            </h3>
            <h3
              className="text-lg font-medium leading-6 text-gray-900"
              id="modal-title"
            >
              Year of Study :{" "}
              <span className="font-semibold capitalize">{yearOfStudy}</span>
            </h3>
            {/* <div className="mt-2">
            <p className="text-sm text-gray-500">
              Are you sure you want to deactivate your account? All of
              your data will be permanently removed. This action cannot be
              undone.
            </p>
          </div> */}
          </div>
        </div>
      </div>
    </div>
    // <div
    //   className="relative z-10"
    //   aria-labelledby="modal-title"
    //   role="dialog"
    //   aria-modal="true"
    // >
    //   <div className="inset-0 shadow-lg bg-opacity-75 transition-opacity"></div>
    //   <div className="inset-0 z-10 overflow-y-auto">
    //     {/* <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"> */}
    //     <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
    //       <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
    //         <div className="sm:flex sm:items-start">
    //           <div className="mx-auto flex w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-300 sm:mx-0 sm:h-10 sm:w-10"></div>
    //           <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
    //             <h3
    //               className="text-lg font-medium leading-6 text-gray-900"
    //               id="modal-title"
    //             >
    //               Name :{" "}
    //               <span className="font-semibold capitalize">{name}</span>
    //             </h3>
    //             <h3
    //               className="text-lg font-medium leading-6 text-gray-900"
    //               id="modal-title"
    //             >
    //               Email :{" "}
    //               <span className="font-semibold capitalize">{email}</span>
    //             </h3>
    //             <h3
    //               className="text-lg font-medium leading-6 text-gray-900"
    //               id="modal-title"
    //             >
    //               College Name :{" "}
    //               <span className="font-semibold capitalize">
    //                 {collegeName}
    //               </span>
    //             </h3>
    //             <h3
    //               className="text-lg font-medium leading-6 text-gray-900"
    //               id="modal-title"
    //             >
    //               Year of Study :{" "}
    //               <span className="font-semibold capitalize">
    //                 {yearOfStudy}
    //               </span>
    //             </h3>
    //             {/* <div className="mt-2">
    //               <p className="text-sm text-gray-500">
    //                 Are you sure you want to deactivate your account? All of
    //                 your data will be permanently removed. This action cannot be
    //                 undone.
    //               </p>
    //             </div> */}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SsoCard;
