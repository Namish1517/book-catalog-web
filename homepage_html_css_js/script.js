const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help",
    description: "A guide to building good habits.",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    description: "A novel about following your dreams.",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Productivity",
    description: "Rules for focused success in a distracted world.",
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    genre: "Finance",
    description: "What the rich teach their kids about money.",
  }
];

function renderBooks() {
  const container = document.getElementById("books-container");
  container.innerHTML = "";

  books.forEach((book, idx) => {
    const card = document.createElement("div");
    card.className = "book-card";

    card.innerHTML = `
      <div class="inner-card">
        <div class="book-front">
          <div>${book.title}</div>
        </div>
        <div class="book-back">
          <p><strong>Author:</strong> ${book.author}</p>
          <p><strong>Genre:</strong> ${book.genre}</p>
          <p>${book.description}</p>
          <div class="actions">
            <button class="update" onclick="editBook(${idx})">Update</button>
            <button class="delete" onclick="deleteBook(${idx})">Delete</button>
          </div>
        </div>
      </div>
    `;

    card.addEventListener("click", (e) => {
      // Prevent flip if button is clicked
      if (e.target.tagName.toLowerCase() !== "button") {
        card.classList.toggle("flipped");
      }
    });

    container.appendChild(card);
  });
}

function editBook(i) {
  alert(`Edit: ${books[i].title}`);
}

function deleteBook(i) {
  books.splice(i, 1);
  renderBooks();
}

// User popup toggle
document.getElementById("user-icon").addEventListener("click", () => {
  document.getElementById("user-popup").classList.toggle("hidden");
});

renderBooks();
