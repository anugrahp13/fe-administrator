export type DataItem = {
    id: string;
    name: string;
    category: string;
    stock: number;
    sellingPrice: number;
    purchasePrice: number;
    status: "Ready" | "Sold Out";
  };

const dataItem: DataItem[] = [
  {
    id: "m5gr84i9",
    name: "Gula Putih 1 kg",
    category: "Gula Pasir",
    stock: 290,
    sellingPrice: 18500,
    purchasePrice: 16400,
    status: "Ready",
  },
  {
    id: "3u1reuv4",
    name: "Tepung Segitiga 1 kg",
    category: "Tepung",
    stock: 200,
    sellingPrice: 10500,
    purchasePrice: 9800,
    status: "Ready",
  },
  {
    id: "derv1ws0",
    name: "Tepung Lencana 1 kg",
    category: "Tepung",
    stock: 3,
    sellingPrice: 9000,
    purchasePrice: 7650,
    status: "Sold Out",
  },
  {
    id: "5kma53ae",
    name: "Minyak Goreng 1 kg",
    category: "Minyak Goreng",
    stock: 5,
    sellingPrice: 21000,
    purchasePrice: 18675,
    status: "Ready",
  },
  {
    id: "bhqecj4p",
    name: "Tepung Besar 500 gr",
    category: "Tepung",
    stock: 4,
    sellingPrice: 8000,
    purchasePrice: 6789,
    status: "Sold Out",
  },
];

export default dataItem;
