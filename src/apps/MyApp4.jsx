import React from "react";

function MyApp4(props) {
  // jsx 작성시 주의 할 점
  // root component 있어야함
  // 종료 태그가 꼭 있어야함
  // javascript keyword 사용 불가
  // html attribute 를 대체 사용
  // : class -> className, for -> htmlFor
  // style은 객체로 주어야함
  // 주석 {/* 주석내용 */}

  return (
    <div>
      {/* 주석내용작성 */}
      {/* 단축키 : ctrl + / */}
      <div style={{ color: "yellow", backgroundColor: "blue" }}>
        hello 4번째
      </div>
      <div>또다른 컴포넌트</div>
      <div className="note">hi</div>
      <div className="note">hello</div>
      <div>
        <label htmlFor="input2">주소</label>
        <input type="text" id="input2" />
      </div>
      <div>
        <label htmlFor="input1">이름</label>
        <input type="text" id="input1" />
      </div>
      <br />
    </div>
  );
}

export default MyApp4;
