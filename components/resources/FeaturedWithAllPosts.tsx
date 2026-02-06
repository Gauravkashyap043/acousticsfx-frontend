import Image from "next/image";
import Link from "next/link";

const featuredPost = {
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  author: "John Doe",
  date: "May 23, 2022",
  image: "/assets/product/product-hero.png", // local image
  excerpt:
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  slug: "/blogs/featured-post",
};

const allPosts = [
  {
    title: "8 Figma design systems that you can download for free today.",
    author: "John Doe",
    date: "Aug 23, 2021",
    slug: "/blogs/figma-design-systems",
  },
  {
    title: "8 Figma design systems that you can download for free today.",
    author: "John Doe",
    date: "Aug 23, 2021",
    slug: "/blogs/figma-design-systems",
  },
  {
    title: "8 Figma design systems that you can download for free today.",
    author: "John Doe",
    date: "Aug 23, 2021",
    slug: "/blogs/figma-design-systems",
  },
  {
    title: "8 Figma design systems that you can download for free today.",
    author: "John Doe",
    date: "Aug 23, 2021",
    slug: "/blogs/figma-design-systems",
  },
];

export default function FeaturedWithAllPosts() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">

        {/* LEFT – FEATURED POST */}
        <div className="lg:col-span-2">
          <h3 className="text-[16px] worksans-font font-bold text-gray-500 mb-6">
            Featured Post
          </h3>

          <div className="bg-white">
            <div className="relative w-full h-[320px] mb-6">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-[14px] inter-font font-[400] text-gray-500 mb-2">
              By {featuredPost.author} &nbsp;|&nbsp; {featuredPost.date}
            </p>

            <h2 className="text-[34px] axiforma font-bold mb-4 text-gray-900 leading-tight">
              {featuredPost.title}
            </h2>

            <p className="text-[18px] inter-font font-[400] text-gray-600 mb-6 leading-relaxed">
              {featuredPost.excerpt}
            </p>

            <Link
              href={featuredPost.slug}
              className="inline-block bg-[#F59E0B] text-white px-6 py-3 text-sm font-medium hover:bg-[#d97706] transition"
            >
              Read More
            </Link>
          </div>
        </div>

        {/* RIGHT – ALL POSTS */}
        <div>
          <h3 className="text-[16px] worksans-font font-bold text-gray-500 mb-6">
            All Posts
          </h3>

          <div className="space-y-6">
            {allPosts.map((post, index) => (
              <Link
                key={index}
                href={post.slug}
                className="block bg-[#FFF7ED] p-4 hover:bg-[#FFEDD5] transition"
              >
                <p className="text-[12px] inter-font font-[400] text-gray-500 mb-1">
                  By {post.author} &nbsp;|&nbsp; {post.date}
                </p>

                <h4 className="text-[14px] axiforma font-bold text-gray-900 leading-snug">
                  {post.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
