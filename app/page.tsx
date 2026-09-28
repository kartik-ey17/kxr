import ExperimentGallery from "./components/ExperimentGallery";

export default function Home() {
  return (
    <main className="min-h-screen px-8 py-12">
      <section className="mx-auto max-w-5xl text-center">
        <h1 className="text-5xl font-semibold">
          kXr.world
        </h1>

        <p className="mt-4 text-xl">
          things worth messing with
        </p>
      </section>

      <ExperimentGallery />
    </main>
  );
}