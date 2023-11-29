import Link from "next/link";

export default function Nav() {
  return (
    <>
      <div className="flex flex-row justify-center space-x-4 p-4 text-base">
        <Link href="/" className="justify-self-auto hover:underline-offset-4">
          Home
        </Link>
        <Link href="/projects" className="justify-self-auto">
          Projects
        </Link>
        <Link href="/profile" className="justify-self-auto">
          About Me
        </Link>
      </div>
    </>
  );
}

// .container {
//     display: flex;
//     justify-content: space-evenly;
//     background-color: #113c55;
//     align-items: center;
//     font-family: "Trebuchet MS", Verdana, sans-serif;
//     color: #fdf9f7;
//     font-size: 25px;
//     height: 80px;
// }
