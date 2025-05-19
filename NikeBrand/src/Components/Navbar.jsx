function Navbar() {
  return (
    <div className="py-4 px-10 flex justify-between w-full">
        <img className=" ml-10 h-10 w-20 object-cover" src="../public/Images/Nike_logo.png" alt="NIKE_LOGO"/>

      <div className="flex font-bold gap-6 items-center justify-evenly">
        <a href="">MENU</a>
        <a href="">LOCATION</a>
        <a href="">ABOUT</a>
        <a href="">CONTACT</a>
      </div>

      <button className="bg-red-600 p-1 text-white w-20 rounded">Login</button>
    </div>
  );
}

export default Navbar;
