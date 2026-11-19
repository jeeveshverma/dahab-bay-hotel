/**
 * Places around the hotel. Coordinates are each place's OpenStreetMap pin (looked up 2026-11-20),
 * except St Catherine's Monastery, which is its published position. Distance and travel minutes
 * are computed at build time in src/lib/geo.ts — nothing here is typed by hand.
 */
import type { LatLng } from '../lib/geo';

export interface Place { id: string; name: { en: string; ar: string }; blurb: { en: string; ar: string }; at: LatLng; kind: 'near' | 'far'; transport?: boolean }

export const PLACES: Place[] = [
  { id: 'assalah', kind: 'near', at: { lat: 28.50503, lng: 34.514146 }, name: { en: 'Assalah', ar: 'عصلة' }, blurb: { en: 'The nearest neighbourhood: shops, bakeries, ATMs and local restaurants.', ar: 'أقرب حي: محلات ومخابز وماكينات صرف ومطاعم محلية.' } },
  { id: 'eel-garden', kind: 'near', at: { lat: 28.505348, lng: 34.521232 }, name: { en: 'Eel Garden', ar: 'إيل جاردن' }, blurb: { en: 'A shallow reef you snorkel from the shore, named for its garden eels.', ar: 'شعاب ضحلة تُمارَس فيها رياضة السنوركل من الشاطئ، وتشتهر بثعابين الحديقة.' } },
  { id: 'lighthouse', kind: 'near', at: { lat: 28.500456, lng: 34.515741 }, name: { en: 'Lighthouse and the Mamsha', ar: 'اللايت هاوس والممشى' }, blurb: { en: 'The seafront promenade: cafés, dive centres and the busy part of town.', ar: 'ممشى البحر: مقاهٍ ومراكز غوص والجزء المزدحم من البلد.' } },
  { id: 'laguna', kind: 'near', at: { lat: 28.475409, lng: 34.503181 }, name: { en: 'The Lagoon', ar: 'اللاجونا' }, blurb: { en: 'The sandy bay south of town, for windsurfing and kitesurfing.', ar: 'الخليج الرملي جنوب البلد، للويندسيرف والكايت سيرف.' } },
  { id: 'blue-hole', kind: 'near', at: { lat: 28.572302, lng: 34.537355 }, name: { en: 'Blue Hole', ar: 'البلو هول' }, blurb: { en: 'The famous sinkhole in the reef, at the end of the road the hotel is on.', ar: 'الحفرة الزرقاء الشهيرة في الشعاب، في نهاية الطريق الذي يقع عليه الفندق.' } },
  { id: 'abu-galum', kind: 'far', at: { lat: 28.616232, lng: 34.560712 }, name: { en: 'Ras Abu Galum', ar: 'رأس أبو جالوم' }, blurb: { en: 'The protected coast north of the Blue Hole, reached on foot, by camel or by boat.', ar: 'المحمية الساحلية شمال البلو هول، يُوصَل إليها سيراً أو بالجمال أو بالقارب.' } },
  { id: 'st-catherine', kind: 'far', at: { lat: 28.5559, lng: 33.9756 }, name: { en: 'St Catherine\'s Monastery', ar: 'دير سانت كاترين' }, blurb: { en: 'The sixth-century monastery at the foot of Mount Sinai, a day trip inland.', ar: 'دير القرن السادس عند سفح جبل موسى، رحلة يوم إلى الداخل.' } },
  { id: 'ssh', kind: 'far', transport: true, at: { lat: 27.979491, lng: 34.39463 }, name: { en: 'Sharm El Sheikh Airport', ar: 'مطار شرم الشيخ' }, blurb: { en: 'The nearest airport. The hotel arranges a transfer for a fee.', ar: 'أقرب مطار، ويرتب الفندق التوصيل برسوم.' } },
];

export const place = (id: string) => PLACES.find((p) => p.id === id)!;
