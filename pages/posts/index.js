
import Link from "next/link";

export async function getStaticProps(){
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const data = await res.json();
  return{
    props: {
      posts: data
    }
  }
}


export default function posts(props) {
  return (
    <div style={{padding:'50px'}}>
        posts Component 1
        {props.posts.map(post => (
          <div key={post.id} style={{cursor: 'pointer', color: 'blue'}}>

          <Link href={`/posts/${post.id}`}><p>{post.id} :  Title:- {post.title} </p></Link>  
            
          </div>
        ))}
      </div>
    )
  }
  
  
  


