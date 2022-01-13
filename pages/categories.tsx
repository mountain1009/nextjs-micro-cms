import type { NextPage } from 'next'

const Categories: NextPage = ({category}: any) => {
  return (
      <div>
        {category.contents.map((category: any) => (
            <article key={category.id}>
              <p>{category.tag}</p>
            </article>
        ))}
      </div>
  )
}

export default Categories


export const getStaticProps = async () => {
  const category = await fetch(`${process.env.BASE_URL}/categories`,{
    headers: {
      "X-MICROCMS-API-KEY": process.env.API_KEY as string,
    }
  }).then(response => response.json())

  return {
    props: {
      category
    },
  };
};
