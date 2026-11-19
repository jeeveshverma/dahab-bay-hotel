/**
 * The photo catalogue: every master in src/assets/photos/, what it shows, which group it belongs
 * to and alt text in both languages. Placement on the site follows `group` and the room lists in
 * site.ts — nothing is placed by filename.
 *
 * Source: all 64 are the photos on the hotel's Booking.com listing (downloaded 2026-11-20 through
 * the Priceline copy of that listing). The room photos are grouped as the listing groups them,
 * four to a room type.
 */
export type Group = 'beach' | 'house' | 'pool' | 'restaurant' | 'room' | 'bathroom';

export interface Photo { id: string; group: Group; alt: { en: string; ar: string }; caption?: { en: string; ar: string } }

export const PHOTOS: Photo[] = [
  { id: "beach-hammock", group: "beach", alt: { en: "A hammock strung between two posts on the hotel beach, the sun rising over the Gulf of Aqaba behind it", ar: "أرجوحة شبكية بين عمودين على شاطئ الفندق، والشمس تشرق خلفها فوق خليج العقبة" }, caption: { en: "Sunrise from the hammock", ar: "الشروق من الأرجوحة" } },
  { id: "beach-swings", group: "beach", alt: { en: "Swings and a hammock under the beach shelter, the sun low over the sea", ar: "أراجيح وأرجوحة شبكية تحت مظلة الشاطئ، والشمس منخفضة فوق البحر" }, caption: { en: "Swings on the beach", ar: "أراجيح على الشاطئ" } },
  { id: "beach-shade", group: "beach", alt: { en: "The beach café: pallet sofas and swings under a timber roof, open to the sea at sunrise", ar: "مقهى الشاطئ: كنبات خشبية وأراجيح تحت سقف خشبي مفتوح على البحر عند الشروق" }, caption: { en: "The café on the beach", ar: "المقهى على الشاطئ" } },
  { id: "beach-tea", group: "beach", alt: { en: "A glass of tea, mint and a blue teapot on a blue table, the sea just beyond", ar: "كوب شاي ونعناع وإبريق أزرق على طاولة زرقاء، والبحر خلفها مباشرة" }, caption: { en: "Tea by the water", ar: "شاي عند الماء" } },
  { id: "beach-shore", group: "beach", alt: { en: "Cushions under a palm-thatch shade on the shore, the mountains running down to the sea", ar: "وسائد تحت مظلة من سعف النخيل على الشاطئ، والجبال تنحدر إلى البحر" }, caption: { en: "The shore, looking north", ar: "الشاطئ باتجاه الشمال" } },
  { id: "sea-sunrise", group: "beach", alt: { en: "The sun coming up over the Gulf of Aqaba, waves on the rocks in front", ar: "الشمس تطلع فوق خليج العقبة، والموج على الصخور في المقدمة" }, caption: { en: "Sunrise over the gulf", ar: "الشروق فوق الخليج" } },
  { id: "roof-sunrise", group: "beach", alt: { en: "Sunrise seen from the roof terrace, between the white room blocks", ar: "الشروق من سطح الفندق بين مباني الغرف البيضاء" }, caption: { en: "Sunrise from the roof", ar: "الشروق من السطح" } },
  { id: "front", group: "house", alt: { en: "The front of Dahab Bay Hotel from the beach, steps up to the restaurant, the mountain behind", ar: "واجهة فندق دهب باي من جهة الشاطئ، ودرج يصعد إلى المطعم والجبل خلفها" }, caption: { en: "The hotel from the beach", ar: "الفندق من الشاطئ" } },
  { id: "entrance", group: "house", alt: { en: "The steps and terrace at the hotel entrance, the name on the wall, the mountain above", ar: "درج وتراس مدخل الفندق، والاسم على الجدار والجبل فوقه" }, caption: { en: "The entrance", ar: "المدخل" } },
  { id: "terrace", group: "house", alt: { en: "The stone terrace in front of the restaurant, with palms and flowering shrubs", ar: "التراس الحجري أمام المطعم، مع نخيل وشجيرات مزهرة" }, caption: { en: "The terrace", ar: "التراس" } },
  { id: "mountain", group: "house", alt: { en: "The hotel and its neighbours at the foot of the Sinai mountains, lit orange at sunrise", ar: "الفندق وجيرانه عند سفح جبال سيناء، بلون برتقالي عند الشروق" }, caption: { en: "The mountain behind", ar: "الجبل خلف الفندق" } },
  { id: "garden", group: "house", alt: { en: "The lawn and the beach café seen from the hotel, mountains behind", ar: "الحديقة ومقهى الشاطئ من الفندق، والجبال خلفهما" }, caption: { en: "Lawn and beach café", ar: "الحديقة ومقهى الشاطئ" } },
  { id: "court", group: "house", alt: { en: "The paved courtyard between the two room blocks, with trees and bougainvillea", ar: "الفناء المبلّط بين مبنيي الغرف، مع أشجار وجهنمية" }, caption: { en: "The courtyard", ar: "الفناء" } },
  { id: "court-balconies", group: "house", alt: { en: "The courtyard from a balcony, the mountain at its far end", ar: "الفناء من إحدى الشرفات، والجبل في نهايته" }, caption: { en: "Balconies over the courtyard", ar: "شرفات تطل على الفناء" } },
  { id: "court-above", group: "house", alt: { en: "The courtyard from the upper floor, bougainvillea along the railing and the mountain in the sun", ar: "الفناء من الدور العلوي، والجهنمية على السور والجبل في الشمس" }, caption: { en: "From the upper floor", ar: "من الدور العلوي" } },
  { id: "block", group: "house", alt: { en: "The white room blocks with balconies, the red mountain behind and the pool below", ar: "مباني الغرف البيضاء بشرفاتها، والجبل الأحمر خلفها والمسبح أسفلها" }, caption: { en: "Rooms, pool and mountain", ar: "الغرف والمسبح والجبل" } },
  { id: "stairs", group: "house", alt: { en: "A staircase between two walls, a lantern hanging at the top, the sun behind", ar: "درج بين جدارين، وفانوس معلّق في أعلاه والشمس خلفه" }, caption: { en: "Stairs to the roof", ar: "الدرج إلى السطح" } },
  { id: "reception", group: "house", alt: { en: "The reception desk and a sofa in warm light, the door open to the terrace", ar: "مكتب الاستقبال وكنبة في ضوء دافئ، والباب مفتوح على التراس" }, caption: { en: "Reception", ar: "الاستقبال" } },
  { id: "pool", group: "pool", alt: { en: "The swimming pool in the courtyard, white walls and balconies around it", ar: "المسبح في الفناء، تحيط به جدران بيضاء وشرفات" }, caption: { en: "The pool", ar: "المسبح" } },
  { id: "pool-wide", group: "pool", alt: { en: "The pool with its steps and a blue arched niche on the wall", ar: "المسبح بدرجاته وقوس أزرق على الجدار" }, caption: { en: "The pool, from the steps", ar: "المسبح من جهة الدرج" } },
  { id: "pool-side", group: "pool", alt: { en: "The pool from its corner, a surfboard leaning on the wall", ar: "المسبح من زاويته، ولوح تزلج مسنود إلى الجدار" }, caption: { en: "A corner of the pool", ar: "زاوية المسبح" } },
  { id: "rest-hall", group: "restaurant", alt: { en: "The restaurant: a black-and-white tiled floor, wooden tables, lanterns and the bar at the end", ar: "المطعم: أرضية بمربعات سوداء وبيضاء وطاولات خشبية وفوانيس والبار في آخره" }, caption: { en: "The restaurant", ar: "المطعم" } },
  { id: "rest-bar", group: "restaurant", alt: { en: "The restaurant from the door, with the bar counter and hanging lanterns", ar: "المطعم من الباب، مع البار وفوانيس معلّقة" }, caption: { en: "Tables and the bar", ar: "الطاولات والبار" } },
  { id: "rest-table", group: "restaurant", alt: { en: "A table for six by the window, low sun across the tiled floor", ar: "طاولة لستة بجانب النافذة، وشمس منخفضة على الأرضية" }, caption: { en: "A table by the window", ar: "طاولة بجانب النافذة" } },
  { id: "rest-window", group: "restaurant", alt: { en: "A dining table at the picture window, flowering trees and the sea beyond", ar: "طاولة طعام عند النافذة الواسعة، وأشجار مزهرة والبحر خلفها" }, caption: { en: "Breakfast with the sea in the window", ar: "فطور والبحر في النافذة" } },
  { id: "rest-corner", group: "restaurant", alt: { en: "A corner of the restaurant: tables, plants and the bar lit in the evening", ar: "ركن من المطعم: طاولات ونباتات والبار مضاء مساءً" }, caption: { en: "A quiet corner", ar: "ركن هادئ" } },
  { id: "rest-tall", group: "restaurant", alt: { en: "A glass of tea on a marble table, the sunrise through the window", ar: "كوب شاي على طاولة رخامية، والشروق من النافذة" }, caption: { en: "Tea at sunrise", ar: "شاي عند الشروق" } },
  { id: "rest-lamp", group: "restaurant", alt: { en: "A brass lantern, a plant and a water pitcher on a counter in the restaurant", ar: "فانوس نحاسي ونبتة وإبريق ماء على طاولة في المطعم" }, caption: { en: "Lantern and brass", ar: "فانوس ونحاس" } },
  { id: "ds-sea", group: "room", alt: { en: "Double room with sea view: beds with towel swans and petals, the terrace door open to the sea", ar: "غرفة مزدوجة بإطلالة على البحر: أسرّة عليها بجع من المناشف وورود، وباب التراس مفتوح على البحر" }, caption: { en: "Double room, sea view", ar: "غرفة مزدوجة بإطلالة على البحر" } },
  { id: "ds-beds", group: "room", alt: { en: "Double room with sea view: the beds with turquoise cushions on a chequered floor", ar: "غرفة مزدوجة بإطلالة على البحر: الأسرّة بوسائد فيروزية على أرضية مربعات" }, caption: { en: "Turquoise and white", ar: "فيروزي وأبيض" } },
  { id: "ds-bath", group: "bathroom", alt: { en: "Bathroom of the sea-view double: grey tiles, a basin and a shower", ar: "حمّام الغرفة المزدوجة المطلة على البحر: بلاط رمادي ومغسلة ودُش" }, caption: { en: "Bathroom", ar: "الحمّام" } },
  { id: "ds-basin", group: "bathroom", alt: { en: "A pedestal basin under a mosaic mirror", ar: "مغسلة قائمة تحت مرآة موزاييك" }, caption: { en: "Mosaic mirror", ar: "مرآة موزاييك" } },
  { id: "fs-sea", group: "room", alt: { en: "Family room with sea view: beds facing glass doors to a terrace, the sea beyond", ar: "غرفة عائلية بإطلالة على البحر: أسرّة تواجه أبواباً زجاجية إلى تراس والبحر خلفه" }, caption: { en: "Family room, sea view", ar: "غرفة عائلية بإطلالة على البحر" } },
  { id: "fs-window", group: "room", alt: { en: "Family room: a bed by the sliding door, tamarisk trees and the sea outside", ar: "الغرفة العائلية: سرير بجانب الباب المنزلق، وأشجار الأثل والبحر في الخارج" }, caption: { en: "The terrace door", ar: "باب التراس" } },
  { id: "fs-twins", group: "room", alt: { en: "Family room: two single beds with carved headboards", ar: "الغرفة العائلية: سريران مفردان بظهر خشبي منقوش" }, caption: { en: "Two single beds", ar: "سريران مفردان" } },
  { id: "fs-hall", group: "room", alt: { en: "Family room seen from the terrace door, through to the second sleeping area", ar: "الغرفة العائلية من باب التراس حتى منطقة النوم الثانية" }, caption: { en: "Two sleeping areas", ar: "منطقتان للنوم" } },
  { id: "dd-beds", group: "room", alt: { en: "Deluxe double room: two beds with petals, a wardrobe and the balcony door", ar: "غرفة ديلوكس مزدوجة: سريران عليهما ورود وخزانة وباب الشرفة" }, caption: { en: "Deluxe double room", ar: "غرفة ديلوكس مزدوجة" } },
  { id: "dd-window", group: "room", alt: { en: "Deluxe double room: two beds under the air conditioning, pink curtains at the balcony", ar: "غرفة ديلوكس مزدوجة: سريران تحت التكييف وستائر وردية عند الشرفة" }, caption: { en: "Two beds and a balcony", ar: "سريران وشرفة" } },
  { id: "dd-petals", group: "room", alt: { en: "Two beds scattered with pink petals", ar: "سريران منثور عليهما ورود وردية" }, caption: { en: "Made up for arrival", ar: "جاهزة للوصول" } },
  { id: "dd-bath", group: "bathroom", alt: { en: "Bathroom with leaf-patterned tiles, an open shower and a granite basin", ar: "حمّام ببلاط منقوش بالأوراق ودُش مفتوح ومغسلة جرانيت" }, caption: { en: "Bathroom", ar: "الحمّام" } },
  { id: "sg-bed", group: "room", alt: { en: "Single room: a wide bed with a carved frame and the balcony door", ar: "غرفة مفردة: سرير عريض بإطار منقوش وباب الشرفة" }, caption: { en: "Single room", ar: "غرفة مفردة" } },
  { id: "sg-wardrobe", group: "room", alt: { en: "Single room: a carved wooden wardrobe, a kettle and a fridge", ar: "غرفة مفردة: خزانة خشبية منقوشة وغلاية وثلاجة" }, caption: { en: "Wardrobe, kettle and fridge", ar: "خزانة وغلاية وثلاجة" } },
  { id: "sg-door", group: "room", alt: { en: "Single room seen from the corridor, the balcony at the far end", ar: "الغرفة المفردة من الممر والشرفة في آخرها" }, caption: { en: "From the door", ar: "من الباب" } },
  { id: "sg-bath", group: "bathroom", alt: { en: "Bathroom with wood-effect and leaf-patterned tiles", ar: "حمّام ببلاط بنقش خشبي وأوراق" }, caption: { en: "Bathroom", ar: "الحمّام" } },
  { id: "tr-beds", group: "room", alt: { en: "Comfort triple room: three single beds in a row, the door open to the terrace", ar: "غرفة ثلاثية: ثلاثة أسرّة مفردة في صف والباب مفتوح على التراس" }, caption: { en: "Triple room", ar: "غرفة ثلاثية" } },
  { id: "tr-room", group: "room", alt: { en: "Comfort triple room from the corner: three beds, a wardrobe and a kettle", ar: "الغرفة الثلاثية من الركن: ثلاثة أسرّة وخزانة وغلاية" }, caption: { en: "Three single beds", ar: "ثلاثة أسرّة مفردة" } },
  { id: "tr-swan", group: "room", alt: { en: "A towel swan and petals on a bed", ar: "بجعة من المناشف وورود على سرير" }, caption: { en: "Towel swan", ar: "بجعة المناشف" } },
  { id: "tr-bath", group: "bathroom", alt: { en: "Bathroom with a granite basin and leaf-patterned tiles", ar: "حمّام بمغسلة جرانيت وبلاط منقوش بالأوراق" }, caption: { en: "Bathroom", ar: "الحمّام" } },
  { id: "qd-room", group: "room", alt: { en: "Comfort quadruple room: beds on a chequered floor, glass doors to the garden", ar: "غرفة رباعية: أسرّة على أرضية مربعات وأبواب زجاجية على الحديقة" }, caption: { en: "Quadruple room", ar: "غرفة رباعية" } },
  { id: "qd-beds", group: "room", alt: { en: "Quadruple room: two single beds under a red patterned curtain", ar: "الغرفة الرباعية: سريران مفردان تحت ستارة حمراء منقوشة" }, caption: { en: "Two of the four beds", ar: "اثنان من الأسرّة الأربعة" } },
  { id: "qd-vanity", group: "room", alt: { en: "Quadruple room: a double bed, a dressing table with an arched mirror", ar: "الغرفة الرباعية: سرير مزدوج وطاولة زينة بمرآة مقوّسة" }, caption: { en: "Double bed and dressing table", ar: "سرير مزدوج وطاولة زينة" } },
  { id: "qd-garden", group: "room", alt: { en: "The garden courtyard seen through the room's glass doors", ar: "فناء الحديقة من الأبواب الزجاجية للغرفة" }, caption: { en: "The garden outside", ar: "الحديقة أمام الغرفة" } },
  { id: "ec-room", group: "room", alt: { en: "Economy double room: two beds with red covers, a wide window on the garden", ar: "غرفة اقتصادية مزدوجة: سريران بأغطية حمراء ونافذة واسعة على الحديقة" }, caption: { en: "Economy double room", ar: "غرفة اقتصادية مزدوجة" } },
  { id: "ec-bed", group: "room", alt: { en: "Economy double room: a bed, a wardrobe and a dressing table on a chequered floor", ar: "الغرفة الاقتصادية: سرير وخزانة وطاولة زينة على أرضية مربعات" }, caption: { en: "Wardrobe and dressing table", ar: "خزانة وطاولة زينة" } },
  { id: "ec-garden", group: "room", alt: { en: "The courtyard garden through the window", ar: "حديقة الفناء من النافذة" }, caption: { en: "Window on the courtyard", ar: "نافذة على الفناء" } },
  { id: "ec-bath", group: "bathroom", alt: { en: "Bathroom with a bathtub and a chequered floor", ar: "حمّام بحوض استحمام وأرضية مربعات" }, caption: { en: "Bathroom with a bathtub", ar: "حمّام بحوض استحمام" } },
  { id: "st-sofa", group: "room", alt: { en: "Family studio: a patterned sofa and a low table beside the bed", ar: "استوديو عائلي: كنبة منقوشة وطاولة منخفضة بجانب السرير" }, caption: { en: "Family studio", ar: "استوديو عائلي" } },
  { id: "st-bed", group: "room", alt: { en: "Family studio: a double bed, a dressing table with an arched mirror", ar: "الاستوديو العائلي: سرير مزدوج وطاولة زينة بمرآة مقوّسة" }, caption: { en: "The double bed", ar: "السرير المزدوج" } },
  { id: "st-living", group: "room", alt: { en: "Family studio: the sitting area with a sofa, and the door", ar: "الاستوديو العائلي: ركن الجلوس بكنبة والباب" }, caption: { en: "Sitting area", ar: "ركن الجلوس" } },
  { id: "st-desk", group: "room", alt: { en: "Family studio: a bed with a turquoise cushion, a bedside table and a desk", ar: "الاستوديو العائلي: سرير بوسادة فيروزية وطاولة جانبية ومكتب" }, caption: { en: "Bed and desk", ar: "السرير والمكتب" } },
  { id: "ap-twin", group: "room", alt: { en: "Apartment: a bedroom with two single beds and a painting of the coast", ar: "الشقة: غرفة نوم بسريرين مفردين ولوحة للساحل" }, caption: { en: "Apartment, twin bedroom", ar: "الشقة، غرفة بسريرين" } },
  { id: "ap-double", group: "room", alt: { en: "Apartment: a bedroom with a double bed and a sliding door to the terrace", ar: "الشقة: غرفة نوم بسرير مزدوج وباب منزلق إلى التراس" }, caption: { en: "Double bedroom", ar: "غرفة بسرير مزدوج" } },
  { id: "ap-window", group: "room", alt: { en: "Apartment: twin beds by the window, the balcony outside", ar: "الشقة: سريران بجانب النافذة والشرفة في الخارج" }, caption: { en: "By the window", ar: "بجانب النافذة" } },
  { id: "ap-bed", group: "room", alt: { en: "Apartment: a double bed with a towel bow, a carved door", ar: "الشقة: سرير مزدوج عليه منشفة معقودة وباب منقوش" }, caption: { en: "The second bedroom", ar: "غرفة النوم الثانية" } },
];

export const photo = (id: string): Photo => {
  const p = PHOTOS.find((p) => p.id === id);
  if (!p) throw new Error(`Unknown photo id: ${id}`);
  return p;
};
