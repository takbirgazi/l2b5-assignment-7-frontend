import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logoMain from "@/assets/images/logo-main.png";
import { fetchBlogs } from "@/lib/api";
import { IBlog } from "@/types/blog";

export default async function Footer() {
    const blogs = await fetchBlogs(5, 1);

    return (
        <footer className="bg-gray-900 text-gray-300 py-10 px-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand Section */}
                <div>
                    <Link className="" href="/">
                        <Image
                            src={logoMain}
                            width={100}
                            height={35}
                            alt="Main Logo"
                            priority
                        />
                    </Link>

                    <p className="mt-2 text-sm">
                        Hi, I&lsquo;m Takbir Gazi — a passionate web developer specializing in building modern, user-friendly applications. Explore my portfolio to see my latest projects, skills, and how I can help bring your ideas to life.
                    </p>
                    <div className="flex mt-4 space-x-4">
                        <a href="https://www.facebook.com/takbirgazibd" target="_blank" className="hover:text-blue-600"><Facebook size={20} /></a>
                        <a href="https://x.com/takbirgazibd" target="_blank" className="hover:text-blue-400"><Twitter size={20} /></a>
                        <a href="https://www.instagram.com/takbirgazibd" target="_blank" className="hover:text-pink-600"><Instagram size={20} /></a>
                        <a href="https://www.linkedin.com/in/takbirgazi" target="_blank" className="hover:text-blue-700"><Linkedin size={20} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:underline">Home</Link></li>
                        <li><Link href="/about" className="hover:underline">About Us</Link></li>
                        <li><Link href="/blog" className="hover:underline">Blog</Link></li>
                        <li><Link href="/project" className="hover:underline">Projects</Link></li>
                        <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                    </ul>
                </div>

                {/* Features */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Latest Blog</h3>
                    <ul className="space-y-2 text-sm">
                        {blogs?.data?.map((blog: IBlog) => (
                            <li key={blog.id}>
                                <Link href={`/blog/${blog.slug}`} className="hover:underline">
                                    {blog.title.length > 80 ? blog.title.slice(0, 80) + "..." : blog.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                    <p className="text-sm">📍 Khulna, Bangladesh</p>
                    <p className="text-sm">📧 takbirgazibd@gmail.com</p>
                    <p className="text-sm">📞 +8801811947182</p>
                    <p className="text-sm mt-2">Available 24/7 for support</p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-4 text-center text-sm">
                © {new Date().getFullYear()} All Rights Reserved by Md. Takbir Gazi.
            </div>
        </footer>
    )
}