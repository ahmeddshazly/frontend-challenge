interface BookingType {
  id: number;
  type: string;
}

interface Booking {
  id: number;
  type: number;
  user: string;
  price: number;
  budget_to_beat: number;
  split: number;
  reward: number;
  reward_status: number;
  currency: string;
  conversion_rate: number;
  co2_spent: number;
  co2_btb: number;
  co2_savings: number;
  booking_date: string;
  reward_date: string;
  is_return: boolean;
}

interface HotelBooking {
  id: number;
  booking: number;
  hotel_name: string;
  hotel_city: string;
  date_checkin: string;
  date_checkout: string;
}

interface FlightBooking {
  id: number;
  booking: number;
  origin_city: string;
  destination_city: string;
  travel_date: string;
  outbound: boolean;
}

interface TrainBooking {
  id: number;
  booking: number;
  origin_city: string;
  destination_city: string;
  travel_date: string;
  outbound: boolean;
}

interface BookingHistoryItem {
  year: number;
  month: number;
  reward: number;
  co2_saved: number;
}

interface HotelBookingHistoryDetailItem extends BookingHistoryDetailItem {
  type: 'hotel';
  date_checkin: string;
  date_checkout: string;
  hotel_city: string;
  hotel_name: string;
}

interface FlightBookingHistoryDetailItem extends BookingHistoryDetailItem {
  type: 'flight';
  travels: {
    travel_date: string;
    origin_city: string;
    destination_city: string;
  }[];
}

interface TrainBookingHistoryDetailItem extends BookingHistoryDetailItem {
  type: 'train';
  travels: {
    travel_date: string;
    origin_city: string;
    destination_city: string;
  }[];
}
