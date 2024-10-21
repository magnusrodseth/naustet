import VideoPlayer from "./components/video-player";

function App() {
  return (
    <div className="flex flex-col justify-start items-center w-screen h-screen my-32 gap-8">
      <h2 className="text-4xl font-semibold">Naustet</h2>
      <div className="bg-blue-500 w-96 h-96 rounded-lg">
        <VideoPlayer />
      </div>
    </div>
  );
}

export default App;
