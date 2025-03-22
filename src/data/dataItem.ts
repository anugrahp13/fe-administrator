export type DataItem = {
  id: string;
  image: string;
  name: string;
  category: string;
  stock: number;
  sellPrice: number;
  buyPrice: number;
  status: "Ready" | "Sold Out";
};

const dataItem: DataItem[] = [
  {
    id: "m5gr84i9",
    image: "/image/avatar/avatar.png",
    name: "Gula Putih 1 kg",
    category: "Gula Pasir",
    stock: 290,
    sellPrice: 18500,
    buyPrice: 16400,
    status: "Ready",
  },
  {
    id: "3u1reuv4",
    image: "/image/avatar/avatar.png",
    name: "Tepung Segitiga 1 kg",
    category: "Tepung",
    stock: 200,
    sellPrice: 10500,
    buyPrice: 9800,
    status: "Ready",
  },
  {
    id: "derv1ws0",
    image: "/image/avatar/avatar.png",
    name: "Tepung Lencana 1 kg",
    category: "Tepung",
    stock: 3,
    sellPrice: 9000,
    buyPrice: 7650,
    status: "Sold Out",
  },
  {
    id: "5kma53ae",
    image: "/image/avatar/avatar.png",
    name: "Minyak Goreng 1 kg",
    category: "Minyak Goreng",
    stock: 5,
    sellPrice: 21000,
    buyPrice: 18675,
    status: "Ready",
  },
  {
    id: "bhqecj4p",
    image: "/image/avatar/avatar.png",
    name: "Tepung Besar 500 gr",
    category: "Tepung",
    stock: 4,
    sellPrice: 8000,
    buyPrice: 6789,
    status: "Sold Out",
  },
];

export default dataItem;
