/** Lines from guests' Google reviews of the hotel, quoted verbatim (shortened to whole sentences). Kept in content.json. */
import { CONTENT } from './content';

export interface Review { name?: string; lang: 'en' | 'ar'; text: string; when: { en: string; ar: string } }

export const REVIEWS: Review[] = CONTENT.reviews.map((r) => ({ ...r, name: r.name || undefined, lang: /[؀-ۿ]/.test(r.text) ? 'ar' : 'en' }));
