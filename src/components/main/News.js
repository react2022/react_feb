import { useState, useEffect } from 'react';

export default function News({scrolled, posStart}){
  const defaultData = [
    {title: 'Hello1', content: 'Here comes description in detail.'},
    {title: 'Hello2', content: 'Here comes description in detail.'},
    {title: 'Hello3', content: 'Here comes description in detail.'},
    {title: 'Hello4', content: 'Here comes description in detail.'},
    {title: 'Hello5', content: 'Here comes description in detail.'},
    {title: 'Hello6', content: 'Here comes description in detail.'}
  ]
  const getLocalItems = () => {
    let data = localStorage.getItem('posts');

    if(data){
      return JSON.parse(data);
    }else{
      return defaultData;
    }
  }
  const [posts] = useState(getLocalItems);

  const base = 0;
  const start = posStart+base;
  const position = scrolled-start;
  let style={};

  
  useEffect(()=>{
    localStorage.setItem('posts', JSON.stringify(posts));
  },[]);

  return (
    <section id='news' className='myScroll'>
      <div className="inner">
        <h1>Recent Post</h1>
        
        <ul>
          {posts.map((post, idx)=>{
            if(idx%2===0){//짝수번째 요소일때
              style={transform: `translateX(${position*(idx/2+1)}px)`}
            }
            else{ //홀수번째 요소일떄
              style={transform: `translateX(${-position*(idx/2+1)}px)`}
            }
            if(idx < 4) {
              return (              
                <li key={idx} style={scrolled<=start ? style : null}> 
                  <h2>{post.title}</h2>
                  <p>{post.content}</p>
                </li>
              )
            }
          })}
        </ul>
      </div>
    </section>
  )
}