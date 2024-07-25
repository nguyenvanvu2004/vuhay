window.indexController= function($scope , $http){
    $scope.title="Danh sách Book";

    let url = "http://localhost:3000/books";

    $http
    .get(url)
    .then(function(res){
        if(res.status==200){
            $scope.ListBook = res.data
        }
    });
    
    $scope.deleteBook= function(idBook){
        var confirmDelete= window.confirm("Bạn có muốn xóa không");
        if(confirmDelete){
            $http
            .delete(`${url}/${idBook}`)
            .then(function(res){
                if(res.status==200){
                    alert("Bạn đã xóa thành công");
                }
            })
        }
    }

}