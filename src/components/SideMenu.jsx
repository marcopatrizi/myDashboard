function SideMenu(){
    const menus = ['Dashboard', 'Users', 'History', 'Analitics', 'Tickets', 'Sale List', 'Settings']
    return(
        <div className="bg-zinc-50  backdrop-blur-sm text-gray-800 p-4 font-medium m-4 rounded-2xl fixed top-20 bottom-0 shadow-lg w-60 grid grid-cols-1 content-between">
            <div className="flex flex-col gap-4 ">
                {menus.map((menu) =>(
                    <div  className=" py-4 px-8 rounded-md text-xl hover:bg-zinc-100 hover:cursor-pointer flex place-items-center gap-4">
                        <img src={`./src/assets/icons/${menu}.svg`} alt={menu} className="h-6 w-6" />
                        <p>{menu}</p>
                    </div>
                ))}
            </div>
            <div  className=" py-4 px-8 rounded-md text-xl text-gray-700 hover:bg-zinc-50/50 hover:cursor-pointer flex place-items-center gap-4">
                    <img src="./src/assets/icons/Log Out.svg" alt="" className="h-6 w-6" />
                    <p>Log Out</p>
                </div>
        </div>
    )
}

export default SideMenu;