import Header from '../common/Header';
import Visual from './Visual';
import Intro from './Intro';
import News from './News';
import Info from './Info';
import Pics from './Pics';
import Btns from './Btns';
import Anime from '../../class/anime.js';
import { useEffect, useRef, useState } from 'react';

export default function Main(){ 
  const main = useRef(null);  
  const pos = useRef([]);
  const [index, setIndex] = useState(0);
  //현재 스크롤되는 값을 관리할 state생성
  const [scrolled, setScrolled] = useState(0);
  const getIndex = index => {
    setIndex(index);
  }

  const getPos = () => {
    const secs = main.current.querySelectorAll('.myScroll');
    let arr = [];
    for(let sec of secs) arr.push(sec.offsetTop);
    pos.current = arr; 
  }

  const activation = () => {
    //브라우저가 스크롤될때마다 scrolled 값 변경
    setScrolled(window.scrollY);
    const base = 0;
    let scroll = window.scrollY;  
    const btns = main.current.querySelectorAll('#btns li');

    pos.current.map((pos, idx)=>{
      if(scroll >= pos+base ){
        for(const btn of btns) btn.classList.remove('on');
        btns[idx].classList.add('on');
      }
    })
  }

  useEffect(()=>{   
    getPos();   
    window.addEventListener('resize', getPos);  
    window.addEventListener('scroll', activation);

    return ()=> {
      window.removeEventListener('resize', getPos);
      window.removeEventListener('scroll', activation);
    } 
  },[]);


  useEffect(()=>{ 
    new Anime(window, {
      prop: 'scroll',
      value: pos.current[index],
      duration: 500
    })
  },[index])

  return (
    //scrolled값을 원하는 컴포넌트의 스타일 객체에 연동
    <div id='mainWrap' ref={main}>
      <Header type={'main'} />
      <Visual />
      {/* scrolled값 Intro컴포넌트에 전달 */}
      <Intro 
        scrolled={scrolled} 
        posStart={pos.current[1]}
      />
      <News />
      <Info />    
      <Pics />
      <Btns getIndex={getIndex} />
    </div>
  )
}