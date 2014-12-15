Template.categoriesListFeed.helpers({
  feeds: function() {
    var currentCategId = this._id;
    return UserCategoryFeed.find({refCategory: currentCategId});
  }
});