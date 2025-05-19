export default function Header() {
  return (
    <div className="flex px-30 py-20">
      <div className="w-[55%]">
        <h1 className="text-8xl font-extrabold">
          YOUR FEET DESERVE <br /> THE BEST
        </h1>
        <p className="mt-6 text-gray-600 font-bold w-[80%]">
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP WITH OUR SHOES.
        </p>
        <div className="mt-6 text-xl flex gap-9">
          <button className="bg-red-600 text-white p-2">Shop Now</button>
          <button className="border p-2">Category</button>
        </div>
        
        <div className="mt-6">
          <p className="text-gray-600">Also Available on</p>
          <div className="flex gap-3 mt-1">
            <img className="h-8 w-8" src="/Images/Flipkart.png" alt="Flipkart" />
            <img className="h-8 w-8 object-cover" src="/Images/Amazon.png" alt="Amazon" />
          </div>
        </div>
      </div>

      <div>
        <img src="/Images/Shoes.png" alt="Shoes" />
      </div>
    </div>
  );
}
