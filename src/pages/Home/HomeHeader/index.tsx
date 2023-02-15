import img from "../../../assets/image.jpg";

export function HomeHeader() {
  return (
    <header className="-mt-20 mx-3 p-8 w-full h-fit bg-base-profile rounded-xl shadow-lg flex justify-between gap-8">
      <img src={img} alt="" className="w-36 h-36 rounded-lg" />

      <div className="flex flex-col justify-between">
        <div>
          <div className="font-bold flex justify-between items-start">
            <h1 className="text-2xl">Cameron Williamson</h1>
            <a className="text-xs text-blue mt-1" href="#">GITHUB</a>
          </div>
        <p className="mt-2">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu 
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat 
          pulvinar vel mass.
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu 
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat 
          pulvinar vel mass.
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu 
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat 
          pulvinar vel mass.
        </p>

        </div>
        <div>
          <ul className="flex gap-2 mt-4">
            <li>cameronwll</li>
            <li>Rocketseat</li>
            <li>seguidores</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
