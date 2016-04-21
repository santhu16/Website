/**
 * Created by sirisha on 4/18/2016.
 */
mainApp.directive("navService",function(){
    return {
        restrict : 'EA',
        templateUrl :"../views/mainNav.html"
    };
});
mainApp.directive("footerService",function(){
    return {
        restrict : 'EA',
        templateUrl :"../views/footer.html"
    };
});