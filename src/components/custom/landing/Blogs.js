import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Understanding Elderly Care",
    image: "/assets/Room1.png",
    link: "#",
    description: "Explore the essential aspects of senior care and how to provide the best support."
  },
  {
    id: 2,
    title: "Healthy Aging Tips",
    image: "/assets/Room2.png",
    link: "#",
    description: "Discover expert advice on promoting wellness and a fulfilling lifestyle for seniors."
  },
  {
    id: 3,
    title: "The Future of Assisted Living",
    image: "/assets/Room3.png",
    link: "#",
    description: "Learn how technology is transforming the way we care for the elderly."
  }
];

const Blogs = () => {
  return (
    <section className="max-w-7xl mx-auto text-center py-20 ">
      <h2 className="text-3xl font-semibold text-gray-800">Latest Insights in Health Care</h2>
      <p className="text-gray-600 mt-2 max-w-xl mx-auto">
        Stay informed with expert tips, trends, and heartwarming stories to help you make the best decisions for your loved ones.
      </p>
      <div className="flex flex-wrap justify-evenly gap-6 mt-10">
        {blogs.map((blog) => (
          <Card key={blog.id} className="p-0 w-80 shadow-lg transition-transform hover:scale-105">
            <CardHeader className="p-0">
              <Image src={blog.image} alt={blog.title} width={400} height={250} className="w-full h-52 object-cover rounded-t-lg" />
            </CardHeader>
            <CardContent className="p-4 text-left">
              <CardTitle className="text-lg">{blog.title}</CardTitle>
              <CardDescription className="mt-2">{blog.description}</CardDescription>
              <a href={blog.link} className="text-blue-600 font-semibold flex items-center mt-3 hover:underline">
                Read more <ArrowRight size={16} className="ml-1" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
