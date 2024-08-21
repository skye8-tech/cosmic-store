import React from 'react'

function SubHeader(props) {
    const {
        parentPageHref,titleHref,subTitleHref
    }=props

  return (
    <>
      <section className="px-4 ">
        <div className="max-w-6xl mx-auto flex  flex-row items-center  my-8 gap-4 ">
          <p> {parentPageHref}</p>
          <p>\</p>
          <p>{titleHref}</p>
          <p>\</p>
          <p>{subTitleHref}</p>
        </div>
      </section>
    </>
  );
}

export default SubHeader