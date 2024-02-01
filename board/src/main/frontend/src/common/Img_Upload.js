// Img_Upload.js
import React, { useState } from "react";
import "../css/imgupload.css";

export default function Img_Upload({ onImageUpload }) {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = ({ target }) => {
      setUploadedImage(target.result);
      onImageUpload(target.result); // 이미지 업로드 시 부모 컴포넌트로 전달
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      {/* 파일 업로드 필드 */}
      <label htmlFor="file" className="btn-upload">
        <span>파일 업로드하기</span>
      </label>
      <input
        type="file"
        name="file"
        id="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
    </>
  );
}
