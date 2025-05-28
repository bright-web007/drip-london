import flit1 from '@/assets/flit1.jpg';
import flit2 from '@/assets/flit2.png';

import night1 from '@/assets/night1.jpg';
import night2 from '@/assets/night2.jpg';

import icon1 from '@/assets/icons-svg/icon1.svg';
import icon2 from '@/assets/icons-svg/icon2.svg';
import icon3 from '@/assets/icons-svg/icon3.svg';
import icon4 from '@/assets/icons-svg/icon4.svg';
import icon5 from '@/assets/icons-svg/icon5.svg';
import smallPlatesImage from '@/assets/food1.png';
import largePlatesImage from '@/assets/food2.png';
import sideImage from '@/assets/food3.png';
import dessertImage from '@/assets/food4.png';
import cocktailsImg from '@/assets/drink1.png';
import mocktailImg from '@/assets/drink2.png';

import card1 from '@/assets/card1.png';
import card2 from '@/assets/card2.png';
import card3 from '@/assets/card3.png';
import card4 from '@/assets/card4.png';
import card5 from '@/assets/card5.png';
import card6 from '@/assets/card6.png';

import menu1 from '@/assets/menu1.jpg';
import menu2 from '@/assets/menu2.jpg';
import menu3 from '@/assets/menu3.jpg';

import slide1 from '@/assets/slide1.jpg';
import slide2 from '@/assets/slide2.jpg';
import slide3 from '@/assets/slide3.jpg';
import slide4 from '@/assets/slide4.jpg';

import deam1 from '@/assets/deam1.jpg';
import deam2 from '@/assets/deam2.jpg';
import deam3 from '@/assets/deam3.jpg';

import drip1 from '@/assets/drip1.jpg';
import drip2 from '@/assets/drip2.jpg';
import drip3 from '@/assets/drip3.jpg';
import drip4 from '@/assets/drip4.jpg';
import drip5 from '@/assets/drip5.jpg';
import drip6 from '@/assets/drip6.jpg';

import { StaticImageData } from 'next/image';

export const reviews = [
  {
    author: 'Richard Johnson',
    review:
      "Drip London is truly one of a kind — the moment you walk in, you're greeted by an incredible energy. The décor is stunning, the staff are warm and attentive, and the food? Absolutely phenomenal. Every dish is bursting with flavour, and the cocktails are next level.",
    rating: 4,
  },
  {
    author: 'Danielle K',
    review:
      'Everything about Drip screams luxury with a vibe. The staff were so attentive, the food was phenomenal, and the cocktails? Easily the best I’ve had in London. Can’t wait to come back with the girls!',
    rating: 5,
  },
  {
    author: 'Richard Johnson',
    review:
      'I booked Drip for my birthday dinner and it was hands-down the best decision. From the music to the lighting to the food, everything was on point. It turned into a full-on party — exactly what I wanted.',
    rating: 4,
  },
];

export const processes = [
  {
    title: 'The Art of Flavour: Where Culture Meets Cuisine',
    description:
      'Discover how Drip London fuses international influences with bold local flair — creating dishes that feel familiar, yet taste brand new.',
  },
  {
    title: 'From Kitchen to Club: The Full Drip Experience',
    description:
      'Our story doesn’t stop at the plate. Explore how Drip transitions from a vibrant dining space to a high-energy lounge — all in one unforgettable night.',
  },
  {
    title: 'Dining with a Beat: Why Music Sets the Mood',
    description:
      'Good food hits harder when the soundtrack is right. See how our DJs, lighting, and ambiance create a multisensory experience every time you visit.',
  },
];

export const events = [
  {
    time: 'April 5 2025',
    title: 'Celebrate Your Birthday at Drip London: VIP Packages & More',
    description:
      'Make your next birthday unforgettable with our exclusive celebration packages. From VIP tables and custom menus to bottle service and live DJs.',
  },
  {
    time: 'March 25 2025',
    title: 'Drip Fridays: Late-Night Dining & DJs ’Til Late',
    description:
      'Fridays just hit different at Drip. Join us every week for flavorful bites, signature cocktails, and high-energy DJ sets that keep the vibe going well into the night.',
  },
  {
    time: 'March 20 2025',
    title: 'A Look Back at Our Women’s Day Celebration Brunch',
    description:
      'We toasted to strong women, good vibes, and unforgettable moments. From mimosas to music, relive the highlights of our Women’s Day brunch a celebration of community, empowerment, and joy.',
  },
];

export const drinksMenu = {
  cocktails: {
    image: cocktailsImg,
    items: [
      {
        title: 'Savannah Drip',
        description:
          'Strawberry & cucumber Gin bramble, a refreshing burst of sweet and herbal notes.',
        price: '£12.50',
      },
      {
        title: 'Golden Hour',
        description: 'Rhubarb Gin sour, perfectly tangy with a smooth finish.',
        price: '£13.00',
      },
      {
        title: 'Pineapple Royale',
        description: 'Hennessy with a tropical pineapple twist, rich and regal',
        price: '£14.50',
      },
      {
        title: 'Oga’s Spicy Margarita',
        description: 'Spicy Margarita, a royal blend of citrus and agave.',
        price: '£14.00',
      },
      {
        title: 'Crimson Kiss',
        description: 'Disaronno & cranberry, sweet, tart, and unforgettable.',
        price: '£14.50',
      },
      {
        title: 'Sunstone',
        description: 'Lemon Drop, a bright and zesty delight.',
        price: '£12.50',
      },
      {
        title: 'Polaroid Paradise',
        description:
          'Capture the moment with a surprise Tequila cocktail served with its own keepsake polaroid.',
        price: '£15.00',
      },
    ],
  },
  mocktails: {
    image: mocktailImg,
    items: [
      {
        title: 'Victoria Island',
        description:
          'A tropical fusion of coconut water, creamy coconut milk, zesty lime juice, and a hint of blue raspberry syrup.',
        price: '£8.50',
      },
      {
        title: 'Green Gold',
        description:
          'Crisp apple juice, agave, and fresh lime, inspired by the golden orchards and lush landscapes of West Africa.',
        price: '£8.00',
      },
      {
        title: 'Baobab Bloom',
        description:
          'A bold fusion of seasonal fruits with a citrus kick, echoing the vibrant colours of a West African sunset',
        price: '£8.50',
      },
    ],
  },
};

export const foodMenu = {
  SmallPlates: {
    image: smallPlatesImage,
    items: [
      {
        title: 'Suya Buttermilk Chicken',
        description: 'Juicy, skin-on chicken thighs marinated in a rich, spicy Suya blend.',
        price: '£15.50',
      },
      {
        title: 'Mushroom Skewers with Teriyaki & Crispy Tenkasu',
        description:
          'Grilled maitake and shiitake mushrooms, glazed in a thick, sweet teriyaki sauce, with a crispy tempura finish.',
        price: '£9.50',
      },
      {
        title: 'Suya Salmon Ceviche  with Crispy Plantain',
        description:
          'Velvety salmon, caviar, and a trio of roe. Finished with daikon, green mango, ponzu with a tangy mix of green mango, and a splash of lime.',
        price: '£18.50',
      },
      {
        title: 'Grilled Prawn Skewers with Sweet Chilli',
        description:
          'Flame-grilled prawns marinated in a sweet chilli glaze, blending bold West African spices with a perfect balance of heat and sweetness in every bite.',
        price: '£13.50',
      },
      {
        title: 'Okra, Cucumber & Sesame, Miso Salad',
        description:
          'Cool, crisp cucumber paired with pickled okra, fennel and a fragrant miso dressing. Finished with toasted pine nuts.',
        price: '£11.50',
      },
    ],
  },
  largePlates: {
    image: largePlatesImage,
    items: [
      {
        title: 'Kaduna Beef Suya',
        description:
          'Tender beef skewers marinated in a bold blend of spices and ground peanuts, flame-grilled to smoky perfection. Served with crisp onions and juicy tomatoes.',
        price: '£15.25',
      },
      {
        title: 'Lagos Style Asun',
        description: 'Slow-cooked goat meat, flash-grilled and tossed in a spicy pepper medley.',
        price: '£18.25',
      },
      {
        title: 'Grilled Day Boat Fish',
        description:
          'Grilled fresh catch fish, served with a bold pepper soup purée, complemented by delicate sea vegetables and crisp samphire. Please ask your server for today’s selection an pricing.',
        price: 'DOA',
      },
      {
        title: 'Lobster & Jollof Rice',
        description:
          'Tender lobster meat served alongside a silky lobster béarnaise with fluffy jollof.',
        price: '£38.00',
      },
      {
        title: 'Suya Beef Steak with Bone Marrow',
        description: 'Suya spiced beef steak with a rich bone marrow butter and red wine sauce.',
        price: '£52.00',
      },
      {
        title: 'Grilled Octopus & Butter Beans',
        description:
          'Grilled octopus on a bed of butter beans and golden potatoes, drizzled in a rich, spiced jus. Topped with crispy chicken',
        price: '£17.00',
      },
    ],
  },

  Sides: {
    image: sideImage,
    items: [
      {
        title: 'Sweet Potato, Swede & Cassava Mash',
        price: '£9.50',
      },
      {
        title: 'Jollof Rice',
        price: '£8.50',
      },
      {
        title: 'Fried Plantain',
        price: '£6.50',
      },
      {
        title: 'Suya Fries',
        price: '£6.50',
      },
    ],
  },
  Dessert: {
    image: dessertImage,
    items: [
      {
        title: 'Warm filled doughnuts',
        description:
          'Light, pillowy doughnuts served warm, with your choice of indulgent fillings: rich chocolate, delicate pistachio, or spiced Biscoff.',
        price: '£12.00',
      },
    ],
  },
};

export const navLinks = [
  { name: 'Home', link: '/' },
  { name: 'The Menus', link: '/menu' },
  { name: 'About', link: '/about' },
  { name: 'Book an Event', link: '/' },
  { name: 'News', link: '/news' },
  { name: 'Contacts', link: '/' },
  { name: 'Reservation', link: '/reservation' },
  { name: 'FAQs', link: '/faq' },
  { name: 'News', link: '/news' },
  { name: 'Contacts', link: '/contact-us' },
];

export const navLinker = [
  { name: 'Reservation', link: '/reservation' },
  { name: 'Private Dinning', link: '/private' },
  { name: 'Menus', link: '/menu' },
  { name: 'FAQs', link: '/faq' },
  { name: 'Contacts', link: '/contact-us' },
];

export const latestNews = [
  {
    image: card1,
    date: 'April 25, 2025',
    subtitle: 'Inside the Drip: Our Signature Cocktail Menu Just Got a Glow Up',
    description:
      "Our bartenders have been busy shaking things up — literally. Discover the fresh new flavors and bold updates we've made to your favourite sips.",
  },
  {
    image: card2,
    date: 'March 25, 2025',
    subtitle: 'Friday Nights at Drip: What to Expect After Dark',
    description:
      "Dinner may end, but the vibe doesn't. Dive into the experience that turns Drip London from chic restaurant to high-energy lounge every Friday night.",
  },
  {
    image: card3,
    date: 'February 25, 2025',
    subtitle: 'Behind the Scenes: A Day in the Life of the Drip Kitchen Crew',
    description:
      'From prepping signature mains to plating your favourite starters, take a peek at how the Drip team keeps things flavorful and fast-paced in the kitchen.',
  },
  {
    image: card4,
    date: 'February 25, 2025',
    subtitle: "Event Recap: Women's Day Brunch Celebration",
    description:
      "Thank you to everyone who joined us for a day of joy, empowerment, and incredible food. Here's a recap of the best moments — and what's coming next.",
  },
  {
    image: card5,
    date: 'February 25, 2025',
    subtitle: 'Booking Private Dining at Drip: What You Need to Know',
    description:
      'Thinking about hosting a birthday or business dinner? We break down everything you need to know about our stunning private dining experiences.',
  },
  {
    image: card6,
    date: 'February 25, 2025',
    subtitle: 'Celebrate in Style: Your Guide to Private Dining at Drip',
    description:
      "Whether it's an anniversary, product launch, or VIP dinner, our private dining experience is designed to impress. Learn what's included, how to book, and how we bring your event vision to life.",
  },
];

export const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Drip London',
  image: `${process.env.NEXT_PUBLIC_SITE_URL}/drip-london-logo.jpg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '27 Clerkwenwell road, London',
    addressLocality: 'London',
    addressRegion: 'Greater London',
    postalCode: 'EC1M 5RN',
    addressCountry: 'GB',
  },
  telephone: '+449 098 875 9876',
  servesCuisine: ['West African Fusion', 'Modern European', 'Cocktails', 'Mocktails', 'Brunch'],
  url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
  acceptsReservations: 'True',
  menu: `${process.env.NEXT_PUBLIC_SITE_URL}/menu`,
};

export const menuSchema = {
  '@context': 'https://schema.org',
  '@type': 'Menu',
  name: 'Drip London Menu',
  url: `${process.env.NEXT_PUBLIC_SITE_URL}/menu`,
  hasMenuSection: [
    {
      '@type': 'MenuSection',
      name: 'Drinks',
      hasMenuItem: [
        drinksMenu.cocktails.items.map(drink => ({
          '@type': 'MenuItem',
          name: drink.title,
          description: drink.description,
          offers: {
            '@type': 'Offer',
            price: drink.price,
            priceCurrency: 'GBP',
          },
        })),
        drinksMenu.mocktails.items.map(drink => ({
          '@type': 'MenuItem',
          name: drink.title,
          description: drink.description,
          offers: {
            '@type': 'Offer',
            price: drink.price,
            priceCurrency: 'GBP',
          },
        })),
        foodMenu.largePlates.items.map(food => ({
          '@type': 'MenuItem',
          name: food.title,
          description: food.description,
          offers: {
            '@type': 'Offer',
            price: food.price,
            priceCurrency: 'GBP',
          },
        })),
        foodMenu.SmallPlates.items.map(food => ({
          '@type': 'MenuItem',
          name: food.title,
          description: food.description,
          offers: {
            '@type': 'Offer',
            price: food.price,
            priceCurrency: 'GBP',
          },
        })),
        foodMenu.Sides.items.map(side => ({
          '@type': 'MenuItem',
          name: side.title,
          description: side.title,
          offers: {
            '@type': 'Offer',
            price: side.price,
            priceCurrency: 'GBP',
          },
        })),
        foodMenu.Dessert.items.map(dessert => ({
          '@type': 'MenuItem',
          name: dessert.title,
          description: dessert.description,
          offers: {
            '@type': 'Offer',
            price: dessert.price,
            priceCurrency: 'GBP',
          },
        })),
      ],
    },
  ],
};

export const timeSlots = [
  '16:00',
  '17:00',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
  '20:30',
  '21:00',
  '21:30',
];

export const dressSense = [
  'Dress to Impress. Elegant and Sophisticated',
  'Smart Casual. No Sport Wears or Hoodies',
];

export const acceptableIDs = [
  'Valid and In-Date Photographic Driving Licence',
  'Valid and In-Date Passport',
  'Current Military/ UK Services Photo ID',
  'Valid and In-Date Hologram ID Card',
];

export const Meta_Tags = {
  siteName: 'Drip London',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://driplondon.wazobia.uk',
  description:
    'At Drip, we serve more than just food—we deliver an immersive dining experience that blends tradition, creativity, and culture. Step into our stylish space and indulge in vibrant, fire-grilled dishes, rich spice blends, and soulful storytelling on every plate.',
};

export const containerStyle = {
  width: '100%',
  height: '100%',
};

export const center = {
  lat: 51.522297,
  lng: -0.102337,
};

export const GOOGLE_MAPS_APIKEY = 'AIzaSyB_Ujmyiir8qmceRFs5ICiSHUJhQnXRZD4';

export const faqreview = [
  {
    title: 'What is the experience like at Drip London?',
    review:
      'We’re not your typical restaurant. Expect an immersive evening filled with West African fusion cuisine, music, dancing, and theatrical flair. Our performers move through the space, engaging with guests for a truly unforgettable night.',
  },

  {
    title: 'How do I make a reservation?',
    review:
      'Reservations can be made directly through our website. We recommend booking in advance.',
  },

  {
    title: 'Is there live entertainment every night?',
    review:
      'The vibe is always alive at Drip London, Every evening feature vibrant music, immersive performances, and electric energy throughout the venue. On Saturdays and Sundays, we turn it up with a DJ spinning Afrobeat, Amapiano, Dancehall and feel-good tracks to late into the night. No matter when you join us, expect great music, passionate performances and unforgettable atmosphere.',
  },

  {
    title: 'Is this experience suitable for children?',
    review:
      'We are a 21+ venue due to the nature of the performances and ambiance. For private family events, please contact us.',
  },

  {
    title: 'How many people can I book for?',
    review: 'Group dining: 12–30 guests | Brunch: Up to 10 guests per booking (larger on request)',
  },

  {
    title: 'Do you require a deposit?',
    review:
      'Yes, group bookings require a 50% deposit. A La Carte and Brunch bookings require card details to secure.',
  },

  {
    title: 'Can I bring a cake?',
    review: 'Absolutely — please give us notice to help you set up.',
  },

  {
    title: 'Do you cater to dietary requirements?',
    review: 'Yes — we offer vegetarian, vegan, gluten-free, halal and allergen-friendly menus.',
  },

  {
    title: 'Is the brunch really bottomless?',
    review: 'Yes! Drinks flow freely for 90 minutes from your seating time.',
  },

  {
    title: 'Can we stay after brunch?',
    review:
      'Yes. Stay into the evening — the lights go down; the DJ comes up, send us an email if you’d like to extend your brunch booking with us.',
  },

  {
    title: 'What is your dresscode?',
    review:
      'We ask our guests to embrace the spirit of the experience with an effortlessly stylish, elevated and occasion ready dress code. Not permitted, Hats, Hoodies, Flip-flops or casual footwear, Sportswear (Including tracksuits, joggers, or athletic shoes).  We encourage all guests to dress with intention and occasion-appropriate polish. Management reserves the right to refuse entry to guests who do not adhere to the dress code.',
  },
];

export type Button = {
  label: string;
  actionType: 'navigate'; // Add more types if needed
  path?: string;
};

export type men = {
  img: StaticImageData;
  title: string;
  buttons?: Button[];
};

export const mens: men[] = [
  {
    img: menu1,
    title: 'A la carte Menu',
    buttons: [
      {
        label: 'View Menu',
        actionType: 'navigate',
        path: 'https://drive.google.com/drive/u/0/folders/1L5Cz-fDVesfWGRaXGvctRACPVhbDM5PJ',
      },
    ],
  },
  {
    img: menu2,
    title: 'Bar Menu',
    buttons: [
      {
        label: 'View Menu',
        actionType: 'navigate',
        path: 'https://drive.google.com/drive/u/0/folders/1L5Cz-fDVesfWGRaXGvctRACPVhbDM5PJ',
      },
    ],
  },
  {
    img: menu3,
    title: 'Bottomless Brunch Menu',
    buttons: [
      {
        label: 'View Menu',
        actionType: 'navigate',
        path: 'https://drive.google.com/drive/u/0/folders/1L5Cz-fDVesfWGRaXGvctRACPVhbDM5PJ',
      },
    ],
  },
];

export const dishes = [
  {
    img: slide1,
    title: 'A New Taste of West Africa',
    desc: 'Bold, fire-grilled dishes infused with rich spices.',
  },
  {
    img: slide2,
    title: 'More Than a Meal, It’s a Vibe',
    desc: 'An immersive dining experience blending storytelling and creativity.',
  },
  {
    img: slide3,
    title: 'Where City Nights Come Alive',
    desc: 'Dine, drink, and dance in the heart of the city.',
  },
  {
    img: slide4,
    title: 'Look the Part. Live the Vibe',
    desc: 'Smart, bold, and unapologetically stylish—your drip matters.',
  },
];

export type Item = {
  img: StaticImageData;
  title: string;
  subtitle?: string;
  desc: string;
  buttons?: Button[];
};

export const items: Item[] = [
  {
    img: deam1,
    title: 'Private Dining',
    subtitle: 'EXPERIENCE GREAT TASTE',
    desc: 'Host your event in style with curated menus, ambient luxury, and tailored service—perfect for birthdays, brand launches, and exclusive celebrations.',
    buttons: [
      {
        label: 'More Details',
        actionType: 'navigate',
        path: '/private',
      },
    ],
  },
  {
    img: deam2,
    title: 'Bottomless Brunch',
    subtitle: 'BRUNCH, BUT MAKE IT DRIP',
    desc: 'Every Sunday from 5PM to 9PM, indulge in bold, flavorful plates crafted to excite your palate, paired with free flowing pours of prosecco or cocktails.',
    buttons: [
      {
        label: 'View Menu',
        actionType: 'navigate',
        path: '/menu',
      },
    ],
  },
  {
    img: deam3,
    title: 'Night Life',
    subtitle: 'AFTER DARK AT DRIP',
    desc: 'As the lights dim, the energy rises. Experience electrifying beats, curated cocktails, and unforgettable vibes in our luxe late-night space.',
    buttons: [
      {
        label: 'Make a Reservation',
        actionType: 'navigate',
        path: '/reservation',
      },
    ],
  },
];

export const dits = [
  {
    img: drip1,
  },
  {
    img: drip2,
  },
  {
    img: drip3,
  },
  {
    img: drip4,
  },
  {
    img: drip5,
  },
  {
    img: drip6,
  },
];

export const proof = [
  {
    img: flit1,
    title: 'Group Dining Redefined',
    description:
      'Drip London’s group dining experience blends fire-grilled West African flavours with a luxe, immersive atmosphere.',
  },
  {
    img: flit2,
    title: 'Celebrate in Style',
    description:
      'Perfect for birthdays, corporate events, or any moment worth celebrating—make every occasion unforgettable.',
  },
];

export type lints = {
  img: StaticImageData;
  title: string;
  desc: string;
  buttons?: Button[];
};

export const lint: lints[] = [
  {
    img: night1,
    title: 'Club Space Hire',
    desc: 'Drip London’s club space is available for private hire – perfect for birthdays, brand launches, after-parties and exclusive celebrations.',
    buttons: [
      {
        label: 'Book an Event',
        actionType: 'navigate',
        path: '/reservation',
      },
    ],
  },
  {
    img: night1,
    title: 'Restaurant Private Hire',
    desc: 'Drip London’s Dinner Club Restaurant is available for private hire – perfect for private dinners and events. Accommodates up to 80 covers split over 16 tables.',
    buttons: [
      {
        label: 'Book an Event',
        actionType: 'navigate',
        path: '/reservation',
      },
    ],
  },
  {
    img: night2,
    title: 'Semi-Private Group Dining',
    desc: 'Ideal for large group dinners while still soaking in the Drip London vibe. Accommodates up to 30 guests.',
    buttons: [
      {
        label: 'Book an Event',
        actionType: 'navigate',
        path: '/reservation',
      },
    ],
  },
];

export const late = [
  {
    img: icon1,
    title: 'Capacity of up to 150 Guests',
  },
  {
    img: icon2,
    title: 'State of the art sound system',
  },
  {
    img: icon3,
    title: 'Private DJ booth',
  },
  {
    img: icon4,
    title: 'Tailored canape options',
  },
  {
    img: icon5,
    title: 'Dedicated staff',
  },
];
