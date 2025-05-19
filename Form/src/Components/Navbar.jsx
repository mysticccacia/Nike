
const Navbar = () => {
  return (
    <div className=" px-15 py-5 flex w-full items-center justify-between">
        <img className="h-10 w-10 object-cover" src="/images/Logo.png" alt="Logo" />
        <div className="flex gap-3 font-bold text-2xl">
            <a href="">HOME</a>
            <a href="">ABOUT</a>
            <a href="">CONTACT</a>
        </div>
    </div>
  )
}

export default Navbar;