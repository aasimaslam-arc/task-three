export interface FlashcardType {
  id: number;
  question: string;
  answer: string;
}

export const flashcards: Record<string, FlashcardType[]> = {
  "1": [
    { id: 1, question: "Run", answer: "To move swiftly on foot" },
    { id: 2, question: "Eat", answer: "Consume food" },
  ],
  "2": [
    { id: 1, question: "Dog", answer: "A domestic animal" },
    { id: 2, question: "Book", answer: "A set of written pages" },
  ],
  "3": [
    { id: 1, question: "Happy", answer: "Feeling pleasure" },
    { id: 2, question: "Big", answer: "Large in size" },
  ],
};
