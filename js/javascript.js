document.addEventListener('DOMContentLoaded', function() {
    // Array of image objects with details
    const images = [
        { 
            small: 'images/sunflowers-small.jpg',
            large: 'images/sunflowers-large.jpg',
            title: 'Sunflowers in the hamlet Dernekamp'
        },
        {
            small: 'images/poppies-small.jpg',
            large: 'images/poppies-large.jpg',
            title: 'Poppies in cornfield'
        },
        {
            small: 'images/daffodils-small.jpg',
            large: 'images/daffodils-large.jpg',
            title: 'Daffodils in Sentmaring park'
        },
        {
            small: 'images/park-small.jpg',
            large: 'images/park-large.jpg',
            title: 'Sentmaring Park'
        },
        {
            small: 'images/market-small.jpg',
            large: 'images/market-large.jpg',
            title: 'Market in Münster'
        }
    ];

    const thumbnailList = document.getElementById('thumbnail-list');
    const featuredImage = document.getElementById('featured-image');
    const imageTitle = document.getElementById('image-title');

    // Function to create thumbnails dynamically
    function createThumbnails() {
        images.forEach(image => {
            const li = document.createElement('li');
            const img = document.createElement('img');
            img.src = image.small;
            img.alt = image.title;
            img.width = 240;
            img.height = 160;
            img.addEventListener('click', function() {
                featuredImage.src = image.large;
                featuredImage.alt = image.title;
                imageTitle.textContent = image.title;
            });
            li.appendChild(img);
            thumbnailList.appendChild(li);
        });
    }

    // Call function to create thumbnails
    createThumbnails();
});