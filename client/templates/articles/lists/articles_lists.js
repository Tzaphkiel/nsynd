var articles = [
  {
    stared: false,
    title: "Some article title",
    description: "Some article description content that will summarize the article",
    date: "2014-10-22"
  },
  {
    stared: true,
    title: "Some other article title",
    description: "Some article description content that will summarize the article",
    date: "2014-10-22"
  },
  {
    stared: false,
    title: "Some article title",
    description: "Some article description content that will summarize the article",
    date: "2014-10-22"
  },
  {
    stared: false,
    title: "Some article title",
    description: "Some article alternate description content that will summarize this particular article",
    date: "2014-10-22"
  },
  {
    stared: false,
    title: "Some article title",
    description: "Some article description content that will summarize the article",
    date: "2014-10-22"
  },
  {
    stared: false,
    title: "Some article title",
    description: "Some article description content that will summarize the article",
    date: "2014-10-22"
  },
  {
    stared: false,
    title: "Some article title",
    description: "Some article description content that will summarize the article",
    date: "2014-10-22"
  },
  {
    stared: false,
    title: "Some article title",
    description: "Some article description content that will summarize the article",
    date: "2014-10-05"
  },
  {
    stared: false,
    title: "Some article title",
    description: "Some article description content that will summarize the article, Some article description content that will summarize the article",
    date: "2014-10-22"
  },
  {
    stared: true,
    title: "Some article title",
    description: "Some article description content that will summarize the article",
    date: "2014-10-12"
  },
  {
    stared: false,
    title: "Some article title",
    description: "Some article description content that will summarize the article",
    date: "2014-09-22"
  },
  {
    stared: true,
    title: "Some article title",
    description: "Some article description content that will summarize the article",
    date: "2014-08-23"
  }
];

Template.articleLists.helpers({
  articles: articles
});