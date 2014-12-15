var tree = [
  {
    text: "Parent 1",
    icon: "treeviewFolderIcon",
    color: "#771212",
    nodes: [
      {
        text: "Child 1",
        icon: "treeviewFolderIcon",
        color: "#771212",
        href: Router.routes['articlesList'].path(),
        tags: ['200'],
        nodes: [
          {
            text: "Grandchild 1",
            tags: ['50']/*,
            href: "{{pathFor 'category'}}",*/
          }
        ]
      }
    ]
  }, {text: "Parent 2"}, {text: "Parent 3"}
];

Template.categoriesList.rendered = function(){
  //this.autorun(_.bind(function()){
  Deps.afterFlush(function(){
    // here it is safe to initialize your jQuery plugin because DOM is ready
    $('#tree').treeview(
      {
        data: tree, 
        showBorder: false, 
        expandIcon: "treeviewIconPlus", 
        collapseIcon: "treeviewIconMinus", 
        //expandIcon: "glyphicon glyphicon-plus", 
        //collapseIcon: "glyphicon glyphicon-minus", 
        nodeIcon: "glyphicon",
        showTags: true,
        enableLinks: true
      }
    );
  });
};



