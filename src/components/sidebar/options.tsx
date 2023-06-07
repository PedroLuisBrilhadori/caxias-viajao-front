export type Option = {
  name: string;
  href?: string;
  onClick?: (e?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  details?: Option[];
};

export const SideBarOption = ({ name, onClick, href }: Option) => {
  return (
    <li>
      <a
        href={href}
        className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        onClick={onClick}
      >
        {name}
      </a>
    </li>
  );
};

export const DetailsOptions = ({
  option: { name, details, href },
}: {
  option: Option;
}) => {
  return (
    <li>
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex justify-between cursor-pointer rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
          <span className="text-sm font-medium"> {name} </span>

          <span className="shrink-0 transition duration-300 group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <ul className="mt-2 space-y-1 px-4">
          {details?.map((detail, i) => {
            return (
              <li key={`detail-${i}`} className="cursor-pointer">
                <a
                  href={href}
                  className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                  onClick={detail.onClick}
                >
                  {detail.name}
                </a>
              </li>
            );
          })}
        </ul>
      </details>
    </li>
  );
};
