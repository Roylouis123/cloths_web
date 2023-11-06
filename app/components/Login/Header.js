import Link from "next/link";

export default function Header({
  heading,
  paragraph,
  linkName,
  linkUrl = "#",
}) {
  return (
    <div>
      <div className="flex justify-center">
        <p className=" text-4xl">SCOTCH</p>
      </div>
      <h2 className="mt-10 text-center text-2xl font-extrabold text-gray-900">
        {heading}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600 ">
        {paragraph}{" "}
        <Link
          href={linkUrl}
          className="font-medium text-purple-600 hover:text-purple-500"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
}
