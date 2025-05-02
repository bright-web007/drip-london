import Head from 'next/head';
import Block11 from '@/blocks/Block11/Block11';
import Block12 from '@/blocks/Block12/Block12';
import Block13 from '@/blocks/Block13/Block13';
import Block14 from '@/blocks/Block14/Block14';
import { menuSchema } from '@/helpers/data';

const Menu = () => {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
        />
      </Head>
      <>
        <Block11 />
        <Block12 />
        <Block13 />
        <Block14 />
      </>
    </>
  );
};

export default Menu;
