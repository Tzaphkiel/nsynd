# Nsynd
# API used
* {} := list
* xxx? := optional or not clear if needed item
* User -> Tag(s) -> Article(s)
* User -> Category(ies) -> Feed(s) -> Article(s)
* {feed} := { feedId, label, {tag} }
* {category} := { categoriId, label, parent }
* {tag} := { tagId, label }

#Actions:
    ACTIONS                    PARAMETERS                                 RETURN
    ====================================================================================================
    - login                    (username, PW-Hash)                        : sessionId
    - logout                   (sessionId)                                : n/a

    - subscribeFeed            (sessionId, feedUri, label, {category})    : feedId
    - unsubscribeFeed          (sessionId, feedId)                        : true/false 

    - getCategories            (sessionId)                                : {category}
    - getFeeds                 (sessionId, categoryId)                    : categoryId, {feed}
    - getHeadlines             (sessionId, feedId)                        : feedId, {articleId, articleHeadline}
    - getArticle               (sessionId, articleId)                     : articleId, content, tags, {otherMetadata?}

    - markFeedRead             (sessionId, feedId, true/false)            : true/false
    - markArticleRead          (sessionId, articleId, true/false)         : true/false
    - markArticleFavorite      (articleId, true/false)                    : true/false

    - getArticleTags           (sessionId, articleId)                     : articleId, {tag}
    - setArticleTags           (sessionId, articleId, {tag})              : true/false, articleId, {tag}
    - removeArticleTags        (sessionId, articleId, {tag})              : true/false, articleId, {tag}

#Tables/objects identified:
    - User         :  #userId, email, pw, lastSeen, fullname
    - category     :  #categId, label, collapsed, parentCat
    - feed         :  #feedId, title, url, icon, lastUpdated, feedType(rss, atom, ...)
    - article      :  #articleId, link, lastUpdated, shortContent, fullContent
    - tag          :  #tagId, label

#links:
    - user-article         :  table userArticle           : #userId, #articleId, readStatus
    - user-category        :  table userCateg             : #userId, #categId, categAlias
    - user-feed            :  table userFeed              : #userId, #feedId, feedAlias
    - tag-feed             :  table tagFeed               : #userId, #feedId, #tagId
    - tag-article          :  table tagArticle            : #userId, #articleId, #tagId
    - category-feed        :  table categFeed             : #userId, #categId, #feedId
    - category-category    :  via categoryId & parentCat

NB: tags are global

NB: feeds are globaly available/updated/downloaded but read status, tag & category are specific to user