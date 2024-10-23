import Footer from "./components/footer";
import { AspectRatio } from "./components/ui/aspect-ratio";

function App() {
  const parkingLotUrl = "https://www.youtube.com/embed/r9o1HtoWLPI";
  return (
    <div className="flex flex-col justify-between items-center w-screen h-screen">
      <div className="flex-grow flex justify-center items-center w-full">
        <AspectRatio ratio={16 / 9} className="w-full p-4">
          <iframe
            width="100%"
            height="100%"
            src={parkingLotUrl}
            title="Naustet Live Stream (Parking)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </AspectRatio>
      </div>

      <Footer />
    </div>
  );
}

export default App;
