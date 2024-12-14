import Header from "./component/Header"

export default function Home() {
  return (
    <div className="w-full h-screen bg-black text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
     <Header/>
      <div className="w-full h-screen">2</div>
      <div className="w-full h-screen">3</div>
    </div>
  );
}
