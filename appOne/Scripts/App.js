'use strict';

ExecuteOrDelayUntilScriptLoaded(initializePage, "sp.js");

function initializePage() {
    var context = SP.ClientContext.get_current();
    var user = context.get_web().get_currentUser();

    var web = context.get_web();
    context.load(web);
    context.executeQueryAsync(function () {
        var webTitle = web.get_title();
        var webUrl = web.get_url();
        console.log(webTitle);
        console.log(webUrl);
        var newTag = document.getElementById("newTag");
        var br = document.createElement("br");
        $("#DeltaPlaceHolderPageTitleInTitleArea").text("New Page Title");
        $("#newTag").text("Page url: " + webUrl);
        newTag.appendChild(br);
        $("#newTag").append("Page title: " + webTitle);
    });

    // This code runs when the DOM is ready and creates a context object which is needed to use the SharePoint object model
    $(document).ready(function () {
        getUserName();
    });

    // This function prepares, loads, and then executes a SharePoint query to get the current users information
    function getUserName() {
        context.load(user);
        context.executeQueryAsync(onGetUserNameSuccess, onGetUserNameFail);
    }

    // This function is executed if the above call is successful
    // It replaces the contents of the 'message' element with the user name
    function onGetUserNameSuccess() {
        $('#message').text('Hello ' + user.get_title());
    }

    // This function is executed if the above call fails
    function onGetUserNameFail(sender, args) {
        alert('Failed to get user name. Error:' + args.get_message());
    }
}
