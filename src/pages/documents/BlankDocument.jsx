import { useState } from "react";
import { Paper } from "@mui/material";
import { styled } from "@mui/system";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Overlay } from "../../styled-components/styledBox";
import ShareWithForm from "../../components/ShareWithForm";
import DocDetailsAndButton from "./DocDetailsAndButton";
import { useShareForm } from "../../components/context/ShareFormContext";

const EditorContainer = styled("div")({
  padding: "16px",
  display: "flex",
  justifyContent: "center",
});

const EditorPaper = styled(Paper)({
  padding: "16px",
  backgroundColor: "white",
  width: "690px",
  borderRadius: "8px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  height: "1035px",
});

const modules = {
  toolbar: [
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }],
    ["link", "image"],
    [{ align: [] }],
    [{ undo: "undo" }, { redo: "redo" }],
    [{ quote: "blockquote" }],
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
  const [documentFile, setDocumentFile] = useState(null);
  const [documentTitle, setDocumentTitle] = useState("Untitled Document");
  const { displayShareForm } = useShareForm(); // Assuming useShareForm hook is imported

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setDocumentFile(file);
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
          />
          <input type="file" onChange={handleFileChange} />
        </EditorPaper>
      </EditorContainer>
      {displayShareForm && (
        <Overlay>
          <ShareWithForm
            documentType={documentTitle}
            formData={editorHtml.replace(/(<([^>]+)>)/gi, "")}
            documentFile={documentFile}
          />
        </Overlay>
      )}
    </>
  );
};

export default Editor;
