import { useEffect } from "react";
import { Link } from "react-router-dom";

function SubHeader(props) {
  const { parentPageHref, titleHref, subTitleHref, paths } = props;

  // fetching data from api.....
  // gaming-game-page
  /**
   * product/
   * Orders/23
   * Product/23
   */
  function fetchOrderDetails(id) {}
  function fetchProductdetails(id) {}

  useEffect(() => {
    console.log(paths);
  }, [paths]);

  return (
    <>
      <section className="px-4 ">
        <div className="max-w-6xl mx-auto flex  flex-row items-center  my-8 gap-1 ">
          <Link to={""} className="text-gray-400">
            Account
          </Link>
          <span> / </span>
          {paths.map((path) => (
            <>
              {/* <Link to={`/${path}`}>{path}</Link> */}
              {paths[paths.length - 1] == path ? (
                <Link to={`${path}`}>{path}</Link>
              ) : (
                <Link to={`/${path}`}>{path}</Link>
              )}
              {paths[paths.length - 1] == path ? <></> : <span> / </span>}
            </>
          ))}
        </div>
      </section>
    </>
  );
}

export default SubHeader;
