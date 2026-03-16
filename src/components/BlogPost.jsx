import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { blogsData } from '../data/blogsData';

export default function BlogPost() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        // Scroll to top when the blog post loads
        window.scrollTo(0, 0);

        // Find the blog from our data
        const foundBlog = blogsData.find((b) => b.id === id);
        setBlog(foundBlog);
    }, [id]);

    if (!blog) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f9eb] text-[#022431]">
                <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
                <p className="text-[#03966a] mb-8">The blog post you're looking for doesn't exist.</p>
                <Link to="/blog" className="px-6 py-3 bg-[#03966a] text-[#f5f9eb] font-bold rounded-full hover:bg-[#056c94] transition">
                    Return to Blog
                </Link>
            </div>
        );
    }

    return (
        <article className="min-h-screen bg-[linear-gradient(180deg,_#f5f9eb_0%,_#e7f0e8_28%,_#cedfd8_55%,_#9ab4ad_78%,_#5f7f7b_100%)] text-[#03966a] pt-24 pb-32">
            {/* Blog Hero Header */}
            <div className="max-w-4xl mx-auto px-6 lg:px-0 text-center mb-16 mt-8">
                <div className="inline-block px-4 py-1.5 bg-white/50 border border-[#03966a] text-[#03966a] rounded-full text-sm font-bold tracking-widest uppercase mb-6">
                    {blog.category}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                    {blog.title}
                </h1>
                <div className="flex items-center justify-center space-x-4 text-[#056c94] text-sm tracking-wide">
                    <span>By {blog.author}</span>
                    <span>•</span>
                    <span>{blog.date}</span>
                </div>
            </div>

            {/* Featured Image */}
            <div className="w-full max-w-6xl mx-auto px-4 md:px-8 mb-20">
                <div className="w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl relative">
                    <div className="absolute inset-0 bg-transparent z-10"></div>
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                </div>
            </div>

            {/* Blog Content Body */}
            <div className="max-w-3xl mx-auto px-6 lg:px-0">
                <div className="prose prose-lg prose-headings:text-[#0f1510] prose-a:text-[#03966a] hover:prose-a:text-[#056c94] prose-img:rounded-2xl max-w-none 
                        prose-p:text-[#161d16] prose-p:leading-relaxed prose-li:text-[#161d16]">
                    <ReactMarkdown>
                        {blog.content}
                    </ReactMarkdown>
                </div>

                {/* Author Bio / Footer */}
                <div className="mt-24 pt-12 border-t border-[#c0d2d8] flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="w-20 h-20 rounded-full bg-[#03966a] flex items-center justify-center text-2xl font-black text-[#f5f9eb] shrink-0">
                        SD
                    </div>
                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-bold mb-2">Sarangi Dentistry</h4>
                        <p className="text-[#161d16] mb-4">
                            Dedicated to providing top-tier oral care, modern dental therapy, and educating our community on the importance of lifetime dental health.
                        </p>
                        <Link to="/blog" className="text-[#03966a] font-bold hover:text-[#056c94] transition flex items-center justify-center md:justify-start gap-2">
                            <svg className="w-5 h-5 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            Back to all posts
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}






