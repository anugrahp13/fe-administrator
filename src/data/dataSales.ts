interface Sales {
  id: number;
  name: string;
  avatar: string;
  value: number;
}
interface DataSales {
  sales: Sales[];
}

export const dataSales: DataSales = {
  sales: [
    {
      id: 1,
      name: "Bang Uli",
      avatar: "/image/avatar/avatar.png",
      value: 2000000,
    },
    {
      id: 2,
      name: "Mam Siva",
      avatar: "/image/avatar/hafnanmart.png",
      value: 1000000,
    },
    {
      id: 3,
      name: "Bang Ipul",
      avatar: "/image/avatar/avatar.png",
      value: 290000,
    },
    {
      id: 4,
      name: "Bang Salim",
      avatar: "/image/avatar/hafnanmart.png",
      value: 900000,
    },
    {
      id: 5,
      name: "Bang Wawan",
      avatar: "/image/avatar/avatar.png",
      value: 700000,
    },
  ],
};
