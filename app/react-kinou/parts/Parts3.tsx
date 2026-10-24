"use client";

import { Suspense, use, useDeferredValue, useState } from "react";

type SearchResultsResource = {
  id: string;
  name: string;
  team: string;
};

const searchPeople = (name: string) => {
  const promise = new Promise<SearchResultsResource[] | undefined>(
    (resolve) => {
      setTimeout(() => {
        if (!name) {
          resolve([
            {
              id: "000",
              name: "初期表示",
              team: "develop",
            },
          ]);
        }
        resolve([
          {
            id: "001",
            name,
            team: "develop",
          },
        ]);
      }, 2000);
    },
  );
  return promise;
};

interface SearchResults {
  resource: Promise<SearchResultsResource[] | undefined>;
  isSearching: boolean;
}

const SearchResults = ({ resource, isSearching }: SearchResults) => {
  const people = use(resource);

  return (
    <div className="search-results">
      {isSearching && <div>Searching</div>}
      <ul>
        {people &&
          people.map((person) => (
            <li className="search-results__list-item" key={person.id}>
              <span>{person.name}</span>
              <span className="search-results__list-team">{person.team}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export const Parts = () => {
  const [searchResource, setSearchResource] = useState(() => searchPeople(""));

  const deferredResource = useDeferredValue(searchResource);
  const isSearching = searchResource !== deferredResource;

  const handleSearchChange = () => {
    setSearchResource(searchPeople("山田太郎"));
  };

  return (
    <div className="deferred">
      <button onClick={handleSearchChange}>Click</button>
      <div className="deferred__list">
        <Suspense fallback={<div>Loading...</div>}>
          <SearchResults
            resource={deferredResource}
            isSearching={isSearching}
          />
        </Suspense>
      </div>
    </div>
  );
};
