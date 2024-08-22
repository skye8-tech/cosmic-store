import React from 'react'
import imaage from '@assets/images/storyimage.png'

function StorySection() {
  return (
    <>
      <section className="max-w-6xl mx-auto flex  flex-col md:flex-row items-center  my-8 mb-16  px-4 gap-4">
        <div className="flex flex-col gap-6 w-full md:w-1/2 pr-0 md:pr-6">
          <h2 className="text-6xl">Our Story</h2>
          <div className="flex flex-col gap-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              blanditiis eum, rem obcaecati amet, nobis unde maiores provident
              distinctio, quia sequi facere mollitia officia a accusamus aliquam
              quaerat inventore repellat. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Necessitatibus sint iure natus animi
              libero sed at beatae. Officia eius, possimus ut, sed, corrupti non
              aperiam culpa quaerat illum amet inventore.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              doloribus accusamus, fugit sint veritatis maiores nihil assumenda
              dolore aperiam laborum minus dolorum quaerat amet magni! Possimus
              aspernatur repudiandae tempore! At.
            </p>
          </div>
        </div>
        <div>
          <img src={imaage} alt="Group Image" className="" />
        </div>
      </section>
    </>
  );
}

export default StorySection