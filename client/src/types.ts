export type User = {
    _id: string;
    email: string;
    name: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };

  export type MenuItem = {
    _id: string;
    name: string;
    price: number;
  };
  export type RestauarantType = {
    _id: string;
    user:string;
    restaurantName: string;
    city: string;
    country: string;
    deliveryPrice: number;
    estimatedDeliveryTime: number;
    cuisines: string[];
    menuItems: MenuItem[];
    imageUrl: string;
    lastUpdate: string;
  };