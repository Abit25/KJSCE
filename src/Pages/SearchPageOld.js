import React from "react";
import {
  ReactiveBase,
  DataSearch,
  ReactiveList,
  ResultList,
  MultiList,
  RangeSlider
} from "@appbaseio/reactivesearch";
import CircularProgress from "@material-ui/core/CircularProgress";
import Navbar from "../Components/Navbar";
import "./SearchPage.css";

const SearchPage = () => {
  return (
    <div className="main-container" style={{ backgroundColor: "white" }}>
      <Navbar />
      <ReactiveBase
        app="employee-suggestion"
        credentials="cu58PUhxz:a7b07871-36fe-4da7-8a56-4c387b4a282e"
      >
        <div className="ui">
          <div className="filters" style={{ backgroundColor: "#666666" }}>
            <MultiList
              style={{ color: "white", margin: "1vh" }}
              dataField="label.keyword"
              componentId="currencyReactor"
              placeholder="Choose a Category"
              showFilter={true}
              filterLabel="Categories"
              react={{
                and: ["nameReactor"]
              }}
              renderError={error => (
                <div>
                  Something went wrong with Currency MultiList
                  <br />
                  Error details
                  <br />
                  {error}
                </div>
              )}
            />
          </div>
          <div className="both">
            <DataSearch
              className="search"
              style={{
                marginBottom: "2vh",
                width: "100%"
              }}
              componentId="nameReactor"
              placeholder="Search by Skills"
              dataField="skills"
              searchInputId="NameSearch"
              iconPosition="right"
            />

            <div className="data">
              <ReactiveList
                componentId="queryResult"
                dataField="name"
                from={0}
                loader={<CircularProgress size={70} />}
                size={5}
                showResultStats={false}
                react={{
                  and: ["nameReactor", "currencyReactor", "RangeSliderSensor"]
                }}
                renderItem={item => (
                  <ReactiveList.ResultListWrapper>
                    <ResultList key={item._id}>
                      <ResultList.Content
                        style={{
                          color: "black",
                          backgroundColor: "white",
                          borderRadius: "10px",
                          padding: "1%",
                          border: "solid black 1px"
                        }}
                      >
                        <ResultList.Title style={{ color: "#333333" }}>
                          {`${item.First_Name}`}
                        </ResultList.Title>
                        <ResultList.Description>
                          <div>
                            <p style={{}}>{item.skills}</p>
                            <br />
                            <div>
                              {" "}
                              Avg. Customer Reviews : {item.product_rating}
                            </div>
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
            </div>
          </div>
        </div>
      </ReactiveBase>
    </div>
  );
};

export default SearchPage;
