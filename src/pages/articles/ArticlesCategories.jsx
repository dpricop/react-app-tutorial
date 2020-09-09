import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import "./ArticlesCategories.css";

const ArticlesCategories = (props) => {
  let { url } = useRouteMatch();
  return (
    <div className="container-fluid" id="categories">
      <div className="row">
        <div className="col-sm-4">
          <div className="mt-3 categories_header">
            <i className="lni lni-home"></i>
            <span> Category name</span>
          </div>
          <footer className="categories_footer my-3 d-flex justify-content-between">
            <ul>
              <li>
                <NavLink to={url + "/"}>
                  <i className="lni lni-chevron-right"></i>
                  <span>Link to subcategory</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={url + "/"}>
                  <i className="lni lni-chevron-right"></i>
                  <span>Link to subcategory</span>
                </NavLink>
              </li>
            </ul>
          </footer>
        </div>
        <div className="col-sm-8">
          <div className="mt-3 categories_header">
            <i className="lni lni-delivery"></i>
            <span> Category name</span>
          </div>
          <footer className="categories_footer my-3 d-flex justify-content-between">
            <ul>
              <li>
                <NavLink to={url + "/"}>
                  <i className="lni lni-chevron-right"></i>
                  <span>Link to subcategory</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={url + "/"}>
                  <i className="lni lni-angle-double-right"></i>
                  <span>Link to subcategory</span>
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink to={url + "/"}>
                  <i className="lni lni-chevron-right"></i>
                  <span>Link to subcategory</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={url + "/"}>
                  <i className="lni lni-angle-double-right"></i>
                  <span>Link to subcategory</span>
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink to={url + "/"}>
                  <i className="lni lni-chevron-right"></i>
                  <span>Link to subcategory</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={url + "/"}>
                  <i className="lni lni-angle-double-right"></i>
                  <span>Link to subcategory</span>
                </NavLink>
              </li>
            </ul>
          </footer>
        </div>

        <div className="col-sm-4">
          <div className="mt-3 categories_header">
            <i className="lni lni-archive"></i>
            <span> Category name</span>
          </div>
          <footer className="categories_footer my-3 d-flex justify-content-between">
            <ul>
              <li>
                <NavLink to={url + "/"}>
                  <i className="lni lni-chevron-right"></i>
                  <span>Link to subcategory</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={url + "/"}>
                  <i className="lni lni-angle-double-right"></i>
                  <span>Link to subcategory</span>
                </NavLink>
              </li>
            </ul>
          </footer>
        </div>
        <div className="col-sm-8">
          <div className="mt-3 categories_header">
            <i className="lni lni-home"></i>
            <span> Category name</span>
          </div>
          <footer className="categories_footer my-3 d-flex justify-content-between">
            <ul>
              <li>
                <NavLink to={url + "/"}>
                  <i className="lni lni-chevron-right"></i>
                  <span>Link to subcategory</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={url + "/"}>
                  <i className="lni lni-angle-double-right"></i>
                  <span>Link to subcategory</span>
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink to={url + "/"}>
                  <i className="lni lni-chevron-right"></i>
                  <span>Link to subcategory</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={url + "/"}>
                  <i className="lni lni-angle-double-right"></i>
                  <span>Link to subcategory</span>
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink to={url + "/"}>
                  <i className="lni lni-chevron-right"></i>
                  <span>Link to subcategory</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={url + "/"}>
                  <i className="lni lni-angle-double-right"></i>
                  <span>Link to subcategory</span>
                </NavLink>
              </li>
            </ul>
          </footer>
        </div>
        <div className="col-sm-4">
          <div className="mt-3 categories_header">
            <i className="lni lni-home"></i>
            <span> Category name</span>
          </div>
          <footer className="categories_footer my-3 d-flex justify-content-between">
            <ul>
              <li>
                <NavLink to={url + "/"}>
                  <i className="lni lni-chevron-right"></i>
                  <span>Link to subcategory</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={url + "/"}>
                  <i className="lni lni-angle-double-right"></i>
                  <span>Link to subcategory</span>
                </NavLink>
              </li>
            </ul>
          </footer>
        </div>
        <div className="col-sm-8">
          <div className="mt-3 categories_header">
            <i className="lni lni-home"></i>
            <span> Category name</span>
          </div>
          <footer className="categories_footer my-3 d-flex justify-content-between">
            <ul>
              <li>
                <NavLink to={url + "/"}>
                  <i className="lni lni-chevron-right"></i>
                  <span>Link to subcategory</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={url + "/"}>
                  <i className="lni lni-angle-double-right"></i>
                  <span>Link to subcategory</span>
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink to={url + "/"}>
                  <i className="lni lni-chevron-right"></i>
                  <span>Link to subcategory</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={url + "/"}>
                  <i className="lni lni-angle-double-right"></i>
                  <span>Link to subcategory</span>
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink to={url + "/"}>
                  <i className="lni lni-chevron-right"></i>
                  <span>Link to subcategory</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={url + "/"}>
                  <i className="lni lni-angle-double-right"></i>
                  <span>Link to subcategory</span>
                </NavLink>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </div>
  );

  //   let Category = props.categories.map((item, index) => (
  //     <ul key={index}>
  //       <li>
  //         <NavLink to={url + "/" + item.slug} onClick={handleClickMain}>
  //           {item.name}
  //         </NavLink>
  //       </li>

  //       {typeof item.children == "object" ? (
  //         <div>
  //           {item.children.map((el, k) => (
  //             <ul key={k}>
  //               <li>
  //                 <NavLink
  //                   to={url + "/" + item.slug + "/" + el.slug}
  //                   onClick={handleClickSecond}
  //                 >
  //                   {el.name}
  //                 </NavLink>
  //               </li>
  //             </ul>
  //           ))}
  //         </div>
  //       ) : (
  //         <span> no children</span>
  //       )}
  //     </ul>
  //   ));
  //return <div>{Category}</div>;
};

export default ArticlesCategories;
