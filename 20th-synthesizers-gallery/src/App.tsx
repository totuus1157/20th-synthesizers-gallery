import React from "react";
import Model from "./model";

const App: React.FC = () => {
  const modelList = [
    { name: "MOOG minimoog", image: "minimoog.jpg" },
    { name: "ARP Odyssey", image: "odyssey.jpg" },
    { name: "SCI Prophet-5", image: "prophet5.jpg" },
    { name: "Oberheim OB-8", image: "ob8.jpg" },
    { name: "ROLAND JUPITER-6", image: "jupiter6.jpg" },
    { name: "YAMAHA DX7IID", image: "dx7IId.jpg" },
    { name: "ROLAND D-50", image: "d50.jpg" },
    { name: "KORG M1", image: "m1.jpg" },
    { name: "YAMAHA SY99", image: "sy99.jpg" },
    { name: "KORG WAVESTATION EX", image: "wavestation.jpg" },
    { name: "YAMAHA VL1", image: "vl1.jpg" },
    { name: "ROLAND JP-8000", image: "jp8000.jpg" },
  ];

  return (
    <div>
      <header>
        <h1>２０世紀音楽シーンを彩ったシンセサイザーの名機たち</h1>
      </header>
      <main>
        {modelList.map((modelItem) => {
          return <Model image={modelItem.image} name={modelItem.name} />;
        })}
      </main>
      <footer>Copyright (C) 2021 Totuus1157 All Rights Reserved.</footer>
    </div>
  );
};

export default App;
