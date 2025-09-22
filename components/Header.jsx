import Image from "next/image";

export const Header =()=>{
    return(
        <div>
        <Image
          src="/pinecone-logo.png"
          alt="pinecone logo"
          width={60}
          height={60}
        />
        <h3>Join Us! 😎</h3>
        <p>Please provide all current information accurately.</p>
      </div>
    )
}