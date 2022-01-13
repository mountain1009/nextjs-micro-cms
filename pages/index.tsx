import type { NextPage } from 'next'
import Link from "next/link";

const Home: NextPage = ({blogs}: any) => {
    return (
        <div>
            {blogs.map((blog: any) => (
                <article key={blog.id}>
                    <img src={blog.image.url} alt=""/>
                    <h2>{blog.title}</h2>
                    <ul>
                        {
                          blog.categories.map((category: any) => (
                              <li key={category.id}>
                                {category.tag}
                              </li>
                          ))
                        }
                  </ul>
                  <Link href={`/blogs/${blog.id}`}>この記事を読む</Link>
                </article>
            ))}
        </div>
  )
}

export default Home


export const getStaticProps = async () => {
  const blogs = await fetch(`${process.env.BASE_URL}/blogs`,{
    headers: {
      "X-MICROCMS-API-KEY": process.env.API_KEY as string,
    }
  }).then(response => response.json())

  return {
    props: {
        blogs: blogs.contents
    },
  };
};
