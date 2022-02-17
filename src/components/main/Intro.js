import { useSelector } from 'react-redux';

//비구조 할당으로 props객체로 전달되는 키값을 바로 매개변수명으로 활용해서 데이터 전달
export default function Intro({scrolled, posStart}){
  const members = useSelector(state=> state.departmentReducer.members);  
  const path = process.env.PUBLIC_URL;  
  const base = 0; //시작위치에 적용될 보정값
  const start = posStart+base; //해당 박스의 보정된 시작위치
  const position = scrolled - start; //실제 스크롤되고 있는 거리값

  return (
    <section id='intro' className='myScroll'>
      <div className="inner">
        <h1 style={
          //현재스크롤되는 구간이 해당 박스영역에 도달하면
          scrolled>=start
          ?
          //스크롤 거리값을 스타일값으로 연동
          {transform: `translateX(${position/7}px)`}
          :
          null
        }>Introduction</h1>

        <ul>
          {members.map((member,idx)=>{
            return (
              <li key={idx}>
                <div className='pic'>
                  <img src={`${path}/img/${member.pic}`} />
                </div>
                <h2>{member.name}</h2>
                <p>{member.position}</p>
              </li>
            )
          })}
        </ul>

        <article>
          {/* 영역 가로 위치값, 세로위치값, 넓이 비율, 세로비율 */}
          <svg viewBox="0 -4 448 520">
            <path d="M156.8 411.8l31.22-31.22l-60.04-53.09l-52.29 52.28C61.63 393.8 60.07 416.1 72 432l48 64C127.9 506.5 139.9 512 152 512c8.345 0 16.78-2.609 23.97-8c17.69-13.25 21.25-38.33 8-56L156.8 411.8zM224 159.1c44.25 0 79.99-35.75 79.99-79.1S268.3 0 224 0S144 35.75 144 79.1S179.8 159.1 224 159.1zM408.7 145c-12.75-18.12-37.63-22.38-55.76-9.75l-40.63 28.5c-52.63 37-124.1 37-176.8 0l-40.63-28.5C76.84 122.6 51.97 127 39.22 145C26.59 163.1 30.97 188 48.97 200.8l40.63 28.5C101.7 237.7 114.7 244.3 128 250.2L128 288h192l.0002-37.71c13.25-5.867 26.22-12.48 38.34-21.04l40.63-28.5C417.1 188 421.4 163.1 408.7 145zM320 327.4l-60.04 53.09l31.22 31.22L264 448c-13.25 17.67-9.689 42.75 8 56C279.2 509.4 287.6 512 295.1 512c12.16 0 24.19-5.516 32.03-16l48-64c11.94-15.92 10.38-38.2-3.719-52.28L320 327.4z"/>
          </svg>
        </article>
      </div>
    </section>
  )
}