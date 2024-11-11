'use client';

import { useEffect, useState, useLayoutEffect } from 'react';

const randomQuoteUrl = '/quotes/random';

export function RandomQuote() {
    const [quote, setQuote] = useState(null);
    const [time, setTime] = useState(null);

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const response = await fetch(randomQuoteUrl, { cache: 'no-store' });
                if (response) {
                    const data = await response.json();
                    setQuote(data);
                    setTime(new Date().toLocaleString());
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchQuote();
    }, []);


 /*   useLayoutEffect(()=>{
       console.log('ALLEEX 4')


            const addMetaTag = () => {
                const tag =       { property: 'og:image', content: 'some url' }

                const existingMetaTag = document.querySelector(`meta[property="${tag.property}"]`)

                if (existingMetaTag) {
                    existingMetaTag.setAttribute('content', tag.content)
                } else {
                    const metaTag = document.createElement('meta')
                    metaTag.setAttribute('property', tag.property)
                    metaTag.setAttribute('content', tag.content)
                    document.head.appendChild(metaTag)
                }
            }

            addMetaTag()

    }, [])
*/
    return (
        <div className="bg-white card text-neutral-600">
            <div className="card-body">
                {quote ? (
                    <>
                        <h3 className="text-xl text-neutral-900 font-bold">&ldquo;{quote.text}&rdquo;</h3>
                        <p>
                            {' '}
                            - {quote.playedBy} as {quote.character} in &ldquo;{quote.film}&rdquo; ({quote.year})
                        </p>
                        <p className="pt-2.5 mt-2.5 border-t border-dashed text-secondary border-neutral-200">
                            <span className="text-sm italic">
                                loaded at {time}. <a href={quote.dataSource}>Original data source.</a>
                            </span>
                        </p>
                    </>
                ) : (
                    <div className="card-body">Loading...</div>
                )}
            </div>
        </div>
    );
}
