import Image from 'next/image'

export default function Home() {
  return (
 <main className='w-screen h-screen relative'>
 <div className= "flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}>

         <div className='pl-20 md:pl-40 pb-56 md:pd-20 flex flex-col gap-5 z-[10] max-w-[750px]'>
            <h1 className='text-[50px] text-white font-semibold'>
              Make any thing possible.
           <p>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#93c5fd] to-[#581c87]'>
                  Web Development
              </span></p>
            </h1>
            <p className='text-gray-400 hidden md:block'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nobis error quo voluptas impedit voluptatum quibusdam quis, molestias iusto quae minus fugit ad magnam nisi quidem quos architecto sed quasi!
            </p>
            <div className="flex-col md:flex-row hidden md:flex gap-5">
             <a
               href="/my-skills"
               className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]" >                                                                                                                              
              Learn more
              </a>
            <a href="/my-projects"
               className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
            <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
                  My projects
             </a>
             <a href="/contact-me"
               className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]" >
 
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
                    Contact me
            </a>
           
          </div>
         </div> </div>
  <div className=" absolute flex bottom-10 z-[20]  right-5 flex-col md:hidden gap-5">
             <a
               href="/my-skills"
               className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]" >                                                                                                                              
              Learn more
              </a>
            <a href="/my-projects"
               className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
                  My projects
             </a>
             <a href="/contact-me"
               className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]" >
                    Contact me
            </a>
            </div>
            <div className="absolute bottom-0 right-0 z-[10]">
              <Image 
              src="/horse.png"
              alt="horse"
              width={300}
              height={300}
              className="absolute right-55 top-40"/>

              <Image src="/cliff.webp"
                      alt="cliff"
                      width={480}
                      height={480}/>
            </div>
            <div className="absolute bottom-0 z-[5] w-full h-auto">
            <Image src="/trees.webp"
                      alt="trees"
                      width={2000}
                      height={2000}
                      className="w-full h-full"/>
            </div>
            <Image 
              src="/stars.png"
              alt="stars"
              width={300}
              height={300}
              className="absolute top-10 left-0 z-[10]"/>
         
 </main>
  );
}
