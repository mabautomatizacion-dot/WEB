// App root — stitches everything together

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Roblan />
        <Clients />
        <About />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
