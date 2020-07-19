import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import AutoComponent, { DataSourceType } from "./autoComponent";

interface LakePayer {
  value: string;
  id: number;
}
const defaultComponent = () => {
  // const lakers = ["bradley", "pope", "abb", "cooks", "cousins", "james", "ess"];
  const handleFetch = (query: string) => {
    // let list = lakers
    //   .filter((name) => name.includes(query))
    //   .map((item) => ({ value: item }));

    // return list;
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then((res) => res.json())
      .then(({ items }) => {
        return items
          .slice(0, 10)
          .map((item: any) => ({ value: item.login, ...item }));
      });
  };

  // const lakers2 = [
  //   { value: "bradley", id: 0 },
  //   { value: "pope", id: 1 },
  //   { value: "abb", id: 2 },
  //   { value: "cooks", id: 3 },
  //   { value: "cousins", id: 4 },
  //   { value: "james", id: 5 },
  //   { value: "ess", id: 6 },
  // ];
  // const handleFetch = (query: string) => {
  //   return lakers2.filter((item) => item.value.includes(query));
  // };

  // const renderOption = (item: DataSourceType<LakePayer>) => {
  //   return (
  //     <>
  //       <h1> {item.value}</h1>
  //       <p>{item.id}</p>
  //     </>
  //   );
  // };

  return <AutoComponent fetchSuggestions={handleFetch} />;
};

storiesOf("autoComponent", module).add("autoComponent", defaultComponent);
