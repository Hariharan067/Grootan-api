function getDetails1(){
$.ajax({
url: 'http://demo1431115.mockable.io/api/user1',
method: 'GET',
                datatype: 'html',
        success: function(result){
        document.write(result);
        },
        error: function(err, msg){
        alert(msg);
        }
})
}

function getDetails2(){
        $.ajax({
                url: '',
                method: 'GET',
                datatype: 'html',
        success: function(result){
                document.write(result);
        },
        error: function(err, msg){
                alert(msg);
        }
        })
}

function getDetails3(){
        $.ajax({
                url: '',
                method: 'GET',
                datatype: 'html',
        success: function(result){
                document.write(result);
        },
        error: function(err, msg){
                alert(msg);
        }
        })
}

function getDetails4(){
        $.ajax({
                url: '',
                method: 'GET',
                datatype: 'html',
        success: function(result){
                document.write(result);
        },
        error: function(err, msg){
                alert(msg);
        }
        })
}

