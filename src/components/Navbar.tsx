import Image from "next/image"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4'>

        <div className="flex rounded-full items-center gap-2 ring-[1.5px] ring-gray-300 px-2">
            <Image src={"/images/search.png"} alt="search" height={14} width={14} />
            <input type="text" placeholder="search.."></input>
        </div>

        <div className="flex items-center gap-6 w-full justify-end">
          {/* msg icon */}
          <div>
            <Image src={"/images/message.png"} alt="message" height={20} width={20} />
          </div>

          {/* notif icon */}
          <div>
            <Image src={"/images/announcement.png"} alt="notification icon" height={20} width={20} />
          </div>

          {/* username */}
          <div className="flex flex-col">
            <span className="text-xs">John Doe</span>
            <span className="text-[10px]">Admin</span>
          </div>

          {/* user icon */}
          <div className="">
            <Image className="rounded-full" src={"/images/avatar.png"} alt="user icon" height={30} width={30} />
          </div>
          

        </div>
        
    </div>
  )
}

export default Navbar