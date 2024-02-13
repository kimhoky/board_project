import React, { useState } from "react";
import Img_Upload from "../Img_Upload";
import "../../css/manager.css";

export default function Manager_Main() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const handleImageUpload = (imageData) => {
    setUploadedImage(imageData);
  };

  return (
    <main className="manager_main">
      <nav className="manager_name">
        게시판 설정
        <hr />
      </nav>

      <section className="manager_link">
        <input type="text" name="" placeholder="인기글 컷 설정" />
        <input type="text" name="twichh" placeholder="트위치 링크" />
        <input type="text" name="afreeca" placeholder="아프리카 링크" />
        <input type="text" name="chzzk_link" placeholder="치지직 링크" />
        <input type="text" name="youtube_link" placeholder="유튜브 링크" />
      </section>
      <section className="link_img">
        <img src=".\assets\Afreeca.png" alt="Afreeca icon" />
        <img src=".\assets\Chzzk.png" alt="Chzzk icon" />
        <img src=".\assets\Twitch.png" alt="Twitch icon" />
        <img src=".\assets\Youtube.png" alt="Youtube icon" />
      </section>
      <section className="manager_img">
        <a>배너 이미지</a>
        <hr />

        {uploadedImage ? (
          <img
            src={uploadedImage}
            alt="Uploaded"
            style={{
              maxWidth: "900px",
              maxHeight: "150px",
              width: "100%",
              height: "100%",
              borderRadius: "20px",
            }}
          />
        ) : (
          <>
            <article className="manger_banner"> 배너이미지</article>
          </>
        )}
      </section>
      <article className="manager_button">
        <button>저장하기</button>
        <Img_Upload onImageUpload={handleImageUpload} />
      </article>
    </main>
  );
}
