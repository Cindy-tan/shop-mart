function App() {
  return (
    <div className="app">
      <section id="content">
        <header>
          <div>
            <h1>Shop Mart</h1>
            <div>
              <button>
                <span className="icon-btn">&#129293;</span>
                <span className="badge">3</span>
              </button>              
              <button><span className="icon-btn">&#128722;</span></button>
            </div>
          </div>
          <div></div>
        </header>
        
        <main>

        </main>
      </section>
      <footer>
        <div>
          <h3>Our Store</h3>
          <ul>
            <li><a href="">About us</a></li>
            <li><a href="">Contact us</a></li>
            <li><a href="">Sell with us</a></li>
          </ul>
        </div>

        <div>
          <h3>Our Policies</h3>
          <ul>
            <li><a href="">Return Policies</a></li>
            <li><a href="">Shipping Policies</a></li>
            <li><a href="">Terms of service</a></li>
          </ul>
        </div>

        <div>
          <h3>Our Products</h3>
          <ul>
            <li><a href="">Home page</a></li>
            <li><a href="">Search</a></li>
            <li><a href="">Catalog</a></li>
          </ul>
        </div>
      </footer>
    </div>

  );
}

export default App;
