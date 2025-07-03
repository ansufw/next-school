import Image from "next/image"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4'>

        <div className="flex rounded-full items-center gap-2 ring-[1.5px] ring-gray-300 px-2">
            <Image src={"/images/search.png"} alt="search" height={14} width={14} />
            <input type="text" placeholder="search.."></input>
        </div>

        <div>profile icons</div>
    </div>
  )
}

export default Navbar