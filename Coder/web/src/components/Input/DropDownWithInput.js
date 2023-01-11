export default function DropDownWithInput({
  title,
  subTitle,
  options,
  prefix,
}) {
  return (
    <div>
      <label
        htmlFor="price"
        className="block text-sm font-medium text-gray-700"
      >
        {title}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        {prefix && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">{prefix}</span>
          </div>
        )}

        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-md border-gray-300 pl-2 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="React, Laravel ect"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            {subTitle}
          </label>
          <select
            id="currency"
            name="currency"
            className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            {/* {options } */}
            <option>USD</option>
            <option>CAD</option>
            <option>EUR</option>
          </select>
        </div>
      </div>
    </div>
  )
}
