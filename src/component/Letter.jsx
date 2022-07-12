import React from 'react'

const Letter = React.Component = () => {
    return (
        <div className='min-h-screen py-8 flex flex-col justify-center relative overflow-hidden lg:py-12'>
            <div className="absolute inset-0 bg-[url(/assets/graph-paper.svg)] bg-green-100/60 bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="relative rounded w-full px-6 py-12 bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28">
                <div className="max-w-prose mx-auto lg:text-lg">
                    <img className='h-8' src="/assets/text-mash.svg" alt="MyDocsExcelProjects"/>
                </div>
                <div class="mt-7 prose prose-slate mx-auto lg:prose-lg">
                    <p class="lead">Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS.</p>
                    <p>By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you <em>really are</em> just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.</p>
                    <p>We get lots of complaints about it actually, with people regularly asking us things like:</p>
                    <blockquote>
                        <p>Why is Tailwind removing the default styles on my <code>h1</code> elements? How do I disable this? What do you mean I lose all the other base styles too?</p>
                    </blockquote>
                </div>
            </div>
        </div>
    )
}

export default Letter