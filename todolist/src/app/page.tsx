import TodoApp from "./components/TodoApp";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200 p-6">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">To Do List</h1>
      <p className="text-lg text-gray-700">
        Organize your tasks with a modern and stylish to-do list.
      </p>
      <p className="text-lg text-gray-700 mb-8 font-extrabold">
        ADITYA VERMA [RA2211027010019]
      </p>
      <TodoApp />
    </main>
  );
}
