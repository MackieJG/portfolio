import Link from "next/link";

export default function Nav() {
  return (
    <>
      <div className="flex flex-row justify-center m-4">
        <Link
          href="/"
          className="relative justify-self-auto font-semibold p-2 group transition-all duration-300 ease-in-out">
          <span class="bg-left-bottom bg-gradient-to-r from-orange-400 to-orange-400 bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out ">
            Home
          </span>
        </Link>
        <Link
          href="/projects"
          className="relative justify-self-auto font-semibold p-2 group transition-all duration-300 ease-in-out">
          <span className="bg-left-bottom bg-gradient-to-r from-orange-400 to-orange-400 bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out">
            Projects
          </span>
        </Link>
        <Link
          href="/profile"
          className="relative justify-self-auto font-semibold p-2 group transition-all duration-300 ease-in-out">
          <span className="bg-left-bottom bg-gradient-to-r from-orange-400 to-orange-400 bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out">
            About Me
          </span>
        </Link>
      </div>
    </>
  );
}
