import { Button } from "../components/Button";

export default function NotFound() {
  return (
    <section className="page-section">
      <div className="container narrow empty-state">
        <h1>Page not found</h1>
        <p>The page may have moved. Return to the project directory or ask Luisa for help.</p>
        <Button to="/projects">Browse Projects</Button>
      </div>
    </section>
  );
}
