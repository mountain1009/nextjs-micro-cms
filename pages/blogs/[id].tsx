const BlogId = ({blog}: any) => {
    return (
        <article>
            <div
                dangerouslySetInnerHTML={{
                    __html: `${blog.content}`,
                }}
            />
        </article>
    )
}

export default BlogId

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
    const blogs = await fetch(`${process.env.BASE_URL}/blogs`,{
        headers: {
            "X-MICROCMS-API-KEY": process.env.API_KEY as string,
        }
    }).then(response => response.json())

    const paths = blogs.contents.map((content: any) => `/blogs/${content.id}`);

    return { paths, fallback: false };
};


export const getStaticProps = async (context: any) => {
    const id = context.params.id

    const blog = await fetch(`${process.env.BASE_URL}/blogs/${id}`,{
        headers: {
            "X-MICROCMS-API-KEY": process.env.API_KEY as string,
        }
    }).then(response => response.json())

    return {
        props: {
            blog
        },
    };
};

