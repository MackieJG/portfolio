import Link from "next/link";

export default function Nav() {
  return (
    <>
      <div className="flex flex-row justify-center">
        <Link href="/" className="relative justify-self-auto">
          Home
          <span className=""></span>
        </Link>
        <Link href="/projects" className="relative justify-self-auto ">
          Projects
          <span className=""></span>
        </Link>
        <Link href="/profile" className="relative justify-self-auto ">
          About Me
          <span className=""></span>
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
