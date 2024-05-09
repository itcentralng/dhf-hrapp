import React, { useEffect, useState } from "react";
import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../styles/documentStyles.css";
import DocDetailsAndButton from "./DocDetailsAndButton";
import { useShareForm } from "../../components/context/ShareFormContext";
import ShareWithForm from "../../components/ShareWithForm";
import { Overlay } from "../../styled-components/styledBox";
const EditorContainer = styled("div")({
  padding: "16px",
  display: "flex",
  justifyContent: "center",
});

const EditorPaper = styled(Paper)({
  padding: "16px",
  backgroundColor: "white", // A4 paper color
  width: "690px", // Adjust height as needed
  borderRadius: "8px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  height: "1035px",
});

const modules = {
  toolbar: [
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }], // Text and Background Color
    ["link", "image"],
    [{ align: [] }], // Text Alignment
    [{ undo: "undo" }, { redo: "redo" }], // Undo and Redo

    [{ quote: "blockquote" }], // Quote
  ],
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "color",
  "background",
  "link",
  "image",
  "align",
  "quote",
  "undo",
  "redo",
  "eraser",
];

const Editor = () => {
  const [editorHtml, setEditorHtml] = useState("");
  const { displayShareForm } = useShareForm();
  const [documentTitle, setDocumentTitle] = useState("Untitled Document");

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  const customEditorStyles = {
    border: "none",
    marginTop: "0px",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <>
      <DocDetailsAndButton
        documentTitle={documentTitle}
        setDocumentTitle={setDocumentTitle}
      />
      <EditorContainer>
        <EditorPaper elevation={2} sx={{ padding: "90px" }}>
          <ReactQuill
            theme="snow"
            value={editorHtml}
            onChange={handleChange}
            modules={modules}
            formats={formats}
            placeholder="Write something..."
            style={customEditorStyles}
          />
        </EditorPaper>
      </EditorContainer>
      {displayShareForm && (
        <Overlay>
          <ShareWithForm documentType={documentTitle} />
        </Overlay>
      )}
    </>
  );
};

export default Editor;
