

export async function getServerSideProps(context){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
  const data = await res.json();
  return{
    props: {
      post: data
    }
  }
}


export default function Dynamic(props) {
  return(
    <div  style={{padding:'50px'}}>
      <p style={{textAlign:'center', background:'yellow'}}>
        Dynamic page BY <span style={{background:'blue', color:'#fff'}}> getServerSideProps </span> link
      </p>

      <p>Post Number :- {props.post.id}</p>
      <p>Post Title :- {props.post.title}</p>
      <p>Post Body :- {props.post.body}</p>
    </div>
  )
}

