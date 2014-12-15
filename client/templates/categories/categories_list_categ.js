Template.categoriesListCateg.helpers({
  categories: function() {
    var currentCategId;
    // account for non selected category and return all
    if (this === undefined || (this !== undefined && this._id === undefined)){
      var parentAll = Category.findOne({label: "All"});
      console.log(parentAll);
      currentCategId = parentAll._id;
    }
    else{
      currentCategId = this._id;
    }
    
    // sort by label
    var categs =  Category.find({parentCat: currentCategId}, {sort: {label: 1}});
    return categs;
  },
  
  formatCategoryName: function() {
    return this.label;
  }, 
  
  hasChildren: function() {
    var currentCategId = this._id;
    return Category.find({parentCat: currentCategId}, {sort: {label: 1}}).fetch().length;
  }
});
