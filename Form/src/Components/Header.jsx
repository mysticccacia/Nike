import Validate from "./Validate";

const Header = () => {
  return (
    <div className="w-full px-[20%]">
        <div className="mb-5">
            <h1 className="text-5xl font-bold mt-5">CONTACT US</h1>
            <p className="mt-5 text-xl font-bold text-gray-700 ">Have any questions, feedback, or ideas you'd like to share? We'd love to hear from you! Whether you're looking for more information about our services, need assistance, or simply want to connect, feel free to reach out. Our team is always here to help and will get back to you as soon as possible.
            </p>
        </div>

        <div className="flex w-full">
            <div className="">
                <div className="flex items-center justify-between text-2xl gap-3">
                    <span className=" rounded p-2 border bg-black text-white flex gap-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" 
        fill="none" viewBox="0 0 24 24" 
        stroke-width="1.5" stroke="currentColor" 
        class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" 
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25z" />
    <path stroke-linecap="round" stroke-linejoin="round" 
            d="M21.75 6.75l-9.75 6-9.75-6" />
    </svg>

                        VIA SUPPORT CHAT</span>
                    <span className="px-10 rounded p-2 border bg-black text-white flex gap-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" 
        fill="none" viewBox="0 0 24 24" 
        stroke-width="1.5" stroke="currentColor" 
        class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" 
            d="M2.25 6.75C2.25 5.231 3.481 4 5 4h2.25a.75.75 0 01.75.75v2.592a.75.75 0 01-.228.536l-1.32 1.32a11.25 11.25 0 005.292 5.292l1.32-1.32a.75.75 0 01.536-.228H19a.75.75 0 01.75.75V19c0 1.519-1.231 2.75-2.75 2.75A16.5 16.5 0 013.75 6.75z" />
    </svg>

                        VIA CALL</span>
                </div>
            <span className="mt-5 border-2 p-2 flex justify-center text-2xl gap-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" 
     fill="none" viewBox="0 0 24 24" 
     stroke-width="1.5" stroke="currentColor" 
     class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" 
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25z" />
  <path stroke-linecap="round" stroke-linejoin="round" 
        d="M21.75 6.75l-9.75 6-9.75-6" />
                    </svg>
             VIA EMAIL FORM</span>

             <Validate></Validate>
</div>

            <div className="ml-10">
                <img className="h-150 object-cover " src="/images/lady.png" alt="" />
            </div>
        </div>
    </div>

  )
}

export default Header;