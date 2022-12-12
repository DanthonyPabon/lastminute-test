export interface ICarousel {
  title: string;
  items: IHotel[];
}

export interface IHotel {
  checkIn: ICheck;
  checkOut: ICheck;
  contact: IContact;
  currency: string;
  gallery: string[];
  id: number;
  location: ILocation;
  name: string;
  price: number;
  stars?: number;
  userRating?: number;
}

export interface ICheck {
  from: string;
  to: string;
}

export interface IContact {
  email: string;
  phoneNumber: string;
}

export interface ILocation {
  address: string;
  city: string;
  latitude: number;
  longitude: number;
}
