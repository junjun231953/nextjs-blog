import {useState} from 'react'
import Link from 'next/link'

function BlogHomePage() {
  const [likes, setLikes] = useState(0);
  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <div>
      <button onClick={handleClick}>Likes ({likes}) </button>
      {' '}
      <p><Link href="clients/1">go to client/1</Link></p>
    </div>
    
  );
}

export default BlogHomePage;
