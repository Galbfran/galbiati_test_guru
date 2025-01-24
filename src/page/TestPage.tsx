export default function TestPage() {
  return (
    <main className="main">
      <section className="container">
        <i className="icon">
          <img src="./src/assets/message_icon.svg" alt="icon" width="58" height="58" />
        </i>
        <h1 className="title">SUBSCRIBE</h1>
        <input className="input" type="email" name="email" id="email" placeholder="Enter your email" />
        <button className="button">SUBSCRIBE</button>
      </section>
      <span className="span">© 2025 Subscribe Form. All Rigths Reserved. Design by EquipoDotGuru.</span>
    </main>
  );
};
