import img from '../../../assets/image.jpg'

export function HomeHeader() {
  return (
    <header className="-mt-20 mx-3 p-8 w-full bg-base-profile rounded-xl shadow-lg flex justify-between items-center gap-8">
      <img src={img} alt="" className="w-36 h-36 rounded-lg" />

      <div>
        <div className="flex">
          <h1>Cameron Williamson</h1>
          <a href="#">GITHUB</a>
        </div>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu 
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat 
          pulvinar vel mass.
        </p>
        <div>
          <ul className="flex">
            <li>cameronwll</li>
            <li>Rocketseat</li>
            <li>seguidores</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
