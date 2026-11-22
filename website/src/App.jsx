
import './App.css'

function App() {
  return (
    <main className="container">
      <h1>My First Docker Website</h1>

      <p>
        This website was developed using React
        and Vite.
      </p>

      <section className="card">
        <h2>Docker Demonstration</h2>
        <p>
          This application runs inside a Docker
          container on Linux.
        </p>
        <span className="status">
          Application is running!
        </span>
      </section>
    </main>
  )
}

export default App