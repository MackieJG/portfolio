import Image from "next/image"

export default function Home() {
    return (
        <>
            <div>
                <Image 
                    src="/profileImage.jpg" 
                    alt="profile image"
                    width={300} 
                    height={300} 
                    priority
                />
                <p>
                    Hello! I'm Joshua Mackie and welcome to my portfolio. As a software development student at CodeClan, 
                    I am passionate about using technology to create innovative solutions. I have experience in various programming languages 
                    and am constantly learning new skills to stay up to date with the latest industry developments. 
                    I am dedicated to delivering high-quality and user-friendly software, and I am excited to continue my journey in the tech industry.
                    My goal is to help create a positive impact through the use of technology.
                </p>

            </div>

        </>
    )
}