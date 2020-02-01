import React from "react";
import {
  ReactiveBase,
  DataSearch,
  ReactiveList,
  ResultList
} from "@appbaseio/reactivesearch";

const SearchPage = () => {
  return (
    <div className="main-container">
      <ReactiveBase
        app="resume-search"
        credentials="A7rmPfoe9:5a3aa39a-064f-4927-a1ab-9e6fe48bf35d"
      >
        <DataSearch
          componentId="nameReactor"
          placeholder="Search for Products"
          dataField="product_name"
          searchInputId="NameSearch"
          iconPosition="right"
        />
        <ReactiveList
          componentId="queryResult"
          dataField="name"
          from={0}
          size={15}
          react={{
            and: ["nameReactor"]
          }}
          renderItem={item => (
            <ReactiveList.ResultListWrapper>
              <ResultList key={item._id}>
                <ResultList.Image src={item.image[0]} />
                <ResultList.Content>
                  <ResultList.Title>{item.product_name}</ResultList.Title>
                  <ResultList.Description>
                    <div>
                      <p>{item.description}</p>

                      <div>Avg. Customer Reviews : {item.product_rating}</div>
                    </div>
                  </ResultList.Description>
                </ResultList.Content>
              </ResultList>
            </ReactiveList.ResultListWrapper>
          )}
          pagination={true}
          renderError={error => (
            <div>
              Something went wrong with ResultList!
              <br />
              Error details
              <br />
              {error}
            </div>
          )}
        />
      </ReactiveBase>
    </div>
  );
};

export default SearchPage;
