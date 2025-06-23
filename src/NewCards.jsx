import { useState, useEffect } from 'react';

const NewCards = () => {
    const [items, setItems] = useState([]);
    const [scienceItems, setScienceItems] = useState([]);
    const [itemsArt, setItemsArt] = useState([]);

    
    useEffect (() => {
        fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2e8391eae5a84515817f6f6bf769973d')
        .then(res => res.json())
        .then(data => {
            console.log(data.articles);
            setItems(data.articles); 
        })
        .catch(err => console.log(err));

        fetch('https://newsapi.org/v2/everything?q=science&language=en&apiKey=2e8391eae5a84515817f6f6bf769973d')
        .then(res => res.json())
        .then(data => {
            console.log('Science:', data.articles);
            setScienceItems(data.articles);
        })
        .catch(err => console.log(err));

        fetch('https://newsapi.org/v2/everything?q=art&language=en&apiKey=2e8391eae5a84515817f6f6bf769973d')
        .then(res => res.json())
        .then(data => {
            console.log('Art:', data.articles);
            setItemsArt(data.articles);
        })
        .catch(err => console.log(err));

    }, [])

    return(
        <>
            <h1 className='welcomeTitle'>Featured News</h1>

            <div className="mainNewsSection">
                <div className="newsContainer">
                    {items.slice(0,5).map((item, index) => (
                        <div className="newsCard">
                            <img src={item.urlToImage || 'https://via.placeholder.com/400x250'} alt={item.title} />
                                <div className='newsItem' key={index}>
                                    <h2>{item.title}</h2>
                                    <h3>{item.author}</h3>
                                    <p>{item.description}</p>
                                    <span>{item.publishedAt.slice(0, 10)}</span>
                                    <a href={item.url}>Read More</a>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="scienceNews">
                <h1 className='ScienceTitle'>Science News</h1>
                <div className="listofSciNews">
                    {scienceItems.slice(1,2).map((sci, index) => (
                        <div className="mainSci" key={index}>
                            <img src={sci.urlToImage || 'https://via.placeholder.com/400x250'} alt="#" />
                            <div className="moreInfoSci">
                                <div className="subMoreInfoSci">
                                    <h4>{sci.publishedAt.slice(0,10)}</h4>
                                    <a href={sci.url}>Read More</a>
                                </div>
                                <h2>{sci.title}</h2>
                            </div>
                        </div>                     
                    ))}

                    <div className="subSciListNews">
                        {scienceItems.slice(2,4).map((sci, index) => (
                            <div className="sciSubCard">
                                <img className='subSciImg' src={sci.urlToImage || 'https://via.placeholder.com/400x250'} alt="#" />
                                <div className="subInfoSci">
                                    <h4>{sci.title}</h4>
                                    <a href={sci.url}>Read More</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="artNews">
                <h1 className='ArtTitle'>Art News</h1>
                <div className='artSection'>
                    <div className="leftArtSide">
                        {itemsArt.slice(0, 2).map((art, index) => (
                            <div className="leftArt" key={index}>
                                <div className="leftArtCard">
                                    <img src={art.urlToImage} alt="" />
                                    <div className="leftArtCardInfo">
                                        <h4>{art.title}</h4>
                                        <a href={art.url}>Read More</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {itemsArt.slice(2, 3).map((art, index) => (
                        <div className="mainArt">
                            <img src={art.urlToImage} alt="" />
                            <div className="moreInfoArt">
                                <div className="subMoreInfoArt">
                                    <h4>{art.publishedAt.slice(0,10)}</h4>
                                    <a href={art.url}>Read More</a>
                                </div>
                                <h2>{art.title}</h2>
                            </div>
                        </div>
                    ))}

                </div>
            </div>


        </>
    );
};


export default NewCards