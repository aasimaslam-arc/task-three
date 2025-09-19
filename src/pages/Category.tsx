  import { useParams, Link } from "react-router-dom";

export default function Category() {
  const { id } = useParams<{ id: string }>();

  const flashcards: Record<string, { question: string; answer: string }[]> = {
    Verbs: [
      { question: "Run", answer: "To move quickly with your legs" },
      { question: "Eat", answer: "To consume food" },
    ],
    Nouns: [
      { question: "Apple", answer: "A type of fruit" },
      { question: "Car", answer: "A vehicle" },
    ],
    Adjectives: [
      { question: "Happy", answer: "Feeling joy" },
      { question: "Fast", answer: "Moving quickly" },
    ],
  };

  const cards = flashcards[id || ""] || [];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-indigo-50 to-white p-8">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6">{id} Flashcards</h2>

      {cards.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:shadow-xl transition"
            >
              <p className="font-semibold text-lg mb-2">{card.question}</p>
              <p className="text-gray-600">{card.answer}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No flashcards found for this category.</p>
      )}

      <Link
        to="/dashboard"
        className="mt-8 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}
