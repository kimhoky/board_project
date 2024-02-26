import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CustomCKEditor = ({ initialValue, onChange }) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={initialValue}
      onChange={(event, editor) => {
        const data = editor.getData();
        onChange(data);
      }}
      config={{
        toolbar: [
          "heading",
          "|",
          "bold",
          "italic",
          "underline",
          "|",
          "numberedList",
          "bulletedList",
          "|",
          "alignment",
          "|",
          "blockQuote",
          "|",
          "imageUpload",
          "imageStyle:inline",
          "imageStyle:full",
          "imageStyle:side",
          "|",
          "link",
          "|",
          "mediaEmbed",
          "|",
          "table",
          "|",
          "undo",
          "redo",
        ],
      }}
    />
  );
};

export default CustomCKEditor;
