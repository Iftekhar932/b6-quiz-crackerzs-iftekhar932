import React from "react";

const QuizCard = () => {
  return (
    <div className="grid grid-cols-3 gap-4 bg-gray-600 w-9/12 mx-auto">
      <div className="bg-gray-500">
        <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 ">
          <input
            id="bordered-radio-1"
            type="radio"
            value=""
            name="bordered-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="bordered-radio-1"
            className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Default radio
          </label>
        </div>
        <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
          <input
            id="bordered-radio-2"
            type="radio"
            value=""
            name="bordered-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="bordered-radio-2"
            className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Checked state
          </label>
        </div>
        <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
          <input
            id="bordered-radio-1"
            type="radio"
            value=""
            name="bordered-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="bordered-radio-1"
            className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Default radio
          </label>
        </div>
        <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
          <input
            id="bordered-radio-2"
            type="radio"
            value=""
            name="bordered-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="bordered-radio-2"
            className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Checked state
          </label>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
