import React from 'react'
import Block19 from '@/blocks/Block19/Block19'
import Block20 from '@/blocks/Block20/Block20'
import Block14 from '@/blocks/Block14/Block14';
import card1 from '@/assets/card1.png'
import card2 from '@/assets/card2.png'
import card3 from '@/assets/card3.png'
import card4 from '@/assets/card4.png'
import card5 from '@/assets/card5.png'
import card6 from '@/assets/card6.png'


const news = () => {
  return (
    <div>
        <Block19 />

        <div> 
          <div className="grid grid-cols-1 gap-x-[25.2055px] gap-y-[20px] pt-[36px] pb-[60px] pr-[24px] pl-[24px]">
               <Block20
                   image={card1}
                   date="April 25, 2025"
                   subtitle="Inside the Drip: Our Signature Cocktail Menu Just Got a Glow Up"
                   description="Our bartenders have been busy shaking things up — literally. Discover the fresh new flavors and bold updates we've made to your favourite sips."
               />

               <Block20
                  image={card2}
                  date="March 25, 2025"
                  subtitle="Friday Nights at Drip: What to Expect After Dark"
                  description="Dinner may end, but the vibe doesn't. Dive into the experience that turns Drip London from chic restaurant to high-energy lounge every Friday night."
               />

               <Block20
                  image={card3}
                  date="February 25, 2025"
                  subtitle="Behind the Scenes: A Day in the Life of the Drip Kitchen Crew"
                  description="From prepping signature mains to plating your favourite starters, take a peek at how the Drip team keeps things flavorful and fast-paced in the kitchen."
               />

               <Block20
                  image={card4}
                  date="February 25, 2025"
                  subtitle="Event Recap: Women's Day Brunch Celebration"
                  description="Thank you to everyone who joined us for a day of joy, empowerment, and incredible food. Here's a recap of the best moments — and what's coming next."
               />

               <Block20
                  image={card5}
                  date="February 25, 2025"
                  subtitle="Booking Private Dining at Drip: What You Need to Know"
                  description="Thinking about hosting a birthday or business dinner? We break down everything you need to know about our stunning private dining experiences."
               />

               <Block20
                  image={card6}
                  date="February 25, 2025"
                  subtitle="Celebrate in Style: Your Guide to Private Dining at Drip"
                  description="Whether it's an anniversary, product launch, or VIP dinner, our private dining experience is designed to impress. Learn what's included, how to book, and how we bring your event vision to life."
               />
               <Block14 />
         </div>
         </div>
         
    </div>
  )
}

export default news