"use client";

interface Props {
  title: string;
  description: string;
  placeholder: string;
  button: string;
}

export default function NewsletterSection({ title, description, placeholder, button }: Props) {
  return (
    <section className="bg-navy py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
          <p className="text-blue-200">{description}</p>
        </div>
        <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder={placeholder}
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sage"
          />
          <button
            type="submit"
            className="bg-sage hover:bg-sage-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            {button}
          </button>
        </form>
      </div>
    </section>
  );
}
