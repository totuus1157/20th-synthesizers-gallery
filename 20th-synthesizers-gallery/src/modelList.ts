interface ModelList {
  id: number;
  name: string;
  image: string;
  videoUrl: string;
  price: string;
  dateProduced: string;
  oscillatorType: string;
  polyphony: string;
  description: string;
}

const modelList: Readonly<ModelList[]> = [
  {
    id: 1,
    name: "MOOG minimoog",
    image: "minimoog.jpg",
    videoUrl: "https://www.youtube.com/embed/2xsHN3NTyk0",
    price: "495,000",
    dateProduced: "1970",
    oscillatorType: "アナログ(VCO)",
    polyphony: "1",
    description:
      "史上初の鍵盤一体型コンパクトモデル。シンセサイザーは研究室からロックのステージへとその活躍の幅を広げた。出音の圧倒的な太さは現在に至るまでも他の追随を許さず。今でもシンセベースと言えば真っ先に候補に挙がる。名実共にアナログシンセの王。",
  },
  {
    id: 2,
    name: "ARP Odyssey",
    image: "odyssey.jpg",
    videoUrl: "https://www.youtube.com/embed/g4Q15TXnBNg",
    price: "470,000",
    dateProduced: "1972",
    oscillatorType: "アナログ(VCO)",
    polyphony: "1",
    description:
      "minimoogの永遠のライバル。音の傾向もデザインも何から何まで正反対。得られるサウンドの幅広さとピッチの安定性はコチラの方が上。小さなボディに似合わず多数の機能を搭載し、効果音の作成も大得意。テクノやるなら迷わずこのモデル。",
  },
  {
    id: 3,
    name: "SCI Prophet-5",
    image: "prophet5.jpg",
    videoUrl: "https://www.youtube.com/embed/3T2UJHhj0jE",
    price: "1,700,000",
    dateProduced: "1978",
    oscillatorType: "アナログ(VCO)",
    polyphony: "5",
    description:
      "過去から現在に至るまで、アナログ・ポリフォニックシンセと言えばまずこのモデル。音良し機能良し操作性良しでビンテージシンセ界での人気は不動のNo.1。rev.3のリリースから40年、まさかのアップデート版rev.4が発売された。",
  },
  {
    id: 4,
    name: "Oberheim OB-8",
    image: "ob8.jpg",
    videoUrl: "https://www.youtube.com/embed/0usuXTksRTE",
    price: "1,380,000",
    dateProduced: "1983",
    oscillatorType: "アナログ(VCO)",
    polyphony: "8",
    description:
      "Prophet5対抗モデル「OB」シリーズの最終版にして、Van Halenの「Jump」で有名な「OB-Xa(1981)」の後継機。回路の全面的な見直しにより安定性は増すも、音の荒々しさは幾分後退した感。もっともMIDI搭載で現在の音楽制作環境にも組み込めるのは利点か。",
  },
  {
    id: 5,
    name: "ROLAND JUPITER-6",
    image: "jupiter6.jpg",
    videoUrl: "https://www.youtube.com/embed/xEoYmoiEETo",
    price: "490,000",
    dateProduced: "1983",
    oscillatorType: "アナログ(VCO)",
    polyphony: "6",
    description:
      "世界に日本メーカーの存在を認めさせたROLANDアナログシンセの最高峰「JUPITER-8(1981)」の弟分。同時発音数は2つ減るも、独特の音の厚みは健在。MIDIを標準搭載しているので、現在の音楽制作環境にもそのまま組み込むことができる。",
  },
  {
    id: 6,
    name: "Oberheim matrix-12",
    image: "matrix12.jpg",
    videoUrl: "https://www.youtube.com/embed/nZ_tj1aQsnU",
    price: "998,000",
    dateProduced: "1985",
    oscillatorType: "アナログ(VCO)",
    polyphony: "12",
    description:
      "アメリカ4大メーカー「Oberheim」最後の輝き。シンセ二台分をマイクロプロセッサでコントロールする事により、巨大なモジュラーシンセに匹敵する複雑な音作りを可能にした、まさに「アナログ・モンスター」。シンセ界のロールスロイス。",
  },
  {
    id: 7,
    name: "YAMAHA DX7IID",
    image: "dx7IId.jpg",
    videoUrl: "https://www.youtube.com/embed/xIn-n2ebENo",
    price: "258,000",
    dateProduced: "1986",
    oscillatorType: "デジタル(FM)",
    polyphony: "16",
    description:
      "本格的なデジタルシンセサイザー時代の到来を告げた歴史的名機「DX7(1983)」の後継機。FM音源が生み出すメタリックかつプラスティッキーなサウンドは、それまでのアナログシンセとは180°異なるものだった。中でもエレピサウンドは80年代を象徴するアイコン。",
  },
  {
    id: 8,
    name: "ROLAND D-50",
    image: "d50.jpg",
    videoUrl: "https://www.youtube.com/embed/-x1fKX-tzWg",
    price: "238,000",
    dateProduced: "1987",
    oscillatorType: "デジタル(LA)",
    polyphony: "16",
    description:
      "DX7に対抗して生み出されたROLAND初のフルデジタルシンセ。限られたメモリ容量の中で最大限リアルなサウンドを実現するべく、サンプリング音の短い破片とオシレータ音を合成したLA音源を搭載。FM音源よりも分かりやすいデジタルシンセシスを提示した。",
  },
  {
    id: 9,
    name: "KORG M1",
    image: "m1.jpg",
    videoUrl: "https://www.youtube.com/embed/f6TYxRfeZos",
    price: "248,000",
    dateProduced: "1988",
    oscillatorType: "デジタル(PCM)",
    polyphony: "16",
    description:
      "80年代中期、不振にあえいだKORGの劇的な大復活作。メモリの低価格化によりフルPCM音源の搭載が遂に実現。更にエフェクタとシーケンサまでも内蔵、一台で音楽制作が完結する「ワークステーションシンセ」の走りとなり、世界中で大ヒットした。",
  },
  {
    id: 10,
    name: "YAMAHA SY99",
    image: "sy99.jpg",
    videoUrl: "https://www.youtube.com/embed/csHut1_F4eI",
    price: "420,000",
    dateProduced: "1991",
    oscillatorType: "デジタル(FM & PCM)",
    polyphony: "32",
    description:
      "重機関車のごとき堂々たる威容を誇る、ワークステーションの旗艦モデル。YAMAHAお得意のFM音源に加えPCM音源も装備した、まさに死角無しの万能機。開発者はかつて「21世紀まで通用する音色を目指す」と語ったが、その実力は30年を経た現在でも立派に通用する。",
  },
  {
    id: 11,
    name: "KORG WAVESTATION EX",
    image: "wavestation.jpg",
    videoUrl: "https://www.youtube.com/embed/JWjGIaQZVvI",
    price: "220,000",
    dateProduced: "1991",
    oscillatorType: "デジタル(PCM)",
    polyphony: "32",
    description:
      "SCIが「ProphetVS(1986)」のリリースを最後に倒産した後、一部のスタッフがKORGに移籍し開発したのが「Wavestation(1990)」。メモリ内のサンプル波形を連続的に読み出しダイナミックな音色変化を生み出すWave sequence機能を搭載。EXはメモリが倍に拡張された強化版。",
  },
  {
    id: 12,
    name: "YAMAHA VL1",
    image: "vl1.jpg",
    videoUrl: "https://www.youtube.com/embed/OYWxCrz3vmQ",
    price: "470,000",
    dateProduced: "1993",
    oscillatorType: "デジタル(VA)",
    polyphony: "2",
    description:
      "PCM音源が世を席巻し技術的な閉塞感も漂っていた頃、颯爽と登場したパラダイムシフター。プロセッサの高速演算により仮想楽器をモデリングし発音するという「バーチャル・アコースティック音源」を搭載、サンプリングでは絶対に不可能な音色変化を可能とした。",
  },
];

export default modelList;
