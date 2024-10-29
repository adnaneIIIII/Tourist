import Link from "next/link";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function ThankYouPage() {
  return (
    <div className="flex h-[80vh] items-center justify-center">
      <div>
        <div className="flex flex-col items-center space-y-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-28 w-28 text-[#2167f1]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 className="text-4xl  font-bold">Thank You !</h1>
          <p className="text-lg text-gray-500 py-2">
            Thank you for your interest! Check your email for a link to the
            guide.
          </p>
          <Link
            href={"/"}
            className="inline-flex items-center rounded border border-indigo-600 bg-[#2167f1]  py-2 text-white hover:bg-indigo-700 w-28 justify-center focus:outline-none focus:ring"
          >
            <MdKeyboardArrowLeft />
            <span className="text-sm font-medium"> Home </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
