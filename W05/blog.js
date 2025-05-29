const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
	id: 3,
	title: 'Artemis Fowl Book One',
	date: 'March 18, 2020',
	description:
		'A thrilling introduction to Artemis Fowl, a young criminal mastermind who kidnaps a fairy in hopes of restoring his family fortune. This book blends magic with tech in a fast-paced fantasy adventure.',
	imgSrc:
		'https://m.media-amazon.com/images/I/81MFSpmz2gL._AC_UF1000,1000_QL80_.jpg',
	imgAlt: 'Book cover for Artemis Fowl 1',
	ages: '11-15',
	genre: 'Fantasy',
	stars: '⭐⭐⭐⭐⭐'
},
{
	id: 4,
	title: 'Fablehaven Book One',
	date: 'June 2, 2019',
	description:
		'When Kendra and Seth visit their grandfather’s mysterious estate, they discover a sanctuary for magical creatures — and danger beyond their imagination. A great start to a gripping fantasy series.',
	imgSrc:
		'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1460309528i/44652.jpg',
	imgAlt: 'Book cover for Fablehaven 1',
	ages: '10-14',
	genre: 'Fantasy',
	stars: '⭐⭐⭐⭐'
},
{
id: 5,
title: "Belgariad Book One: Pawn of Prophecy",
date: "Feb 12, 2022",
description:
"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
imgSrc:
"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
imgAlt: "Book cover for Pawn of Prophecy",
ages: "12-16",
genre: "Fantasy",
stars: "⭐⭐⭐⭐⭐"
}

]


const article_container = document.querySelector('#article-deets')

articles.forEach(addArticle);

function addArticle(article){
	const htmlToInsert = `<div class="article">
          <ul id="review">
            <li><h3>${article.date}</h3></li>
            <li><p>${article.ages}</p></li>
            <li><p>${article.genre}</p></li>
            <li><p>${article.stars}</p></li>
          </ul>
          <div id="article_details">
            <h2>${article.title}</h2>
            <div id="img-container">
              <img src="${article.imgSrc}" alt="${article.imgAlt}" />
            </div>
            <p>
              ${article.description}
            </p>
          </div>
        </div>`;

	article_container.innerHTML += htmlToInsert;
};