import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import Title from "../common/Title";
// import Arrow from "../../assets/images/arrow.svg";
import projects from "./PortfolioItems";
import ProjectBox from "../common/ProjectBox";

const Portfolio = () => {
  //breakpoint
  const portfolioBreakpoints = {
    default: 3,
    1080: 3,
    768: 2,
    540: 1,
  };

  const [pFilter, setPFilter] = useState({
    filterResult: null,
    pickedFilter: "all",
    // filterMenuActive: false,
    // pickedFilterDropdown: "NEWEST",
  });

  const {
    filterResult,
    pickedFilter,
    // filterMenuActive,
    // pickedFilterDropdown,
  } = pFilter;

  //load filter
  useEffect(() => {
    filterPortfolio("all");
  }, []);

  //portfolio filter
  const filterPortfolio = (target) => {
    let portfolioArr = [...projects];
    let result;

    if (target !== "all") {
      result = portfolioArr.filter((project) => project.tag === target);
    } else {
      result = portfolioArr;
    }

    setPFilter({
      filterResult: result,
      pickedFilter: target,
      //   pickedFilterDropdown: "NEWEST",
    });
  };

  //   const filterMenuHover = (e) => {
  //     if (e) {
  //       setPFilter({ filterMenuActive: true });
  //     } else {
  //       setPFilter({ filterMenuActive: false });
  //     }
  //   };

  //   const filterDropDownHandler = (filter) => {
  //     setPFilter({
  //       pickedFilterDropdown: filter,
  //       filterMenuActive: false,
  //     });

  //     let portfolioArr = [...filterResult];

  //     let value;

  //     if (filter === "NEWEST") {
  //       value = portfolioArr.sort((a, b) => (a.id > b.id ? 1 : -1));
  //     } else if (filter === "OLDEST") {
  //       value = portfolioArr.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
  //     }

  //     setPFilter({ filterResult: value });
  //   };

  // portfolio gallery render

  let projectsRender = null;
  if (filterResult) {
    projectsRender = filterResult.map((project) => (
      <ProjectBox
        preview={project.preview}
        key={project.id}
        title={project.title}
        tag={project.tag}
      />
    ));
  }

  // PORTFOLIO FILTER DROPDOWN MENY RENDER
  //   let filterDroppDown = null;
  //   if (filterMenuActive) {
  //     filterDroppDown = (
  //       <div className='portfolio__section-filter-nav shadow'>
  //         <p onClick={() => filterDropDownHandler("NEWEST")}>NEWEST</p>
  //         <p onClick={() => filterDropDownHandler("OLDEST")}>OLDEST</p>
  //       </div>
  //     );
  //   }

  return (
    <div className='portfolio__section' id='portfolio'>
      <div className='wrapper'>
        <div className='container'>
          <Title title='WORK SHOWCASE' />
          <div className='row'>
            <div className='col-sm-12 col-md-12 col-lg-12'>
              <div className='portfolio__section-nav'>
                <ul className='nav__items'>
                  <li
                    className={
                      pickedFilter === "all"
                        ? "portfolio__section-active nav__item"
                        : "nav__item"
                    }
                    onClick={() => filterPortfolio("all")}
                  >
                    ALL
                  </li>
                  <li
                    className={
                      pickedFilter === "branding"
                        ? "portfolio__section-active nav__item"
                        : "nav__item"
                    }
                    onClick={() => filterPortfolio("branding")}
                  >
                    BRANDING
                  </li>
                  <li
                    className={
                      pickedFilter === "illustrations"
                        ? "portfolio__section-active nav__item"
                        : "nav__item"
                    }
                    onClick={() => filterPortfolio("illustrations")}
                  >
                    Ilustrations
                  </li>
                  <li
                    className={
                      pickedFilter === "web"
                        ? "portfolio__section-active nav__item"
                        : "nav__item"
                    }
                    onClick={() => filterPortfolio("web")}
                  >
                    Web
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className='col-sm-12 col-md-4 col-lg-3'>
              <div
                className='portfolio__section-filter'
                onMouseEnter={() => filterMenuHover(true)}
                onMouseLeave={() => filterMenuHover(false)}
              >
                <p>{pickedFilterDropdown} FIRST</p>
                <img src={Arrow} alt='arrow' />
                {filterDroppDown}
              </div>
            </div> */}
            <Masonry
              breakpointCols={portfolioBreakpoints}
              className='my-masonry-grid'
              columnClassName='mint__gallery'
            >
              {projectsRender}
            </Masonry>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
