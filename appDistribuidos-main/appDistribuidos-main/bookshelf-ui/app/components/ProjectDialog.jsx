import React, { useState } from "react";

export default function ProjectDialog({ open, onClose, onSave }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = () => {
    if (!title || !image) return alert("Complete todos los campos");
    onSave({ title, image });
    setTitle("");
    setImage("");
    onClose();
  };

  if (!open) return null;

  return (
    <div style={{ position: "fixed", background: "rgba(0,0,0,0.5)", top:0,left:0,right:0,bottom:0 }}>
      <div style={{ background: "white", padding: 20, maxWidth: 400, margin: "100px auto" }}>
        <h3>Nuevo proyecto</h3>
        <input placeholder="Título" value={title} onChange={e => setTitle(e.target.value)} />
        <input placeholder="URL imagen" value={image} onChange={e => setImage(e.target.value)} />
        <button onClick={handleSubmit}>Guardar</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
}
