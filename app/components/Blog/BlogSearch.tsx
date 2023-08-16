import React from "react";

const BlogSearch = () => {
  return (
    <>
      <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-3.5 mb-10">
        <form action="https://formbold.com/s/unique_form_id" method="POST">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari..."
              className="w-full dark:bg-black border border-stroke dark:border-strokedark shadow-solid-12 dark:shadow-none rounded-lg focus:outline-none focus:border-primary dark:focus:border-primary py-4 px-6"
            />

            <button
              className="absolute top-0 right-0 p-5"
              aria-label="search-icon"
            >
              <svg
                className="fill-black dark:fill-white hover:fill-primary dark:hover:fill-primary transition-all duration-300"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BlogSearch;
