import { useState } from "react";

function App() {
  //DATI
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });

  function handleFormData(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormData((formData) => ({
      ...formData,
      [e.target.name]: value,
    }));
  }

  return (
    <>
      <form action="">
        <label htmlFor="author">Autore:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleFormData}
          placeholder="Inserisci il nome dell'autore"
        />
        <hr />
        <label htmlFor="title">Titolo:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleFormData}
          placeholder="Inserisci il titolo"
        />
        <hr />
        <label htmlFor="body">Testo:</label>
        <input
          type="text"
          id="body"
          name="body"
          value={formData.body}
          onChange={handleFormData}
          placeholder=" Contenuto"
        />
        <hr />
        <label htmlFor="public"> Post pubblico</label>
        <input
          type="checkbox"
          id="public"
          name="public"
          value={formData.public}
          onChange={handleFormData}
        />
        <hr />
        <button>Carica</button>
      </form>
    </>
  );
}

export default App;
