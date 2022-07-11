import React from 'react'

const Letter = React.Component = () => {
    return (
        <div className='mt-8 prose prose-slate mx-auto lg:prose-lg'>
            <p className="lead">Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS.</p>
            <p>By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you <em>really are</em> just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.</p>
            <p>We get lots of complaints about it actually, with people regularly asking us things like:</p>
            <blockquote>
                <p>Why is Tailwind removing the default styles on my <code>h1</code> elements? How do I disable this? What do you mean I lose all the other base styles too?</p>
            </blockquote>
        </div>
    )
}

export default Letter