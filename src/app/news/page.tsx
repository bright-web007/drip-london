import React from 'react';
import Block19 from '@/blocks/Block19/Block19';
import Block20 from '@/blocks/Block20/Block20';
import Block14 from '@/blocks/Block14/Block14';
import { latestNews } from '@/helpers/data';

const news = () => {
  return (
    <div>
      <Block19 />
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-start place-items-center gap-x-[25.2055px] gap-y-[25px] mx-auto w-[90%] xl:w-[75%] 2xl:w-[70%] py-16 xl:py-20">
          {latestNews.map((item, index) => (
            <Block20
              key={index}
              image={item.image}
              date={item.date}
              subtitle={item.subtitle}
              description={item.description}
            />
          ))}
        </div>
        <Block14 />
      </div>
    </div>
  );
};

export default news;
