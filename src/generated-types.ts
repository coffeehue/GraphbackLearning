/* eslint-disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/**  @model  */
export type Author = {
  __typename?: 'Author';
  /**  @id  */
  id: Scalars['ID'];
  authorName: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  /**
   * @oneToMany(field: 'author', key: 'authorId')
   * @oneToMany(field: 'author')
   */
  Book?: Maybe<Array<Book>>;
  /** @manyToOne(field: 'Author', key: 'bookId') */
  book?: Maybe<Book>;
};


/**  @model  */
export type AuthorBookArgs = {
  filter?: Maybe<BookFilter>;
};

export type AuthorFilter = {
  id?: Maybe<IdInput>;
  authorName?: Maybe<StringInput>;
  country?: Maybe<StringInput>;
  bookId?: Maybe<IdInput>;
  and?: Maybe<Array<AuthorFilter>>;
  or?: Maybe<Array<AuthorFilter>>;
  not?: Maybe<AuthorFilter>;
};

export type AuthorResultList = {
  __typename?: 'AuthorResultList';
  items: Array<Maybe<Author>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type AuthorSubscriptionFilter = {
  and?: Maybe<Array<AuthorSubscriptionFilter>>;
  or?: Maybe<Array<AuthorSubscriptionFilter>>;
  not?: Maybe<AuthorSubscriptionFilter>;
  id?: Maybe<IdInput>;
  authorName?: Maybe<StringInput>;
  country?: Maybe<StringInput>;
};

/**  @model  */
export type Book = {
  __typename?: 'Book';
  /**  @id  */
  id: Scalars['ID'];
  bookName?: Maybe<Scalars['String']>;
  genre?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  /**
   * @oneToMany(field: 'book', key: 'bookId')
   * @oneToMany(field: 'book')
   */
  Author?: Maybe<Array<Author>>;
  /** @manyToOne(field: 'Book', key: 'authorId') */
  author?: Maybe<Author>;
};


/**  @model  */
export type BookAuthorArgs = {
  filter?: Maybe<AuthorFilter>;
};

export type BookFilter = {
  id?: Maybe<IdInput>;
  bookName?: Maybe<StringInput>;
  genre?: Maybe<StringInput>;
  price?: Maybe<StringInput>;
  authorId?: Maybe<IdInput>;
  and?: Maybe<Array<BookFilter>>;
  or?: Maybe<Array<BookFilter>>;
  not?: Maybe<BookFilter>;
};

export type BookResultList = {
  __typename?: 'BookResultList';
  items: Array<Maybe<Book>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type BookSubscriptionFilter = {
  and?: Maybe<Array<BookSubscriptionFilter>>;
  or?: Maybe<Array<BookSubscriptionFilter>>;
  not?: Maybe<BookSubscriptionFilter>;
  id?: Maybe<IdInput>;
  bookName?: Maybe<StringInput>;
  genre?: Maybe<StringInput>;
  price?: Maybe<StringInput>;
};

export type CreateAuthorInput = {
  authorName: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  bookId?: Maybe<Scalars['ID']>;
};

export type CreateBookInput = {
  bookName?: Maybe<Scalars['String']>;
  genre?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  authorId?: Maybe<Scalars['ID']>;
};

export type IdInput = {
  ne?: Maybe<Scalars['ID']>;
  eq?: Maybe<Scalars['ID']>;
  le?: Maybe<Scalars['ID']>;
  lt?: Maybe<Scalars['ID']>;
  ge?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Scalars['ID']>>;
};

export type MutateAuthorInput = {
  id: Scalars['ID'];
  authorName?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  bookId?: Maybe<Scalars['ID']>;
};

export type MutateBookInput = {
  id: Scalars['ID'];
  bookName?: Maybe<Scalars['String']>;
  genre?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  authorId?: Maybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAuthor?: Maybe<Author>;
  updateAuthor?: Maybe<Author>;
  deleteAuthor?: Maybe<Author>;
  createBook?: Maybe<Book>;
  updateBook?: Maybe<Book>;
  deleteBook?: Maybe<Book>;
};


export type MutationCreateAuthorArgs = {
  input: CreateAuthorInput;
};


export type MutationUpdateAuthorArgs = {
  input: MutateAuthorInput;
};


export type MutationDeleteAuthorArgs = {
  input: MutateAuthorInput;
};


export type MutationCreateBookArgs = {
  input: CreateBookInput;
};


export type MutationUpdateBookArgs = {
  input: MutateBookInput;
};


export type MutationDeleteBookArgs = {
  input: MutateBookInput;
};

export type OrderByInput = {
  field: Scalars['String'];
  order?: Maybe<SortDirectionEnum>;
};

export type PageRequest = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  getAuthor?: Maybe<Author>;
  findAuthors: AuthorResultList;
  getBook?: Maybe<Book>;
  findBooks: BookResultList;
};


export type QueryGetAuthorArgs = {
  id: Scalars['ID'];
};


export type QueryFindAuthorsArgs = {
  filter?: Maybe<AuthorFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};


export type QueryGetBookArgs = {
  id: Scalars['ID'];
};


export type QueryFindBooksArgs = {
  filter?: Maybe<BookFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};

export enum SortDirectionEnum {
  Desc = 'DESC',
  Asc = 'ASC'
}

export type StringInput = {
  ne?: Maybe<Scalars['String']>;
  eq?: Maybe<Scalars['String']>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  newAuthor: Author;
  updatedAuthor: Author;
  deletedAuthor: Author;
  newBook: Book;
  updatedBook: Book;
  deletedBook: Book;
};


export type SubscriptionNewAuthorArgs = {
  filter?: Maybe<AuthorSubscriptionFilter>;
};


export type SubscriptionUpdatedAuthorArgs = {
  filter?: Maybe<AuthorSubscriptionFilter>;
};


export type SubscriptionDeletedAuthorArgs = {
  filter?: Maybe<AuthorSubscriptionFilter>;
};


export type SubscriptionNewBookArgs = {
  filter?: Maybe<BookSubscriptionFilter>;
};


export type SubscriptionUpdatedBookArgs = {
  filter?: Maybe<BookSubscriptionFilter>;
};


export type SubscriptionDeletedBookArgs = {
  filter?: Maybe<BookSubscriptionFilter>;
};
