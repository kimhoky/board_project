import React from "react";

import "../css/profile.css";

export default function profile() {
  return (
    <main>
      <section className="mypage_profile">
        <article className="mypage_profile_top">
          {" "}
          {/*사용자의 프로필이미지, 닉네임, bj및 스트리머 */}
          <h2>프로필</h2>
          <img src=".\assets\Afreeca.png" alt="Afreeca icon" />
          <h3>이름</h3>
          <a>아프리카 tv bj</a>
        </article>
        <article className="mypage_profile_bottom">
          <h3>21</h3>
          <a>즐겨찾기 수</a>
          <h3>323</h3>
          <a>게시글</a>
          <h3>323</h3>
          <a>댓글수</a>
        </article>
        <button>새 프로필 사진 업로드</button>
      </section>
    </main>
  );
}
