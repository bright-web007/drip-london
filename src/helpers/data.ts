import card1 from '@/assets/card1.png';
import card2 from '@/assets/card2.png';
import card3 from '@/assets/card3.png';
import card4 from '@/assets/card4.png';
import card5 from '@/assets/card5.png';
import card6 from '@/assets/card6.png';

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
  cocktails: [
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
  mocktails: [
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
};

export const foodMenu = {
  SmallPlates: [
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
  largePlates: [
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
};

export const navLinks = [
  { name: 'Home', link: '/' },
  { name: 'The Menus', link: '/menu' },
  { name: 'About', link: '/about' },
  { name: 'Book an Event', link: '/' },
  { name: 'News', link: '/news' },
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

export const Meta_Tags = {
  siteName: 'Drip London',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  description:
    'At Drip, we serve more than just food—we deliver an immersive dining experience that blends tradition, creativity, and culture. Step into our stylish space and indulge in vibrant, fire-grilled dishes, rich spice blends, and soulful storytelling on every plate.',
};
