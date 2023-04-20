export const tabs = [
	{
		id: 0,
		title: "Movies",
	},
	{
		id: 1,
		title: "TV",
	},
	{
		id: 2,
		title: "Books",
	},
	{
		id: 3,
		title: "Music",
	},
]

// title
// picture
// rating
// comments
// watch date
// movie date

import Image from "next/image";

const ImageLoader = ({ src, width, quality }) => {
	return `${src}?w=${width}&q=${quality || 75}`
}

export const movieColumns = [
	{
		title: 'Poster',
		dataIndex: 'poster_src',
		key: 'poster_src',
		render: (poster_src) => <Image
			loader={ImageLoader}
			src={poster_src}
			// placeholder="blur"
			width={50}
			height={75}
			style={{ objectFit: "cover" }}
		/>,
	},
	{
		title: 'Title',
		dataIndex: 'title',
		key: 'title',
	},
	{
		title: 'Rating',
		dataIndex: 'rating',
		sorter: (a, b) => a.rating - b.rating,
	},
	{
		title: 'Watch Date',
		dataIndex: 'watch_date',
		key: 'watch_date',
		sorter: (a, b) => new Date(b.watch_date) - new Date(a.watch_date),
		render: (watch_date) => {
			const date = new Date(watch_date)
			return <>{date.toLocaleDateString('en', {dateStyle: "medium",})}</>
		},
	},
	{
		title: 'Release Date',
		dataIndex: 'release_date',
		key: 'release_date',
		sorter: (a, b) => new Date(b.release_date) - new Date(a.release_date),
		render: (release_date) => {
			const date = new Date(release_date)
			return <>{date.toLocaleDateString('en', {dateStyle: "medium",})}</>
		},
	},
	{
		title: 'Thoughts',
		dataIndex: 'thoughts',
		key: 'thoughts',
	},
];

export const movieData = [
	{
		key: '1',
		title: 'John Wick 4',
		poster_src: "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg",
		rating: 5,
		thoughts: "An excellent movie with an air of mystique",
		watch_date: "2000-05-10",
		release_date: "2023-03-13",
	},
	{
		key: '2',
		title: 'Spiderman',
		poster_src: "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg",
		rating: 1,
		thoughts: "An excellent movie with an air of mystique",
		watch_date: "2000-05-13",
		release_date: "2018-12-06",
	},
	{
		key: '3',
		title: 'Lord of the Rings',
		poster_src: "https://m.media-amazon.com/images/I/81EBp0vOZZL._AC_SY741_.jpg",
		rating: 3,
		thoughts: "An excellent movie with an air of mystique",
		watch_date: "2000-05-12",
		release_date: "2001-12-10",
	},
];
