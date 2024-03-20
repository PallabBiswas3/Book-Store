// Function to fetch best-selling books from JSON file and populate the page
function fetchBestSellingBooks() {
    fetch('books.json')
        .then(response => response.json())
        .then(data => {
            // Populate Best Selling section
            const bestSellingSection = document.getElementById('best-selling');
            const booksContainer = bestSellingSection.querySelector('.books');

            // Iterate through each best-selling book
            data.bestSelling.forEach(book => {
                // Create book card for each book
                const card = createBookCard(book);
                // Append book card to the books container
                booksContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching best-selling books:', error));
}

// Function to create a book card element
function createBookCard(book) {
    const card = document.createElement('div');
    card.classList.add('book-card');

    const image = document.createElement('img');
    image.src = book.image;
    image.alt = "Book Cover";
    card.appendChild(image);

    const title = document.createElement('h3');
    title.textContent = book.title;
    card.appendChild(title);

    const author = document.createElement('p');
    author.textContent = `Author: ${book.author}`;
    card.appendChild(author);

    const description = document.createElement('p');
    description.textContent = book.description;
    card.appendChild(description);

    const price = document.createElement('p');
    price.textContent = `Price: ${book.price}`;
    card.appendChild(price);

    const offer = document.createElement('p');
    offer.textContent = `Offer: ${book.offer}`;
    card.appendChild(offer);

    const addToCartBtn = document.createElement('button');
    addToCartBtn.textContent = 'Add to Cart';
    card.appendChild(addToCartBtn);

    const buyNowBtn = document.createElement('button');
    buyNowBtn.textContent = 'Buy Now';
    card.appendChild(buyNowBtn);

    return card;
}

// Fetch best-selling books when the page loads
window.addEventListener('load', fetchBestSellingBooks);

// Function to fetch books from JSON file and populate the "Our Collection" section
function fetchOurCollectionBooks() {
    fetch('books.json')
        .then(response => response.json())
        .then(data => {
            const ourCollectionSection = document.getElementById('our-collection');
            const booksContainer = ourCollectionSection.querySelector('.books');

            // Iterate through each book in the 'ourCollection' array
            data.ourCollection.forEach(book => {
                // Create a book card for each book
                const card = createBookCard(book);
                // Append the book card to the books container
                booksContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching our collection books:', error));
}

// Call the fetchOurCollectionBooks function when the page loads
window.addEventListener('load', fetchOurCollectionBooks);
// Function to fetch customer reviews from JSON file and populate the page
function fetchReviews() {
    fetch('reviews.json')
        .then(response => response.json())
        .then(data => {
            const reviewsSection = document.getElementById('reviews');
            const reviewsContainer = reviewsSection.querySelector('.reviews');

            // Iterate through each review in the data
            data.reviews.forEach(review => {
                // Create a review card
                const card = createReviewCard(review);
                // Append the review card to the reviews container
                reviewsContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching reviews:', error));
}

// Function to create a review card element
function createReviewCard(review) {
    const card = document.createElement('div');
    card.classList.add('review');

    const img = document.createElement('img');
    img.src = review.avatar;
    img.alt = "Customer Avatar";
    card.appendChild(img);

    const reviewContent = document.createElement('div');
    reviewContent.classList.add('review-content');

    const name = document.createElement('h3');
    name.textContent = review.name;
    reviewContent.appendChild(name);

    const description = document.createElement('p');
    description.textContent = review.description;
    reviewContent.appendChild(description);

    card.appendChild(reviewContent);

    return card;
}

// Fetch reviews when the page loads
window.addEventListener('load', fetchReviews);

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


