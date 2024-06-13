import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

interface SignaturePadProps {
  title: string;
  btnLeftTxt: string;
  btnRightTxt: string;
  setSignature: (value: string) => void;
  validated: boolean;
}

const SignaturePad: React.FC<SignaturePadProps> = ({
  title,
  btnLeftTxt,
  btnRightTxt,
  validated,
  setSignature,
}) => {
  const sigCanvas = useRef({});

  const clear = () => {
    sigCanvas.current.clear();
    setSignature("");
  };

  const save = () => {
    const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    setSignature(dataURL);
  };

  const canvasBorderStyle = !validated
    ? {
        border: "2px solid #f99f97",
        borderRadius: "1rem",
      }
    : {
        border: "2px solid #cbd5e0",
        borderRadius: "1rem",
      };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginTop: "1rem",
      }}
    >
      <label
        style={{ textAlign: "left", fontSize: "0.875rem", fontWeight: "bold" }}
      >
        {title}
      </label>
      <SignatureCanvas
        ref={sigCanvas}
        penColor="black"
        canvasProps={{
          style: {
            width: "100%",
            height: "200px",
            ...canvasBorderStyle,
          },
        }}
      />
      <div style={{ marginTop: "0.5rem", display: "flex", gap: "0.5rem" }}>
        <button
          onClick={clear}
          style={{
            backgroundColor: "#f56565",
            color: "white",
            padding: "0.5rem",
            borderRadius: "0.375rem",
          }}
        >
          {btnLeftTxt}
        </button>
        <button
          onClick={save}
          style={{
            backgroundColor: "#48bb78",
            color: "white",
            padding: "0.5rem",
            borderRadius: "0.375rem",
          }}
        >
          {btnRightTxt}
        </button>
      </div>
    </div>
  );
};

export default SignaturePad;
