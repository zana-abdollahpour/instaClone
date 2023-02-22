import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "atom/modalAtom";

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      <h1>UploadModal</h1>
      {open && <h1>modal is open</h1>}
    </div>
  );
}
