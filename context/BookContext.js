import React, { createContext, useEffect, useState } from "react";
import Lords from "../assets/lords.jpg";
import Harry from "../assets/harry.jpg";
import Hobbit from "../assets/hobbit.jpg";
import Song from "../assets/song.jpg";
import Bourne from "../assets/bourne.jpg";
import Gatsby from "../assets/gatsby.jpg";
import Mockingbird from "../assets/mockingbird.jpg";
import Catcher from "../assets/catcher.jpg";
import NineTeen from "../assets/nineteen.jpg";
import After from "../assets/after.jpg";

export const BooksContext = createContext();

const BookContext = (props) => {
  const books = [
    {
      id: 1,
      title: "The Lord of the Rings",
      poster: Lords,
      author: "J.R.R. Tolkien",
      price: "1000",
      inStock: false,
      quantity: 1,
      description:
        "The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold",
    },
    {
      id: 2,
      title: "Harry Potter",
      poster: Harry,
      author: "J.K. Rowling",
      price: "1000",
      inStock: true,
      quantity: 1,
      description:
        "Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and Muggles (non-magical people).",
    },
    {
      id: 3,
      title: "The Hobbit",
      poster: Hobbit,
      author: "J.R.R. Tolkien",
      price: "1000",
      inStock: true,
      quantity: 1,
      description:
        "The Hobbit, or There and Back Again, is a children's fantasy novel written by English author J. R. R. Tolkien. It was published on 21 September 1937, in Great Britain, and on 29 November 1938, in the United States. The story follows the events of Bilbo Baggins, a Hobbit who inherits a mysterious ring from his uncle and uncle's wizard, Gandalf, and sets out to find the one Ring that grants him immortality. The Hobbit follows the quest of Frodo Baggins and a company of dwarves consisting of the wizard Gandalf, Bilbo Baggins, and other members of the Baggins family as they approach Mount Doom to destroy the One Ring and save their home from destruction.",
    },
    {
      id: 4,
      title: "A Song of Ice and Fire",
      poster: Song,
      author: "George R.R. Martin",
      price: "1000",
      inStock: true,
      quantity: 1,
      description:
        "A Song of Ice and Fire is the first novel in the epic fantasy series A Song of Ice and Fire, written by American author George R. R. Martin. It was first published on August 1, 1996, and is the first novel in Martin's A Song of Ice and Fire series. The novel was originally serialized in Martin's Weekly Fantasy magazine, and was later published in Martin's A Song of Ice and Fire series. The novel was adapted into a film by British director Guy Ritchie and released in theaters on April 11, 2011, and in the United States on May 1, 2011.",
    },
    {
      id: 5,
      title: "Bourne Identity",
      poster: Bourne,
      author: "Robert Ludlum",
      price: "1000",
      inStock: true,
      quantity: 1,
      description:
        "Bourne Identity is a 2010 American action thriller film directed by Robert Ludlum, written by Robert Ludlum, and starring Jason Statham, Aaron Eckhart, and Morgan Freeman. The film is set in the fictionalized world of the Bourne Legacy, a post-apocalyptic world where the Bourne Supremacy is still in effect. The film follows a group of people who are forced to go on a dangerous mission to investigate the truth behind a series of murders, and discover a new way to live.",
    },
    {
      id: 6,
      title: "The Great Gatsby",
      poster: Gatsby,
      author: "F. Scott Fitzgerald",
      price: 109,
      inStock: true,
      quantity: 1,
      description:
        "The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional town of West Egg on prosperous Long Island in the summer of 1922. The story primarily concerns the young and mysterious millionaire Jay Gatsby and his quixotic passion for the beautiful Daisy Buchanan, who is in love with him.",
    },
    {
      id: 7,
      title: "To Kill a Mockingbird",
      poster: Mockingbird,
      author: "Harper Lee",
      price: 109,
      inStock: true,
      quantity: 1,
      description:
        "To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize and later adapted into a Hollywood film, starring Robert Redford and Jean Harlow, and was also made into a Hollywood TV miniseries starring Tom Hanks, Glenn Close, and Kim Basinger. It was also adapted as a stage play and a radio series.",
    },
    {
      id: 8,
      title: "The Catcher in the Rye",
      poster: Catcher,
      author: "J.D. Salinger",
      price: 109,
      inStock: true,
      quantity: 1,
      description:
        "The Catcher in the Rye is a 1951 novel by J. D. Salinger. A controversial novel originally published for adults, it has since become popular with adolescent readers for its themes of teenage angst and alienation. It has been translated into almost all of the world's major languages. Around 1 million copies are sold each year with total sales of more than 65 million.",
    },
    {
      id: 9,
      title: "Nineteen Eighty-Four",
      poster: NineTeen,
      author: "George Orwell",
      price: 109,
      inStock: true,
      quantity: 1,
      description:
        "Nineteen Eighty-Four is a dystopian novel by George Orwell published in 1949. The novel presents a future in which the Party of the Future is an alternative society and the state of the world is ruled by a party of voluntary revolutionaries who have no interest in securing any form of political order. The Party's primary goal is to create a future in which the individual is able to make his or her own decisions, and the Party is the only entity capable of doing so.",
    },
    {
      id: 10,
      title: "After",
      poster: After,
      author: "Anna Todd",
      price: 109,
      inStock: true,
      quantity: 1,
      description:
        "After is a novel by American author Anna Todd. It was first published in 2007 by Penguin Books, and was later republished by Random House. It is the first novel in Todd's After series, and the first novel in Todd's series to be published in the United States.",
    },
    {
      id: 11,
      title: "In Search of Lost Time",
      poster: Harry,
      author: "Marcel Proust",
      price: 109,
      inStock: false,
      quantity: 1,
      description:
        "In Search of Lost Time is a novella by Marcel Proust published in 1913. It is the story of the life of Jean-Paul Sartre, a young poet and novelist who is searching for meaning in his own life. The novel is set in the French countryside, and is one of the most important works of Proust's career.",
    },
  ];
  const [myBooks, setMyBooks] = useState(books);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(
      localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : []
    );
  }, []);
  let myObj = {
    books: myBooks,
    setMyBooks: setMyBooks,
    originalBooks: books,
    cart: cart,
    setCart: setCart,
  };
  return (
    <BooksContext.Provider value={myObj}>
      {props.children}
    </BooksContext.Provider>
  );
};

export default BookContext;
