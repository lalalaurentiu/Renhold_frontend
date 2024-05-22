import { MapComponent } from "../../components/MapComponent";
import { Language } from "./components/Language";
import { Login } from "./components/Login";



export function Home() {
  return (
    <>
      <div className="absolute inset-0">
        <Language />
      </div>

      <div
        className="
        flex
        h-screen
        items-center
        justify-center
    "
      >
        <div
          className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg shadow-md
      "
        >
          <MapComponent
            className="relative inset-0 h-[200px] w-[500px]"
            defaultZoom={15}
            mapTypeId="roadmap"
            gestureHandling="none"
            disableDefaultUI={true}
          />
          <Login />
        </div>
      </div>
    </>
  );
}
