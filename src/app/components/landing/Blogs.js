import Image from "next/image";

const blogs = [
  {
    id: 1,
    title: "Blog 1",
    image: "/blog1.jpg", 
    link: "#"
  },
  {
    id: 2,
    title: "Blog 2",
    image: "/blog2.jpg",
    link: "#"
  },
  {
    id: 3,
    title: "Blog 3",
    image: "/blog3.jpg",
    link: "#"
  }
];

const Blogs = () => {
  return (
    <section className="text-center py-32 ">
      <h2 className="text-3xl font-semibold text-gray-800">Latest Insights in Health Care</h2>
      <p className="text-gray-600 mt-2 max-w-xl mx-auto">
        Stay informed with expert tips, trends, and heartwarming stories to help you make the best decisions for your loved ones.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mt-20">
        {blogs.map((blog) => (
          <div key={blog.id} className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
            <Image src={blog.image} alt={blog.title} width={400} height={250} className="w-full h-60 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <a href={blog.link} className="text-blue-500 font-semibold inline-flex items-center mt-2 hover:underline">
                Read more <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
