/**
 * Every public fact about Dahab Bay Hotel, in one place. All of it is taken from the hotel's
 * public listings, read on 2026-11-20: its Booking.com listing (as shown on Priceline), Trip.com,
 * HotelsCombined and its Google Maps entry (as shown on Wanderlog). Where the listings disagree
 * the Google entry and the Booking listing win; what none of them agree on is left out. Nothing
 * here has been confirmed with the hotel. Prices, phone and scores come in from content.json.
 */
import { CONTENT, digitsOnly } from './content';

const count = Object.fromEntries(CONTENT.rooms.map((r) => [r.id, r]));

export const SITE = {
  url: 'https://jeeveshverma.github.io/dahab-bay-hotel',
  name: { en: 'Dahab Bay Hotel', ar: 'فندق دهب باي' },
  shortName: { en: 'Dahab Bay Hotel', ar: 'دهب باي' },
  city: { en: 'Dahab', ar: 'دهب' },
  region: { en: 'South Sinai', ar: 'جنوب سيناء' },
  country: { en: 'Egypt', ar: 'مصر' },
  /** Booking and Trip.com: "First Blue Hole Road, Dahab, 46617". Google: "Blue Hole Rd". */
  street: { en: 'Blue Hole Road', ar: 'طريق البلو هول' },
  postal: '46617',
  /** The pin of the hotel's Google Maps entry. */
  geo: { lat: 28.518842, lng: 34.511364 },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Dahab+Bay+Hotel+Blue+Hole+Road+Dahab',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=28.518842,34.511364',
  /** The phone on the Google entry and on Trip.com (+20 109 007 1183). HotelsCombined shows another, +20 128 825 0908. WhatsApp is assumed to be the same number. */
  whatsapp: digitsOnly(CONTENT.contact.whatsapp),
  whatsappDisplay: CONTENT.contact.whatsapp,
  phone: '+' + digitsOnly(CONTENT.contact.phone),
  phoneDisplay: CONTENT.contact.phone,
  googleReviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Dahab+Bay+Hotel+Blue+Hole+Road+Dahab',
  bookingUrl: 'https://www.booking.com/hotel/eg/new-dahab-bay-room.en-gb.html',
  tripUrl: 'https://www.trip.com/hotels/dahab-hotel-detail-4231005/dahab-bay-hotel/',
  scores: {
    google: { ...CONTENT.scores.google, outOf: '5' },
    booking: { ...CONTENT.scores.booking, outOf: '10' },
  },
  /** Booking, Trip.com and HotelsCombined agree: in from 12:00, out by 10:00, desk open all day and night. */
  checkIn: '12:00',
  checkOut: '10:00',
  /** Trip.com: English, French, Arabic. */
  languages: { en: 'English, Arabic and French', ar: 'العربية والإنجليزية والفرنسية' },
} as const;

export type RoomId = 'double-sea-view' | 'family-sea-view' | 'deluxe-double' | 'single' | 'triple' | 'quadruple' | 'economy-double' | 'family-studio' | 'apartment';

/** What a room has, from its Booking listing and its photos. */
export type Feature = 'sea' | 'pool' | 'mountain' | 'garden' | 'terrace' | 'living' | 'bedrooms' | 'sofa' | 'ground' | 'entrance' | 'kettle' | 'fridge' | 'tv' | 'safe' | 'net' | 'ac' | 'wifi' | 'towels';

export interface Room {
  id: RoomId;
  hero: string;
  photos: string[];
  beds: { double?: number; queen?: number; single?: number; sofa?: number };
  sleeps: number;
  /** floor area in square metres, converted from the listing's square feet */
  size: number;
  features: Feature[];
  max: number;
  price: number | null;
}

/**
 * The nine room types of the Booking listing, each with the four photos the listing shows for it
 * and, last, one photo of what the room looks out on.
 * Beds follow the listing except where its text contradicts itself, in which case the photos decide.
 * How many of each type there are (`max`) is a guess: the listings say 20 to 25 rooms in all.
 */
export const ROOMS: Room[] = ([
  { id: 'double-sea-view', hero: 'ds-sea', photos: ['ds-sea', 'ds-beds', 'ds-bath', 'ds-basin', 'beach-shore'], beds: { queen: 1 }, sleeps: 2, size: 23, features: ['sea', 'terrace', 'kettle', 'fridge', 'tv', 'safe', 'ac', 'wifi', 'towels'] },
  { id: 'family-sea-view', hero: 'fs-sea', photos: ['fs-sea', 'fs-window', 'fs-twins', 'fs-hall', 'garden'], beds: { queen: 1, single: 2, sofa: 1 }, sleeps: 4, size: 35, features: ['sea', 'terrace', 'kettle', 'fridge', 'tv', 'safe', 'ac', 'wifi', 'towels'] },
  { id: 'deluxe-double', hero: 'dd-beds', photos: ['dd-beds', 'dd-window', 'dd-petals', 'dd-bath', 'pool'], beds: { single: 2 }, sleeps: 2, size: 20, features: ['pool', 'mountain', 'terrace', 'kettle', 'fridge', 'tv', 'safe', 'ac', 'wifi', 'towels'] },
  { id: 'single', hero: 'sg-bed', photos: ['sg-bed', 'sg-wardrobe', 'sg-door', 'sg-bath', 'block'], beds: { single: 1 }, sleeps: 1, size: 20, features: ['pool', 'mountain', 'terrace', 'kettle', 'fridge', 'tv', 'safe', 'ac', 'wifi', 'towels'] },
  { id: 'triple', hero: 'tr-beds', photos: ['tr-beds', 'tr-room', 'tr-swan', 'tr-bath', 'pool-wide'], beds: { single: 3 }, sleeps: 3, size: 24, features: ['pool', 'terrace', 'ground', 'kettle', 'fridge', 'tv', 'safe', 'ac', 'wifi', 'towels'] },
  { id: 'quadruple', hero: 'qd-room', photos: ['qd-room', 'qd-beds', 'qd-vanity', 'qd-garden', 'court'], beds: { double: 1, single: 2 }, sleeps: 4, size: 30, features: ['garden', 'entrance', 'net', 'ac', 'wifi', 'towels'] },
  { id: 'economy-double', hero: 'ec-room', photos: ['ec-room', 'ec-bed', 'ec-garden', 'ec-bath', 'court-balconies'], beds: { single: 2 }, sleeps: 2, size: 18, features: ['garden', 'entrance', 'net', 'ac', 'wifi', 'towels'] },
  { id: 'family-studio', hero: 'st-sofa', photos: ['st-sofa', 'st-bed', 'st-living', 'st-desk', 'court-above'], beds: { double: 1, single: 1, sofa: 1 }, sleeps: 3, size: 30, features: ['living', 'sofa', 'entrance', 'net', 'ac', 'wifi', 'towels'] },
  { id: 'apartment', hero: 'ap-twin', photos: ['ap-twin', 'ap-double', 'ap-window', 'ap-bed', 'terrace'], beds: { double: 1, single: 2 }, sleeps: 4, size: 30, features: ['bedrooms', 'living', 'entrance', 'net', 'ac', 'wifi', 'towels'] },
] as Omit<Room, 'max' | 'price'>[]).map((r) => ({ ...r, max: count[r.id].count, price: count[r.id].price }));
