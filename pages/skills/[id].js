



export async function getStaticPaths(){
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const data = await res.json();

  const paths = data.map(d => {
    return{
      params: {id: `${d.id}`}
    }
  })

  return{
    paths: paths,
    fallback: false
  }
}


export async function getStaticProps(context){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
  const data = await res.json();
  return{
    props: {
      post: data
    }
  }
}


export default function Details(props) {
  return(
    <div style={{padding:'50px'}}>
      <p style={{textAlign:'center', background:'yellow'}}>
        Dynamic page BY <span style={{background:'blue', color:'#fff'}}>getStaticPaths and getStaticProps</span> link
      </p>
      <p>Post Number :- {props.post.id}</p>
      <p>Post Title :- {props.post.title}</p>
      <p>Post Body :- {props.post.body}</p>
    </div>
  )
}