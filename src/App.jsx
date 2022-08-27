import wallpaper from "./assets/gta-city-wallpaper.jpg";
import avatar from "./assets/avatar-ejecutive.png";
import profile from "./assets/Profile.jpg";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <article className="">
      <div className="flex justify-center items-center">
        {/*container img*/}
        <div>
          <img
            src={wallpaper}
            alt="gray skyscrapers, city, game, cloud, Grand Theft Auto V, GTA V, wallpaper flare"
          />
        </div>
        {/*img caption*/}
        <div className="flex flex-col justify-center items-center absolute gap-5">
          <img
            src={avatar}
            alt="my formal avatar"
            className="w-4/12 rounded-full shadow-inner shadow-cyan-900"
          />
          <span className="flex flex-col gap-2 text-xl text-center">
            <h1>Angel Cevallos aka @PrimaryOmega.</h1>
            <h1>Backend & Frontent Developer 👨🏻‍💻 from Ecuador 🇪🇨</h1>
          </span>
        </div>
      </div>
      <div className="flex justify-center m-10 gap-5">
        <img src={profile} alt="my profile photo" className="w-2/12" />
        <span className="flex flex-col gap-2 text-justify w-2/6">
          <h1 className="flex flex-col after:border-2 after:border-red-500 after:rounded-full after:w-[4.5rem] ">
            About me
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nulla maxime atque vitae eos, reiciendis placeat quas officiis odio.
            Libero magnam non ipsa officia veritatis fugit minus doloremque
            obcaecati enim.
          </p>
          <Link to="/about" className="bg-zinc-800 p-1 w-28 rounded-sm">
            Read more...
          </Link>
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span>Principal proyects</span>
        <div className="flex flex-row gap-5">
          <div>Card One</div>
          <div>Card Two</div>
          <div>Card Three</div>
        </div>
      </div>
    </article>
  );
};

export default App;
