import feedparser

def fetch_mehr_news():
    url = "https://www.mehrnews.com/rss/tp/537"
    feed = feedparser.parse(url)
    news_list = []
    
    for entry in feed.entries[0:]:
        image_url = ""
        if hasattr(entry, 'enclosures') and len(entry.enclosures) > 0:
            image_url = entry.enclosures[0].url
            
        news_list.append({
            "title": entry.title,
            "link": entry.link,
            "image": image_url,
            "pubDate": entry.published
        })
    return news_list