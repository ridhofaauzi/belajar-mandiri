function main(){
    download(function(){
        verify(function(){
            clearCache(function(){
                callbackAgain(function (){
                    callbackAgain(function(){
                        notify();
                    });
                });
            });
        });
    });
}