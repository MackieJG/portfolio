import Link from "next/link";

export default function Nav() {
  return (
    <>
      <div className="flex flex-row justify-center m-4">
        <Link
          href="/"
          className="relative justify-self-auto font-semibold p-2 group transition-all duration-300 ease-in-out">
          <span class="bg-left-bottom bg-gradient-to-r from-[themeColor] to-[themeColor] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Home
          </span>
        </Link>
        <Link
          href="/projects"
          className="relative justify-self-auto font-semibold p-2">
          Projects
          <span className=""></span>
        </Link>
        <Link
          href="/profile"
          className="relative justify-self-auto font-semibold p-2">
          About Me
          <span className=""></span>
        </Link>
      </div>
    </>
  );
}
