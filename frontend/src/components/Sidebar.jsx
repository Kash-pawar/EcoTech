import React from "react";

export default function Sidebar() {

  const tags = [
    "save water",
    "public transport",
    "save electricity",
    "tree planting",
    "composting",
    "bookmarks"
  ];

  const handleNewPost = () => {

    // ⚡ BACKEND CONNECTION WILL HAPPEN HERE
    // Example later:
    // navigate("/create-post")
    // OR open modal to upload image and caption

    console.log("New Post Clicked");

  };

  return (
    <div className="w-64 border-r h-screen p-6">

      {/* New Post Button */}

      <button
        onClick={handleNewPost}
        className="w-full bg-green-700 text-white py-3 rounded-md mb-8"
      >
        + new post
      </button>

      {/* Tags */}

      <h3 className="text-gray-500 text-sm mb-4">TAGS</h3>

      <div className="flex flex-col gap-4 text-gray-600">

        {tags.map((tag, index) => (
          <span key={index} className="cursor-pointer hover:text-green-600">
            {tag}
          </span>
        ))}

      </div>

    </div>
  );
}