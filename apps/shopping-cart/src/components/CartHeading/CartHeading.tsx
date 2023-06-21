import {Dialog} from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/24/outline";
import {CartHeaderProps} from "./CartHeading.types";
import {FC} from "react";

export const CartHeading : FC<CartHeaderProps> = ({ onCloseClick }) => {
  return (
    <div className="flex items-start justify-between">
      <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
      <div className="ml-3 flex h-7 items-center">
        <button
          type="button"
          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
          onClick={onCloseClick}
        >
          <span className="sr-only">Close panel</span>
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}